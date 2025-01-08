"use client";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="text-black bg-violet-600 m-9 p-5 border rounded-lg flex flex-col justify-center items-center">
      <div className="flex text-white text justify-center items-center flex-col text-3xl ">
        Social Media
        <div className="flex">
          <div className="text-yellow-400">10x</div>
          <p className="italic ">Faster</p>
        </div>
        with AI
      </div>
      <div className=" ">
        <div className="flex justify-center items-center gap-3">
          <div className=" text-yellow-400">★</div>
          <div className=" text-yellow-400">★</div>
          <div className=" text-yellow-400">★</div>
          <div className=" text-yellow-400">★</div>
          <div className=" text-yellow-400">★</div>
        </div>

        <p className=" text-white ">Over 4,000 5-star reviews</p>
      </div>
    </div>
  );
};

export default SocialMedia;
