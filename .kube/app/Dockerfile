ARG NODE_IMAGE

FROM $NODE_IMAGE

RUN npm install -g yarn

WORKDIR /var/www/html

COPY --chown=www-data:www-data  package.json yarn.lock ./

RUN yarn install

COPY --chown=www-data:www-data . .

RUN yarn build

CMD ["yarn", "start"]