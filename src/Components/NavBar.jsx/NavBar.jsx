import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="font-['Space_Grotesk'] z- flex md:flex-row lg:flex-row flex-col justify-between items-center md:max-w-[1280px] m-auto p-4  ">
        <div className="flex flex-row justify-between items-center w-full">
          <Link to="/" className="w-[200px] h-[56px] p-2">
            <img src="src/assets/logo.png" alt="Logo" />
          </Link>
          <div className="hidden md:flex lg:flex justify-end items-center gap-10 flex-1">
            <Link to="/AboutUs" className="hover:bg-[#B9FF66] p-2 rounded-xl">
              About Us
            </Link>
            <Link
              to="/NavServices"
              className="hover:bg-[#B9FF66] p-2 rounded-xl"
            >
              Services
            </Link>
            <Link to="/UseCases" className="hover:bg-[#B9FF66] p-2 rounded-xl">
              Use Cases
            </Link>
            <Link to="/Pricing" className="hover:bg-[#B9FF66] p-2 rounded-xl">
              Pricing
            </Link>
            <Link to="/Blog" className="hover:bg-[#B9FF66] p-2 rounded-xl">
              Blog
            </Link>
            <Link className="border px-8 py-3 rounded-md hidden md:flex lg:flex">
              Request a quote
            </Link>
          </div>
          <button
            className="md:hidden lg:hidden xl:hidden p-2"
            onClick={navbar}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed top-0 right-0 h-full w-64 bg-gray-300 z-50 flex flex-col gap-4 p-4 transition-transform duration-700 ease-in-out">
          <Link
            to="/AboutUs"
            onClick={navbar}
            className="hover:bg-[#B9FF66] p-4 border-b"
          >
            About Us
          </Link>
          <Link
            to="/NavServices"
            onClick={navbar}
            className="hover:bg-[#B9FF66] p-4 border-b"
          >
            Services
          </Link>
          <Link
            to="/UseCases"
            onClick={navbar}
            className="hover:bg-[#B9FF66] p-4 border-b"
          >
            Use Cases
          </Link>
          <Link
            to="/Pricing"
            onClick={navbar}
            className="hover:bg-[#B9FF66] p-4 border-b"
          >
            Pricing
          </Link>
          <Link
            to="/Blog"
            onClick={navbar}
            className="hover:bg-[#B9FF66] p-4 border-b"
          >
            Blog
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBar;
