const express = require("express");
const authMiddleWare = require("../middleware/auth.middleware");
const dailyController = require("../controllers/daily.controller")

const router = express.Router();

router.get("/today",authMiddleWare.authMiddleWare,dailyController.getDailyData);
router.post("/complete-quest",authMiddleWare.authMiddleWare,dailyController.updateDailyData);
router.get("/today-perm",authMiddleWare.authMiddleWare,dailyController.getPermData);

module.exports = router;