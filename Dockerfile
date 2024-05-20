FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["node", ".output/server/index.mjs"]

