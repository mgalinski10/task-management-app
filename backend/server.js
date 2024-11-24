const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const PORT = 5000;
const app = express();

// Połączenie z bazą danych
connectDB();

// Middleware do parsowania JSON
app.use(express.json());

// Definicja tras
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
