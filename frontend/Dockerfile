FROM node:20-alpine

WORKDIR /app

# Install @expo/ngrok globally for tunnel support
RUN npm install -g @expo/ngrok expo-cli

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose ports
EXPOSE 8081 19000 19001 19002 19006

# Default command (can be overridden in docker-compose.yml)
CMD ["npx", "expo", "start", "--tunnel"]
