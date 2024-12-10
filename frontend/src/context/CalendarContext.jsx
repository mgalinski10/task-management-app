import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CalendarContext = createContext();

export const CalendarPageProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events");
        const fetchedEvents = response.data.map((event) => ({
          id: event._id,
          title: event.eventName,
          start: event.start,
          end: event.end,
        }));

        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Funkcja dodająca nowy event
  const addEvent = async (newEvent) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/events",
        newEvent
      );
      const createdEvent = {
        id: response.data._id,
        title: response.data.eventName,
        start: response.data.start,
        end: response.data.end,
      };

      // Aktualizacja lokalnego stanu
      setEvents((prevEvents) => [...prevEvents, createdEvent]);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <CalendarContext.Provider
      value={{ closeForm, openForm, isOpen, events, loading, addEvent }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => {
  return useContext(CalendarContext);
};
