# Expense Tracker

A small React + Vite expense tracker application with a mock JSON API using `json-server`.

This README explains how to install dependencies and run the development server and the mock JSON server on Windows (PowerShell). It also summarizes the project structure and helpful notes.

## Prerequisites

- Node.js (v16+ recommended)
- npm (bundled with Node.js) or an equivalent (yarn, pnpm)

You can check your Node and npm versions with:

```powershell
node -v
npm -v
```

## Install

From the project root (where `package.json` is located) run:

```powershell
npm install
```

This will install the dependencies listed in `package.json`, including `vite`, `react`, `axios`, and `json-server`.

## Run the app (Vite dev server)

Start the development server with:

```powershell
npm run dev
```

Vite will start the dev server and show a local URL (usually `http://localhost:5173`). Open that URL in your browser to view the app.

## Mock API with json-server

This project includes `json-server` as a dev dependency. A simple mock API is served from `db.json` at the project root.

To start the mock JSON server, open a separate terminal (PowerShell) and run:

```powershell
npx json-server --watch db.json --port 5000
```

This will serve the contents of `db.json` on `http://localhost:5000` with REST endpoints such as `/expenses` (depending on the data shape in `db.json`).

Notes:
- Using `npx` runs the locally installed `json-server` from `node_modules` without needing a global install.
- If you'd like to run the mock server on a different port, change `--port 5000` to your preferred port.

Optional: add an npm script for convenience. In `package.json` you can add:

```json
"scripts": {
	"dev": "vite",
	"mock:server": "json-server --watch db.json --port 5000"
}
```

Then start it with:

```powershell
npm run mock:server
```

## API endpoints (example)

If `db.json` contains an `expenses` array, typical endpoints will be:

- GET /expenses — list of all expenses
- POST /expenses — create an expense
- PUT /expenses/:id — update an expense
- DELETE /expenses/:id — remove an expense

Use `axios` or `fetch` in the React app to call these endpoints. The app already includes `axios` as a dependency.

## Project structure (key files)

- `index.html` — Vite entry
- `src/main.jsx` — React entry
- `src/App.jsx` — main application component
- `src/Components/Pages/` — app pages (Home, Addexpenses, ViewExpenses, Updateexpense, Navbar)
- `db.json` — mock JSON database used by `json-server`

## Development tips

- Run the Vite dev server and `json-server` concurrently in separate terminals.
- If ports conflict, change the ports (Vite defaults to 5173, json-server in examples above uses 3001).
- When changing `db.json` while `json-server` is running, the server will automatically pick up changes.

## Build for production

To build the app for production:

```powershell
npm run build
```

Serve the built output locally to inspect it with:

```powershell
npm run preview
```

## Troubleshooting

- If `npx json-server` fails, ensure `json-server` is installed locally (check `node_modules/.bin/json-server`) or install globally: `npm i -g json-server`.
- If the React app can't reach the mock API, verify both servers are running and that the front-end calls the correct port (e.g., `http://localhost:5000/expenses`).

## Contributing

Contributions are welcome. Open issues or pull requests for bug fixes or enhancements.

## License

This project doesn't specify a license. Add a `LICENSE` file if you want to make the license explicit.

---

If you'd like, I can also add a `mock:server` script to `package.json` and a short example of how to call the API from `src` with `axios`.

