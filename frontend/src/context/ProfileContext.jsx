import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ProfileContext = createContext();

export const ProfilePageProvider = ({ children }) => {
  const [profileDetails, setProfileDetails] = useState();

  const fetchProfileDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/user-details",
        {
          withCredentials: true,
        }
      );

      setProfileDetails(response.data || {});
    } catch (err) {
      console.log(`Error while fetching profile details: ${err}`);
    }
  };

  return (
    <ProfileContext.Provider value={{ fetchProfileDetails, profileDetails }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  return useContext(ProfileContext);
};
