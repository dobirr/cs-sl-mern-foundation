import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { products } from './data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, 'seed-output.json');

fs.writeFileSync(
  targetPath,
  JSON.stringify({ products, seededAt: new Date().toISOString() }, null, 2)
);

console.log(`Seeded ${products.length} products to ${targetPath}`);
