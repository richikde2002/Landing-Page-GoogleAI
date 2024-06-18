# Stage 1: Build the client
FROM node:16 as build-client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Set up the api and root dependencies
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
COPY api/package*.json ./api/
RUN npm install
COPY api/ ./api/
COPY --from=build-client /app/client/dist ./client/dist

EXPOSE 5000
CMD ["npm", "start"]