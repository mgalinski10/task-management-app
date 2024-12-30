import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const StickyWallContext = createContext();

export const StickyWallPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNote, setActiveNote] = useState(null);
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/notes", {
        withCredentials: true,
      });
      setNotes(response.data);
    } catch (err) {
      console.log(`Error while fetching tasks: ${err}`);
    }
  };

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
        notes,
        fetchNotes,
      }}
    >
      {children}
    </StickyWallContext.Provider>
  );
};

export const useStickyWall = () => {
  return useContext(StickyWallContext);
};
