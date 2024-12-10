import React, { createContext, useContext, useState } from "react";

const CalendarContext = createContext();

export const CalendarPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <CalendarContext.Provider value={{ closeForm, openForm, isOpen }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => {
  return useContext(CalendarContext);
};
