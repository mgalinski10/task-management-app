const Event = require("../models/eventModel");

const createEvent = async (req, res) => {
  try {
    const { title, location, start, end } = req.body;

    const event = new Event({
      title,
      location,
      start,
      end,
    });

    await event.save();
    console.log(`Created event: ${event}`);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
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
    res.status(200).json(readyEvents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    console.log(`Found event: ${event}`);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error });
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    console.log(`Updated event: ${event}`);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    console.log(`Deleted event: ${event}`);
    res.status(200).json({ message: "Event deleted successfully" });
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
