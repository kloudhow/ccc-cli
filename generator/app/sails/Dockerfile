FROM node:10-alpine
# add support for Build tools
RUN apk add --no-cache git bash make gcc g++ python

ENV TZ=Asia/Saigon
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV NODE_ENV=production
ENV PORT=1337
ENV NODE_PORT=1337

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Private Registry
RUN npm config set registry https://npm.goappable.com
RUN yarn config set registry https://npm.goappable.com

RUN yarn install

# Bundle app source
COPY . .

EXPOSE 1337

CMD ["yarn", "run", "start"]
