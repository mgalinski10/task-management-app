const mongoose = require("mongoose");

// Funkcja do połączenia z MongoDB
const connectDB = async () => {
  try {
    const mongoURI =
      "mongodb+srv://michalg359:admin@todoapp.tvkpn.mongodb.net/?retryWrites=true&w=majority&appName=TodoApp";

    // Łączenie z bazą danych MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
