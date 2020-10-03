const express = require("express");
const restaurantData = require("./utils/restaurantData.json");

// Initialize API application
const app = express();

// Import API routes
require("./routes/apiRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
