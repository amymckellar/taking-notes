//need the path to get the index.html and the notes.html
const path = require("path");
// puts all the routs in global scope so the server respods appropriately
const router = require("express").Router();

//responds to the notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// responds to the index.html
http: router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
