FROM lambci/lambda:build-nodejs12.x

WORKDIR /home/node/app
COPY . $WORKDIR

RUN npm i -g gatsby-cli
RUN npm cache clean --force && npm ci

RUN rm -rf node_modules/sharp
RUN npm install --arch=x64 --platform=linux --target=10.15.0 sharp
