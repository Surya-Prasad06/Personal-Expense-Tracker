# Expense Tracker — Short Documentation

This document provides a concise developer-facing guide: how to run the app and mock API, key features, assumptions, high-level design notes, the main data shape, and sample inputs/outputs.

## How to run

Prerequisites:
- Node.js (v16+ recommended)
- npm (comes with Node.js)

Install dependencies from the project root:

```powershell
npm install
```

Start the Vite development server (front-end):

```powershell
npm run dev
```

Start the mock JSON API (separate terminal). Uses `db.json` at the project root:

```powershell
npx json-server --watch db.json --port 5000
```

Optional: add an npm script `mock:server` to `package.json` for convenience:

```json
"mock:server": "json-server --watch db.json --port 5000"
```

Then run:

```powershell
npm run mock:server
```

Common ports used in this project:
- Vite dev server: 5173 (default)
- json-server mock API: 5000 (example)

When running locally, open the URL Vite prints (e.g., `http://localhost:5173`). The React app should make API calls to `http://localhost:5000` (adjust ports if you change them).

## Features

- Add, view, update, and delete expense items via a simple UI
- React + Vite single-page app
- Mock REST API powered by `json-server` (using `db.json`)
- Uses `axios` for HTTP requests (already in `package.json`)
- Small component structure under `src/Components/Pages/` for pages like Home, Addexpenses, ViewExpenses, Updateexpense, Navbar

## Assumptions

- The mock API resource for expenses is named `expenses` in `db.json`.
- Each expense record has a single numeric `id` (used by json-server); json-server auto-increments `id` on POST if missing.
- The app expects API endpoints at `http://localhost:5000` by default — update axios base URL if you change the port.
- No authentication is required for the mock API.
- The app is a single-user local demo (no multi-user concurrency or real persistence beyond `db.json`).

## Data shape (expense object)

Example expense object the front-end expects and the mock API should store:

```json
{
  "id": 1,
  "title": "Groceries",
  "amount": 45.99,
  "category": "Food",
  "date": "2025-10-05",
  "notes": "Weekly grocery shopping"
}
```

Field notes:
- `id` (number): unique identifier assigned by json-server
- `title` (string): short description
- `amount` (number): expense amount (float)
- `category` (string): category label
- `date` (string, ISO YYYY-MM-DD): date of expense
- `notes` (string, optional): additional details

## Sample API usage (requests + expected responses)

Base URL (example): `http://localhost:5000`

- List all expenses
  - Request: `GET /expenses`
  - Response: 200 OK, JSON array of expense objects

- Get one expense
  - Request: `GET /expenses/1`
  - Response: 200 OK, single expense object

- Create expense
  - Request: `POST /expenses` with JSON body (omit `id` or set it to null)
  - Response: 201 Created, created object (with `id` assigned)

- Update expense (replace)
  - Request: `PUT /expenses/1` with full object
  - Response: 200 OK, updated object

- Patch expense (partial update)
  - Request: `PATCH /expenses/1` with partial JSON
  - Response: 200 OK, patched object

- Delete expense
  - Request: `DELETE /expenses/1`
  - Response: 200 OK (json-server returns `{}`)

## Design notes

- Front-end: React components mounted from `src/main.jsx` and routed (if using `react-router-dom`) across pages in `src/Components/Pages/`.
- API: `json-server` provides quick REST endpoints using `db.json`. It's ideal for prototyping and local development.
- HTTP library: `axios` provides promise-based requests; set a single base URL in a small API helper or configure per-request.

Recommendations:
- Create a small `src/api.js` (or similar) to centralize `axios` base URL and error handling.
- Add an npm script `mock:server` to `package.json` to simplify starting the mock API.
- Consider adding a `.env` file or `import.meta.env` usage to configure API base URL for different environments.

## Edge cases and error handling

- Empty list (GET /expenses returns `[]`) — UI should show an empty-state message.
- Network errors — show a friendly error and optionally a retry.
- Validation — front-end should validate required fields (e.g., `title`, `amount`, `date`) before POST/PUT.

## Quick troubleshooting

- If the front-end shows no data, ensure `json-server` is running and that the front-end is calling the correct port.
- If `json-server` doesn't auto-reload `db.json` changes, restart it.
- If `npx json-server` errors, install locally (`npm install json-server`) or globally (`npm i -g json-server`).

## Where to look in the code

- `src/Components/Pages/` — page components (Home, Addexpenses, ViewExpenses, Updateexpense, Navbar)
- `db.json` — mock DB used by json-server
- `package.json` — scripts and dependencies

---

If you want, I can also:
- Add a `DOCS.md` entry to `package.json` or the `README.md` as a pointer.
- Add a small `src/api.js` wrapper for `axios` and a `mock:server` npm script.

Tell me which of these you'd like me to add next.