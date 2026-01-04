import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products } from './data/products.js';
import { farmers } from './data/farmers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, 'seed-output.json');

fs.writeFileSync(
  targetPath,
  JSON.stringify({ farmers, products, seededAt: new Date().toISOString() }, null, 2)
);

console.log(`Seeded ${farmers.length} farmers and ${products.length} products to ${targetPath}`);
