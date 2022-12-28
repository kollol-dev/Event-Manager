# FROM node:14.17-alpine as build-stage
# WORKDIR /usr/src/frontend
# COPY frontend/package*.json ./
# RUN cd frontend && npm install
# RUN cd frontend && npm run build

# FROM nginx:14.17-alpine as production-stage
# COPY --from=build-stage /usr/app /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:14.17-alpine 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
# COPY ./frontend/package*.json ./frontend
RUN cd ./frontend && npm install
RUN cd ./frontend && npm run build

EXPOSE 3000 3001

# RUN cd ./frontend && npm run serve
