import React from "react";

const PostingSchedule = () => {
  return (
    <div className="bg-yellow-300  rounded-lg shadow-md p-6 m-8">
      {/* Heading */}
      <h2 className=" text-gray-900 mb-4 flex justify-start text-3xl">
        Maintain a consistent<br></br> posting schedule.
      </h2>

      {/* Calendar Section */}
      <div className="border rounded-md w-1/2">
        <div className="flex justify-between items-center bg-purple-600 text-white px-4 py-2">
          <span>August 2024</span>
          <span>Week1</span>
        </div>
        <img src="date.png" alt="Calendar" className="w-full" />
      </div>
    </div>
  );
};

export default PostingSchedule;
