const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// Get clients
router.get("/", (req, res) => {
  Client.find()
    .then((clients) => {
      res.status(200).json({
        result: clients,
      });
    })
    .catch((err) => res.status(400).json(err));
});

// Create client
router.post("/", (req, res) => {
  Client.create(req.body)
    .then((client) => {
      res.status(201).json({ result: client });
    })
    .catch(err => res.status(400).json(err));
});

// Edit client
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Client.findByIdAndUpdate(id, req.body, { new: true })
    .then((client) => {
      res.status(200).json({ result: client });
    })
    .catch((err) => res.status(400).json(err));
});

// Delete client
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Client.findOneAndDelete(id)
    .then((client) => {
      res.status(200).json({ result: client });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
