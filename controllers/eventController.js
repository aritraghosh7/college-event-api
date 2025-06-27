const Event = require("../models/Event");

// Create Event
exports.createEvent = async (req, res) => {
  try {
    console.log("Request body:", req.body); // 🔍 debug

    const newEvent = new Event({
      title: req.body.title,
      description: req.body.description || '',
      date: req.body.date,
      location: req.body.location,
      organizer: req.body.organizer || ''
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    console.error("❌ Error creating event:", err.message);
    res.status(400).json({ error: err.message });
  }
};

// Get All Events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get One Event
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Event
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
