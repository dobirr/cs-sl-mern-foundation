import {
  getCart,
  getCartCount,
  getCartSubtotal,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
} from '../services/cart.js';
import { toast } from '../components/toast.js';
import { isAuthenticated } from '../services/auth.js';

let cartViewState = 'cart';
let checkoutContext = null;

function formatCurrency(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function createOrderId() {
  const date = new Date();
  const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `HD-${stamp}-${rand}`;
}

function redirectToLoginForCheckout() {
  const returnTo = '/cart?step=payment';
  const loginUrl = `/login?redirect=${encodeURIComponent(returnTo)}`;
  window.history.pushState({}, '', loginUrl);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function calculateSummary() {
  const subtotal = getCartSubtotal();
  const shipping = subtotal > 60 || subtotal === 0 ? 0 : 4.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;
  return { subtotal, shipping, tax, total };
}

function renderCartItem(item) {
  const lineTotal = Number(item.price || 0) * Number(item.quantity || 0);

  return `
    <article class="cart-item card p-3">
      <div class="d-flex gap-3 align-items-center">
        <img class="cart-thumb" src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="flex-grow-1">
          <h3 class="h6 mb-1">${item.title}</h3>
          <p class="small text-muted mb-2">${formatCurrency(item.price)} each</p>
          <div class="d-flex align-items-center gap-2">
            <button type="button" class="btn btn-outline-secondary btn-sm" data-cart-action="decrease" data-product-id="${item.id}">-</button>
            <span class="cart-qty">${item.quantity}</span>
            <button type="button" class="btn btn-outline-secondary btn-sm" data-cart-action="increase" data-product-id="${item.id}">+</button>
            <button type="button" class="btn btn-link btn-sm text-danger text-decoration-none" data-cart-action="remove" data-product-id="${item.id}">Remove</button>
          </div>
        </div>
        <div class="text-end">
          <p class="fw-semibold mb-0">${formatCurrency(lineTotal)}</p>
        </div>
      </div>
    </article>
  `;
}

function renderCartSummary() {
  const { subtotal, shipping, tax, total } = calculateSummary();
  const itemCount = getCartCount();

  return `
    <aside class="cart-summary card p-4">
      <h2 class="h5 mb-3">Order Summary</h2>
      <div class="d-flex justify-content-between mb-2">
        <span>Items (${itemCount})</span>
        <span>${formatCurrency(subtotal)}</span>
      </div>
      <div class="d-flex justify-content-between mb-2">
        <span>Shipping</span>
        <span>${shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span>Tax (7%)</span>
        <span>${formatCurrency(tax)}</span>
      </div>
      <hr />
      <div class="d-flex justify-content-between fw-semibold mb-3">
        <span>Total</span>
        <span>${formatCurrency(total)}</span>
      </div>
      <button type="button" class="btn btn-primary w-100 mb-2" data-cart-action="checkout">Proceed to checkout</button>
      <button type="button" class="btn btn-outline-danger w-100" data-cart-action="clear">Clear cart</button>
    </aside>
  `;
}

function renderCartContent() {
  const items = getCart();

  if (!items.length) {
    return `
      <div class="card p-4 text-center">
        <p class="mb-3">Your cart is empty.</p>
        <a href="/products" data-link class="btn btn-primary mx-auto">Browse products</a>
      </div>
    `;
  }

  return `
    <div class="row g-4">
      <div class="col-lg-8 d-flex flex-column gap-3">
        ${items.map(renderCartItem).join('')}
      </div>
      <div class="col-lg-4">
        ${renderCartSummary()}
      </div>
    </div>
  `;
}

function renderPaymentStep() {
  const summary = checkoutContext?.summary || calculateSummary();

  return `
    <div class="row g-4">
      <div class="col-lg-8">
        <div class="card p-4 cart-summary">
          <h2 class="h5 mb-3">Payment (Demo)</h2>
          <p class="text-muted small mb-3">This is a simulated payment step for project completion.</p>
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label small">Cardholder Name</label>
              <input id="card-name" class="form-control" placeholder="Jane Doe" />
            </div>
            <div class="col-md-6">
              <label class="form-label small">Card Number</label>
              <input id="card-number" class="form-control" placeholder="4242 4242 4242 4242" />
            </div>
            <div class="col-md-4">
              <label class="form-label small">Expiry</label>
              <input id="card-expiry" class="form-control" placeholder="12/29" />
            </div>
            <div class="col-md-4">
              <label class="form-label small">CVC</label>
              <input id="card-cvc" class="form-control" placeholder="123" />
            </div>
            <div class="col-md-4">
              <label class="form-label small">ZIP</label>
              <input id="card-zip" class="form-control" placeholder="12345" />
            </div>
          </div>
          <div class="d-flex gap-2 mt-4">
            <button type="button" class="btn btn-primary" data-cart-action="pay-now">Pay now (${formatCurrency(summary.total)})</button>
            <button type="button" class="btn btn-outline-secondary" data-cart-action="back-to-cart">Back to cart</button>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <aside class="cart-summary card p-4">
          <h2 class="h5 mb-3">Payment Summary</h2>
          <div class="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>${formatCurrency(summary.subtotal)}</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Shipping</span>
            <span>${summary.shipping === 0 ? 'Free' : formatCurrency(summary.shipping)}</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Tax</span>
            <span>${formatCurrency(summary.tax)}</span>
          </div>
          <hr />
          <div class="d-flex justify-content-between fw-semibold">
            <span>Total</span>
            <span>${formatCurrency(summary.total)}</span>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderSuccessStep() {
  const summary = checkoutContext?.summary || { total: 0 };
  const orderId = checkoutContext?.orderId || createOrderId();

  return `
    <div class="card p-4 text-center cart-summary">
      <p class="overline mb-1 text-muted">Order confirmed</p>
      <h2 class="h4 mb-2">Thank you for your order</h2>
      <p class="mb-2">Order ID: <strong>${orderId}</strong></p>
      <p class="mb-4">Total paid: <strong>${formatCurrency(summary.total)}</strong></p>
      <div class="d-flex justify-content-center gap-2">
        <a href="/products" data-link class="btn btn-primary">Continue shopping</a>
        <button type="button" class="btn btn-outline-secondary" data-cart-action="new-order">Start new order</button>
      </div>
    </div>
  `;
}

function renderByState() {
  if (cartViewState === 'payment') return renderPaymentStep();
  if (cartViewState === 'success') return renderSuccessStep();
  return renderCartContent();
}

export function renderCartPage() {
  cartViewState = 'cart';
  checkoutContext = null;
  const requestedStep = new URLSearchParams(window.location.search).get('step');
  if (requestedStep === 'payment' && isAuthenticated() && getCart().length) {
    cartViewState = 'payment';
    checkoutContext = { summary: calculateSummary() };
  }

  return `
    <section class="container-fluid py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="intro">
          <p class="overline mb-1 text-muted">Cart</p>
          <h1 class="h3 mb-0">Your basket</h1>
        </div>
      </div>
      <div id="cart-root">${renderByState()}</div>
    </section>
  `;
}

export function attachCartHandlers() {
  const root = document.getElementById('cart-root');
  if (!root) return;

  function rerender() {
    root.innerHTML = renderByState();
  }

  root.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-cart-action]');
    if (!trigger) return;

    const action = trigger.getAttribute('data-cart-action');
    const productId = trigger.getAttribute('data-product-id');

    if (action === 'checkout') {
      if (!isAuthenticated()) {
        toast.warning('Please log in to continue checkout.');
        redirectToLoginForCheckout();
        return;
      }
      const items = getCart();
      if (!items.length) {
        toast.warning('Your cart is empty.');
        return;
      }
      checkoutContext = { summary: calculateSummary() };
      cartViewState = 'payment';
      rerender();
      return;
    }

    if (action === 'back-to-cart') {
      cartViewState = 'cart';
      rerender();
      return;
    }

    if (action === 'pay-now') {
      if (!isAuthenticated()) {
        toast.warning('Please log in to complete your order.');
        redirectToLoginForCheckout();
        return;
      }
      checkoutContext = {
        ...(checkoutContext || {}),
        summary: checkoutContext?.summary || calculateSummary(),
        orderId: createOrderId(),
      };
      clearCart();
      cartViewState = 'success';
      rerender();
      toast.success('Payment simulated successfully.');
      return;
    }

    if (action === 'new-order') {
      checkoutContext = null;
      cartViewState = 'cart';
      rerender();
      return;
    }

    if (action === 'clear') {
      clearCart();
      rerender();
      toast.success('Cart cleared.');
      return;
    }

    if (!productId) return;

    const current = getCart().find((item) => item.id === productId);
    if (!current) return;

    if (action === 'increase') {
      updateCartItemQuantity(productId, current.quantity + 1);
      rerender();
      return;
    }

    if (action === 'decrease') {
      updateCartItemQuantity(productId, current.quantity - 1);
      rerender();
      return;
    }

    if (action === 'remove') {
      removeFromCart(productId);
      rerender();
      toast.success('Item removed from cart.');
    }
  });
}
