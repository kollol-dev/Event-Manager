# Event Manager

This project contains few apis like create events, paginate events, update and delete any specific event. In here, I used **Node.js** and **MySQL**. I tried to follow TDD approach to built the apis. 

## Requirements
- Docker  
- Docker Compose
- Node.js
- NPM

## Installation
- Copy `.env.example` to `.env` 

### For Docker
- Run  `npm run serve:docker` 

### For Mannual
- Install all dependencies, Run `npm install` 
- Run `npm run serve`

After this operation, the app server will start in `http://localhost:3000`

### APIs
- POST Create Events [/api/v1/events](http://localhost:3000/api/v1/events)
- GET Paginate Events [/api/v1/events?page=1&pageSize=5](http://localhost:3000/api/v1/events?page=1&pageSize=5)
- GET Get Specific Event by id [/api/v1/events/:id](http://localhost:3000/api/v1/events/:id)
- PUT Update Event by id [/api/v1/events/:id](http://localhost:3000/api/v1/events/:id)
- DELETE Delete Event by id [/api/v1/events/:id](http://localhost:3000/api/v1/events/:id)

## Tests
- For testcase you can run `npm run test` (manually)
- For testcase you can run `npm run test:docker` (docker)



