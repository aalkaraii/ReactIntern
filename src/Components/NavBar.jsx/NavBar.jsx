import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbar = () => {
    showMenu ? setShowMenu(false) : setShowMenu(!showMenu);
  };

  return (
    <div className="flex md:flex-row lg:flex-row flex-col justify-between items-center w-full p-10">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="w-[219.54px] h-[56px] pt-2.5 pb-2.5 gap-2.5">
          <img src="public/logo/logo.png"></img>
        </div>

        <div
          className="flex-row justify-end items-center w-full gap-20  lg:flex"
          showMenu={showMenu}
        >
          <div className="md:flex lg:flex  hidden justify-end items-end md:flex-row lg:flex-row p-4 md:gap-20 lg:gap-20 flex-col">
            <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">About Us</Link>
            <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">Services</Link>
            <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">Use Cases</Link>
            <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">Pricing</Link>
            <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">Blog</Link>
          </div>
          <Link className="border pl-6 pr-6 p-2 rounded-md w-fit hidden md:flex lg:flex">
            Request a quote
          </Link>
        </div>

        <button
          className="flex flex-row justify-end items-center w-full md:gap-20 md:hidden lg:hidden xl:hidden pb-2"
          onClick={navbar}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      <div className="md:hidden flex flex-col items-center border">
        {/* Mobile Menu Links */}
        <div
          className={`${
            showMenu
              ? "flex opacity-100 translate-x-0"
              : "hidden opacity-0 translate-x-10"
          } flex-col justify-end items-center w-3xl gap-4 p-4 absolute bg-gray-300 transition-all duration-300 ease-in-out`}
        >
          <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">About Us</Link>
          <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">Services</Link>
          <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">Use Cases</Link>
          <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">Pricing</Link>
          <Link className="hover:bg-[#B9FF66] p-2 rounded-xl">Blog</Link>
          <Link
            className={`${
              showMenu
                ? "flex opacity-100 translate-x-0"
                : "hidden opacity-0 translate-x-10"
            } border pl-6 pr-6 p-2 rounded-md w-fit absolute transition-all duration-300 ease-in-out`}
          >
            Request a quote
          </Link>
        </div>

        {/* Request a Quote button for mobile */}
      </div>
    </div>
  );
};

export default NavBar;
