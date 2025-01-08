import React from "react";

const MultipleAccounts = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-8">
      {/* Buttons */}
      <div className="flex justify-center items-center gap-3 ">
        {/* Instagram Button */}
        <button className="flex items-center bg-white border border-gray-300 rounded-full p-3 shadow-sm gap-3 ">
          <img
            src="instagram.png"
            alt="Instagram"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col text-left">
            <p className="font-semibold text-gray-800">@YourCo</p>
            <p className="text-sm text-gray-500">12K Followers</p>
          </div>
        </button>

        {/* Twitter Button */}
        <button className="flex items-center bg-white border border-gray-300 rounded-full p-3 shadow-sm gap-3 ">
          <img
            src="twitter.png"
            alt="Twitter"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col text-left">
            <p className="font-semibold text-gray-800">@YourCo</p>
            <p className="text-sm text-gray-500">8K Followers</p>
          </div>
        </button>
      </div>

      {/* Text Section */}
      <div className="mt-6 text-start flex flex-col justify-center items-center">
        <h2 className="text-3xl text-gray-900">
          Manage multiple accounts
          <br />
          and platforms.
        </h2>
      </div>
    </div>
  );
};

export default MultipleAccounts;
