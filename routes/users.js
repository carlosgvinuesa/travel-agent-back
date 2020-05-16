const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* GET users */
router.get("/", (req, res) => {
  res.json({ message: "todo funciona chido" });
});

router.post("/", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json({ result: user });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
