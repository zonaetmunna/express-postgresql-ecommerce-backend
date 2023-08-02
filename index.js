const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./src/db/db");
const routes = require("./src/routes/routes");

// port and app
const port = process.env.PORT || 5000;
const app = express();

// initialize middleware
app.use(cors());
app.use(express.json());

// initialize routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
