#FROM hwregistry.kian.digital/infra/node:15.10.0 as build
#FROM hwregistry.kian.digital/infra/node:16.10.0 as build
#FROM hwregistry.kian.digital/docker/node:18.20.0 as build
FROM hwregistry.kian.digital/docker/node:18.17.0 as build
WORKDIR /app
COPY . .
ENV NODE_ENV production
RUN yarn install --production --frozen-lockfile
RUN yarn clean
RUN yarn build

FROM hwregistry.kian.digital/infra/gatsbyjs/gatsby
COPY --from=build /app/public /pub
