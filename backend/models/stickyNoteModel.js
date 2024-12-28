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
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const StickyNote = mongoose.model("StickyNote", stickyNoteSchema);

module.exports = StickyNote;
