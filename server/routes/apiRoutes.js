const restaurantData = require("../utils/restaurantData.json");

// Send all data
module.exports = app => {
  app.get("/api/data", (req, res) => {
    res.send(restaurantData);
  });

  app.post("/api/data", (req, res) => {
    const { filter } = req.body;

    res.send(filter);
  });
};
