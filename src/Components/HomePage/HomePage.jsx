import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../BackgroundChange/BackgroundChange";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import RoundedCheckBox from "../RoundedCheckBox";
import { toast } from "react-toastify";

const HomePage = () => {
  const { bgColor, listColor, taskColor } = useContext(ThemeContext);
  const [check, setCheck] = useState();
  const [status, setStatus] = useState("all");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      status: "active",
      text: "Complete online JavaScript course",
      isChecked: false,
    },
    {
      id: 2,
      status: "active",
      text: "Jog around the park 3x",
      isChecked: false,
    },
    {
      id: 3,
      status: "active",
      text: "10 minutes meditation",
      isChecked: false,
    },
    { id: 4, status: "active", text: "Read for 1 hour", isChecked: false },
    { id: 5, status: "active", text: "Pick up groceries", isChecked: false },
    {
      id: 6,
      status: "active",
      text: "Complete Todo App on Frontend Mentor",
      isChecked: false,
    },
  ]);
  const taskCounts = {
    all: tasks.length,
    active: tasks.filter((task) => task.status === "active" && !task.isChecked)
      .length,
    completed: tasks.filter(
      (task) => task.status === "completed" && task.isChecked
    ).length,
  };
  const handelDelete = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    toast.error("Task Deleted !");
    setTasks(deleteTask);
  };
  const handleAllDelete = () => {
    const deleteTask = tasks.filter((task) => !task.isChecked);
    setTasks(deleteTask);
    if (deleteTask.length < tasks.length) {
      toast.error("Deleted ");
    } else {
      toast.info("nothing to delete");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (status === "all") return true;
    if (status === "active") return !task.isChecked;
    if (status === "completed") return task.isChecked;

    return true;
  });

  const handleCheckToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isChecked: !task.isChecked,
              status: !task.isChecked ? "completed" : "active",
            }
          : task
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

      if (newTask !== "") {
        let task = { id: tasks.length + 2, text: newTask, status: "active" };
        setTasks((prev) => [...prev, task]);
        setCheck(true);
        setNewTask("");
        toast.success("success fully added");
      }
    }
  };

  return (
    <div style={bgColor} className="relative h-[62vh] md:h-[62vh]">
      <div
        // style={listColor}
        className="absolute top-[-7%] left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex justify-center items-center flex-col pt-4 pb-4 z-10 sm:min-w-full "
      >
        <div className="pl-1 ">
          <div
            className=" mt-2 mb-2  flex h-14 p-5 rounded-md shadow-2xl gap-2"
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
              className=" mt-1 h-4 pr "
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
                {filteredTasks.map((task) => (
                  <li
                    onClick={() => {
                      handleCheckToggle(task.id);
                    }}
                    key={task.id}
                    className="p-3 flex justify-between items-center text-xs md:text-base  rounded-md group cursor-pointer"
                  >
                    <div className="flex gap-2">
                      <RoundedCheckBox
                        isChecked={task.isChecked}
                        checkHanlder={() => handleCheckToggle(task.id)}
                      />
                      <div
                        style={{
                          textDecoration: task.isChecked
                            ? "line-through"
                            : "none",
                          color: task.isChecked ? "grey" : "inherit",
                        }}
                      >
                        {task.text}
                      </div>
                    </div>

                    <div
                      className="hidden group-hover:block cursor-pointer text-black hover:text-red-600 transition-colors"
                      onClick={() => handelDelete(task.id)}
                    >
                      <ClearRoundedIcon />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-28 md:gap-8 text-xs md:text-sm text-gray-500 cursor-pointer p-2 pt-4">
                <p className="flex "> {taskCounts[status]} items left</p>
                <div className=" gap-2 md:mt-0 hidden md:flex ">
                  <button
                    onClick={() => setStatus("all")}
                    className={` ${
                      status === "all"
                        ? "text-blue-500 font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatus("active")}
                    className={` ${
                      status === "active"
                        ? "text-blue-500 font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setStatus("completed")}
                    className={` ${
                      status === "completed"
                        ? "text-blue-500 font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    Completed
                  </button>
                </div>
                <div className="text-blue-500" onClick={handleAllDelete}>
                  Clear completed
                </div>
              </div>
            </div>
          </div>
          <div
            className="  rounded-md shadow-2xl mt-4 flex  md:hidden justify-center items-center gap-2"
            style={listColor}
          >
            <div className=" flex gap-8 md:mt-0 p-2 text-xs md:text-base ">
              <button
                onClick={() => setStatus("all")}
                className={`${
                  status === "all" ? "text-blue-500 font-bold" : "text-gray-500"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatus("active")}
                className={` ${
                  status === "active"
                    ? "text-blue-500 font-bold"
                    : "text-gray-500"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setStatus("completed")}
                className={` ${
                  status === "completed"
                    ? "text-blue-500 font-bold"
                    : "text-gray-500"
                }`}
              >
                Completed
              </button>
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
