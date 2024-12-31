const express = require("express");
const router = express.Router();
const {
  createUserDetails,
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
} = require("../controller/userDetailsController");
const authenticate = require("../middleware/authMiddleware");

router.post("/user-details", authenticate, createUserDetails);
router.get("/user-details", authenticate, getUserDetails);
router.put("/user-details", authenticate, updateUserDetails);
router.delete("/user-details", authenticate, deleteUserDetails);

module.exports = router;
