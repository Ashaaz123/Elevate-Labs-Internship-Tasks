# Use official lightweight Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Expose application port
EXPOSE 3000

# Start command
CMD ["npm", "start"]