import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/home';
import './App.css'
const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
