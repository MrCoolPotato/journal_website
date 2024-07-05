const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { jwtSecret } = require("../config");
const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
});

// Login a user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "Invalid username or password" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid username or password" });
  }
  const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;
