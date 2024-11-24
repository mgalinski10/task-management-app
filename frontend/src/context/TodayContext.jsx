import React, { createContext, useState, useContext, useEffect } from "react";

const TodayContext = createContext();

export const TodayPageProvider = ({ children }) => {
  return <TodayContext.Provider value={{}}>{children}</TodayContext.Provider>;
};

export const useToday = () => {
  return useContext(TodayContext);
};
