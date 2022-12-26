const { Sequelize } = require('sequelize');
const {
    mysql: {
        password,
        host,
        username,
        dbPort,
        dbSslMode
    } 
} = require('../config')

const sequelize = new Sequelize("", username, password, {
    host,
    post: dbPort,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connected.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize