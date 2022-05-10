const express = require("express");
const router = express.Router();

router.get("/", (__, res) => {
  res.send("Hello World");
});

module.exports = router;
