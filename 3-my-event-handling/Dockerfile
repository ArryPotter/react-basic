FROM node:18-alpine AS production

WORKDIR /app

COPY package*.json ./
COPY vite.config.js ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist"]
