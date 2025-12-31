import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/home';

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
