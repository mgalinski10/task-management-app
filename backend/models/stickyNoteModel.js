const mongoose = require("mongoose");

const stickyNoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
});

const StickyNote = mongoose.model("StickyNote", stickyNoteSchema);

module.exports = StickyNote;
