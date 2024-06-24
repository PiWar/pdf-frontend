ARG NODE

FROM $NODE as build

RUN npm install -g yarn --force

WORKDIR /app

COPY --chown=www-data:www-data package.json yarn.lock ./

RUN yarn install

COPY --chown=www-data:www-data . .

RUN yarn build

ARG NODE

FROM $NODE

WORKDIR /var/www/html

COPY --chown=www-data:www-data --from=build /app .

RUN npm prune --production

CMD ["npm", "start"]