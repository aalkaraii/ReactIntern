import React, { useState } from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import ProjectQuote from "../pages/ProjectQuote/ProjectQuote";
import HeaderOnly from "../pages/Header/HeaderOnly";
import Services from "../pages/Submit/Submit";
import ProjectBudget from "../pages/ProjectBudget/ProjectBudget";
import ContactDetails from "../pages/ContactDetails.jsx/ContactDetails";

const HomePage = () => {
  const [isFormValid, setIsFormValid] = useState(true);

  const step1Validator = () => {
    console.log("Step 1 Validator:", isFormValid);
    return isFormValid;
  };

  const onFormSubmit = () => {
    alert("form submitted !!!");
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <HeaderOnly />
      <div className="p-6 w-[698px] flex flex-col justify-center items-center">
        <div className="mt-1 border-gray-200 w-[698px] border shadow-2xl pt-10 rounded-3xl bg-white">
          <StepProgressBar
            startingStep={0}
            onSubmit={onFormSubmit}
            steps={[
              {
                label: "Step 1",
                name: "contactDetails",
                content: <ContactDetails isSubmitTrue={setIsFormValid} />, // Pass set function
                validator: step1Validator,
              },
              {
                label: "Step 2",
                name: "projectQuote",
                content: <ProjectQuote />,
              },
              {
                label: "Step 3",
                name: "projectBudget",
                content: <ProjectBudget />,
              },
              {
                label: "Step 4",
                name: "services",
                content: <Services />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
