import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useUser } from "./UserContext";

const TodayContext = createContext();

export const TodayPageProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(null);
  const { user, token } = useUser();

  const fetchTasks = async () => {
    if (!user) return;

    try {
      const response = await axios.get("http://localhost:5000/api/tasks", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userTasks = response.data.filter((task) => task.userId === user.id);
      setTasks(userTasks);
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
