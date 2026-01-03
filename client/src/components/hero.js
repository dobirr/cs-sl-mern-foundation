export function renderHeroSection(imageSrc, title = 'Landing Page', description, supportLine, cta) {
  return `
    <section class="hero">
      <div class="hero-visual-floating">
        <img class="hero-visual" src="${imageSrc}" alt="Hero image" />
      </div>
      <div class="container-fluid">
        <div class="row align-items-center g-4">
          <div class="col-md-6">  
            ${title && `<h1>${title}</h1>`}
            ${description && `<p>${description}</p>`}
            ${cta && `<p>${cta}</p>`}
            ${supportLine && `<p>${supportLine}</p>`}
          </div>
        </div>
      </div>
    </section>
  `;
}
