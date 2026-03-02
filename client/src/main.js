import 'bootstrap/scss/bootstrap.scss';
import './style.scss';
import { renderLoginPage, attachLoginHandlers } from './pages/login';
import { renderRegisterPage, attachRegisterHandlers } from './pages/register.js';
import { attachLandingHandlers, renderLandingPage } from './pages/landing.js';
import { renderProductPage, attachProductHandlers } from './pages/product.js';
import { renderFarmerPage, attachFarmerHandlers } from './pages/farmer.js';
import { renderCartPage, attachCartHandlers } from './pages/cart.js';
import { createIcons, icons } from 'lucide';
import { getUser, isAuthenticated, logout } from './services/auth.js';

const routes = {
  '/': { view: renderLandingPage, mount: attachLandingHandlers },
  '/products': { view: renderProductPage, mount: attachProductHandlers },
  '/cart': { view: renderCartPage, mount: attachCartHandlers },
  '/login': { view: renderLoginPage, mount: attachLoginHandlers },
  '/register': { view: renderRegisterPage, mount: attachRegisterHandlers },
};

function render(pathname = window.location.pathname) {
  let route = routes[pathname];

  if (!route && pathname.startsWith('/farmers/')) {
    route = { view: renderFarmerPage, mount: attachFarmerHandlers };
  }

  // Get the view and mount function for the current route
  const { view, mount } = route || routes['/'];
  const isProductsRoute =
    pathname === '/products' ||
    pathname.startsWith('/products/') ||
    pathname.startsWith('/farmers/');
  const isCartRoute = pathname === '/cart' || pathname.startsWith('/cart/');
  const isAuthRoute = pathname === '/login' || pathname === '/register';

  // Render the HTML
  const html = view(pathname);
  const user = getUser();
  document.querySelector('#root').innerHTML = `
    <div class="app-shell">
      <header class="py-3 bg-white">
        <div class="container-fluid d-flex align-items-center gap-5">
          <span class="brand me-3">
            <a href="/" data-link class="text-decoration-none">HEALTHY Delights</a>
          </span>
          <div class="search flex-grow-1">
            <form role="search">
              <div class="input-group d-flex align-items-center">
                <i class="search-ico" data-lucide="search"></i>
                <input type="search" class="form-control" placeholder="Search meals or categories..." aria-label="Search" />               
              </div>
            </form>
          </div>
          <nav class="d-flex gap-4 ms-2">    
             
            <a class="products text-decoration-none d-flex align-items-center gap-1 ${isProductsRoute ? 'is-active' : ''}" href="/products" data-link>
              <i data-lucide="shopping-bag"></i>
              <span>Products</span>
            </a>
             <a class="cart text-decoration-none d-flex align-items-center gap-1 ${isCartRoute ? 'is-active' : ''}" href="/cart" data-link>
              <i class="user-store" data-lucide="store"></i>
              <span>Cart</span>
            </a>      
            ${
              isAuthenticated()
                ? `<a id="logout-btn" class="logout text-decoration-none d-flex align-items-center gap-1">
                     <i class="user-ico" data-lucide="log-out"></i>
                     <span>${user?.name || user?.email || 'Logout'}</span>
                   </a>`
                : `<a class="login text-decoration-none d-flex align-items-center gap-1 ${isAuthRoute ? 'is-active' : ''}" href="/login" data-link>
                     <i class="user-ico" data-lucide="user"></i>
                     <span>Login</span>
                   </a>`
            }
         
          </nav>
        </div>
      </header>
      ${html}
      <footer>
        <div class="container-fluid py-4 mt-5 border-top d-flex justify-content-between align-items-center">
          <span>&copy; ${new Date().getFullYear()} HEALTHY Delights. All rights reserved.</span>
          <div class="d-flex gap-5">
            <a href="/privacy" data-link class="text-decoration-none">Privacy Policy</a>
            <a href="/terms" data-link class="text-decoration-none">Terms of Service</a>
            <a href="/contact" data-link class="text-decoration-none">Contact Us</a>
          </div>
        </div>                      
      </div>
    </footer>
    </div>
  `;

  if (typeof mount === 'function') {
    mount(pathname);
  }
  createIcons({ icons });

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logout();
      render('/'); // re-render header state
    });
  }
}

// SPA navigation
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-link]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (href.startsWith('http')) return; // external
  const url = new URL(href, window.location.origin);
  e.preventDefault();
  window.history.pushState({}, '', `${url.pathname}${url.search}`);
  render(url.pathname);
});

window.addEventListener('popstate', () => render(window.location.pathname));

render();
