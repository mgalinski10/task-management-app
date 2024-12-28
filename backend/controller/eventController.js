const Event = require("../models/eventModel");

const createEvent = async (req, res) => {
  try {
    const { title, location, start, end } = req.body;
    const userId = req.userId; // Pobieramy userId z tokenu

    // Tworzymy nowy event powiązany z użytkownikiem
    const event = new Event({
      title,
      location,
      start,
      end,
      userId, // Zapisujemy userId w eventach
    });

    // Zapisujemy event w bazie
    await event.save();
    console.log(`Created event: ${event}`);
    res.status(201).json(event); // Odpowiadamy utworzonym eventem
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const userId = req.userId; // Pobieramy userId z tokenu
    console.log("Pobieramy eventy");

    // Pobieramy wszystkie eventy przypisane do użytkownika
    const events = await Event.find({ userId });

    // Przekształcamy eventy do odpowiedniego formatu
    const readyEvents = events.map((event) => {
      return {
        id: event._id,
        title: event.title,
        location: event.location,
        start: event.start,
        end: event.end,
      };
    });

    console.log(`Available events: ${readyEvents}`);
    res.status(200).json(readyEvents); // Zwracamy listę eventów
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

const getEventById = async (req, res) => {
  try {
    const userId = req.userId; // Pobieramy userId z tokenu
    const eventId = req.params.id; // Pobieramy ID eventu z parametru

    // Szukamy eventu po ID i userId
    const event = await Event.findOne({ _id: eventId, userId });

    if (!event) {
      return res
        .status(404)
        .json({ message: "Event not found or unauthorized" });
    }

    console.log(`Found event: ${event}`);
    res.status(200).json(event); // Zwracamy znaleziony event
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error });
  }
};

const updateEvent = async (req, res) => {
  try {
    const userId = req.userId; // Pobieramy userId z tokenu
    const eventId = req.params.id; // Pobieramy ID eventu z parametru

    // Szukamy eventu po ID i userId i aktualizujemy
    const event = await Event.findOneAndUpdate(
      { _id: eventId, userId },
      req.body,
      { new: true }
    );

    if (!event) {
      return res
        .status(404)
        .json({ message: "Event not found or unauthorized" });
    }

    console.log(`Updated event: ${event}`);
    res.status(200).json(event); // Zwracamy zaktualizowany event
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const userId = req.userId; // Pobieramy userId z tokenu
    const eventId = req.params.id; // Pobieramy ID eventu z parametru

    // Szukamy eventu po ID i userId i usuwamy go
    const event = await Event.findOneAndDelete({ _id: eventId, userId });

    if (!event) {
      return res
        .status(404)
        .json({ message: "Event not found or unauthorized" });
    }

    console.log(`Deleted event: ${event}`);
    res.status(200).json({ message: "Event deleted successfully" }); // Potwierdzenie usunięcia
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
