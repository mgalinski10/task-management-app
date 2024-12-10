const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDescription: { type: String, required: false },
  eventLocation: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
