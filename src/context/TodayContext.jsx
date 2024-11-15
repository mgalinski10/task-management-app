import React, { createContext, useState, useContext } from "react";

const TodayContext = createContext();

export const TodayPageProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isAddForm, setIsAddForm] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskKey) => {
    const updatedTasks = tasks.filter((task) => task.key !== taskKey);
    setTasks(updatedTasks);
  };

  const openAddTaskForm = () => {
    setIsAddForm(true);
  };

  const closeAddForm = () => {
    setIsAddForm(false);
  };

  return (
    <TodayContext.Provider
      value={{ tasks, addTask, isAddForm, openAddTaskForm, closeAddForm }}
    >
      {children}
    </TodayContext.Provider>
  );
};

export const useToday = () => {
  return useContext(TodayContext);
};
