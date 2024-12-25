const StickyNote = require("../models/stickyNoteModel");

const createStickyNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const stickyNote = new StickyNote({
      title,
      content,
    });

    await stickyNote.save();
    console.log(`Created sticky note: ${stickyNote}`);
    res.status(201).json(stickyNote);
  } catch (error) {
    res.status(500).json({ message: "Error creating sticky note", error });
  }
};

const getAllStickyNotes = async (req, res) => {
  try {
    const stickyNotes = await StickyNote.find();
    console.log(`Available sticky notes: ${stickyNotes}`);
    res.status(200).json(stickyNotes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sticky notes", error });
  }
};

const getStickyNoteById = async (req, res) => {
  try {
    const stickyNote = await StickyNote.findById(req.params.id);
    if (!stickyNote) {
      return res.status(404).json({ message: "Sticky note not found" });
    }
    console.log(`Found sticky note: ${stickyNote}`);
    res.status(200).json(stickyNote);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sticky note", error });
  }
};

const updateStickyNote = async (req, res) => {
  try {
    const stickyNote = await StickyNote.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!stickyNote) {
      return res.status(404).json({ message: "Sticky note not found" });
    }
    res.status(200).json(stickyNote);
  } catch (error) {
    res.status(500).json({ message: "Error updating sticky note", error });
  }
};

const deleteStickyNote = async (req, res) => {
  try {
    const stickyNote = await StickyNote.findByIdAndDelete(req.params.id);
    if (!stickyNote) {
      return res.status(404).json({ message: "Sticky note not found" });
    }
    res.status(200).json({ message: "Sticky note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting sticky note", error });
  }
};

module.exports = {
  createStickyNote,
  getAllStickyNotes,
  getStickyNoteById,
  updateStickyNote,
  deleteStickyNote,
};
