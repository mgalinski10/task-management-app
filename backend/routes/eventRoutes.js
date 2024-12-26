const express = require("express");
const router = express.Router();
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controller/eventController");
const authenticate = require("../middleware/authMiddleware");

router.post("/events", authenticate, createEvent);
router.get("/events", authenticate, getAllEvents);
router.get("/events/:id", authenticate, getEventById);
router.put("/events/:id", authenticate, updateEvent);
router.delete("/events/:id", authenticate, deleteEvent);

module.exports = router;
