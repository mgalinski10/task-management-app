const express = require("express");
const router = express.Router();
const {
  createStickyNote,
  getAllStickyNotes,
  getStickyNoteById,
  updateStickyNote,
  deleteStickyNote,
} = require("../controller/stickyNoteController");

router.post("/notes", createStickyNote);
router.get("/notes", getAllStickyNotes);
router.get("/notes/:id", getStickyNoteById);
router.put("/notes/:id", updateStickyNote);
router.delete("/notes/:id", deleteStickyNote);

module.exports = router;
