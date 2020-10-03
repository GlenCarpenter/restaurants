const express = require("express");
const restaurantData = require("./utils/restaurantData.json");

// Initialize API application
const app = express();

app.get("/", (req, res) => {
  res.send(restaurantData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
