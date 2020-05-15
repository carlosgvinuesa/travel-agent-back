const express = require('express');
const router = express.Router();
const Transport = require("../models/Transport");

// Get list of all transports
router.get("/", (req, res) => {
    Transport.find()
    .then((transports) => {
      res.status(200).json({ result: transports })
    })
    .catch((err) => res.status(400).json(err));
});

// Add a new transport to the database
router.post("/", (req, res) => {
    Transport.create(req.body)
    .then((transport) => {
      res.status(201).json({ result: transport });
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;