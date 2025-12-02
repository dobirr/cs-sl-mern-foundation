# cs-sl-mern-foundation

## Running from the project root
1) Install all workspaces (root + client + server):
```bash
pnpm install -r
```
2) Start both dev targets in parallel:
```bash
pnpm dev
```
- Client (Vite, vanilla) on port 5173.
- Server (Express) on port 4000, health at `/health`.

### Key scripts (root `package.json`)
- `pnpm dev` – run client and server dev tasks in parallel.
- `pnpm dev:client` – only the client dev server.
- `pnpm dev:server` – only the server.
- `pnpm build` – build client then server.
- `pnpm start` – start the built server (after `pnpm build`).
- `pnpm run install:all` – install only the workspaces.
- `pnpm format-and-lint` – run Prettier, then ESLint (skips server glob if `server/src` missing).

### Seeding products (server)
- Seed data lives in `server/src/data/products.js` (20 healthy products with filters, images, nutrition, tags).
- Write seed output: `pnpm --filter ./server seed` (generates `server/src/seed-output.json`).
- API uses the same in-memory data; no DB required yet.

### API routes (server/src/index.js)
- `GET /health` – basic status.
- `GET /produkt` and `GET /product` – full product list + count.
- `GET /product/:id` – single product by id.

### Structure
- `client/` – Vite frontend (vanilla placeholder, SPA-ready).
- `server/` – Express API + seed script.
- `pnpm-workspace.yaml` – defines the `client` and `server` workspaces.

### Notes
- ESLint is configured with browser globals; Prettier config is in `.prettierrc.json`.
- Add DB wiring later; the seed script currently writes JSON only.
