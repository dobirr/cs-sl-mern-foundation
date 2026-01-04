import express from 'express';
import { products } from './data/products.js';
import { farmers } from './data/farmers.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// GET /product (optional filters: farmerId, category, diet, tag)
app.get('/api/product', (req, res) => {
  const { farmerId, category, diet, tag } = req.query;
  let filtered = products;

  if (farmerId) {
    filtered = filtered.filter((p) => p.farmerId === farmerId);
  }
  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (diet) {
    filtered = filtered.filter((p) => p.diet?.includes(diet));
  }
  if (tag) {
    filtered = filtered.filter((p) => p.tags?.includes(tag));
  }

  res.json({ count: filtered.length, products: filtered });
});

// GET /product/:id
app.get('/api/product/:id', (req, res) => {
  const item = products.find((p) => p.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(item);
});

// GET /farmers
app.get('/api/farmers', (_req, res) => {
  res.json({ count: farmers.length, farmers });
});

// GET /farmers/:id
app.get('/api/farmers/:id', (req, res) => {
  const farmer = farmers.find((f) => f.id === req.params.id);
  if (!farmer) {
    return res.status(404).json({ error: 'Farmer not found' });
  }
  res.json(farmer);
});

// GET /farmers/:id/products
app.get('/api/farmers/:id/products', (req, res) => {
  const farmer = farmers.find((f) => f.id === req.params.id);
  if (!farmer) {
    return res.status(404).json({ error: 'Farmer not found' });
  }
  const farmerProducts = products.filter((p) => p.farmerId === farmer.id);
  res.json({ count: farmerProducts.length, farmer, products: farmerProducts });
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
