import { API } from '../constants/api.js';
import { renderProductCard } from '../components/product-card.js';
import { addToCart } from '../services/cart.js';
import { toast } from '../components/toast.js';

function renderStars(ratingValue) {
  if (!Number.isFinite(ratingValue)) return '';
  const roundedStars = Math.max(0, Math.min(5, Math.round(ratingValue)));
  return '★'.repeat(roundedStars) + '☆'.repeat(5 - roundedStars);
}

function renderFarmError(message) {
  return `<section class="container-fluid py-4"><p class="text-danger">${message}</p></section>`;
}

export function renderFarmerPage(pathname = window.location.pathname) {
  const farmerId = pathname.split('/')[2];
  if (!farmerId) {
    return renderFarmError('Farmer not found.');
  }

  return `
    <section class="container-fluid py-4" data-farmer-id="${farmerId}">
      <div id="farmer-detail" class="farmer-hero">
        <p class="text-muted mb-0">Loading farmer profile...</p>
      </div>
      <div class="former-products">
        <h2 class="mb-3">Products from our farm</h2>
        <div id="farmer-products" class="row g-3 product-grid"></div>
      </div>
    </section>
  `;
}

export function attachFarmerHandlers(pathname = window.location.pathname) {
  const farmerId = pathname.split('/')[2];
  if (!farmerId) return;

  const detail = document.getElementById('farmer-detail');
  const list = document.getElementById('farmer-products');
  if (!detail || !list) return;

  let productsCache = [];

  const { PREFIX, FARMER_BY_ID, FARMER_PRODUCTS } = API;

  const farmerUrl = `${PREFIX}${FARMER_BY_ID(farmerId)}`;
  const productsUrl = `${PREFIX}${FARMER_PRODUCTS(farmerId)}`;

  async function loadFarmerData() {
    try {
      const [farmerRes, productsRes] = await Promise.all([fetch(farmerUrl), fetch(productsUrl)]);
      if (!farmerRes.ok) throw new Error('Unable to load farm profile.');
      if (!productsRes.ok) throw new Error('Unable to load farm products.');

      const farmer = await farmerRes.json();
      const payload = await productsRes.json();
      const products = payload.products || [];

      detail.innerHTML = `
        <div class="row g-4 align-items-center">
          <div class="col-md-4">
            <img class="img-fluid" src="${farmer.heroImage}" alt="${farmer.name}" loading="lazy" />
          </div>
          <div class="col-md-8">
            <div class="farmer-infos">
              <h1 class="h3 mb-1">${farmer.name}</h1>
              <p class="text-muted mb-4">${farmer.location.city}, ${farmer.location.state}</p>
              <p class="mb-4">${farmer.story || ''}</p>
              <p class="mb-0 small text-muted">
                <span class="text-warning" aria-label="${farmer.rating?.toFixed?.(1) || '0.0'} out of 5 stars">
                  ${renderStars(farmer.rating)}
                </span>
                (${farmer.ratingCount || 0} reviews)
              </p>
            </div>
          </div>
        </div>
      `;

      if (!products.length) {
        list.innerHTML = '<p class="text-muted">No products from this farm right now.</p>';
        return;
      }

      productsCache = products.map((product) => ({
        ...product,
        farmerName: farmer.name,
      }));

      list.innerHTML = productsCache
        .map(
          (product) => `<div class="col-sm-6 col-md-4 col-lg-3">${renderProductCard(product)}</div>`
        )
        .join('');
    } catch (error) {
      detail.innerHTML = `<p class="text-danger mb-0">${error.message}</p>`;
      list.innerHTML = '';
    }
  }

  loadFarmerData();

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
