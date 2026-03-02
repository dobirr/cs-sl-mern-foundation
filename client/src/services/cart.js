const CART_KEY = 'hd:cart';

function loadCart() {
  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function getCart() {
  return loadCart();
}

export function getCartCount() {
  return loadCart().reduce((sum, item) => sum + (item.quantity || 0), 0);
}

export function addToCart(product, quantity = 1) {
  if (!product?.id) {
    throw new Error('Invalid product for cart.');
  }

  const safeQty = Math.max(1, Number(quantity) || 1);
  const cart = loadCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += safeQty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      farmerId: product.farmerId,
      quantity: safeQty,
    });
  }

  saveCart(cart);
  return cart;
}
