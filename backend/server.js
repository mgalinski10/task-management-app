const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const stickyNoteRoutes = require("./routes/stickyNoteRoutes");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const PORT = 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api", taskRoutes);
app.use("/api", stickyNoteRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
