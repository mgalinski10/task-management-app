import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "./UserContext";

const StickyWallContext = createContext();

export const StickyWallPageProvider = ({ children }) => {
  const { user } = useUser();
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
      // console.log(`Error while fetching tasks: ${err}`);
    }
  };

  useEffect(() => {
    if (user) {
      const socket = new WebSocket("ws://localhost:5000");

      socket.onopen = () => {
        console.log("WebSocket NOTES connected");
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.type === "NOTE_UPDATED") {
          fetchNotes();
        }
      };

      return () => {
        socket.close();
      };
    }
  }, [user]);

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
