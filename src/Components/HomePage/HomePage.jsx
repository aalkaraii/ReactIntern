import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../BackgroundChange/BackgroundChange";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import RoundedCheckBox from "../RoundedCheckBox";

const HomePage = () => {
  const { bgColor, listColor } = useContext(ThemeContext);
  const [check, setCheck] = useState();

  const [tasks, setTasks] = useState([
    { id: 1, status: "active", text: "Complete online JavaScript course" },
    { id: 2, status: "active", text: "Jog around the park 3x" },
    { id: 3, status: "active", text: "10 minutes meditation" },
    { id: 4, status: "active", text: "Read for 1 hour" },
    { id: 5, status: "active", text: "Pick up groceries" },
    { id: 6, status: "active", text: "Complete Todo App on Frontend Mentor" },
  ]);
  const handleCheckToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };
  console.log(tasks);
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setNewTask(value);
  }

  const taskAddHandler = () => {
    if (check) {
      console.log("checked task");
      setCheck(false);
      return;
    }
    if (!check) {
      console.log("add task", newTask);
      let task = { id: tasks.length + 2, text: newTask, status: "active" };
      setTasks((prev) => [...prev, task]);
      setCheck(true);
    }
  };

  const handelDelete = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
  };

  return (
    <form style={bgColor} className="relative h-[62vh] md:h-[62vh]">
      <div
        // style={listColor}
        className="absolute top-[-7%] left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex justify-center items-center flex-col pt-4 pb-4 z-10  "
      >
        <div className="pl-1 ">
          <div
            className=" mt-2 mb-2  flex h-14 p-5 rounded-md shadow-2xl"
            style={listColor}
          >
            <div>
              <RoundedCheckBox
                isChecked={check}
                checkHanlder={taskAddHandler}
              />
            </div>
            <input
              style={{ ...listColor, outline: "none" }}
              className="rounded-sm  "
              placeholder=" Create a new todo list "
              type="text"
              value={newTask}
              onChange={handleChange}
              // onSubmit={taskAddHandler}
            ></input>
          </div>

          <div className="p-1 mt-8  rounded-md shadow-2xl " style={listColor}>
            <div className="max-h-60 overflow-y-auto p-1">
              <ul>
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="p-3 flex justify-between items-center text-xs md:text-base"
                  >
                    <div className="flex gap-2">
                      <div
                        isChecked={task.isChecked}
                        checkHanlder={() => handleCheckToggle(task.id)}
                      >
                        <RoundedCheckBox
                        // style={{
                        //   textDecoration: task.isChecked
                        //     ? "line-through"
                        //     : "none",
                        // }}
                        />
                      </div>
                      <div>{task.text}</div>
                    </div>
                    <div onClick={() => handelDelete(task.id)}>
                      <ClearRoundedIcon />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-28 md:gap-8 text-xs md:text-sm text-gray-500 cursor-pointer">
                <p className="flex "> {tasks.length} items left</p>
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
    </form>
  );
};

export default HomePage;
