import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Sultan Saleemi
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        WordPress Developer & Elementor Expert
      </motion.p>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        View My Work
      </motion.button>
    </section>
  );
};

export default Home;
