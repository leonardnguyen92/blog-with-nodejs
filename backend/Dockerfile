# Use Node.js LTS version as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
# (This allows Docker to cache installed dependencies if package.json hasn't changed)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]