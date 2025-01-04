import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const TaskContext = createContext();

export const TaskPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(null);
  const [tasks, setTasks] = useState([]);

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

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "TASK_UPDATED") {
        fetchTasks();
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  const openForm = () => {
    setIsOpen(true);
    setActiveTask(null);
  };

  const closeForm = () => {
    setIsOpen(false);
    setActiveTask(null);
  };

  const openEditForm = (task) => {
    setActiveTask(task);
    setIsOpen(true);
  };

  return (
    <TaskContext.Provider
      value={{
        openForm,
        closeForm,
        isOpen,
        openEditForm,
        activeTask,
        setActiveTask,
        tasks,
        fetchTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
