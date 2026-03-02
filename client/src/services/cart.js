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

export function updateCartItemQuantity(productId, quantity) {
  const safeQty = Math.max(0, Number(quantity) || 0);
  const cart = loadCart();
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return cart;

  if (safeQty === 0) {
    const filtered = cart.filter((entry) => entry.id !== productId);
    saveCart(filtered);
    return filtered;
  }

  item.quantity = safeQty;
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId) {
  const filtered = loadCart().filter((entry) => entry.id !== productId);
  saveCart(filtered);
  return filtered;
}

export function clearCart() {
  saveCart([]);
}

export function getCartSubtotal() {
  return loadCart().reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );
}
