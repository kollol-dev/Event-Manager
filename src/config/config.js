const {
  mysql: {
    password,
    host,
    database,
    username,
  }
} = require('./environments')

const MySQL = 'mysql'

module.exports = {
  "development": {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": MySQL,
    "logging": false
  },
  "test": {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": MySQL,
    "logging": false
  },
  "production": {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": MySQL
  }
}
