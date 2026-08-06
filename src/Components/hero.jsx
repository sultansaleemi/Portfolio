import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "./Hero.css";
import avatarVideo from "../assets/new1.mp4";

const Hero = () => {
  const name = "Sultan Mehmood Saleemi";
  const letters = name.split("");

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
      setIsMuted(false);
    }
  };

  return (
    <section className="hero hero-3d">
      
      {/* LEFT SIDE */}
      <div className="hero-left">

        {/* NAME (keep animation) */}
        <h1 className="hero-name">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className={`name-letter letter-${index}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 120,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* 🔥 MAIN VALUE HEADING */}
        <motion.h2
          className="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I Build High-Converting WordPress Websites
        </motion.h2>

        {/* 🔥 SHORT POWER TEXT */}
        <motion.p
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Helping businesses increase leads, improve user experience,
          and grow their online presence using WordPress, Elementor, and
          performance-focused design.
        </motion.p>

        {/* 🔥 TRUST SIGNAL (VERY IMPORTANT) */}
        <motion.p
          className="hero-location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          📍 Based in UAE | Available for immediate hiring
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            className="btn primary"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="btn secondary"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </motion.div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right" style={{ position: "relative" }}>
        <motion.video
          ref={videoRef}
          className="hero-avatar-video"
          src={avatarVideo}
          autoPlay
          muted
          loop
          playsInline
          initial={{ x: 150, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        />

        {isMuted && (
          <button onClick={handleUnmute} className="unmute-btn">
            🔊 Sound
          </button>
        )}
      </div>

    </section>
  );
};

export default Hero;