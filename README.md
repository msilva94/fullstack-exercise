# Run the project

## Development
1. Install the dependencies by running `npm install` in the `frontend` and `backend` directories.
2. Run the backend: `cd backend && npm start`.
3. Run the frontend: `cd frontend && npm start`.

The application will be served here: http://localhost:3000/.

## Build

### Using local npm
1. Build the frontend: `cd frontend && npm run build && cd ..`
2. Build the backend: `cd backend && npm run build`
3. Copy the frontend build to the backend build directory: `cp -r ../frontend/build dist/public`
4. Run the server: `node dist/index.js`

### Using Docker
`docker compose up --build -d`

The application will be served here: http://localhost:8000/.