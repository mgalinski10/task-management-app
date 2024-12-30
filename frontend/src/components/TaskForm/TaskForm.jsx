import styles from "./TaskForm.module.scss";
import axios from "axios";
import { useState } from "react";
import { useTask } from "../../context/TaskContext";
import { useUser } from "../../context/UserContext";
import TaskDetailsForm from "./TaskDetailsForm/TaskDetailsForm";
import Form from "../Form/Form";

const TaskForm = ({ initialData = {} }) => {
  const { closeForm, fetchTasks } = useTask();
  const { user } = useUser();
  const [taskName, setTaskName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [priority, setPriority] = useState(initialData.priority || "medium");
  const [date, setDate] = useState(initialData.date || "");

  const resetForm = () => {
    setTaskName("");
    setDescription("");
    setPriority("medium");
    setDate("");
  };

  const isEdit = initialData && initialData._id;

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${initialData._id}`, {
        withCredentials: true,
      });

      resetForm();
      closeForm();
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      fetchTasks();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = {
      name: taskName,
      description,
      priority,
      date,
      userId: user.id,
    };

    try {
      if (!initialData._id) {
        await axios.post("http://localhost:5000/api/tasks", task, {
          withCredentials: true,
        });
        resetForm();
      } else {
        await axios.put(
          `http://localhost:5000/api/tasks/${initialData._id}`,
          task,
          {
            withCredentials: true,
          }
        );
      }

      closeForm();
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      fetchTasks();
    }
  };

  const handleCloseForm = () => {
    closeForm();
  };

  return (
    <Form
      title="Task:"
      isEdit={isEdit}
      actionBtnTitle="Save Task"
      deleteBtnTitle="Delete Task"
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      onCloseForm={handleCloseForm}
    >
      <input
        className={styles.title}
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
    </Form>
  );
};

export default TaskForm;
