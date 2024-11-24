import React, { createContext, useState, useContext } from "react";

const TodayContext = createContext();

export const TodayPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    console.log("klik");
    setIsOpen((prevState) => !prevState);
  };

  return (
    <TodayContext.Provider
      value={{
        toggleForm,
        isOpen,
      }}
    >
      {children}
    </TodayContext.Provider>
  );
};

export const useToday = () => {
  return useContext(TodayContext);
};
