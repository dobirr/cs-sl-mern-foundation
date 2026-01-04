export const farmers = [
  {
    id: 'farm-spring-creek',
    name: 'Spring Creek Organics',
    location: { city: 'Davis', state: 'CA', country: 'USA' },
    coordinates: { lat: 38.5449, lng: -121.7405 },
    certifications: ['USDA Organic', 'CCOF'],
    practices: ['regenerative', 'no-till', 'cover crops', 'drip irrigation'],
    specialties: ['leafy greens', 'heirloom tomatoes', 'berries'],
    rating: 4.8,
    ratingCount: 214,
    longDescription:
      'Spring Creek regenerates Central Valley soils with cover crops, no-till beds, and efficient drip irrigation. Their salad greens and berries are harvested at dawn, cooled within minutes, and reach customers the same day through short-haul delivery.',
    contact: {
      website: 'https://springcreek.local',
      email: 'hello@springcreek.local',
      phone: '+1-530-555-0114',
    },
    heroImage:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 80,
    story:
      'Family-run since 1998, focused on regenerative soil health and year-round salad greens with minimal water use.',
  },
  {
    id: 'farm-meadow-brook',
    name: 'Meadow Brook Dairy & Eggs',
    location: { city: 'Waitsfield', state: 'VT', country: 'USA' },
    coordinates: { lat: 44.1925, lng: -72.8243 },
    certifications: ['Certified Humane'],
    practices: ['rotational grazing', 'grass-fed', 'low-temp pasteurization'],
    specialties: ['pasture-raised dairy', 'free-range eggs', 'artisan yogurt'],
    rating: 4.7,
    ratingCount: 168,
    longDescription:
      'Meadow Brook keeps small, pasture-grazed herds and pasteurizes milk at low temperatures to preserve nutrients and flavor. The farm rotates grazing paddocks weekly and supplements with regionally milled grains for balanced animal health.',
    contact: {
      website: 'https://meadowbrook.local',
      email: 'orders@meadowbrook.local',
      phone: '+1-802-555-0142',
    },
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 120,
    story: 'Small-batch dairy with pasture-grazed herds and low-intervention creamery methods.',
  },
  {
    id: 'farm-redwood-coast',
    name: 'Redwood Coast Fisheries Co-op',
    location: { city: 'Astoria', state: 'OR', country: 'USA' },
    coordinates: { lat: 46.1879, lng: -123.8313 },
    certifications: ['MSC supplier'],
    practices: ['wild-caught', 'ice-slurry handling', 'traceable boats'],
    specialties: ['wild salmon', 'smoked trout', 'rockfish'],
    rating: 4.9,
    ratingCount: 132,
    longDescription:
      'The Redwood Coast cooperative tracks every fish from boat to box, using ice-slurry handling and next-day processing. Skippers follow seasonal quotas and certified sustainable methods to protect Pacific stocks and ocean ecosystems.',
    contact: {
      website: 'https://redwoodcoastfish.local',
      email: 'sales@redwoodcoastfish.local',
      phone: '+1-503-555-0198',
    },
    heroImage:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 300,
    story: 'Fisher cooperative supplying traceable Pacific seafood with rapid cold-chain to shore.',
  },
  {
    id: 'farm-desert-bloom',
    name: 'Desert Bloom Date & Citrus',
    location: { city: 'Indio', state: 'CA', country: 'USA' },
    coordinates: { lat: 33.7206, lng: -116.2156 },
    certifications: ['USDA Organic'],
    practices: ['micro-irrigation', 'integrated pest management'],
    specialties: ['medjool dates', 'valencia oranges', 'meyer lemons'],
    rating: 4.6,
    ratingCount: 97,
    longDescription:
      'Desert Bloom pairs drought-smart micro‑irrigation with pollinator-friendly rows between date palms and citrus. Fruit is hand-harvested, graded, and packed on-site to minimize handling and preserve natural sugars.',
    contact: {
      website: 'https://desertbloom.local',
      email: 'hello@desertbloom.local',
      phone: '+1-760-555-0107',
    },
    heroImage:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 200,
    story: 'Desert-grown dates and citrus with careful water use and hand-harvested quality.',
  },
  {
    id: 'farm-blue-ridge',
    name: 'Blue Ridge Orchards',
    location: { city: 'Asheville', state: 'NC', country: 'USA' },
    coordinates: { lat: 35.5951, lng: -82.5515 },
    certifications: ['GAP'],
    practices: ['integrated pest management', 'mixed cover cropping'],
    specialties: ['apples', 'berries', 'buckwheat'],
    rating: 4.6,
    ratingCount: 121,
    longDescription:
      'Blue Ridge Orchards thrives in cool mountain air, producing crisp apples and berries with balanced acidity. They interplant buckwheat and clover to feed soil life and attract beneficial insects through the growing season.',
    contact: {
      website: 'https://blueridgeorchards.local',
      email: 'team@blueridgeorchards.local',
      phone: '+1-828-555-0175',
    },
    heroImage:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 150,
    story: 'Mountain orchard with cool-climate apples, berries, and heritage grains.',
  },
  {
    id: 'farm-riverbend',
    name: 'Riverbend Veg Co-op',
    location: { city: 'Portland', state: 'OR', country: 'USA' },
    coordinates: { lat: 45.5152, lng: -122.6784 },
    certifications: ['USDA Organic'],
    practices: ['no-spray greens', 'drip irrigation', 'minimal till'],
    specialties: ['leafy greens', 'roots', 'microgreens'],
    rating: 4.7,
    ratingCount: 143,
    longDescription:
      'Riverbend is a worker-owned co-op specializing in greens grown under no-spray, minimal-till methods. Year-round tunnels and drip irrigation cut water use while keeping salad mixes tender and consistent.',
    contact: {
      website: 'https://riverbendveg.local',
      email: 'hi@riverbendveg.local',
      phone: '+1-971-555-0122',
    },
    heroImage:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 90,
    story: 'Worker-owned vegetable cooperative with year-round greenhouse production.',
  },
  {
    id: 'farm-gold-pastures',
    name: 'Golden Pastures Beef',
    location: { city: 'Bozeman', state: 'MT', country: 'USA' },
    coordinates: { lat: 45.677, lng: -111.0429 },
    certifications: ['Grass-fed Certified'],
    practices: ['rotational grazing', 'no antibiotics'],
    specialties: ['grass-fed beef', 'bone broth', 'jerky'],
    rating: 4.8,
    ratingCount: 156,
    longDescription:
      'Golden Pastures rotates cattle across native grasses, building soil carbon and flavor in the beef. Every cut is traceable to a pasture block; broth and jerky come from whole-animal butchery to reduce waste.',
    contact: {
      website: 'https://goldenpastures.local',
      email: 'farm@goldenpastures.local',
      phone: '+1-406-555-0167',
    },
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 250,
    story: 'Regenerative cattle operation on high-country pastures with full traceability.',
  },
  {
    id: 'farm-sunrise-mill',
    name: 'Sunrise Stone Mill',
    location: { city: 'Eugene', state: 'OR', country: 'USA' },
    coordinates: { lat: 44.0521, lng: -123.0868 },
    certifications: ['Organic Processor'],
    practices: ['cold-milled', 'wholegrain', 'low-temp storage'],
    specialties: ['heritage flour', 'granola', 'sourdough starters'],
    rating: 4.5,
    ratingCount: 88,
    longDescription:
      'Sunrise Stone Mill revives heritage grains, cold-milling small batches to preserve oils and aroma. Low-temp storage and weekly milling schedules ensure flour that tastes alive and bakes with superb structure.',
    contact: {
      website: 'https://sunrisemill.local',
      email: 'hello@sunrisemill.local',
      phone: '+1-541-555-0138',
    },
    heroImage:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 160,
    story: 'Family mill reviving heritage grains with gentle stone-milling.',
  },
  {
    id: 'farm-lakeview-honey',
    name: 'Lakeview Apiary & Honey',
    location: { city: 'Madison', state: 'WI', country: 'USA' },
    coordinates: { lat: 43.0731, lng: -89.4012 },
    certifications: ['Pollinator Friendly'],
    practices: ['wildflower forage', 'no antibiotics', 'cold extraction'],
    specialties: ['wildflower honey', 'propolis', 'pollen'],
    rating: 4.6,
    ratingCount: 102,
    longDescription:
      'Lakeview Apiary maintains wildflower corridors and migratory hives to diversify nectar sources. Honey is cold-extracted and minimally strained to keep enzymes intact, with seasonal lots labeled by bloom.',
    contact: {
      website: 'https://lakeviewhoney.local',
      email: 'bees@lakeviewhoney.local',
      phone: '+1-608-555-0179',
    },
    heroImage:
      'https://images.unsplash.com/photo-1456254440184-1c2b81273578?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1456254440184-1c2b81273578?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1456254440184-1c2b81273578?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 140,
    story: 'Urban-rural apiary network with diverse forage for complex honey profiles.',
  },
  {
    id: 'farm-coastal-greens',
    name: 'Coastal Greens Hydro Farm',
    location: { city: 'San Diego', state: 'CA', country: 'USA' },
    coordinates: { lat: 32.7157, lng: -117.1611 },
    certifications: ['Non-GMO'],
    practices: ['hydroponic', 'closed-loop nutrients', 'solar powered'],
    specialties: ['microgreens', 'butter lettuce', 'herb mixes'],
    rating: 4.5,
    ratingCount: 76,
    longDescription:
      'Coastal Greens runs solar-powered hydroponics in a closed-loop system, yielding ultra-clean lettuce and herbs. Harvest-to-chill happens within 30 minutes, locking in crunch and phytonutrients.',
    contact: {
      website: 'https://coastalgreens.local',
      email: 'hi@coastalgreens.local',
      phone: '+1-619-555-0109',
    },
    heroImage:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 80,
    story: 'Energy-efficient hydroponics delivering ultra-fresh greens daily.',
  },
  {
    id: 'farm-northern-roots',
    name: 'Northern Roots Veggies',
    location: { city: 'Minneapolis', state: 'MN', country: 'USA' },
    coordinates: { lat: 44.9778, lng: -93.265 },
    certifications: ['USDA Organic'],
    practices: ['winter tunnels', 'compost mulch', 'crop rotation'],
    specialties: ['root vegetables', 'winter greens'],
    rating: 4.7,
    ratingCount: 111,
    longDescription:
      'Northern Roots grows cold-sweetened roots and hardy winter greens in deep-mulched beds. Heated tunnels extend the season while compost mulches feed soil biology and reduce irrigation needs.',
    contact: {
      website: 'https://northernroots.local',
      email: 'team@northernroots.local',
      phone: '+1-612-555-0144',
    },
    heroImage:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 130,
    story: 'Cold-climate farm delivering sweet roots and hardy greens all winter.',
  },
  {
    id: 'farm-harbor-mist',
    name: 'Harbor Mist Shellfish',
    location: { city: 'New Bedford', state: 'MA', country: 'USA' },
    coordinates: { lat: 41.6362, lng: -70.9342 },
    certifications: ['MSC supplier'],
    practices: ['sustainable aquaculture', 'cold-chain within 4h'],
    specialties: ['mussels', 'oysters', 'clams'],
    rating: 4.8,
    ratingCount: 92,
    longDescription:
      'Harbor Mist harvests shellfish under strict water testing, icing within minutes of landing. Mussels and oysters are depurated and shipped same-day to maintain brine and sweetness.',
    contact: {
      website: 'https://harbormist.local',
      email: 'orders@harbormist.local',
      phone: '+1-508-555-0188',
    },
    heroImage:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 220,
    story: 'Coastal shellfish with rigorous cold-chain and water-quality testing.',
  },
  {
    id: 'farm-cedar-grove',
    name: 'Cedar Grove Mushrooms',
    location: { city: 'Seattle', state: 'WA', country: 'USA' },
    coordinates: { lat: 47.6062, lng: -122.3321 },
    certifications: ['USDA Organic'],
    practices: ['indoor climate-grown', 'composted substrate reuse'],
    specialties: ['shiitake', 'oyster mushrooms', 'lion’s mane'],
    rating: 4.6,
    ratingCount: 84,
    longDescription:
      'Cedar Grove cultivates mushrooms in climate-controlled rooms on recycled wood substrates. After harvest, spent substrate is composted for local gardens, closing the loop on nutrients.',
    contact: {
      website: 'https://cedargrovemush.local',
      email: 'hello@cedargrovemush.local',
      phone: '+1-206-555-0191',
    },
    heroImage:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 90,
    story: 'Urban mushroom farm with premium culinary varietals.',
  },
  {
    id: 'farm-sierra-springs',
    name: 'Sierra Springs Berries',
    location: { city: 'Truckee', state: 'CA', country: 'USA' },
    coordinates: { lat: 39.3279, lng: -120.1833 },
    certifications: ['USDA Organic'],
    practices: ['drip irrigated', 'pollinator strips'],
    specialties: ['strawberries', 'blueberries', 'raspberries'],
    rating: 4.7,
    ratingCount: 119,
    longDescription:
      'Sierra Springs tends high-elevation berry fields with drip lines and pollinator strips between rows. Cool nights concentrate sugars; berries are packed on-farm and cooled within an hour of picking.',
    contact: {
      website: 'https://sierraspringsberries.local',
      email: 'hi@sierraspringsberries.local',
      phone: '+1-530-555-0150',
    },
    heroImage:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 180,
    story: 'High-elevation berries with cool nights for concentrated sweetness.',
  },
  {
    id: 'farm-urban-harvest',
    name: 'Urban Harvest Rooftop',
    location: { city: 'Chicago', state: 'IL', country: 'USA' },
    coordinates: { lat: 41.8781, lng: -87.6298 },
    certifications: ['Non-GMO'],
    practices: ['rooftop beds', 'rainwater capture', 'compost tea'],
    specialties: ['herbs', 'salad mixes', 'edible flowers'],
    rating: 4.4,
    ratingCount: 73,
    longDescription:
      'Urban Harvest turns rooftops into micro-farms with raised beds, compost tea, and rainwater capture. Herbs and salad mixes move from roof to packing table in under an hour for peak aroma.',
    contact: {
      website: 'https://urbanharvest.local',
      email: 'team@urbanharvest.local',
      phone: '+1-312-555-0112',
    },
    heroImage:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    ],
    deliveryRadiusKm: 40,
    story: 'Rooftop-grown greens for ultra-short supply chains in the city.',
  },
];
