import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/screens/Home";
import AllCars from "./components/screens/AllCars";
import SignIn from "./components/screens/SignIn";
import MyCars from "./components/screens/MyCars";
import Profile from "./components/screens/Profile";
import Settings from "./components/screens/Settings";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-cars" element={<AllCars />} />
              <Route path="/my-cars" element={<MyCars />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
