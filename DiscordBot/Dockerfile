FROM node:20.9.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Make sure your bot starter script is app.js or you can change it here
CMD ["node", "app.js"]