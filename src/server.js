require('dotenv').config({ path: `${__dirname}/../.env` });
require('./database/connect');

const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.get('/health', (req, res) => {
  res.send('Healthy!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
