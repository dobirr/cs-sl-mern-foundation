# Healthy Delights (MERN Foundation)

Healthy Delights is a frontend-first online farm marketplace built with a Vite vanilla client and a lightweight Express API.

Current scope:
- User registration and login (demo auth via localStorage)
- Product listing from API
- Product cards with ratings and farmer links
- Farmer detail pages ("virtual farm")
- Cart with quantity controls, totals, and mock checkout flow
- Checkout access guard (login required before purchase)

## Tech Stack
- Client: Vite, Vanilla JavaScript, SCSS, Bootstrap
- Server: Node.js + Express
- Data: In-memory seed data (`server/src/data/*.js`)
- Monorepo tooling: `pnpm` workspaces

## Project Structure
```text
client/   # Vite frontend (vanilla JS, SCSS, Bootstrap)
server/   # Express API + seed script
```

## Getting Started
From project root:

1. Install dependencies
```bash
pnpm install -r
```

2. Start client + server
```bash
pnpm dev
```

Default ports:
- Client: `http://localhost:5173`
- Server: `http://localhost:4000`

## Root Scripts
From project root:

- `pnpm dev` – run client and server in parallel
- `pnpm dev:client` – run only client
- `pnpm dev:server` – run only server
- `pnpm build` – build client (server is runtime JS)
- `pnpm seed` – run server seed script
- `pnpm format-and-lint` – format and lint current workspace code

## API Endpoints
Base URL (dev via Vite proxy): `/api`

- `GET /health`
- `GET /api/product` (optional query: `farmerId`, `category`, `diet`, `tag`)
- `GET /api/product/:id`
- `GET /api/farmers`
- `GET /api/farmers/:id`
- `GET /api/farmers/:id/products`

## Seed Data
- Farmers: `server/src/data/farmers.js` (2 demo farms)
- Products: `server/src/data/products.js` (20 farm-shop products)
- Seed output: `server/src/seed-output.json`

Run seeding:
```bash
pnpm seed
```

## Frontend Routes
Client-side routes currently implemented:

- `/` – landing
- `/products` – product listing
- `/farmers/:id` – farmer profile + farm products
- `/cart` – cart + order summary + mock payment + order confirmation
- `/login` – login
- `/register` – register

## Cart & Checkout Flow
- Add to cart from product and farmer pages
- Increase/decrease/remove items
- Subtotal + shipping + tax + total
- Mock payment step and order confirmation with generated order ID
- Cart is cleared after successful mock payment

### Checkout Auth Guard
Users must be logged in to proceed with checkout:
- If not logged in, user is redirected to `/login?redirect=/cart?step=payment`
- After login/register, user is redirected back to cart payment step

## Notes
- Auth is currently demo/local (no JWT/session backend yet).
- Payment is intentionally mocked for project completion scope.
- Product filters exist on API level; UI filter controls can be expanded further.
