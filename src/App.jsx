import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/home';
import './App.css'
const App = () => {
  return (
    <BrowserRouter basename="/Portofolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
