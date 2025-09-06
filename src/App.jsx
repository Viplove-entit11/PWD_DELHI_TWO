import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPages from "./Pages/LandingPages";

const App = () => {
  return (
    <BrowserRouter>
      <div class="main-app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPages/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
