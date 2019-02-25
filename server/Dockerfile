FROM node:10.15.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ENV CLIENT_ID='eb92af567b0d41fe81de25c2d10e4d53'
ENV CLIENT_SECRET='c24d9d68fda548af875fa4b3b385fe0a'

EXPOSE 8888
CMD [ "node", "app.js" ]