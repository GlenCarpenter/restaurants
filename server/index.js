// Load environment variables
require('dotenv').config({path: __dirname + '/.env'})

// Load express variables
const express = require("express");
const bodyParser = require("body-parser");

// Initialize API application
const app = express();
app.use(bodyParser.json());

// Import API routes
require("./routes/apiRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Serve static assets
  app.use(express.static("client/build"));

  // Serve the index.html file if Express it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
