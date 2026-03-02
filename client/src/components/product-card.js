function renderStars(ratingValue) {
  if (!Number.isFinite(ratingValue)) return '';
  const roundedStars = Math.max(0, Math.min(5, Math.round(ratingValue)));
  return '★'.repeat(roundedStars) + '☆'.repeat(5 - roundedStars);
}

export function renderProductCard(product) {
  const price = product.price ? `$${product.price.toFixed(2)}` : '';
  const rating = renderStars(product.rating);
  const farmer = product.farmerName || '';
  const tags =
    product.tags
      ?.slice(0, 3)
      .map((t) => `<span class="badge text-bg-light mb-2 p-1">${t}</span>`)
      .join(' ') || '';

  return `
    <article class="product-card card h-100 mb-4">
      <div class="ratio ratio-4x3 product-thumb">
        <img src="${product.image}" alt="${product.title}" loading="lazy" />
      </div>
      <div class="card-body p-3">
        ${
          farmer
            ? `<a data-link href="/farmers/${product.farmerId}" class="overline text-decoration-none d-inline-block product-farmer">${farmer}</a>`
            : ''
        }
        <h5 class="card-title product-title">${product.title}</h5>
        <p class="card-subtitle text-muted small product-subtitle">${product.subtitle || ''}</p>
        <div class="d-flex justify-content-between align-items-center product-meta">
          <span class="fw-semibold price">${price}</span>
          <span class="text-warning small" aria-label="${product.rating?.toFixed?.(1) || '0.0'} out of 5 stars">${rating}</span>
        </div>
        <div class="d-flex flex-wrap gap-1 product-tags">${tags}</div>
        <div class="d-flex product-controls gap-2">
          <a data-link href="/products/${product.id}" class="btn btn-primary w-100">View details</a>
          <button type="button" class="btn btn-secondary w-100" data-add-to-cart data-product-id="${product.id}">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  `;
}
