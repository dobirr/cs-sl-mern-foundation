let container;

function ensureContainer() {
  if (container) return;
  container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
}

export function showToast(message, type = 'info', options = {}) {
  if (!message) return;
  ensureContainer();

  const { duration = 3200 } = options;
  const toast = document.createElement('div');
  toast.className = `app-toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  const remove = () => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 220);
  };

  const timer = setTimeout(remove, duration);
  toast.addEventListener('click', () => {
    clearTimeout(timer);
    remove();
  });
}

export const toast = {
  success: (msg, options) => showToast(msg, 'success', options),
  error: (msg, options) => showToast(msg, 'error', options),
  info: (msg, options) => showToast(msg, 'info', options),
  warning: (msg, options) => showToast(msg, 'warning', options),
};
