import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { ThemeContext } from "../BackgroundChange/BackgroundChange";

const Header = () => {
  const { isDarkTheme, toggleTheme, appStyle } = useContext(ThemeContext);

  return (
    <div
      style={appStyle}
      className="relative font-bold font-mono flex justify-center items-center text-2xl h-60 gap-16 z-10"
    >
      <div>T O D O</div>
      <button onClick={toggleTheme}>
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Header;
