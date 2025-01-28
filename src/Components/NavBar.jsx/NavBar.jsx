import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import FirstPage from "../../FirstPage.jsx/FirstPage";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import NavServices from "../../Pages/NavServices/NavServices";
import UseCases from "../../Pages/UseCases/UseCases";
import Pricing from "../../Pages/Pricing/Pricing";
import Blog from "../../Pages/Blog/Blog";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbar = () => {
    showMenu ? setShowMenu(false) : setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="flex md:flex-row lg:flex-row flex-col justify-between items-center max-w-[1280px] m-auto p-4">
        <div className="flex flex-row justify-between items-center w-full">
          <Link
            to={"/"}
            className="w-[219.54px] h-[56px] pt-2.5 pb-2.5 gap-2.5 cursor-pointer"
          >
            <img src="src/assets/logo.png"></img>
          </Link>

          <div className="flex-row justify-end items-center w-full gap-20  lg:flex">
            <div className="md:flex lg:flex  hidden justify-end items-end md:flex-row lg:flex-row p-4 md:gap-20 lg:gap-20 flex-col">
              <Link
                to={"/AboutUs"}
                className="hover:bg-[#B9FF66] p-2 rounded-xl"
              >
                About Us
              </Link>
              <Link
                to={"/NavServices"}
                className="hover:bg-[#B9FF66] p-2 rounded-xl"
              >
                Services
              </Link>
              <Link
                to={"/UseCases"}
                className="hover:bg-[#B9FF66] p-2 rounded-xl"
              >
                Use Cases
              </Link>
              <Link
                to={"/Pricing"}
                className="hover:bg-[#B9FF66] p-2 rounded-xl"
              >
                Pricing
              </Link>
              <Link to={"/Blog"} className="hover:bg-[#B9FF66] p-2 rounded-xl">
                Blog
              </Link>
            </div>
            <Link className="border pl-6 pr-6 p-2 rounded-md w-fit hidden md:flex lg:flex">
              Request a quote
            </Link>
          </div>

          <button
            className="flex flex-row justify-end items-center w-full md:gap-20 md:hidden lg:hidden xl:hidden pb-2 "
            onClick={navbar}
            Link
            to={"/"}
          >
            <RxHamburgerMenu />
          </button>
        </div>

        <div className="md:hidden flex flex-col items-center border">
          {/* Mobile Menu Links */}
          <div
            className={`fixed top-22  right-0 h-full  w-64 bg-gray-300  z-50  flex flex-col gap-4 transition-transform duration-700 ease-in-out ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Link
              to={"/AboutUs"}
              onClick={navbar}
              className="hover:bg-[#B9FF66] border-b-1 p-4  "
            >
              About Us
            </Link>
            <Link
              to={"/NavServices"}
              onClick={navbar}
              className="hover:bg-[#B9FF66] border-b-1 p-4  "
            >
              Services
            </Link>
            <Link
              to={"/UseCases"}
              onClick={navbar}
              className="hover:bg-[#B9FF66] border-b-1 p-4 "
            >
              Use Cases
            </Link>
            <Link
              to={"/Pricing"}
              onClick={navbar}
              className="hover:bg-[#B9FF66] border-b-1 p-4 "
            >
              Pricing
            </Link>
            <Link
              to={"/Blog"}
              onClick={navbar}
              className="hover:bg-[#B9FF66] border-b-1 p-4  "
            >
              Blog
            </Link>
          </div>

          {/* Request a Quote button for mobile */}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/NavServices" element={<NavServices />} />
        <Route path="/UseCases" element={<UseCases />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default NavBar;
