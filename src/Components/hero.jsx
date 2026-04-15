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
                delay: index * 0.05,
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
          transition={{ delay: 0.6 }}
        >
          WordPress Developer | Elementor & Custom Website Expert
        </motion.h2>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          I’m Sultan Saleemi, a WordPress Developer with over 3 years of
          professional experience working at Cyber Peak Solutions.
          I specialize in building fast, modern, and conversion-focused websites
          for businesses, startups, and personal brands.
          <br /><br />
          I have strong expertise in Elementor Pro, Divi, and custom WordPress
          development, delivering responsive, SEO-friendly, and user-centric
          websites that help businesses grow online.
          <br /><br />
          I enjoy turning Figma and PSD designs into pixel-perfect websites and
          continuously exploring new technologies to improve performance and user
          experience.
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
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="btn secondary"
            whileHover={{ scale: 1.08 }}
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
          loop
          playsInline
          initial={{ x: 150, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        />

        {/* Click-to-unmute button */}
        {isMuted && (
          <button
            onClick={handleUnmute}
            className="unmute-btn"
          >
            🔊 Sound
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;