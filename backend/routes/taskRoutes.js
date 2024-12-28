const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const authenticate = require("../middleware/authMiddleware");

router.post("/tasks", authenticate, createTask);
router.get("/tasks", authenticate, getAllTasks);
router.get("/tasks/:id", authenticate, getTaskById);
router.put("/tasks/:id", authenticate, updateTask);
router.delete("/tasks/:id", authenticate, deleteTask);

module.exports = router;
