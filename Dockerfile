# Use an official Node.js image as the base image
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend files
COPY api ./api

# Copy the client package.json and install client dependencies
COPY client/package*.json ./client/
RUN npm install --prefix client

# Build the client
COPY client ./client
RUN npm run build --prefix client

# Use a separate Node.js image for the production build
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the backend files and node_modules from the previous build stage
COPY --from=build /app/api ./api
COPY --from=build /app/node_modules ./node_modules

# Copy the built client files
COPY --from=build /app/client/build ./client/build

# Expose the port your app runs on
EXPOSE 3000

# Command to run the backend server
CMD ["npm", "start"]
