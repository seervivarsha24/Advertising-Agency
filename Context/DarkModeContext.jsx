// src/contexts/DarkModeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const DarkModeContext = createContext();

// Custom Hook to use Dark Mode Context
export const useDarkMode = () => useContext(DarkModeContext);

// Provider Component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage to persist dark mode preference
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  // Persist dark mode in localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};