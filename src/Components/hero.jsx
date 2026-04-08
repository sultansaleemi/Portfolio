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
        <h1 className="hero-name">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className={`name-letter letter-${index}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.06,
                type: "spring",
                stiffness: 120,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.h2
          className="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          WordPress Developer · UI Focused
        </motion.h2>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Hi, I’m Sultan Saleemi. I build **fast, modern, and conversion-focused websites** for businesses, startups, and personal brands.  
With over **5 years of experience** in WordPress, Elementor Pro, Divi, and custom coding, I’ve delivered more than **50+ successful projects**.  

I focus on creating **responsive, SEO-friendly, and user-centric websites** that help businesses grow online.  
When I’m not coding, I love turning Figma designs into pixel-perfect websites and exploring new web technologies.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            className="btn primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>

          <motion.a
            href="#contact"
            className="btn secondary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* RIGHT SIDE - VIDEO */}
      <div className="hero-right" style={{ position: "relative" }}>
        <motion.video
          ref={videoRef}
          className="hero-avatar-video"
          src={avatarVideo}
          autoPlay
          muted
          loop={false}
          playsInline
          initial={{ x: 200, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 90, damping: 12 }}
        />

        {/* Click-to-unmute button */}
        {isMuted && (
          <button
            onClick={handleUnmute}
            className="unmute-btn"
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              background: "#4f46e5",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            🔊 Play Sound
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
