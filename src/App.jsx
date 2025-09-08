import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPages from "./Pages/LandingPages";
import RoadConstructions from "./Components/RoadConstructions/RoadConstructions";

const App = () => {
  return (
    <BrowserRouter>
      <div class="main-app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPages/>}></Route>
          <Route path="/maintanence/building-maintanence" element={<RoadConstructions/>}></Route>
          <Route path="/maintanence/roads-maintanence" element={<RoadConstructions/>}></Route>
          <Route path="/work/roads-construction" element={<RoadConstructions/>}></Route>
          <Route path="/work/building-construction" element={<RoadConstructions/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
