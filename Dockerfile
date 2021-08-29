FROM node:16-alpine

RUN apk add --no-cache python make g++ git
RUN apk add vips-dev fftw-dev \
    --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community \
    --repository http://dl-3.alpinelinux.org/alpine/edge/main
RUN rm -fR /var/cache/apk/*
RUN npm install --global gatsby-cli
