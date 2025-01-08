import React from "react";

const Post = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-8 ">
      <h1>Create and schedule content</h1>
      <h1>quicker.</h1>
      <button className="text-yellow-500 flex items-center bg-violet-500 border border-gray-300 rounded-full p-3 shadow-sm gap-3">
        Create Post
        <p className=" text-yellow-500">★</p>
      </button>
    </div>
  );
};

export default Post;
