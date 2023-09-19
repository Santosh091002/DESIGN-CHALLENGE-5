import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/home";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/About"element={<About/>}/>
      <Route path="/Contact"element={<Contact/>}/>
      <Route path="/Signup"element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;