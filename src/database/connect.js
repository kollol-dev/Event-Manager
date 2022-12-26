const { Sequelize } = require('sequelize');
const fs = require('fs')
const path = require('path');
const basename = path.basename(__filename)
const modelDirectoryPath = path.join(__dirname, "/../models")
const {
    mysql: {
        password,
        host,
        username,
        dbPort,
        database
    }
} = require('../config/environments')

const sequelize = new Sequelize(database, username, password, {
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


// const db = {}
// fs.readdirSync(modelDirectoryPath)
//     .filter(file => {
//         return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     })
//     .forEach(file => {
//         const model = require(path.join(modelDirectoryPath, file))(sequelize, Sequelize.DataTypes);
//         db[model.name] = model;
//     });
// console.log('db', db)
// console.log('__dirname', __dirname)
// Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//         db[modelName].associate(db);
//     }
// });

module.exports = sequelize