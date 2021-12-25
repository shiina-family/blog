FROM node:17-alpine

WORKDIR /home/node/app
COPY . $WORKDIR

RUN apk update
RUN apk add --no-cache python make g++ git
RUN apk add vips-dev fftw-dev \
    --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community \
    --repository http://dl-3.alpinelinux.org/alpine/edge/main
RUN rm -fR /var/cache/apk/*

RUN npm i -g gatsby-cli
RUN npm cache clean --force && npm ci

RUN rm -rf node_modules/sharp
RUN npm install --arch=x64 --platform=linux --target=10.15.0 sharp
