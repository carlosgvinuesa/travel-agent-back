const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

// Get restaurants
router.get("/", (req, res) => {
  Restaurant.find()
    .then((restaurants) => {
      res.status(200).json({
        result: restaurants,
      });
    })
    .catch((err) => res.status(400).json(err));
});

// Create restaurant
router.post("/", (req, res) => {
  Restaurant.create(req.body)
    .then((restaurant) => {
      res.status(201).json({ result: restaurant });
    })
    .catch((err) => res.status(400).json(err));
});

// Edit restaurant
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Restaurant.findByIdAndUpdate(id, req.body, { new: true })
    .then((restaurant) => {
      res.status(200).json({ result: restaurant });
    })
    .catch((err) => res.status(400).json(err));
});

// Delete restaurant
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Restaurant.findByIdAndDelete(id)
    .then((restaurant) => {
      res.status(200).json({ result: restaurant });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;