import React, { useContext, useState, useEffect } from "react";
import ProjectQuote from "../pages/ProjectQuote/ProjectQuote";
import HeaderOnly from "../pages/Header/HeaderOnly";
import Services from "../pages/Submit/Submit";
import ProjectBudget from "../pages/ProjectBudget/ProjectBudget";
import ContactDetails from "../pages/ContactDetails.jsx/ContactDetails";
import { ContactContext } from "../pages/ContactDetails.jsx/Context";

const HomePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isCheckedValid, setIsCheckedValid] = useState(false);
  const [isSelectValid, setIsSelectValid] = useState(false);
  const { formik } = useContext(ContactContext);

  // Ensure validation updates when form changes
  useEffect(() => {
    formik.validateForm().then((errors) => {
      setIsFormValid(Object.keys(errors).length === 0);
    });
  }, [formik.values]);

  const steps = [
    {
      name: "Contact Details",
      component: <ContactDetails isSubmitTrue={setIsFormValid} />,
    },
    {
      name: "Project Quote",
      component: <ProjectQuote isClickTrue={setIsCheckedValid} />,
    },
    {
      name: "Project Budget",
      component: <ProjectBudget isSelectTrue={setIsSelectValid} />,
    },
    {
      name: "Services",
      component: <Services isSubmitTrue={setIsFormValid} />,
    },
  ];

  const progress = (currentStep / (steps.length - 1)) * 100;

  const isNextDisabled =
    (currentStep === 0 && !isFormValid) ||
    (currentStep === 1 && !isCheckedValid) ||
    (currentStep === 2 && !isSelectValid);

  const handleNext = () => {
    if (!isNextDisabled) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <HeaderOnly />
      <div className="p-6 w-[700px] flex flex-col justify-center items-center">
        <div className="mt-1 border-gray-200 w-[700px] border shadow-2xl pt-10 rounded-3xl bg-white">
          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Step Indicator */}
          <div className="absolute top-45 left-77 flex justify-between p-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center px-24">
                <div
                  className={`w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full transition-all duration-300 ${
                    currentStep + 1 > num
                      ? "bg-blue-700 text-white"
                      : currentStep + 1 === num
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {num}
                </div>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="p-6">{steps[currentStep].component}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between p-6">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded ${
                currentStep === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
            >
              Previous
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`px-4 py-2 rounded ${
                isNextDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white cursor-pointer"
              }`}
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
