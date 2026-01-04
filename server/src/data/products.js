// To keep the dataset scalable and maintainable we generate variants from a set of templates.
// Each product still contains full descriptive fields for the frontend (ingredients, nutrition, etc.).

const seasons = ['spring', 'summer', 'fall', 'winter', 'evergreen'];
const deliveryPatterns = [
  ['Mon', 'Wed', 'Fri'],
  ['Tue', 'Thu', 'Sat'],
  ['Daily'],
  ['Mon', 'Thu'],
  ['Weekend'],
];

const baseTemplates = [
  {
    slug: 'heirloom-burrata-salad',
    title: 'Heirloom Tomato & Burrata Salad',
    subtitle: 'Sun-sweet tomatoes, basil, pasture burrata',
    description:
      'Hand-picked heirloom tomatoes with basil, cold-pressed olive oil, and burrata from pasture-raised dairy. Finished with smoked sea salt.',
    category: 'salads',
    unit: 'bowl',
    price: 12.0,
    tags: ['seasonal', 'vegetarian', 'cold'],
    diet: ['vegetarian'],
    allergens: ['dairy'],
    ingredients: ['heirloom tomato', 'fresh basil', 'burrata', 'olive oil', 'sea salt'],
    nutrition: { calories: 410, protein: 18, fats: 28, carbs: 26, fiber: 5, sugar: 12 },
    storage: 'Keep chilled; best within 24h.',
    packaging: 'Compostable bowl & lid',
    longDescription:
      'Heirloom tomatoes harvested at peak ripeness, paired with aromatic basil and creamy burrata from pasture-raised dairy. Finished with fruity olive oil and smoked sea salt for a bright, cooling salad that celebrates short supply chains.',
    image:
      'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'yogurt-parfait',
    title: 'Pasture Yogurt Parfait',
    subtitle: 'Grass-fed yogurt, compote, seed granola',
    description:
      'Low-temp pasture yogurt layered with seasonal fruit compote and seeded granola baked with maple syrup.',
    category: 'breakfast',
    unit: 'jar',
    price: 7.5,
    tags: ['breakfast', 'high-protein'],
    diet: ['vegetarian'],
    allergens: ['dairy', 'oats', 'nuts'],
    ingredients: [
      'grass-fed yogurt',
      'fruit compote',
      'maple syrup',
      'rolled oats',
      'pumpkin seeds',
    ],
    nutrition: { calories: 380, protein: 20, fats: 12, carbs: 48, fiber: 6, sugar: 18 },
    storage: 'Keep refrigerated; enjoy within 3 days.',
    packaging: 'Reusable glass jar',
    longDescription:
      'Layered, low-temp pasture yogurt with cinnamon-kissed compote and maple-baked seed granola. High in protein, balanced in carbs, and built for slow-release energy through the morning.',
    image:
      'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'salmon-farro-bowl',
    title: 'Wild Salmon & Farro Bowl',
    subtitle: 'Charred broccoli, lemon tahini, farro',
    description:
      'MSC wild salmon seared and served over warm farro with charred broccoli, pickled onions, and lemon-tahini drizzle.',
    category: 'mains',
    unit: 'bowl',
    price: 15.0,
    tags: ['omega-3', 'high-protein'],
    diet: ['pescatarian'],
    allergens: ['fish', 'gluten', 'sesame'],
    ingredients: ['wild salmon', 'farro', 'broccoli', 'tahini', 'lemon', 'pickled onion'],
    nutrition: { calories: 540, protein: 36, fats: 22, carbs: 48, fiber: 7, sugar: 6 },
    storage: 'Keep chilled, reheat gently; best within 2 days.',
    packaging: 'Compostable bowl & sauce cup',
    longDescription:
      'Wild-caught salmon, quickly seared to keep omega oils intact, served with nutty farro, charred broccoli, and lemon-tahini. A complete macro bowl with deep umami and citrus lift.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'kale-quinoa-power',
    title: 'Regenerative Kale & Quinoa Power Bowl',
    subtitle: 'Crisp kale, roasted chickpeas, citrus',
    description:
      'Soil-friendly kale with lemon, fluffy quinoa, roasted chickpeas, shaved fennel, and citrus-herb vinaigrette.',
    category: 'bowls',
    unit: 'bowl',
    price: 11.0,
    tags: ['vegan', 'high-fiber'],
    diet: ['vegan', 'gluten-free'],
    allergens: [],
    ingredients: ['kale', 'quinoa', 'chickpeas', 'fennel', 'lemon', 'herb oil'],
    nutrition: { calories: 480, protein: 20, fats: 16, carbs: 60, fiber: 11, sugar: 7 },
    storage: 'Keep chilled; dressing separate for crunch.',
    packaging: 'Compostable bowl',
    longDescription:
      'Regeneratively grown kale, fluffy quinoa, and roasted chickpeas meet citrus-herb vinaigrette. High fiber, plant protein, and plenty of crunch—ideal as a sustaining desk lunch.',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'citrus-date-bites',
    title: 'Citrus Date Energy Bites',
    subtitle: 'Medjool dates, orange zest, almond',
    description:
      'No-bake bites with organic Medjool dates, toasted almonds, orange zest, and a pinch of sea salt.',
    category: 'snacks',
    unit: '4-pack',
    price: 5.0,
    tags: ['snack', 'no-added-sugar'],
    diet: ['vegan', 'gluten-free'],
    allergens: ['nuts'],
    ingredients: ['medjool dates', 'almonds', 'orange zest', 'sea salt'],
    nutrition: { calories: 220, protein: 6, fats: 10, carbs: 28, fiber: 5, sugar: 18 },
    storage: 'Keep chilled for best texture; 7 days.',
    packaging: 'Compostable clamshell',
    longDescription:
      'Sun-dried Medjool dates, toasted almonds, and real orange zest pressed into no-bake bites. Naturally sweet, travel-friendly, and free from added sugars.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'overnight-oats',
    title: 'Apple Buckwheat Overnight Oats',
    subtitle: 'Honeycrisp, buckwheat, chia crunch',
    description:
      'Creamy overnight oats with buckwheat groats, honeycrisp apple, chia crunch, and maple yogurt topping.',
    category: 'breakfast',
    unit: 'jar',
    price: 6.5,
    tags: ['meal-prep', 'fiber-rich'],
    diet: ['vegetarian'],
    allergens: ['dairy', 'oats'],
    ingredients: ['rolled oats', 'buckwheat', 'apple', 'chia seeds', 'maple yogurt'],
    nutrition: { calories: 420, protein: 14, fats: 12, carbs: 62, fiber: 8, sugar: 16 },
    storage: 'Keep refrigerated; 3 days.',
    packaging: 'Reusable glass jar',
    longDescription:
      'Overnight oats boosted with buckwheat crunch, honeycrisp apple, and maple yogurt. Balanced carbs and fiber for steady morning energy, with a touch of warming spice.',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'egg-veg-wrap',
    title: 'Pasture Egg Veggie Wrap',
    subtitle: 'Soft eggs, spinach, tomato relish',
    description:
      'Pasture-raised soft-scramble with spinach, roasted peppers, and tomato relish in a wholegrain wrap.',
    category: 'mains',
    unit: 'wrap',
    price: 8.5,
    tags: ['breakfast', 'grab-and-go'],
    diet: ['vegetarian'],
    allergens: ['egg', 'gluten', 'dairy'],
    ingredients: ['pasture eggs', 'spinach', 'tomato relish', 'wholegrain wrap', 'feta'],
    nutrition: { calories: 430, protein: 22, fats: 18, carbs: 42, fiber: 6, sugar: 6 },
    storage: 'Keep chilled; reheat lightly in pan.',
    packaging: 'Compostable wrap sleeve',
    longDescription:
      'Pasture-raised soft-scramble wrapped with spinach, roasted peppers, and tomato relish in whole grains. A hand-held breakfast that stays tender when gently reheated.',
    image:
      'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'smoked-trout-box',
    title: 'Smoked Trout Protein Box',
    subtitle: 'Hot-smoked trout, pickles, seed crackers',
    description:
      'Co-op smoked rainbow trout with pickled cucumber, radish, herb labneh, and house seed crackers.',
    category: 'snacks',
    unit: 'box',
    price: 13.0,
    tags: ['high-protein', 'omega-3'],
    diet: ['pescatarian'],
    allergens: ['fish', 'dairy', 'sesame'],
    ingredients: ['smoked trout', 'labneh', 'cucumber', 'radish', 'seed crackers'],
    nutrition: { calories: 420, protein: 32, fats: 22, carbs: 20, fiber: 4, sugar: 5 },
    storage: 'Keep refrigerated; consume within 2 days.',
    packaging: 'Compostable box',
    longDescription:
      'Hot-smoked rainbow trout from a traceable co-op, paired with pickled cucumber, radish, and herb labneh. Protein-dense, omega-rich, and ready to eat.',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'turmeric-cauliflower-soup',
    title: 'Golden Turmeric Cauliflower Soup',
    subtitle: 'Roasted cauliflower, turmeric, coconut',
    description:
      'Silky roasted cauliflower blended with turmeric, ginger, and coconut milk; topped with spiced pumpkin seeds.',
    category: 'soups',
    unit: '16 oz',
    price: 9.0,
    tags: ['warm', 'anti-inflammatory'],
    diet: ['vegan', 'gluten-free'],
    allergens: [],
    ingredients: ['cauliflower', 'turmeric', 'ginger', 'coconut milk', 'pumpkin seeds'],
    nutrition: { calories: 320, protein: 10, fats: 20, carbs: 28, fiber: 7, sugar: 8 },
    storage: 'Keep chilled; reheat gently. 3 days.',
    packaging: 'Compostable soup cup',
    longDescription:
      'Roasted cauliflower blended silky with coconut, turmeric, and ginger, topped with spiced pepitas. Anti-inflammatory comfort that reheats beautifully.',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'cold-brew-oat-latte',
    title: 'Cold Brew Oat Latte',
    subtitle: 'Single-origin coffee, oat milk, vanilla',
    description:
      'Slow-steeped cold brew blended with barista oat milk and a hint of vanilla; lightly sweetened with date syrup.',
    category: 'drinks',
    unit: '12 oz',
    price: 5.0,
    tags: ['caffeine', 'dairy-free'],
    diet: ['vegan'],
    allergens: ['oats'],
    ingredients: ['cold brew', 'oat milk', 'vanilla', 'date syrup'],
    nutrition: { calories: 150, protein: 3, fats: 5, carbs: 24, fiber: 2, sugar: 10 },
    storage: 'Keep chilled; shake gently before drinking.',
    packaging: 'Recyclable bottle',
    longDescription:
      'Slow-steeped cold brew blended with creamy oat milk, vanilla, and a hint of date sweetness. Smooth caffeine with balanced carbs and no dairy.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'berry-chia-pot',
    title: 'Seasonal Berry Chia Pot',
    subtitle: 'Blueberries, blackberries, chia, mint',
    description:
      'Chia soaked in coconut milk layered with seasonal berries and mint. No refined sugar.',
    category: 'desserts',
    unit: 'jar',
    price: 6.0,
    tags: ['vegan', 'omega-3'],
    diet: ['vegan', 'gluten-free'],
    allergens: [],
    ingredients: ['chia seeds', 'coconut milk', 'blueberries', 'blackberries', 'mint'],
    nutrition: { calories: 320, protein: 8, fats: 16, carbs: 34, fiber: 9, sugar: 12 },
    storage: 'Keep refrigerated; 3 days.',
    packaging: 'Reusable glass jar',
    longDescription:
      'Coconut chia pudding layered with mountain berries and fresh mint. Naturally sweet, rich in omega-3, and perfect as breakfast or a light dessert.',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1600&q=80',
  },
];

