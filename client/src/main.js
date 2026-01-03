import 'bootstrap/scss/bootstrap.scss';
import './style.scss';
import { renderLoginPage, attachLoginHandlers } from './pages/login';
import { renderRegisterPage, attachRegisterHandlers } from './pages/register.js';
import { attachLandingHandlers, renderLandingPage } from './pages/landing.js';
import { createIcons, icons } from 'lucide';

const routes = {
  '/': { view: renderLandingPage, mount: attachLandingHandlers },
  '/login': { view: renderLoginPage, mount: attachLoginHandlers },
  '/register': { view: renderRegisterPage, mount: attachRegisterHandlers },
};

function render(pathname = window.location.pathname) {
  // Get the view and mount function for the current route
  const { view, mount } = routes[pathname] || routes['/'];

  // Render the HTML
  const html = view();
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
            <a class="login" href="/login" data-link class="text-decoration-none d-flex align-items-center gap-1">
              <i class="user-ico" data-lucide="user"></i>
            </a>
            <a class="cart" href="/cart" data-link class="text-decoration-none d-flex align-items-center gap-1">
              <i class="user-store" data-lucide="store"></i>
            </a>
          </nav>
        </div>
      </header>
      ${html}
    </div>
  `;

  if (typeof mount === 'function') {
    mount();
  }
  createIcons({ icons });
}

render();
