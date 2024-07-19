FROM node:18.20-alpine

WORKDIR /usr/src/app

ARG branch

ENV env $branch
ENV TZ Asia/Jakarta

COPY package.json pnpm-lock.yaml ./

RUN npm install --force
RUN npm i -g pm2 pnpm next
RUN pnpm i

COPY . .

COPY ./deploy/$branch/env .env.local

RUN pnpm run build

EXPOSE 3000

CMD [ "pm2-runtime", "start", "npm -- start" ]
