const jwt = require("jsonwebtoken");
const SECRET_KEY = "yourSecretKey";

const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    req.userId = payload.userId;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = authenticate;
