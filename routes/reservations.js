const express = require('express');
const router = express.Router();
const Reservation = require("../models/Reservation");
const { veryToken } = require("../utils/auth")

// Get list of all reservations
router.get("/", veryToken, (req, res) => {
    Reservation.find()
        .populate("client", "name last_name email")
        .populate("user", "name last_name email")
        .then((reservations) => {
            res.status(200).json({ result: reservations })
        })
        .catch((err) => res.status(400).json(err));
});

// Get all reservations by client
router.get("/clients/:client_id", (req, res) => {
    const { client_id } = req.params;
    Reservation.find({ client: client_id })
        .populate("client", "name last_name email")
        .populate("user", "name last_name email")
        .then((reservations) => {
            res.status(200).json({ result: reservations });
        })
        .catch((err) => res.status(400).json(err));
});


// Add a new reservation to the database
router.post("/", (req, res) => {
    Reservation.create(req.body)
        .then((reservation) => {
            res.status(201).json({ result: reservation });
        })
        .catch(err => res.status(400).json(err));
});

//Update reservation
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    Reservation.findByIdAndUpdate(id, req.body, { new: true })
        .then(reservation => {
            res.status(200).json({ result: reservation });
        })
        .catch((err) => res.status(400).json(err));
});

//Delete reservation
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Reservation.findByIdAndDelete(id)
        .then((reservation) => {
            res.status(200).json({ result: reservation });
        })
        .catch((err) => res.status(400).json(err));
});

module.exports = router;