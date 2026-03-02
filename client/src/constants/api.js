export const API = Object.freeze({
  BASE_URL: '',
  PORT: '',
  PREFIX: '/api',
  PRODUCTS: '/product',
  PRODUCT_BY_ID: (id) => `/product/${id}`,
  FARMERS: '/farmers',
  FARMER_BY_ID: (id) => `/farmers/${id}`,
  FARMER_PRODUCTS: (id) => `/farmers/${id}/products`,
});
