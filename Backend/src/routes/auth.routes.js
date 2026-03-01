const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleWare = require("../middleware/auth.middleware")

const router  = express.Router();

router.post("/register",authController.registerUser);
router.post("/login",authController.loginUser);
router.get("/me",authMiddleWare.authMiddleWare,authController.getMe)
router.post("/logout",authMiddleWare.authMiddleWare,authController.logoutUser)
module.exports  = router ;