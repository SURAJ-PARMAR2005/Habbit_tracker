const express = require("express");
const authMiddleWare = require("../middleware/auth.middleware");
const dailyController = require("../controllers/daily.controller")

const router = express.Router();

router.get("/today",authMiddleWare.authMiddleWare,dailyController.getDailyData);

module.exports = router;