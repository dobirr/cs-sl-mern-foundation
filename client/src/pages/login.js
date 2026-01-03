import { login } from '../services/auth.js';

export function renderLoginPage() {
  return `
    <div class="app-container">
      <div class="card card-login p-4 rounded-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="brand h5 mb-0">Login</div>
          <a href="/register" class="badge text-bg-light">Register</a>
        </div>
        <p class="text-secondary small mb-3">Access your dashboard with the credentials you received.</p>
        
        <form id="login-form">
        <div class="row">
          <div class="mb-2 col-md-6">
            <input name="email" type="email" class="form-control" placeholder="Email" required />
          </div>
          <div class="mb-3 col-md-6">
            <input name="password" type="password" class="form-control" placeholder="Password" required />
          </div>
        </div>
          <button type="submit" class="btn btn-primary w-100">Sign in</button>
        </form>
        <div id="login-error" class="alert alert-danger py-2 mt-2 small d-none" role="alert"></div>
      </div>
    </div>
  `;
}

// Attach event handlers to the login form
export function attachLoginHandlers() {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const errorBox = document.getElementById('login-error');

    const payload = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {

      if (!payload.email || !payload.password) {
        throw new Error('Please enter your email address and password.');
      }
      if (payload.password.length < 6) {
        throw new Error('Your password must be at least 6 characters long.');
      }

      await login(payload);
      if (errorBox) {
        errorBox.classList.add('d-none');
        errorBox.textContent = '';
      }
    } catch (error) {
      if (errorBox) {
        errorBox.textContent = error.message || 'Login fehlgeschlagen.';
        errorBox.classList.remove('d-none');
      }
      console.error(error);
    }
  });
}
