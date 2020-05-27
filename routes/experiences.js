const express = require('express');
const router = express.Router();
const Experience = require("../models/Experience");

// Get list of all experiences
router.get("/", (req, res) => {
  Experience.find()
    .then((experiences) => {
      res.status(200).json({ result: experiences })
    })
    .catch((err) => res.status(400).json(err));
});

// Add a new experience to the database
router.post("/", (req, res) => {
  Experience.create(req.body)
    .then((experience) => {
      res.status(201).json({ result: experience });
    })
    .catch(err => res.status(400).json(err));
});

//Update experience
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Experience.findByIdAndUpdate(id, req.body, { new: true })
    .then(experience => {
      res.status(200).json({ result: experience });
    })
    .catch((err) => res.status(400).json(err));
});

//Delete experience
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Experience.findByIdAndDelete(id)
    .then((experience) => {
      res.status(200).json({ result: experience });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;