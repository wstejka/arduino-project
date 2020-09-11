FROM node:8.12-alpine

COPY * /

RUN yarn install

ENTRYPOINT npm start