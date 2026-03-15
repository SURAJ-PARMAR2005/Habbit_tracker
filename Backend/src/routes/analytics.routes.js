const express = require("express");
const authMiddleWare = require("../middleware/auth.middleware");
const analyticsController  = require("../controllers/analytics.controller");
const router  = express.Router();

router.get("/heatmap",authMiddleWare.authMiddleWare,analyticsController.getHeatMapData);


module.exports = router;
