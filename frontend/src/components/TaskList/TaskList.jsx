import styles from "./TaskList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import TaskItem from "./TaskItem/TaskItem";
import { useToday } from "../../context/TodayContext";
import { useState, useEffect } from "react";

const AddNewTaskButton = () => {
  const { openForm } = useToday();
  return (
    <button className={styles.buttonWrapper} role="button" onClick={openForm}>
      <FontAwesomeIcon icon={faPlus} className={styles.icon} />
      <p>Add New Task</p>
    </button>
  );
};

const TaskList = () => {
  const { tasks, fetchTasks } = useToday();

  useEffect(() => {
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
