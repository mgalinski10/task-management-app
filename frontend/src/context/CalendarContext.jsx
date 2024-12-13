import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CalendarContext = createContext();

export const CalendarPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [activeEvent, setActiveEvent] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoadingEvents(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const openEditForm = (event) => {
    setActiveEvent(event);
    setIsOpen(true);
  };

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <CalendarContext.Provider
      value={{
        closeForm,
        openForm,
        openEditForm,
        isOpen,
        events,
        fetchEvents,
        loadingEvents,
        activeEvent,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => {
  return useContext(CalendarContext);
};
