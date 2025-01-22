import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { ThemeContext } from "../BackgroundChange/BackgroundChange";

const Header = () => {
  const { isDarkTheme, toggleTheme, appStyle } = useContext(ThemeContext);

  return (
    <div
      style={appStyle}
      className="relative font-bold  font-mono flex justify-between items-start h-60 z-10 text-xl text-white gap-60 pt-14 p-8 md:justify-center md:text-3xl md:p-24 max-w-full sm:max-w-full"
    >
      <div className=" mb-10 flex gap-3 ">
        <p>T</p> <p>O</p> <p>D</p>
        <p>O</p>
      </div>
      <button onClick={toggleTheme} className=" mb-12">
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Header;
