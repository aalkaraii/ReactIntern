import React from "react";

const SocialMediaSchedule = () => {
  return (
    <div className="bg-violet-300 rounded-lg shadow-md p-6 m-8">
      <div className="font-bold flex justify-center items-center text-2xl">
        Schedule to social media.
      </div>
      <div className="w-full ">
        <p>Best time to post</p>
        <div className="bg-gray-500 w-full h-0.5"></div>
        <div className=" flex gap-4 ">
          <p>mon</p>
          <p>tue</p>
          <p>wed</p>
          <p>thu</p>
          <p>fri</p>
          <p>sat</p>
          <p>sun</p>
        </div>
        <div className="w-">
          <img src="week.png"></img>
        </div>
      </div>
      <p className="text-2xl flex justify-center items-center flex-col">
        <p>Optimize post timings to publish</p>
        <p> content at the perfect timer for </p>
        <p>your audience.</p>
      </p>
    </div>
  );
};

export default SocialMediaSchedule;
