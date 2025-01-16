import React, { useContext } from "react";
import { ThemeContext } from "../BackgroundChange/BackgroundChange";

const HomePage = () => {
  const { bgColor, listColor } = useContext(ThemeContext);

  return (
    <div style={bgColor} className="relative h-screen">
      <div
        style={listColor}
        className="absolute top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex justify-center items-center flex-col p-5 z-10"
      >
        <div className="p-3 m-4">
          <input
            style={listColor}
            className="rounded-sm h-14 p-2 "
            placeholder=" Create a new todo"
          />
        </div>
        <div className="p-3 m-4 rounded-sm " style={listColor}>
          <ul>
            <li className="border p-4">
              {" "}
              <input type="checkbox" className="mr-3 rounded-full" />
              <span className="checkmark"></span>
              Jog around the park
            </li>
            <li className="border p-4">
              {" "}
              <input type="checkbox" className="mr-3 rounded-full" />
              <span className="checkmark"></span>
              10 minutes meditation
            </li>
            <li className="border p-4">
              {" "}
              <input type="checkbox" className="mr-3 rounded-full" />
              <span className="checkmark"></span>
              Read for 1 hr
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-5 text-gray-400">
              <p>5 items left</p>
              <div>All</div>
              <div>Active</div>
              <div>Completed</div>
              <div>Clear completed</div>
            </div>
            <div className="flex text-gray-400">
              Drag and Drop to reorder list
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
