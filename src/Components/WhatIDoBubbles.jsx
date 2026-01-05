import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./WhatIDoBubbles.css";

const services = [
  { 
    title: "WordPress Development", 
    desc: "Custom themes, plugins, and full website setup tailored to your needs.", 
    icon: "🖥️" 
  },
  { 
    title: "UI / UX Design", 
    desc: "Pixel-perfect, user-focused interfaces with responsive design principles.", 
    icon: "🎨" 
  },
  { 
    title: "Performance Optimization", 
    desc: "Fast loading, SEO-friendly websites with clean, optimized code.", 
    icon: "⚡" 
  },
  { 
    title: "Maintenance & Support", 
    desc: "Ongoing website updates, backups, security, and support for peace of mind.", 
    icon: "🔧" 
  },
];

const WhatIDoBubbles = () => {
  const [modalService, setModalService] = useState(null);
  const controls = useAnimation();
  const containerRef = useRef();

  // Scroll-based parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top } = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.min(Math.max(-top / window.innerHeight, 0), 1);
      controls.start({ y: scrollProgress * 50 }); // bigger parallax
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="what-i-do-bubbles" ref={containerRef}>
      <h2 className="section-title">What I Do</h2>
      <div className="bubbles-container">
        {services.map((service, index) => {
          const randomX = Math.random() * 40 - 20; // more random
          const randomY = Math.random() * 20 - 10;
          const floatDuration = 6 + Math.random() * 3;

          return (
            <motion.div
              key={index}
              className="bubble"
              onClick={() => setModalService(service)}
              initial={{ x: randomX, y: randomY }}
              animate={{
                x: [randomX, randomX + 8, randomX, randomX - 8, randomX],
                y: [randomY, randomY - 12, randomY, randomY + 12, randomY],
                rotate: [0, 2, 0, -2, 0], // gentle sway
              }}
              transition={{
                duration: floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 0,
                boxShadow: "0 24px 48px rgba(124,124,255,0.6)",
              }}
            >
              <div className="bubble-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="bubble-glow"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {modalService && (
        <div className="bubble-modal" onClick={() => setModalService(null)}>
          <div className="bubble-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalService.title}</h3>
            <p>{modalService.desc}</p>
            <button onClick={() => setModalService(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhatIDoBubbles;
