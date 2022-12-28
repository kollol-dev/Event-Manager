# Event Manager

This project contains few apis like create events, paginate events, update and delete any specific event. In here, I used **Node.js** and **MySQL**. I tried to follow TDD approach to built the apis. 

## Requirements
- Docker ([Documentation](https://www.docker.com/get-started/))
- Docker Compose
- Node.js ([Download](https://nodejs.org/en/))
- NPM (Will be download with Node.js)

There are two part of this project. 
* Frontent - Vue.js ( http://localhost:3001 )
* Backend - Nodejs + MySQL ( http://localhost:3000 )

## Installation
- Copy `.env.example` to `.env` 
```
cp .env.example .env
```

### Run Docker
```
npm run serve:docker
```
#### If you need to Re-Run docker, you should remove the container which was created before
```
npm run serve:docker:down
```

### APIs
I have attached all APIs here as well.
For more details abouts APIs, visit this [http://localhost:3000/api/v1/docs/](http://localhost:3000/api/v1/docs/) to see api documentation.


- POST Create Events [/api/v1/events](http://localhost:3000/api/v1/events)
- GET Paginate Events [/api/v1/events?page=1&pageSize=5](http://localhost:3000/api/v1/events?page=1&pageSize=5)
- GET Get Specific Event by id [/api/v1/events/:id](http://localhost:3000/api/v1/events/:id)
- PUT Update Event by id [/api/v1/events/:id](http://localhost:3000/api/v1/events/:id)
- DELETE Delete Event by id [/api/v1/events/:id](http://localhost:3000/api/v1/events/:id)

## Tests
- For testcase you can run `npm run test:docker` (docker)



