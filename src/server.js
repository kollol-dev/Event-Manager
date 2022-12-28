require("dotenv").config({ path: `${__dirname}/../.env` });
const { sequelize } = require("./models");
// require('./database/connect');
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const eventRoutes = require("./routes/v1/event");
const { allowCORS } = require("./middleware/cors");

app.get("/health", (req, res) => {
  res.send("Healthy!");
});

sequelize.sync({ alter: true });

app.use("/api/v1", allowCORS, eventRoutes);
app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen({ port }, async () => {
  console.log(`listening on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

module.exports = app;
