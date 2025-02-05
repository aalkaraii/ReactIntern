import React from "react";

const HeaderOnly = () => {
  return (
    <div className="flex justify-centre items-centre max-w-[1440px]">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-3xl p-2">Get a project quote</p>
        <p className="w-[560px] text-center p-2">
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </p>
      </div>
    </div>
  );
};

export default HeaderOnly;
