import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/home';
import ProjectDetails from "./Components/Projects/ProjectDetails";
import Projects from "./Pages/Project";
import DevBackground from "./Components/DevBackground";
import './App.css';


const App = () => {
  return (
    <HashRouter>
      <DevBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
         {/* 👇 THIS IS THE SLUG ROUTE */}
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        
      </Routes>
    </HashRouter>
  );
};

export default App;
