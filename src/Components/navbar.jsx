import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-5 flex justify-between">
      <div className="text-2xl font-bold">Sultan Saleemi</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/skills" className="hover:text-yellow-400">Skills</Link>
        <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
