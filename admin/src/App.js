import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminNavbar from "./components/AdminNavbar";

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleState = (e) => {
    setActiveMenu(e);
  };
  return (
    <>
      <Router>
        <div className="flex text-white">
          <div
            className={
              activeMenu
                ? "w-1/6 hidden lg:block"
                : "w-1/6 block"
            }
          >
            <div
              className="bg-slate-700 z-50 lg:w-1/6 w-56 fixed top-0 left-0 h-screen"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <Sidebar />
            </div>
          </div>
          <div className="min-h-screen w-full lg:w-5/6">
            <AdminNavbar isOpen={activeMenu} toggleModal={handleState} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
