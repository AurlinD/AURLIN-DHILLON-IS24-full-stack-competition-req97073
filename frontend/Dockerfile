# Pull the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy app dependencies to container
COPY ./package*.json ./

# sets working directory for all conesecituve commands
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# command executable
CMD npm start --host 0.0.0.0 --port 3008 --disableHostCheck true