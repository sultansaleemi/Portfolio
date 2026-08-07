import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/home';
import ProjectDetails from "./Components/Projects/ProjectDetails";
import Projects from "./Pages/Project";
import About from "./Pages/About";
import Contact from "./Pages/Contacts";
import DevBackground from "./Components/DevBackground";

import './App.css';

const App = () => {
  return (
    <BrowserRouter basename="/Portfolio">
      <DevBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Project case study slug route */}
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;