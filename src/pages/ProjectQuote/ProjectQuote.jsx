import React, { useState } from "react";
import { HiMiniCommandLine } from "react-icons/hi2";

const ProjectQuote = () => {
  const [checked, setIsChecked] = useState([]);

  const services = [
    { id: 1, name: "Development", icon: <HiMiniCommandLine /> },
    { id: 2, name: "Web Design", icon: <HiMiniCommandLine /> },
    { id: 3, name: "Marketing", icon: <HiMiniCommandLine /> },
    { id: 4, name: "Others", icon: <HiMiniCommandLine /> },
  ];

  function checkHandler(id) {
    setIsChecked((prev) =>
      prev.includes(id)
        ? prev.filter((serviceId) => serviceId !== id)
        : [...prev, id]
    );
  }

  return (
    <div className="flex justify-start w-[698px]">
      <div className="rounded-3xl bg-white ">
        <div className="text-start pt-10">
          <p className="font-bold text-xl text-gray-900">Our Services</p>
          <p className="text-gray-500 pt-4">
            Please select which service you are interested in.
          </p>
        </div>

        {/* Service Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => checkHandler(service.id)}
              className={`flex items-center gap-3 border p-4 rounded-xl w-[284px] cursor-pointer transition-all 
                ${
                  checked.includes(service.id)
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
            >
              <div className="text-blue-600 text-lg">{service.icon}</div>
              <p className="text-gray-700 font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectQuote;
