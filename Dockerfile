# build stage
FROM node:18.0-alpine3.14 as build-stage

WORKDIR /app

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM node:18.0-alpine3.14 as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json


WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install --production

COPY --from=build-stage /app/config.yaml /app/config.yaml

EXPOSE 3001


CMD [ "node", "./src/main.js" ]