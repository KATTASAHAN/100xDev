const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3000;

// LinkedIn Navbar API
app.get("/", (req, res) => {
  res.status(200).json({
    network: Math.floor(Math.random() * 110),
    jobs: Math.floor(Math.random() * 110),
    notification: Math.floor(Math.random() * 110),
    messaging: Math.floor(Math.random() * 110),
  });
});

app.listen(PORT, () => {
  console.log(`APP is listening at ${PORT}`);
});
