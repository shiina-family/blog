FROM node:16-alpine

RUN apk update && apk add git
RUN npm install --global gatsby-cli
