import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const API_URL = "http://localhost:5000/auth";
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const response = await axios.get(`${API_URL}/check-auth`, {
        withCredentials: true,
      });

      setUser(response.data.user);
    } catch (err) {
      // console.log("User not authenticated");
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      const { user } = response.data;

      setUser(user);
      navigate("/tasks");
    } catch (err) {
      // console.log(err);
      Swal.fire("Error!", "Invalid email or password. Try again.", "error");
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
      setUser(null);
      Swal.fire("Success!", "You have been logged out.", "success");
    } catch (err) {
      // console.error("Error during logout", err);
      Swal.fire("Error!", "Error during logout.", "error");
    }
  };

  const register = async (userData) => {
    try {
      await axios.post(`${API_URL}/register`, userData);
      Swal.fire(
        "Success!",
        "Registration successful! Please log in.",
        "success"
      );
    } catch (err) {
      // console.log(err);
      Swal.fire(
        "Error!",
        "Account with this email already exists. Try again.",
        "error"
      );
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        login,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
