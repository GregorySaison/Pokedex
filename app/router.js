const express = require("express");
const router = express.Router();
const renderController = require("./controllers/renderController");

router.get("/", renderController.renderHello);

module.exports = router;
