# Frontend Stage
FROM node:18 AS frontend

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend .

RUN npm run build

# Backend Stage
FROM node:18

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY backend .

RUN npm run build

COPY --from=frontend /app/build dist/public

CMD [ "node", "dist/index.js" ]