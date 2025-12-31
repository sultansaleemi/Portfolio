import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Sultan Saleemi
      </h1>
      <p className="text-xl md:text-2xl mb-6">
        WordPress Developer & Elementor Expert <br />
        I build fast, responsive, and conversion-focused websites
      </p>
      <a 
        href="/projects" 
        className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
      >
        View My Work
      </a>
    </motion.div>
  );
};

export default Home;
