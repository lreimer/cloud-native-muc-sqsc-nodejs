FROM node:8

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production

COPY server.js .

EXPOSE 8080
CMD [ "npm", "start" ]