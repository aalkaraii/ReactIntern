import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "../ContactDetails.jsx/Context";

const ProjectBudget = ({ isSelectTrue }) => {
  const [selectedBudget, setSelectedBudget] = useState(null);
  const { selectBudget } = useContext(ContactContext);

  const budgets = [
    { id: "5000", budget: "$5000" },
    { id: "4000", budget: "$4000" },
    { id: "7000", budget: "$7000" },
    { id: "8000", budget: "$8000" },
  ];

  // Handle budget selection
  const handleSelection = (id) => {
    setSelectedBudget(id);
    selectBudget.setFieldValue("selectedBudget", [id]); // Ensures single selection
  };

  useEffect(() => {
    if (typeof isSelectTrue === "function") {
      isSelectTrue(selectBudget.values.selectedBudget.length > 0);
    }
  }, [selectBudget.values.selectedBudget, isSelectTrue]);

  return (
    <div className="p-6 pt-15 flex justify-center">
      <div className="w-[698px] rounded-3xl bg-white">
        <div className="text-start">
          <p className="font-bold text-xl text-gray-900">
            What’s your project budget?
          </p>
          <p className="text-sm text-gray-500">
            Please select the project budget range you have in mind.
          </p>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
          role="radiogroup"
        >
          {budgets.map((item) => (
            <label
              key={item.id}
              className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all 
              ${
                selectedBudget === item.id
                  ? "border-blue-500 bg-blue-100 shadow-md"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              tabIndex="0"
              onKeyDown={(e) => e.key === "Enter" && handleSelection(item.id)}
            >
              <input
                type="radio"
                name="budget"
                value={item.id}
                checked={selectedBudget === item.id}
                onChange={() => handleSelection(item.id)}
                className="hidden"
                aria-label={`Budget ${item.budget}`}
              />
              <div
                className={`w-4 h-4 border-2 rounded-full flex items-center justify-center
                ${
                  selectedBudget === item.id
                    ? "border-blue-500"
                    : "border-gray-400"
                }`}
              >
                {selectedBudget === item.id && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
              {item.budget}
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};

export default ProjectBudget;
