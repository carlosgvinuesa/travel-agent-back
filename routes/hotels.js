const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

// Get hotels
router.get("/", (req, res) => {
  Hotel.find()
    .then((hotels) => {
      res.status(200).json({
        result: hotels,
      });
    })
    .catch((err) => res.status(400).json(err));
});

// Create hotel
router.post("/", (req, res) => {
  Hotel.create(req.body)
    .then((hotel) => {
      res.status(201).json({ result: hotel });
    })
    .catch((err) => res.status(400).json(err));
});

// Edit hotel
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Hotel.findByIdAndUpdate(id, req.body, { new: true })
    .then((hotel) => {
      res.status(200).json({ result: hotel });
    })
    .catch((err) => res.status(400).json(err));
});

// Delete hotel
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Hotel.findByIdAndDelete(id)
    .then((hotel) => {
      res.status(200).json({ result: hotel });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
