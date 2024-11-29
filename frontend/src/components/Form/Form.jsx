import styles from "./Form.module.scss";
import { useState } from "react";
import axios from "axios";

import Header from "./Header/Header";
import TaskDetailsForm from "../TaskDetailsForm/TaskDetailsForm";
import Buttons from "./Buttons/Buttons";
import { useToday } from "../../context/TodayContext";

const Form = ({ initialData = {} }) => {
  const [taskName, setTaskName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [priority, setPriority] = useState(initialData.priority || "medium");
  const [date, setDate] = useState(initialData.date || "");

  const { fetchTasks } = useToday();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      name: taskName,
      description,
      priority,
      date,
    };

    try {
      if (!initialData._id) {
        const response = await axios.post(
          "http://localhost:5000/api/tasks",
          taskData
        );
        console.log("Task created:", response.data);
        setTaskName("");
        setDescription("");
        setPriority("medium");
        setDate("");
      } else {
        const response = await axios.put(
          `http://localhost:5000/api/tasks/${initialData._id}`,
          taskData
        );
        console.log("Task updated:", response.data);
      }
      fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.mainForm}>
      <Header />
      <input
        className={styles.input}
        type="text"
        placeholder={"Enter Task Name"}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        className={styles.description}
        rows="8"
        placeholder={"Description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <TaskDetailsForm
        date={date}
        priority={priority}
        setDate={setDate}
        setPriority={setPriority}
      />

      <Buttons />
    </form>
  );
};

export default Form;
