const express = require("express");
const {
  register,
  login,
  logout,
  checkAuth,
} = require("../controller/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check-auth", checkAuth);
module.exports = router;
