const express = require("express");
const { register, login, checkAuth } = require("../controller/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", checkAuth);
module.exports = router;
