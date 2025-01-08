import React from "react";

const FollowerGrowth = () => {
  return (
    <div className="bg-violet-500 rounded-lg shadow-md p-6 m-8">
      {" "}
      <div className="flex flex-col justify-center items-center p-4">
        <div className="bg-white w-fit flex flex-col justify-center items-center p-4 rounded-xl">
          <div className="follower-growth">
            <div className="flex">
              <div className=" flex flex-col justify-center items-start ">
                <p className="text-gray-500 ">Follower Growth</p>
                <h1 className="text-2xl font-bold">20,642</h1>
              </div>
              <div className="bg-green-200 rounded-lg text-green-800 h-fit mt-4">
                +490%
              </div>
            </div>
          </div>
          <div className="followers">
            <button className="flex items-center bg-white border border-gray-300 rounded-full p-3 shadow-sm gap-3">
              <img src="arrow.png" />
              <div className="flex flex-col">
                <p className="text-gray-500">Followers</p>
                <h2 className="text-lg font-bold">89,532</h2>
              </div>
              <span className="bg-green-200 rounded-lg text-green-800">
                +120%
              </span>
            </button>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center text-white text-2xl ">
          <p>Grow followers</p>
          <p>with non-stop </p>
          <p>content.</p>
        </div>
      </div>
    </div>
  );
};

export default FollowerGrowth;
