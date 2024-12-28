import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "./UserContext";

const CalendarContext = createContext();

export const CalendarPageProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [activeEvent, setActiveEvent] = useState(null);
  const { user } = useUser();

  const fetchEvents = async () => {
    if (!user) return;
    try {
      const response = await axios.get("http://localhost:5000/api/events", {
        withCredentials: true,
      });

      const userEvents = await response.data.filter(
        (event) => event.userId === user.id
      );
      console.log(userEvents);

      setEvents(userEvents);
      console.log(events);
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
    setActiveEvent(null);
  };

  const closeForm = () => {
    setIsOpen(false);
    setActiveEvent(null);
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
