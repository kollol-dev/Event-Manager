const { app: { frontendPort } } = require("../config/environments")
module.exports = {
    allowCORS: (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', `http://localhost:${frontendPort}`);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        next();
    }
}