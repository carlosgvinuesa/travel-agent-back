const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET users
router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json({
        result: users,
      });
    })
    .catch((err) => res.status(400).json(err));
});

// Create user
router.post("/", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json({ result: user });
    })
    .catch((err) => res.status(400).json(err));
});

// Edit user
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((user) => {
      res.status(200).json({ result: user });
    })
    .catch((err) => res.status(400).json(err));
});

// Delete client
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  User.findOneAndDelete(id)
    .then((user) => {
      res.status(200).json({ result: user });
    })
    .catch((err) => res.status(400).json(err));
});

// Search user
router.get("/search", (req, res) => {
  User.find(req.query)
    .then((user) => {
      res.status(200).json({
        result: user,
      });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
