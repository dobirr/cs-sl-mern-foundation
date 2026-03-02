import { API } from '../constants/api.js';
import { renderProductCard } from '../components/product-card.js';
import { addToCart } from '../services/cart.js';
import { toast } from '../components/toast.js';

export function renderProductPage() {
  return `
    <section class="container-fluid py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="intro">
          <p class="overline mb-1 text-muted">Marketplace</p>
          <h1 class="h3 mb-0">Fresh from local farmers</h1>
        </div>
      </div>
      <div id="product-list" class="row g-3 product-grid"></div>
    </section>
  `;
}

export function attachProductHandlers() {
  const { PREFIX, PRODUCTS, FARMERS } = API;
  const list = document.getElementById('product-list');
  if (!list) return;

  let productsCache = [];

  list.innerHTML = '<p class="text-muted">Loading products...</p>';

  async function loadProducts() {
    try {
      const [productsRes, farmersRes] = await Promise.all([
        fetch(`${PREFIX}${PRODUCTS}`),
        fetch(`${PREFIX}${FARMERS}`),
      ]);
      if (!productsRes.ok) throw new Error('Failed to fetch products');
      if (!farmersRes.ok) throw new Error('Failed to fetch farmers');

      const { products } = await productsRes.json();
      const { farmers } = await farmersRes.json();

      const farmersById = new Map(farmers.map((farmer) => [farmer.id, farmer]));
      productsCache = products.map((product) => ({
        ...product,
        farmerName: farmersById.get(product.farmerId)?.name || 'Local Farm',
      }));

      if (!products?.length) {
        list.innerHTML = '<p class="text-muted">No products available right now.</p>';
        return;
      }

      list.innerHTML = productsCache
        .map((p) => `<div class="col-sm-6 col-md-4 col-lg-3">${renderProductCard(p)}</div>`)
        .join('');
    } catch (err) {
      list.innerHTML = `<p class="text-danger">${err.message}</p>`;
      console.error(err);
    }
  }

  loadProducts();

  list.addEventListener('click', (event) => {
    const button = event.target.closest('[data-add-to-cart]');
    if (!button) return;

    const productId = button.getAttribute('data-product-id');
    const product = productsCache.find((item) => item.id === productId);
    if (!product) {
      toast.error('Product not found.');
      return;
    }

    addToCart(product, 1);
    toast.success(`${product.title} added to cart.`);
  });
}
