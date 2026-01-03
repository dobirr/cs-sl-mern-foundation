import hero from '../assets/images/hero-landing.avif';
import { renderHeroSection } from '../components/hero.js';

export function renderLandingPage() {
  return `
    <div class="landing page">
      ${renderHeroSection(
        hero,
        'Fresh & Regional',
        'About Healthy Delights',
        'Healthy Delights connects nearby farmers with people who care about real food. Shop seasonal produce, baked goods, eggs, and more — delivered with the freshness you can taste.',
        'Support local growers, skip the long supply chain, and enjoy food that’s truly regional.',
        [
          { name: 'Shop Fresh Produce', link: '/shop', style: 'btn btn-primary' },
          { name: 'Learn More', link: '/about', style: 'btn btn-secondary' },
        ]
      )}
    </div>
  `;
}

// Attach event handlers to the login form
export function attachLandingHandlers() {
  console.log('attachLandingHandlers()');
}
