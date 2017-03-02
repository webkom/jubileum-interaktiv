FROM node:7
MAINTAINER Abakus Webkom <webkom@abakus.no>

ENV NODE_ENV production
ENV PORT 3000

RUN mkdir -p /app
COPY . /app/
WORKDIR /app

RUN set -e \
  && npm install -g yarn \
  && yarn \
  && yarn build

ENTRYPOINT ["yarn", "start"]
