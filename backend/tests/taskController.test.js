const Task = require("../models/taskModel");
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

jest.mock("../models/taskModel");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Task Controller", () => {
  it("should create a task successfully", async () => {
    const req = {
      body: {
        name: "Test Task",
        description: "Test Desc",
        priority: "medium",
        date: "2025-01-01",
      },
      userId: "1234",
    };
    const res = mockResponse();

    await createTask(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
  });

  it("should fetch all tasks for a user", async () => {
    const req = { userId: "1234" };
    const res = mockResponse();

    Task.find = jest
      .fn()
      .mockResolvedValue([{ name: "Test Task 1" }, { name: "Test Task 2" }]);

    await getAllTasks(req, res);

    expect(Task.find).toHaveBeenCalledWith({ userId: req.userId });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it("should return 404 if task not found by ID", async () => {
    const req = { params: { id: "nonexistent" }, userId: "1234" };
    const res = mockResponse();

    Task.findOne = jest.fn().mockResolvedValue(null);

    await getTaskById(req, res);

    expect(Task.findOne).toHaveBeenCalledWith({
      _id: req.params.id,
      userId: req.userId,
    });
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Task not found" });
  });

  it("should delete a task successfully", async () => {
    const req = { params: { id: "1234" }, userId: "1234" };
    const res = mockResponse();

    Task.findOneAndDelete = jest.fn().mockResolvedValue({ id: "1234" });

    await deleteTask(req, res);

    expect(Task.findOneAndDelete).toHaveBeenCalledWith({
      _id: req.params.id,
      userId: req.userId,
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Task deleted successfully",
    });
  });
});
