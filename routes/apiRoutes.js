const restaurantData = require("../utils/restaurantData.json");

module.exports = app => {
  // Return complete, sorted list of data
  app.get("/api/data", (req, res) => {
    const sortedData = restaurantData.data.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    res.send(sortedData);
  });

  // Return a sorted list of unique values for states
  app.get("/api/states", (req, res) => {
    const states = [...new Set(restaurantData.data.map(el => el.state))].sort();
    res.send(states);
  });

  // Return a sorted list of unique values for states
  app.get("/api/attire", (req, res) => {
    const attire = [
      ...new Set(restaurantData.data.map(el => el.attire.toLowerCase()))
    ].sort();
    res.send(attire);
  });

  // Return a sorted list of unique values for genres
  app.get("/api/genres", (req, res) => {
    const genres = [...new Set(restaurantData.data.map(el => el.genre))];
    const splitGenres = new Set();
    genres.forEach(genre => {
      arr = genre.split(",");
      arr.forEach(el => splitGenres.add(el));
    });
    res.send([...splitGenres].sort());
  });

  // Return a sorted list of restaurants filtered by state, genre, or name
  app.post("/api/data", (req, res) => {
    const {
      searchValue,
      stateValue,
      genreValue,
      attireValue,
      sortBy
    } = req.body;

    const keys = ["name", "state", "genre"];

    const filterByKey = (array, key, value) =>
      array.filter(obj =>
        obj[key]
          .toLowerCase()
          .split(",")
          .map(el => el.trim())
          .includes(value.toLowerCase())
      );

    const filterByValue = (array, value) =>
      array.filter(obj =>
        keys.some(key => obj[key].toLowerCase().includes(value.toLowerCase()))
      );

    let filteredData = restaurantData.data;

    // Apply filters to filteredData array
    if (stateValue !== "") {
      filteredData = filterByKey(filteredData, "state", stateValue.trim());
    }
    if (genreValue !== "") {
      filteredData = filterByKey(filteredData, "genre", genreValue.trim());
    }
    if (attireValue !== "") {
      filteredData = filterByKey(filteredData, "attire", attireValue.trim());
    }
    filteredData = filterByValue(filteredData, searchValue.trim());

    // Finally sort the data by either name or state
    const __sortBy = sortBy || "name";
    const sortedData = filteredData
      ? filteredData.sort((a, b) =>
          a[__sortBy] > b[__sortBy] ? 1 : b[__sortBy] > a[__sortBy] ? -1 : 0
        )
      : null;
    res.send(sortedData);
  });
};
