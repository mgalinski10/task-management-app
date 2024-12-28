import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const API_URL = "http://localhost:5000/auth";

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

      const { user, token } = response.data;

      setUser(user);
      setToken(token);

      localStorage.setItem("token", token);
    } catch (err) {
      console.log(err);
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
        token,
        login,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
