FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

ENV CLIENT_APP_USER 'admin'
ENV CLIENT_APP_PASSWORD 'password'
ENV CLIENT_APP_SCHEMA 'http'
ENV CLIENT_APP_HOST 'localhost'
ENV CLIENT_APP_PORT '8080'
ENV CLIENT_APP_ACTUATOR_BASE_PATH ''

ENV SERVICE_PORT 3000

EXPOSE $SERVICE_PORT

CMD [ "npm", "start" ]
