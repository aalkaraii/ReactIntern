import React, { useState } from "react";

const RoundedCheckBox = ({ isChecked, checkHanlder }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={checkHanlder}
        />
        <div
          className={`w-6 h-6 border-2 rounded-full flex items-center justify-center ${
            isChecked
              ? "bg-blue-500 border-blue-500"
              : "bg-white border-gray-300"
          }`}
        >
          {isChecked && (
            <svg
              className="w-4 h-4 text-white fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>
      </div>
    </label>
  );
};

export default RoundedCheckBox;
