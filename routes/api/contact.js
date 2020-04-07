const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const authMiddleware = require('../../middleware/auth');
const Contact = require("../../models/Contact");

//Get All reqcords
router.get("/", authMiddleware, (req, res) => res.send("Contact Route"));

//

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
        res.json(_contact);
      } catch (error) {
        console.log(error);
        res.status(500).send("Unable to save contact " + error.message);
      }
    } else {
      res.status(400).json({ errors: errors.array() });
    }
  }
);

module.exports = router;
