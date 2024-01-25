const express = require("express");
const userRoutes = require("./user");
const router = express.Router();
router.use("/user", userRoutes);

router.get("/", (req, res) => {
  res.json({ path: "/api/v1" });
});

module.exports = router;
