import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const API_URL = "http://localhost:5000/auth";

  const checkAuth = async () => {
    try {
      const response = await axios.get(`${API_URL}/check-auth`, {
        withCredentials: true,
      });

      setUser(response.data.user);
    } catch (err) {
      console.log("User not authenticated");
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
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
      setUser(null);
    } catch (err) {
      console.error("Error during logout", err);
    }
  };

  const register = async (userData) => {
    try {
      await axios.post(`${API_URL}/register`, userData);
    } catch (err) {
      console.log(err);
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
