import React, { useState } from "react";
import minus from "../../assets/minus.png";
import add from "../../assets/add.png";
const Working = () => {
  const work = [
    {
      id: 1,
      text: "Consultation",
      context:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      text: "Research and Strategy Development",
      context:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 3,
      text: "Implementation",
      context:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 4,
      text: "Monitoring and Optimization",
      context:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 5,
      text: "Reporting and Communication",
      context:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 6,
      text: "Continual Improvement",
      context:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];

  const [iconState, setIconState] = useState(Array(work.length).fill(false));

  const changeIcon = (index) => {
    setIconState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-red pt-20 p-4">
      <div className="flex md:flex-row md:justify-start md:items-start justify-center items-center flex-col h-[51px] p-2 gap-4">
        <div className="text-2xl p-0 flex-col gap-1  inline-block ">
          <span className="inline bg-[#B9FF66] rounded-lg font-bold p-2">
            Our Working Process
          </span>
        </div>
        <div className="w-[292px] text-center md:text-start">
          Step-by-Step Guide to Achieving Your Business Goals
        </div>
      </div>
      <div className="flex flex-col gap-[30px] pt-16 ">
        {work.map((item, index) => (
          <div
            key={item.id}
            className={`border-b-6 md:rounded-4xl ${
              iconState[index] ? "rounded-4xl" : "rounded-full"
            } border-black border-1 p-[41px] flex relative ${
              iconState[index] ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
            }`}
          >
            <div className="flex justify-between items-center w-full">
              <div>
                <div className="flex">
                  <div className="text-3xl font-medium pr-3">0{item.id}</div>
                  <div className="font-semibold pt-2">{item.text}</div>
                </div>
                <div
                  className={`flex flex-col ${
                    iconState[index] ? "flex" : "hidden"
                  }`}
                >
                  <div className="pt-[30px] pb-[30px]">
                    <div className="bg-gray-500 h-0.5 w-full"></div>
                  </div>
                  <div>{item.context}</div>
                </div>
              </div>
              <button
                className="cursor-pointer h-[50px] w-[68px] absolute right-4 top-4"
                onClick={() => changeIcon(index)}
              >
                <img
                  src={iconState[index] ? { minus } : { add }}
                  alt={iconState[index] ? "minus" : "add"}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;
