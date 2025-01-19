const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  register,
  login,
  logout,
  checkAuth,
} = require("../controller/authController");
const dotenv = require("dotenv");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.cookie = jest.fn().mockReturnValue(res);
  res.clearCookie = jest.fn().mockReturnValue(res);
  return res;
};

describe("User Controller", () => {
  describe("Register Function", () => {
    it("should return error if email is already in use", async () => {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
          name: "Test User",
        },
      };
      const res = mockResponse();

      User.findOne = jest.fn().mockResolvedValue({ email: req.body.email });

      await register(req, res);

      expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Email already in use" });
    });

    it("should handle server errors", async () => {
      const req = { body: {} };
      const res = mockResponse();

      User.findOne = jest.fn().mockRejectedValue(new Error("Server Error"));

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Server error" });
    });
  });

  describe("Login Function", () => {
    it("should log in a user successfully", async () => {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
        },
      };
      const res = mockResponse();

      User.findOne = jest.fn().mockResolvedValue({
        email: req.body.email,
        password: "hashedPassword",
        _id: "1234",
        name: "Test User",
      });

      bcrypt.compare = jest.fn().mockResolvedValue(true);
      jwt.sign = jest.fn().mockReturnValue("mockedToken");

      await login(req, res);

      expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
      expect(bcrypt.compare).toHaveBeenCalledWith(
        req.body.password,
        "hashedPassword"
      );
      expect(jwt.sign).toHaveBeenCalledWith({ userId: "1234" }, SECRET_KEY, {
        expiresIn: "1h",
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "Logged in successfully",
          user: expect.any(Object),
          token: expect.any(String),
        })
      );
    });

    it("should return error for invalid email or password", async () => {
      const req = {
        body: { email: "wrong@example.com", password: "wrongpass" },
      };
      const res = mockResponse();

      User.findOne = jest.fn().mockResolvedValue(null);

      await login(req, res);

      expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "Invalid email or password",
      });
    });

    it("should handle server errors during login", async () => {
      const req = { body: {} };
      const res = mockResponse();

      User.findOne = jest.fn().mockRejectedValue(new Error("Server Error"));

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Server error" });
    });
  });

  describe("Logout Function", () => {
    it("should log out a user successfully", async () => {
      const req = {};
      const res = mockResponse();

      await logout(req, res);

      expect(res.clearCookie).toHaveBeenCalledWith("token", {
        httpOnly: true,
        sameSite: "Strict",
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "Logged out successfully",
      });
    });
  });
});
