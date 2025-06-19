const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const eventRoutes = require("./routes/eventRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/events", eventRoutes);

// Serve frontend static files
app.use(express.static(path.join(__dirname, "frontend")));

// ✅ Fallback route: serve frontend for non-API paths
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(err => console.error("MongoDB connection error:", err));
