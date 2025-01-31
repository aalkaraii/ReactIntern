import React from "react";

import HomePage from "./HomePage.jsx/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import NavServices from "./Pages/NavServices/NavServices";
import UseCases from "./Pages/UseCases/UseCases";
import Pricing from "./Pages/Pricing/Pricing";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/NavServices" element={<NavServices />} />
        <Route path="/UseCases" element={<UseCases />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
