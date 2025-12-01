import { login } from '../services/auth.js';

export function renderLoginPage() {
  return `
    <div class="app-container">
      <div class="card card-login p-4 rounded-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="brand h5 mb-0">Login</div>
          <a href="/register" class="badge text-bg-light">Register</a>
        </div>
        <p class="text-secondary small mb-4">Access your dashboard with the credentials you received.</p>
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

    const payload = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      await login(payload);
    } catch (error) {
      console.error(error);
    }
  });
}
