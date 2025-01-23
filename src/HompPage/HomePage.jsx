import React from "react";
import NavBar from "../Components/NavBar.jsx/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="lg:flex ">
        <div className="flex flex-col lg:w-1/2 ">
          <div className="pl-8 p-4 text-4xl font-bold ">
            Navigating the digital landscape for success
          </div>
          <div className="text-sm pl-8 p-4 ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </div>
          <div className="pl-8 p-4">
            <button className="border bg-black text-white p-4 w-fit rounded-lg ">
              Book a consultation
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <img src="public/logo/mic.png"></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
