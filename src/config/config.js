const {
  mysql: { password, host, database, username, dbPort },
} = require("./environments");

const MySQL = "mysql";

module.exports = {
  development: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: MySQL,
    logging: false,
    port: dbPort,
  },
  test: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: MySQL,
    logging: false,
    port: dbPort,
  },
  production: {
    username: username,
    password: password,
    database: database,
    host: host,
    dialect: MySQL,
    port: dbPort,
  },
};
