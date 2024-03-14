FROM node:21.7.1

WORKDIR /usr/src/app

COPY ./app/package*.json ./

RUN npm install

COPY ./app .

# Make sure your bot starter script is app.js or you can change it here
CMD ["node", "app.js"]