// AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("latestPost");

  return (
    <AppContext.Provider
      value={{ selectedCategory, setSelectedCategory, sortBy, setSortBy }}
    >
      {children}
    </AppContext.Provider>
  );
};
