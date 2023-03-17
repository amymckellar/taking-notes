const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//Initailize the server
const app = express();
const PORT = 3001;

// handles parsing of data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Starts the server
app.listen(process.env.PORT, () =>
  console.log(`Listening on http://localhost:${PORT}`)
);
