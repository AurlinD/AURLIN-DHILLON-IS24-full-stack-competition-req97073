# Pull the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy app dependencies to container
COPY . .

# sets working directory for all conesecituve commands
ENV NODE_ENV=development

# Install dependencies
RUN npm install

EXPOSE 3000

# command executable
CMD ["npm", "run", "devStart"]