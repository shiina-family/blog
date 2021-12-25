FROM node:16

RUN npm install -g gatsby-cli
RUN gatsby --version
