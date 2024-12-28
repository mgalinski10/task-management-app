require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const authenticate = (req, res, next) => {
  // Odczytanie tokenu z ciasteczka
  const token = req.cookies.token;

  // Jeśli token nie istnieje, zwróć błąd 401 (Unauthorized)
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Weryfikacja tokenu
    const payload = jwt.verify(token, SECRET_KEY);
    req.userId = payload.userId; // Dodanie userId do req, aby było dostępne w kolejnych middleware'ach i trasach
    next(); // Kontynuacja do następnego middleware lub trasy
  } catch (error) {
    console.error("Token verification error:", error); // Logowanie błędu weryfikacji tokenu
    res.status(403).json({ error: "Invalid token" }); // Jeśli token jest nieprawidłowy, zwróć 403
  }
};

module.exports = authenticate;
