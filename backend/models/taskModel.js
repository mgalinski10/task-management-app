const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  date: {
    type: String,
    required: false,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
