# Base image for Node.js (Raspberry Pi compatible)
FROM node:lts

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Install TypeScript globally (if needed)
RUN npm install -g typescript

# Copy the rest of the application files
COPY . .

# Build the TypeScript code (replace with your actual build command)
RUN npm run build

# Expose the port your bot listens on (if applicable)
EXPOSE 3000

# Start the bot
CMD ["npm", "run", "start"]
