import React, { useContext, useEffect } from "react";
import { HiMiniCommandLine } from "react-icons/hi2";
import { ContactContext } from "../ContactDetails.jsx/Context";

const ProjectQuote = ({ isClickTrue }) => {
  const { selectBox } = useContext(ContactContext);

  const services = [
    { id: "Development", name: "Development", icon: <HiMiniCommandLine /> },
    { id: "Web Design", name: "Web Design", icon: <HiMiniCommandLine /> },
    { id: "Marketing", name: "Marketing", icon: <HiMiniCommandLine /> },
    { id: "Others", name: "Others", icon: <HiMiniCommandLine /> },
  ];

  useEffect(() => {
    if (typeof isClickTrue === "function") {
      isClickTrue(selectBox.values.selectedServices.length > 0);
    }
  }, [selectBox.values.selectedServices, isClickTrue]);

  const handleServiceClick = (serviceId) => {
    const newSelected = selectBox.values.selectedServices.includes(serviceId)
      ? selectBox.values.selectedServices.filter((s) => s !== serviceId)
      : [...selectBox.values.selectedServices, serviceId];

    selectBox.setFieldValue("selectedServices", newSelected);
  };

  return (
    <div className="flex justify-start w-[698px]">
      <form
        className="rounded-3xl bg-white p-6"
        onClick={selectBox.handleClick}
      >
        <div className="text-start pt-4">
          <p className="font-bold text-xl text-gray-900">Our Services</p>
          <p className="text-gray-500 pt-2">
            Please select which service you are interested in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className={`flex items-center gap-3 border p-4 rounded-xl w-[284px] cursor-pointer transition-all 
                ${
                  selectBox.values.selectedServices.includes(service.id)
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
            >
              <div className="text-blue-600 text-lg">{service.icon}</div>
              <p className="text-gray-700 font-medium">{service.name}</p>
            </div>
          ))}
        </div>

        {selectBox.errors.selectedServices &&
          selectBox.touched.selectedServices && (
            <div className="text-red-500 pt-2">
              {selectBox.errors.selectedServices}
            </div>
          )}
      </form>
    </div>
  );
};

export default ProjectQuote;