const farmerIds = [
  'farm-spring-creek',
  'farm-meadow-brook',
  'farm-redwood-coast',
  'farm-desert-bloom',
  'farm-blue-ridge',
  'farm-riverbend',
  'farm-gold-pastures',
  'farm-sunrise-mill',
  'farm-lakeview-honey',
  'farm-coastal-greens',
  'farm-northern-roots',
  'farm-harbor-mist',
  'farm-cedar-grove',
  'farm-sierra-springs',
  'farm-urban-harvest',
];

function pickDelivery(index) {
  return deliveryPatterns[index % deliveryPatterns.length];
}

function varyPrice(base, seasonIndex) {
  const delta = (seasonIndex % 3) * 0.25; // small variation
  return Math.round((base + delta) * 100) / 100;
}

function varyRating(base, idx) {
  const bump = (idx % 4) * 0.05;
  return Math.min(4.95, Math.max(4.2, Math.round((base + bump) * 100) / 100));
}

function cloneProduct(template, farmerId, season, idx) {
  const id = `${template.slug}-${season}-${idx}`;
  const rating = varyRating(template.rating || 4.6, idx);
  const ratingCount = 70 + ((idx * 11) % 240);
  const price = varyPrice(template.price, idx);
  return {
    id,
    farmerId,
    title: `${template.title} (${season})`,
    subtitle: template.subtitle,
    description: template.description,
    image: template.image,
    price,
    unit: template.unit,
    available: true,
    category: template.category,
    tags: [...template.tags, season],
    diet: template.diet,
    allergens: template.allergens,
    rating,
    ratingCount,
    ingredients: template.ingredients,
    nutrition: template.nutrition,
    storage: template.storage,
    packaging: template.packaging,
    deliveryDays: pickDelivery(idx),
    season,
    longDescription: template.longDescription,
  };
}

const products = [];

baseTemplates.forEach((tpl, tIndex) => {
  seasons.forEach((season, sIndex) => {
    const farmerId = farmerIds[(tIndex + sIndex) % farmerIds.length];
    const idx = tIndex * seasons.length + sIndex;
    products.push(cloneProduct(tpl, farmerId, season, idx + 1));
  });
});

// Ensure at least 50 items; current: baseTemplates(10) * seasons(5) = 50

export { products };
