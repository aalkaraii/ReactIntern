import React, { createContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  const appStyle = isDarkTheme
    ? {
        backgroundImage: "url('src/assets/bg-desktop-dark.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 300,
      }
    : {
        backgroundImage: "url('src/assets/bg-desktop-light.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 300,
      };

  const bgColor = isDarkTheme
    ? { backgroundColor: "#111827", color: "white" }
    : { backgroundColor: "#F7F7F7", color: "black" };

  const darkIcon = isDarkTheme ? <FaSun /> : <FaMoon />;

  const listColor = isDarkTheme
    ? { backgroundColor: "#2a2d3e", color: "white" }
    : { backgroundColor: "white", color: "black" };

  const taskColor = isDarkTheme
    ? { backgroundColor: "#171e32" }
    : { backgroundColor: "#e0e4f0" };
  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        appStyle,
        bgColor,
        darkIcon,
        listColor,
        taskColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
