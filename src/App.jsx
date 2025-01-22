import React from "react";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="relative">
      <ToastContainer />
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
