import styles from "./Form.module.scss";
import { useState } from "react";
import { useToday } from "../../context/TodayContext";
import { nanoid } from "nanoid";

import Header from "./Header/Header";
import TaskDetailsForm from "../TaskDetailsForm/TaskDetailsForm";
import Buttons from "./Buttons/Buttons";

const Form = ({ initialData = {}, isEditing = false }) => {
  const [taskName, setTaskName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [priority, setPriority] = useState(initialData.priority || "medium");
  const [date, setDate] = useState(initialData.date || "");

  const { addTask, updateTask, closeForm } = useToday();

  const resetForm = () => {
    setTaskName("");
    setDescription("");
    setPriority("medium");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      updateTask({
        ...initialData,
        name: taskName,
        description,
        priority,
        date,
      });
    } else
      addTask({
        name: taskName,
        description,
        priority,
        date,
        id: nanoid(),
      });

    resetForm();
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <Buttons isEditing={isEditing} />
    </form>
  );
};

export default Form;
