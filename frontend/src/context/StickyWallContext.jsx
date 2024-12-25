import React, { createContext, useContext, useState } from "react";

const StickyWallContext = createContext();

export const StickyWallPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <StickyWallContext.Provider value={{ closeForm, openForm, isOpen }}>
      {children}
    </StickyWallContext.Provider>
  );
};

export const useStickyWall = () => {
  return useContext(StickyWallContext);
};
