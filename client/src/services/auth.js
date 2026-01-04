const STORAGE_KEY = 'hd:user';
const REGISTER_KEY = 'hd:registered-user';

function persistUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function persistRegistered(user) {
  localStorage.setItem(REGISTER_KEY, JSON.stringify(user));
}

function loadUser() {
  const user = localStorage.getItem(STORAGE_KEY);
  if (!user) return null;
  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
}

export function getUser() {
  return loadUser();
}

export function isAuthenticated() {
  return Boolean(loadUser());
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

export const login = async ({ email, password }) => {
  const registeredUser = localStorage.getItem(REGISTER_KEY);
  if (!registeredUser) {
    throw new Error('No account found. Please register first.');
  }
  const registered = JSON.parse(registeredUser);
  if (registered.email !== email) {
    throw new Error('Invalid credentials.');
  }
  if (registered.password) {
    if (!password || registered.password !== password) {
      throw new Error('Invalid credentials.');
    }
  }

  const user = {
    email: registered.email,
    name: registered.name || registered.email.split('@')[0] || 'User',
    token: 'demo-token',
    loggedInAt: new Date().toISOString(),
  };
  persistUser(user);
  return user;
};

export const register = async ({ firstName, lastName, email, password }) => {
  const user = {
    email,
    password,
    name: `${firstName || ''} ${lastName || ''}`.trim() || email.split('@')[0] || 'User',
    token: 'demo-token',
    loggedInAt: new Date().toISOString(),
  };

  persistRegistered({ email: user.email, password: user.password, name: user.name });

  persistUser(user);
  return user;
};
