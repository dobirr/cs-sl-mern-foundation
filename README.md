# cs-sl-mern-foundation

## Running from the project root
1) Install all workspaces (root + client; server will be picked up once it has its own `package.json`):
```bash
pnpm install -r
```
2) Start both dev targets in parallel:
```bash
pnpm dev
```
- Client runs via Vite on port 5173.
- Server currently has no entry; add a `package.json` + `dev`/`start` script inside `server/` to enable it.

### Key scripts (root `package.json`)
- `pnpm dev` – run client and server dev tasks in parallel.
- `pnpm dev:client` – run only the client dev server.
- `pnpm dev:server` – run only the server (once scripts exist in `server/`).
- `pnpm build` – build client then server.
- `pnpm start` – start the built server (after `pnpm build`).
- `pnpm run install:all` – install only the workspace packages (`client`, `server`).

### Structure
- `client/` – Vite frontend (currently a vanilla placeholder).
- `server/` – space for Express/API (empty for now).
- `pnpm-workspace.yaml` – defines the `client` and `server` workspaces.

### Note
Once you add a `package.json` with `dev`/`start` scripts inside `server/`, the root scripts will automatically run them.
