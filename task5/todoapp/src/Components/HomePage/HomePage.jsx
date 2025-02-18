import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../BackgroundChange/BackgroundChange";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const HomePage = () => {
  const { bgColor, listColor } = useContext(ThemeContext);
  // const [value, setValue] = useState([]);
  // function handleChange(e) {
  //   setValue(e.target.value);
  // }

  // useEffect(() => {
  //   localStorage.setItem("value", JSON.stringify(value));
  // }, [value]);

  // console.log(value);
  const arr = [
    "10 minutes meditation",
    "Read for 1 hr",
    "Read for 1 hr",
    "Read for 1 hr",
    "10 minutes meditation",
    "Read for 1 hr",
    "10 minutes meditation",
    "Read for 1 hr",
    "10 minutes meditation",
    "Read for 1 hr",
    "10 minutes meditation",
    "Read for 1 hr",
  ];
  return (
    <div style={bgColor} className="relative h-[62vh] md:h-[62vh]">
      <div
        // style={listColor}
        className="absolute top-[-7%] left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex justify-center items-center flex-col pt-4 pb-4 z-10  "
      >
        <div className="px-4">
          <div
            className=" mt-2 mb-2  flex h-14 p-5 rounded-md shadow-2xl"
            style={listColor}
          >
            <input type="checkbox" className="mr-3 rounded-full " />
            <input
              style={{ ...listColor, outline: "none" }}
              className="rounded-sm  "
              placeholder=" Create a new todo list "
              // value={value}
              // onChange={handleChange}
            ></input>
          </div>

          <div className="p-1 mt-8  rounded-md shadow-2xl " style={listColor}>
            <div className="max-h-60 overflow-y-auto">
              <ul>
                {arr.map((value, index) => (
                  <li
                    key={index}
                    className="p-4 flex justify-between items-center text-xs md:text-base"
                  >
                    <div>
                      <input type="checkbox" className="mr-3 rounded-full" />
                      {value}
                    </div>
                    <ClearRoundedIcon />
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-28 md:gap-8 text-xs md:text-sm text-gray-500 cursor-pointer">
                <p className="flex ">5 items left</p>
                <div className=" gap-2 md:mt-0 hidden md:flex ">
                  <button className="text-blue-500">All</button>
                  <button>Active</button>
                  <button>Completed</button>
                </div>
                <div className="text-blue-500">Clear completed</div>
              </div>
            </div>
          </div>
          <div
            className="  rounded-md shadow-2xl mt-4 flex  md:hidden justify-center items-center gap-2"
            style={listColor}
          >
            <div className=" flex gap-8 md:mt-0 p-2 text-xs md:text-base ">
              <button className="text-blue-500">All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
          </div>
          <div className="flex text-gray-400 ml-20 mt-8 text-xs md:text-base ">
            Drag and Drop to reorder list
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
