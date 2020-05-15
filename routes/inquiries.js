const express = require('express');
const router = express.Router();
const ClientForm = require("../models/ClientForm");

// Get list of all inquiries
router.get("/", (req, res) => {
    ClientForm.find()
    .populate("client", "email")
        .then((inquiries) => {
            res.status(200).json({ result: inquiries })
        })
        .catch((err) => res.status(400).json(err));
});

// Add a new inquiry to the database
router.post("/", (req, res) => {
    ClientForm.create(req.body)
        .then((inquiry) => {
            res.status(201).json({ result: inquiry });
        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;