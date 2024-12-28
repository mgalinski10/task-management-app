import styles from "./TaskList.module.scss";
import TaskItem from "./TaskItem/TaskItem";
import AddNewTaskButton from "./AddNewTaskButton/AddNewTaskButton";
import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks", {
          withCredentials: true,
        });
        setTasks(response.data);
      } catch (err) {
        console.log(`Error while fetching tasks: ${err}`);
      }
    };

    fetchTasks();
  }, []);

  const adjustColor = (task) => {
    const priority = task.priority;

    if (priority === "high") {
      return "salmon";
    } else if (priority === "medium") {
      return "rgb(254, 215, 19)";
    } else return "lightgreen";
  };

  return (
    <ul className={styles.listWrapper}>
      <AddNewTaskButton />
      {tasks.map((task) => (
        <TaskItem key={task._id} taskObj={task} color={adjustColor(task)} />
      ))}
    </ul>
  );
};

export default TaskList;
