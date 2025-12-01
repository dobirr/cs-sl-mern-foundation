import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { renderLoginPage, attachLoginHandlers } from './pages/login';
import { renderRegisterPage, attachRegisterHandlers } from './pages/register.js';

const routes = {
  '/': { view: renderLoginPage, mount: attachLoginHandlers },
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
      <header class="py-3 border-bottom bg-white shadow-sm">
        <div class="container d-flex justify-content-between align-items-center">
          <span class="brand">HEALTHY Delights</span>
          <nav class="d-flex gap-3">
            <a href="/" data-link class="text-decoration-none">Home</a>
            <a href="/login" data-link class="text-decoration-none">Login</a>
          </nav>
        </div>
      </header>
      ${html}
    </div>
  `;

  if (typeof mount === 'function') {
    mount();
  }
}

render();
