import React, { useState } from "react";
import { HiMiniCommandLine } from "react-icons/hi2";
import Submit from "../../assets/Submit.png";
const Services = () => {
  const [selectedService, setSelectedService] = useState();

  const services = [
    { id: 1, name: "Development", icon: <HiMiniCommandLine /> },
    { id: 2, name: "Web Design", icon: <HiMiniCommandLine /> },
    { id: 3, name: "Marketing", icon: <HiMiniCommandLine /> },
    { id: 4, name: "Others", icon: <HiMiniCommandLine /> },
  ];

  return (
    <div className="flex justify-start w-[698px] ">
      <div className=" rounded-3xl bg-white">
        <div className="flex flex-col items-center ">
          <div className="h-[157px]  w-[157px]">
            <img src={Submit}></img>
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
