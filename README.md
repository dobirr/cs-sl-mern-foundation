# Healthy Delights (MERN Foundation)

Healthy Delights is a frontend-first farm marketplace built with a Vite vanilla client and an Express API.

## Features
- Registration and login (demo auth with `localStorage`)
- Product listing from API
- Global search from navbar (`/products?q=...`)
- Search matches products and categories (title, subtitle, category, tags)
- Farmer profile page (virtual farm) with farmer-specific offers
- Cart flow with quantity updates and total calculation
- Mock payment step with order confirmation and generated order ID
- Checkout guard: login required before purchase

## Tech Stack
- Client: Vite, Vanilla JavaScript, SCSS, Bootstrap
- Server: Node.js, Express
- Data: in-memory seed files (`server/src/data/*.js`)
- Workspace tooling: pnpm workspaces

## Project Structure
```text
client/   # Vite frontend
server/   # Express API + seed script
```

## Getting Started
From project root:

1. Install dependencies for all workspaces
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
- `pnpm dev` - run client and server in parallel
- `pnpm dev:client` - run only client
- `pnpm dev:server` - run only server
- `pnpm build` - build client (server has no compile step)
- `pnpm seed` - run server seed script
- `pnpm format-and-lint` - run formatting and linting

## API Endpoints
Base path: `/api`

- `GET /health`
- `GET /api/product`
  Optional query params: `farmerId`, `category`, `diet`, `tag`
- `GET /api/product/:id`
- `GET /api/farmers`
- `GET /api/farmers/:id`
- `GET /api/farmers/:id/products`

## Frontend Demo (Primary Scope)
This project is frontend-focused. The API is intentionally rudimentary and used only to load demo data for UI flows.

Recommended FE demo flow:
- Open landing page (`/`)
- Navigate to products (`/products`)
- Use global search (e.g. product terms and category terms like `dairy` or `fruits`)
- Open a farmer profile via product card farmer link (`/farmers/:id`)
- Add items to cart from products/farmer offers
- Open cart (`/cart`) and change quantities
- Proceed to checkout (redirects to login if not authenticated)
- Complete mock payment and view order confirmation

Search demo inputs (for presentation):
- Categories: `dairy`, `fruits`
- Products: `whole milk`, `strawberries`

## Seed Data
- Farmers: `server/src/data/farmers.js` (2 demo farms)
- Products: `server/src/data/products.js` (20 farm-shop products)
- Seed output file: `server/src/seed-output.json`

Run seed:
```bash
pnpm seed
```

## Frontend Routes
- `/` - landing
- `/products` - product listing and search results
- `/farmers/:id` - farmer profile and farm offers
- `/cart` - cart, payment step, order confirmation
- `/login` - login
- `/register` - register

## Checkout Behavior
- Users can add products to cart from product/farmer pages.
- Users must be logged in to continue checkout.
- If not logged in, app redirects to:
  - `/login?redirect=/cart?step=payment`
- After login/register, app returns to the cart payment step.

## Notes
- Auth is demo/local (no backend JWT/session yet).
- API is intentionally minimal and serves frontend data needs only.
- Payment is intentionally mocked for project completion scope.
