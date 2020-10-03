const restaurantData = require("../utils/restaurantData.json");

module.exports = app => {

  app.get("/api/data", (req, res) => {
    const sortedData = restaurantData.data.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    res.send(sortedData);
  });

  app.get("/api/states", (req, res) => {
    const states = [...new Set(restaurantData.data.map(el => el.state))].sort();
    res.send(states);
  });

  app.get("/api/genres", (req, res) => {
    const genres = [...new Set(restaurantData.data.map(el => el.genre))];
    const splitGenres = new Set();
    genres.forEach(genre => {
      arr = genre.split(",");
      arr.forEach(el => splitGenres.add(el));
    });
    res.send([...splitGenres].sort());
  });

  app.post("/api/data", (req, res) => {
    console.log("Got body:", req.body);

    const sortedData = restaurantData.data.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    res.send(sortedData);
  });
};
