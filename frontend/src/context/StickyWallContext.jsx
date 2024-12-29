import React, { createContext, useContext, useState } from "react";

const StickyWallContext = createContext();

export const StickyWallPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNote, setActiveNote] = useState(null);

  const openEditForm = (note) => {
    setActiveNote(note);
    setIsOpen(true);
  };

  const openForm = () => {
    setIsOpen(true);
    setActiveNote(null);
  };

  const closeForm = () => {
    setIsOpen(false);
    setActiveNote(null);
  };

  return (
    <StickyWallContext.Provider
      value={{
        closeForm,
        openForm,
        isOpen,
        activeNote,
        openEditForm,
      }}
    >
      {children}
    </StickyWallContext.Provider>
  );
};

export const useStickyWall = () => {
  return useContext(StickyWallContext);
};
