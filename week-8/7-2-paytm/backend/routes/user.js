const express = require("express");
const jwt = require("jsonwebtoken");

const { User } = require("../db.js");
const { zs_signup, zs_signin } = require("../zod.js");
const { JWT_SECRET } = require("../config.js");

const router = express.Router();
// @Route = /api/v1/user

router.post("/signup", async (req, res) => {
  const { success } = zs_signup.safeParse(req.body);
  if (!success) return res.status(411).json({ message: "Incorrect inputs" });

  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) res.status(411).json({ message: "Email already taken" });

  const newUser = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);

  res.status(200).json({
    message: "User created successfully",
    token: token,
  });
});

router.post("/signin", async (req, res) => {
  const { success } = zs_signin.safeParse(req.body);
  if (!success) return res.status(411).json({ message: "Incorrect inputs" });

  let user = null;
  try {
    user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
  } catch (err) {
    console.log(err);
  }

  if (!user) return res.status(411).json({ message: "Incorrect password" });

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);
  res.status(200).json({ token });
});

module.exports = router;
