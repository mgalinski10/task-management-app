const express = require("express");
const cors = require("cors");
const http = require("http");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const stickyNoteRoutes = require("./routes/stickyNoteRoutes");
const authRoutes = require("./routes/authRoutes");
const userDetailsRoutes = require("./routes/userDetailsRoutes");
const cookieParser = require("cookie-parser");
const { setupWebSocket } = require("./config/websocket");

const app = express();
const server = http.createServer(app);

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
app.use("/api", userDetailsRoutes);

setupWebSocket(server);

setupChangeStream();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
