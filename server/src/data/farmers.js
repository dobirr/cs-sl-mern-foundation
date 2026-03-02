export const farmers = [
  {
    id: 'farm-gruenwald-hof',
    name: 'Greenfield Farm Shop',
    location: { city: 'Freiburg', state: 'BW', country: 'Germany' },
    coordinates: { lat: 47.999, lng: 7.8421 },
    certifications: ['EU Organic', 'Bioland'],
    practices: ['regenerative', 'no-till', 'cover crops', 'drip irrigation'],
    specialties: ['leafy greens', 'root vegetables', 'seasonal berries'],
    rating: 4.8,
    ratingCount: 186,
    longDescription:
      'Greenfield Farm Shop grows vegetables and berries on living soil using regenerative methods and careful water management. Produce is harvested early in the morning, pre-cooled on site, and delivered fresh to nearby customers.',
    contact: {
      website: 'https://greenfield-farm.local',
      email: 'hello@greenfield-farm.local',
      phone: '+49-761-555-1021',
    },
    heroImage:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80',
    ],
    deliveryRadiusKm: 60,
    story:
      'Family-run farm focused on seasonal field vegetables, berries, and direct-to-customer freshness.',
  },
  {
    id: 'farm-sonnenhang-gut',
    name: 'Sunny Ridge Estate Farm',
    location: { city: 'Kempten', state: 'BY', country: 'Germany' },
    coordinates: { lat: 47.7267, lng: 10.3139 },
    certifications: ['Certified Humane', 'EU Organic'],
    practices: ['rotational grazing', 'grass-fed', 'low-temp pasteurization'],
    specialties: ['fresh milk', 'farm cheese', 'free-range eggs'],
    rating: 4.7,
    ratingCount: 164,
    longDescription:
      'Sunny Ridge Estate Farm combines pasture-based dairy farming with a small creamery and free-range hens. Milk is processed in small batches, cheeses mature in climate-controlled cellars, and eggs are collected daily.',
    contact: {
      website: 'https://sunnyridge-farm.local',
      email: 'orders@sunnyridge-farm.local',
      phone: '+49-831-555-2047',
    },
    heroImage:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80',
    ],
    deliveryRadiusKm: 85,
    story:
      'Regional dairy and egg farm with rotational grazing, strong animal welfare standards, and small-batch products.',
  },
];
