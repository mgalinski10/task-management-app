import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "./UserContext";

const StickyWallContext = createContext();

export const StickyWallPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNote, setActiveNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const { user } = useUser();

  const fetchNotes = async () => {
    if (!user) return;
    try {
      const response = await axios.get("http://localhost:5000/api/notes", {
        withCredentials: true,
      });
      const userNotes = response.data.filter((note) => note.userId === user.id);
      setNotes(userNotes);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

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
        fetchNotes,
        notes,
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
