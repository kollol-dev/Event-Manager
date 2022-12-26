require('dotenv').config({ path: `${__dirname}/../.env` });
const { sequelize } = require("./models");
// require('./database/connect');

const express = require('express')
const port = process.env.PORT || 3000
const app = express()
const eventRoutes = require('./routes/v1/event')

app.get('/health', (req, res) => {
  res.send('Healthy!')
})

sequelize.sync({ alter: true });

app.use('/api/v1', eventRoutes);


app.listen({ port }, async () => {
  console.log(`listening on port ${port}`)
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})
