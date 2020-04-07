const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../../middleware/auth");
const User = require("../../models/User");

router.get("/", authMiddleware, (req, res) => {
  try {
    const user = await(User.findById(req.user.id).select("-password"));
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Status Error");
  }
});

router.post(
  "/",
  [
    check("email", "Valid Email is required").isEmail(),
    check("password", "Password required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      } else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return res.status(400).json({ msg: "Invalid Credentials" });
        } else {
          const payload = {
            contact: {
              id: _contact.id,
            },
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
        }
      }
    } else {
      return res.status(400).json({ errors: errors });
    }
  }
);

module.exports = router;