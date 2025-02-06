import React from "react";

const Services = () => {
  return (
    <div className="flex justify-start w-[698px] pl-14">
      <div className=" rounded-3xl bg-white">
        <div className="flex flex-col items-center ">
          <div className="h-[157px]  w-[157px]">
            <img src="myform/src/assets/Submit.png"></img>
          </div>
          <p className="font-bold text-xl   text-gray-900">
            Submit your quote request
          </p>
          <p className="text-gray-500 pt-4 w-[503px] text-center">
            Please review all the information you previously typed in the past
            steps, and if all is okay, submit your message to receive a project
            quote in 24 - 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
