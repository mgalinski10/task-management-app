const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const eventRoutes = require("./routes/eventRoutes");
const stickyNoteRoutes = require("./routes/stickyNoteRoutes");

const PORT = 5000;
const app = express();
app.use(cors());

// Połączenie z bazą danych
connectDB();

// Middleware do parsowania JSON
app.use(express.json());

// Definicja tras
app.use("/api", taskRoutes);
app.use("/api", eventRoutes);
app.use("/api", stickyNoteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
