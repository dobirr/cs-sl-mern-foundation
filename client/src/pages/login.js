import { login } from '../services/auth.js';
import { toast } from '../components/toast.js';

export function renderLoginPage() {
  return `
    <div class="app-container">
      <div class="card card-login p-4 rounded-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="brand h5 mb-0">Login</div>
          <a href="/register" class="badge text-bg-light">Register</a>
        </div>
        <p class="text-secondary small mb-3">Access your account with your credentials.</p>
        
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
      if (!payload.email || !payload.password) {
        throw new Error('Please enter email and password.');
      }
      if (payload.password.length < 6) {
        throw new Error('Password must be at least 6 characters long.');
      }

      await login(payload);
      toast.success('Login successful.');
      window.location.href = '/';
    } catch (error) {
      const message = error.message || 'Login failed.';
      toast.error(message);
      console.error(error);
    }
  });
}
