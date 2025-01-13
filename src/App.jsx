import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import PhotoPage from "./pages/PhotoPage";

// import { ThemeContext } from "./pages/context";

const App = () => {
  // const [isDarkTheme, toggleTheme] = useContext(ThemeContext);
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  // const mode = isDarkTheme
  //   ? { backgroundColor: "grey", color: "black" }
  //   : { backgroundColor: "white", color: "black" };
  const backgroundColor = toggle ? "gray" : "white";
  return (
    <>
      {/* <div style={mode}> */}
      <div style={{ backgroundColor }}>
        <nav>
          <ul className=" flex  ">
            <button
              onClick={handleToggle}
              className="text-white  bg-black border border-gray-300 rounded-2xl p-3 shadow-sm w-10px flex justify-center items-center h-fit mt-10 ml-10"
            >
              change Mode ☾ ⋆
            </button>
            <button className="text-white bg-black border border-gray-300 rounded-2xl p-3 shadow-sm mt-10 ml-10">
              <Link to="/FirstPage">posts</Link>
            </button>
            {/* <button className="text-black-500  bg-sky-600 border border-gray-300 rounded-full p-3 shadow-sm">
                <Link to="/SecondPage/:postId"> second page</Link>
              </button> */}
            <button className="text-white  bg-black border border-gray-300 rounded-2xl p-3 shadow-sm mt-10 ml-10">
              <Link to="/PhotoPage">Images </Link>
            </button>
          </ul>
        </nav>
        |
        <Routes>
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/SecondPage/:postId" element={<SecondPage />} />
          <Route path="/PhotoPage" element={<PhotoPage />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
