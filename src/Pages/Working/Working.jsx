import React from "react";

const Working = () => {
  const work = [
    { id: 1, text: "Consultation" },
    { id: 2, text: "Research and Strategy Development" },
    { id: 3, text: "Implementation" },
    { id: 4, text: "Monitoring and Optimization" },
    { id: 5, text: "Reporting and Communication" },
    { id: 6, text: "Continual Improvement" },
  ];

  return (
    <div className="bg-red">
      <div className="flex h-[51px]">
        <header className="bg-[#B9FF66] w-fit p-1 rounded-sm font-semibold">
          Our Working Process
        </header>
        <div className="w-[292px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </div>
      </div>
      <div className="flex flex-col gap-[30px] mt-6">
        {work.map((item) => (
          <div
            key={item.id}
            className="border-b-3 rounded-3xl border-black border-1 p-[41px] flex bg-[#F3F3F3]"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex">
                <div className="text-3xl font-medium pr-3">0{item.id}</div>
                <div className="font-semibold pt-2">{item.text}</div>
              </div>
              <button className="cursor-pointer">
                <img
                  src="src/assets/add.png"
                  className="h-[58px] w-[58px]"
                  alt="Add Icon"
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
