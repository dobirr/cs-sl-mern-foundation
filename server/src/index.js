import express from 'express';
import { products } from './data/products.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// GET /product
app.get('/product', (_req, res) => {
  res.json({ count: products.length, products });
});

// GET /product/:id
app.get('/product/:id', (req, res) => {
  const item = products.find((p) => p.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(item);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
