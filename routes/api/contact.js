const express = require("express");
const router = express.Router();
//const bcrypt = require('bcryptjs')
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const Contact = require("../../models/Contact");

//Get All reqcords
router.get("/", (req, res) => res.send("Contact Route"));

//Create
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      //TODO check existing
      console.log(req.body);

      const contact = new Contact({
        ...req.body
      });

      try {
        const _contact = await contact.save();
        const payload = {
          contact: {
            id: contact.id
          }
        };

        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 22000000 },
          (err, token) => {
            if (err) throw err;
            res.json(token);
          }
        );
        res.json(_contact);
      } catch (error) {
        res.status(500).message("Unable to save contact " + error.message);
      }
    } else {
      res.status(400).json({ errors: errors.array() });
    }
  }
);

module.exports = router;
