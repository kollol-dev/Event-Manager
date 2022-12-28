FROM node:14.17-alpine 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
RUN npm install
RUN npm install -g @vue/cli
COPY . .
RUN cd ./frontend && npm install
RUN cd ./frontend && npm run build

EXPOSE 3000 3001