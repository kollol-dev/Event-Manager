module.exports = {
    app: {
        port: process.env.port
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        rootUser: 'root',
        rootPassword: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        dbPort: process.env.MYSQL_PORT || 3306,
        dbSslMode: process.env.MYSQL_SSL_MODE || false
    }
}