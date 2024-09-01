import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/screens/Home";
import AllCars from "./components/screens/AllCars";
import Login from "./components/screens/Login";
import MyCars from "./components/screens/MyCars";
import Profile from "./components/screens/Profile";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-cars" element={<AllCars />} />
            <Route path="/my-cars" element={<MyCars />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
