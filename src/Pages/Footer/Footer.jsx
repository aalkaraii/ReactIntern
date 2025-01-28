import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row bg-[#191A23] text-white">
        <div className="logos-container ld:flex md:flex justify-between gap-8  h-24 md:pl-4  grid grid-cols-3 w-full cursor-pointer">
          <Link
            to={"/"}
            className="w-[219.54px] h-[56px]  pb-2.5 gap-2.5 cursor-pointer"
          >
            <img src="src/assets/logo.png"></img>
          </Link>
        </div>
        <div className=" flex flex-row gap-2 w-[510px]">
          <Link to={"/AboutUs"} className="underline ">
            About us
          </Link>
          <Link to={"/Services"} className="underline ">
            Services
          </Link>
          <Link to={"/UseCases"} className="underline ">
            Use Cases
          </Link>
          <Link to={"/Pricing"} className="underline ">
            Pricing
          </Link>
          <Link to={"/Blog"} className="underline ">
            Blog
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
