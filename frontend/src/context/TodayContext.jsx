import React, { createContext, useState, useContext, act } from "react";

const TodayContext = createContext();

export const TodayPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTask, setActiveTask] = useState(null);

  const toggleForm = () => {
    setIsEditing(false);
    setActiveTask(null);
    setIsOpen((prevState) => !prevState);
  };

  const toggleEditForm = (task) => {
    setIsEditing(true);
    setActiveTask(task);
    setIsOpen(true);
  };

  return (
    <TodayContext.Provider
      value={{
        toggleForm,
        isOpen,
        toggleEditForm,
        isEditing,
        activeTask,
      }}
    >
      {children}
    </TodayContext.Provider>
  );
};

export const useToday = () => {
  return useContext(TodayContext);
};
