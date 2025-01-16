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
    ? { backgroundColor: "#2a2d3e", color: "white" }
    : { backgroundColor: "#d0d3dc", color: "black" };

  const darkIcon = isDarkTheme ? <FaSun /> : <FaMoon />;

  const listColor = isDarkTheme
    ? { backgroundColor: "#4a4e69", color: "white" }
    : { backgroundColor: "white", color: "black" };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        appStyle,
        bgColor,
        darkIcon,
        listColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
