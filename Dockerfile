FROM node:12-slim AS dep
WORKDIR /app
# https://www.docker.com/blog/keep-nodejs-rockin-in-docker/
ENV NODE_ENV development
ADD . .
RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
    yarn --no-cache --frozen-lockfile --production; \
  else \
    yarn --no-cache --frozen-lockfile; \
  fi;

FROM dep as pre
ENV NODE_ENV production
RUN yarn build

FROM pre as build
WORKDIR /app/packages/web
VOLUME ["/app/packages/web/public"]
CMD yarn build
