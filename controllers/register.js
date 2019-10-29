const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../models");

router.post("/", function(req, res) {
  db.User.findOne({ username: req.body.username.toLowerCase() })
    .then(foundUser => {
      if (foundUser) {
        return res.json({
          message: "That username is already in use. Please try again.",
          error: true,
          data: null
        });
      } else {
        const user = new db.User({
          username: req.body.username.toLowerCase(),
          password: req.body.password
        });
        user.save((err, newUser) => {
          if (err) {
            return res.status(500).json({
              message: "Error creating new user.",
              error: true,
              data: err
            });
          } else {
            return res.json({
              message: "Successfully created new user.",
              error: false,
              data: newUser
            });
          }
        });
      }
    })
    .catch(err => {
      console.log(err);
      return res.json({
        message:
          "There was an error registring that username. Please try again.",
        error: false,
        data: err
      });
    });
});

module.exports = router;
