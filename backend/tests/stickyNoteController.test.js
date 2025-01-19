const StickyNote = require("../models/stickyNoteModel");
const {
  createStickyNote,
  getAllStickyNotes,
  getStickyNoteById,
  updateStickyNote,
  deleteStickyNote,
} = require("../controller/stickyNoteController");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Sticky Note Controller", () => {
  it("should create a sticky note successfully", async () => {
    const req = {
      body: {
        title: "Test Note",
        content: "Test Content",
      },
      userId: "1234",
    };
    const res = mockResponse();

    StickyNote.prototype.save = jest.fn().mockResolvedValue({
      title: req.body.title,
      content: req.body.content,
      userId: req.userId,
    });

    await createStickyNote(req, res);

    expect(StickyNote.prototype.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(req.body));
  });

  it("should fetch all sticky notes for a user", async () => {
    const req = { userId: "1234" };
    const res = mockResponse();

    StickyNote.find = jest.fn().mockResolvedValue([
      { title: "Note 1", content: "Content 1", userId: req.userId },
      { title: "Note 2", content: "Content 2", userId: req.userId },
    ]);

    await getAllStickyNotes(req, res);

    expect(StickyNote.find).toHaveBeenCalledWith({ userId: req.userId });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.arrayContaining([expect.objectContaining({ userId: req.userId })])
    );
  });

  it("should return 404 if sticky note not found by ID", async () => {
    const req = { params: { id: "605c72efb5f09b001f980b1a" }, userId: "1234" };
    const res = mockResponse();

    StickyNote.findById = jest.fn().mockResolvedValue(null);

    await getStickyNoteById(req, res);

    expect(StickyNote.findById).toHaveBeenCalledWith(req.params.id, req.userId);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Sticky note not found" });
  });

  it("should delete a sticky note successfully", async () => {
    const req = { params: { id: "605c72efb5f09b001f980b1a" }, userId: "1234" };
    const res = mockResponse();

    StickyNote.findByIdAndDelete = jest.fn().mockResolvedValue(true);

    await deleteStickyNote(req, res);

    expect(StickyNote.findByIdAndDelete).toHaveBeenCalledWith({
      _id: req.params.id,
      userId: req.userId,
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Sticky note deleted successfully",
    });
  });
});
