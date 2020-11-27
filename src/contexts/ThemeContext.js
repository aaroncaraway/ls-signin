import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDarkMode, toggleDarkMode] = useToggle(true);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
