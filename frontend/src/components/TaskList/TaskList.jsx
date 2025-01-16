import styles from "./TaskList.module.scss";
import TaskItem from "./TaskItem/TaskItem";
import AddNewTaskButton from "./AddNewTaskButton/AddNewTaskButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useTask } from "../../context/TaskContext";

const TaskList = () => {
  const { tasks, fetchTasks } = useTask();
  const [filter, setFilter] = useState("all");

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.priority === filter;
  });

  return (
    <div>
      <ul className={styles.listWrapper}>
        <AddNewTaskButton />
        <div className={styles.filterWrapper}>
          <FontAwesomeIcon icon={faFilter} />
          <select
            id="priorityFilter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        {filteredTasks.map((task) => (
          <TaskItem key={task._id} taskObj={task} color={adjustColor(task)} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
