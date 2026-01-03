import { register } from '../services/auth.js';

export function renderRegisterPage() {
  return `
    <div class="app-container">
      <div class="card card-login p-4 rounded-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="brand h5 mb-0">Register</div>
          <a href="/login" class="badge text-bg-light">Login</a>
        </div>
        <p class="text-secondary small mb-3">Insert your credentials to create your account.</p>        
        <form id="register-form">
          <div class="row">
            <div class="mb-2 col-md-6">
              <input name="firstName" type="text" placeholder="First Name" class="form-control" />
            </div>
             <div class="mb-2 col-md-6">
              <input name="lastName" type="text" placeholder="Last Name" class="form-control" required />
            </div>
            <div class="mb-2 col-md-12">
              <input id="email" name="email" type="email" class="form-control" placeholder="Email" required />
            </div>
            <div class="mb-2 col-md-6">
              <input id="password" name="password" type="password" class="form-control" placeholder="Password" required />
            </div>
            <div class="mb-3 col-md-6">
              <input id="passwordConfirm" name="passwordConfirm" type="password" class="form-control" placeholder="Confirm Password" required />
            </div>
          </div>         
         
          <button type="submit" class="btn btn-primary w-100">Sign up</button>
        </form>
        <div id="register-error" class="alert alert-danger py-2 mt-2 small d-none" role="alert"></div>
      </div>
    </div>
  `;
}

// Attach event handlers to the register form
export function attachRegisterHandlers() {
  const form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const errorBox = document.getElementById('register-error');

    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirm: formData.get('passwordConfirm'),
    };

    try {
      if (
        !payload.firstName ||
        !payload.lastName ||
        !payload.email ||
        !payload.password ||
        !payload.passwordConfirm
      ) {
        throw new Error('Please complete all required fields.');
      }
      if (payload.password.length < 6) {
        throw new Error('The password must be at least 6 characters long.');
      }
      if (payload.password !== payload.passwordConfirm) {
        throw new Error('The passwords do not match.');
      }

      await register(payload);
      if (errorBox) {
        errorBox.classList.add('d-none');
        errorBox.textContent = '';
      }
    } catch (error) {
      if (errorBox) {
        errorBox.textContent = error.message || 'Registration failed.';
        errorBox.classList.remove('d-none');
      }
      console.error(error);
    }
  });
}
