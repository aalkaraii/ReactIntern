import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { ThemeContext } from "../BackgroundChange/BackgroundChange";

const Header = () => {
  const { isDarkTheme, toggleTheme, appStyle } = useContext(ThemeContext);

  return (
    <div
      style={appStyle}
      className="relative font-bold  font-mono flex justify-between items-start h-60 z-10 text-xl text-white gap-60 pt-14 p-8 md:justify-center md:text-3xl md:p-24 "
    >
      <div className=" mb-10 ">T O D O</div>
      <button onClick={toggleTheme} className=" mb-12">
        {isDarkTheme ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Header;
