FROM node:8.11-alpine

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production

COPY server.js .

EXPOSE 8080

ENTRYPOINT [ "npm" ] 
CMD [ "start" ]