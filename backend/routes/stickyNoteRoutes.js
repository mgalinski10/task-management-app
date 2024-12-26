const express = require("express");
const router = express.Router();
const {
  createStickyNote,
  getAllStickyNotes,
  getStickyNoteById,
  updateStickyNote,
  deleteStickyNote,
} = require("../controller/stickyNoteController");
const authenticate = require("../middleware/authMiddleware");

router.post("/notes", authenticate, createStickyNote);
router.get("/notes", authenticate, getAllStickyNotes);
router.get("/notes/:id", authenticate, getStickyNoteById);
router.put("/notes/:id", authenticate, updateStickyNote);
router.delete("/notes/:id", authenticate, deleteStickyNote);

module.exports = router;
