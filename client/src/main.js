import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
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
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <span class="brand">
            <a href="/" data-link class="text-decoration-none">HEALTHY Delights</a>
          </span>
          <nav class="d-flex gap-4">            
            <a class="login" href="/login" data-link class="text-decoration-none">
              <i data-lucide="user"></i>
            </a>
            <a class="cart" href="/cart" data-link class="text-decoration-none d-flex align-items-center gap-1">
              <i data-lucide="store"></i>
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
