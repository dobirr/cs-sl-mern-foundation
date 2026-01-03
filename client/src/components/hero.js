export function renderHeroSection(
  imageSrc,
  preTitle,
  title = 'Landing Page',
  description,
  ctaTitle,
  cta
) {
  return `
    <section class="hero">
      <div class="visual-floating">
        <img class="visual-floating-img" src="${imageSrc}" alt="Hero image" />
      </div>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-5">  
            ${preTitle && `<p class="pre-title">${preTitle}</p>`}
            ${title && `<h2>${title}</h2>`}
            ${description && `<p class="description">${description}</p>`}            
            ${ctaTitle && `<p class="cta-title">${ctaTitle}</p>`}
            ${
              Array.isArray(cta) && cta.length
                ? `<div class="cta-group d-flex gap-3">
                   ${cta
                     .map(
                       ({ name, link, style = '' }) =>
                         `<a class="${style}" href="${link}">${name}</a>`
                     )
                     .join('')}
                 </div>`
                : ''
            }
          </div>
        </div>
      </div>
    </section>
  `;
}
