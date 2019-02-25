FROM node:10.15.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

ENV CLIENT_ID=''
ENV CLIENT_SECRET=''

EXPOSE 8888
CMD [ "node", "app.js" ]
