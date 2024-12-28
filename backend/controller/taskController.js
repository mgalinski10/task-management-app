const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    const { name, description, priority, date } = req.body;
    const userId = req.userId;

    const task = new Task({
      name,
      description,
      priority,
      date,
      userId,
    });

    await task.save();
    console.log(`Created task: ${task}`);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const userId = req.userId; // Zakładając, że `userId` pochodzi z tokenu JWT
    const tasks = await Task.find({ userId }); // Filtrowanie zadań po userId

    console.log(`Available tasks: ${tasks}`);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const userId = req.userId; // Zakładając, że `userId` pochodzi z tokenu JWT
    const task = await Task.findOne({ _id: req.params.id, userId }); // Sprawdzanie zarówno ID zadania, jak i userId

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    console.log(`Found task: ${task}`);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error fetching task", error });
  }
};

const updateTask = async (req, res) => {
  try {
    const userId = req.userId; // Zakładając, że `userId` pochodzi z tokenu JWT
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId }, // Sprawdzanie userId podczas aktualizacji
      req.body,
      { new: true }
    );

    if (!task) {
      return res
        .status(404)
        .json({ message: "Task not found or you are not authorized" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const userId = req.userId; // Zakładając, że `userId` pochodzi z tokenu JWT
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId }); // Sprawdzanie userId przy usuwaniu

    if (!task) {
      return res
        .status(404)
        .json({ message: "Task not found or you are not authorized" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
