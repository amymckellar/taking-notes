const fs = require("fs");
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

const saveData = require("../db/saveData");
// GET request
router.get("/notes", (req, res) => {
  saveData
    .retrieveNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// POST Request
router.post("/notes", (req, res) => {
  router.post("/notes", (req, res) => {
    saveData
      .addNotes(req.body, "db/db.json")
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });
});

// DELETE Request
router.delete("/notes/:id", (req, res) => {
  saveData
    .deleteNotes(req.params.id, "db/db.json")
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
