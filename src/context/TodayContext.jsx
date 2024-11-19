import React, { createContext, useState, useContext, useEffect } from "react";

const TodayContext = createContext();

export const TodayPageProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isAddNewTaskForm, setIsAddNewTaskForm] = useState(false);
  const [isEditTaskForm, setIsEditTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    console.log("Aktualny task w edycji:", editingTask);
  }, [editingTask]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskID) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskID);
      return updatedTasks;
    });
    closeForm();
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const openAddNewTaskForm = () => {
    setIsEditTaskForm(false);
    setEditingTask(null);
    setIsAddNewTaskForm(true);
  };

  const openEditTaskForm = (task) => {
    setEditingTask(task);
    setIsAddNewTaskForm(false);
    setIsEditTaskForm(true);
  };

  const closeForm = () => {
    setIsEditTaskForm(false);
    setIsAddNewTaskForm(false);
    setEditingTask(null);
  };

  return (
    <TodayContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        isAddNewTaskForm,
        openAddNewTaskForm,
        closeForm,
        editingTask,
        setEditingTask,
        isEditTaskForm,
        setIsEditTaskForm,
        openEditTaskForm,
      }}
    >
      {children}
    </TodayContext.Provider>
  );
};

export const useToday = () => {
  return useContext(TodayContext);
};
