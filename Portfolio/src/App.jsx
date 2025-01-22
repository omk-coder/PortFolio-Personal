/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BackgroundComp from "./Components/BackgroundComp";

const App = () => {
  return (
    <div className=" bg-[#121212] relative overflow-auto no-scrollbar">
    
      <div className="hidden md:block">
        <BackgroundComp />
      </div>

      <main className=" relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
