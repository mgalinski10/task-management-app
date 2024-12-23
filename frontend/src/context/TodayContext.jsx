import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const TodayContext = createContext();

export const TodayPageProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

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
    <TodayContext.Provider
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
    </TodayContext.Provider>
  );
};

export const useToday = () => {
  return useContext(TodayContext);
};
