FROM node:16

WORKDIR /home/node/app
COPY . $WORKDIR

RUN npm i -g gatsby-cli
RUN npm ci
