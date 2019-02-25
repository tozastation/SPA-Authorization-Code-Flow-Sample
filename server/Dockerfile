FROM node:10.15.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

ENV CLIENT_ID='' # Spotify Client ID
ENV CLIENT_SECRET='' # Spotify Client Secret

EXPOSE 8888
CMD [ "node", "app.js" ]
