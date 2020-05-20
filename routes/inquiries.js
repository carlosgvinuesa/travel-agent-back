const express = require("express");
const router = express.Router();
const ClientForm = require("../models/ClientForm");
const { veryToken } = require("../utils/auth");

// Get list of all inquiries
router.get("/", veryToken, (req, res) => {
  ClientForm.find()
    .populate("client", "email")
    .then((inquiries) => {
      res.status(200).json({ result: inquiries });
    })
    .catch((err) => res.status(400).json(err));
});

// Add a new inquiry to the database
router.post("/", (req, res) => {
  ClientForm.create(req.body)
    .then((inquiry) => {
      res.status(201).json({ result: inquiry });
    })
    .catch((err) => res.status(400).json(err));
});

//Update inquiry
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  ClientForm.findByIdAndUpdate(id, req.body, { new: true })
    .then((inquiry) => {
      res.status(200).json({ result: inquiry });
    })
    .catch((err) => res.status(400).json(err));
});

//Delete inquiry
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  ClientForm.findByIdAndRemove(id)
    .then((inquiry) => {
      res.status(200).json({ result: inquiry });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
