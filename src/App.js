import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState"
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {





  return (
    <>
    <NoteState>

    
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </div>
      </NoteState>
    </>
  );
}

export default App;
