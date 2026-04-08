import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./WhatIDoBubbles.css";

// Updated Professional Skills
const services = [
  // Web Development
  { 
    title: "WordPress Development", 
    desc: "Custom themes, plugins, and responsive websites that convert visitors into clients.", 
    icon: "src/icons/wordpress-icon.svg"
  },
  { 
    title: "Elementor & Divi Pro", 
    desc: "Pixel-perfect designs with advanced page builder interactions and layouts.", 
    icon: "src/icons/elementor-icon.svg"
  },
  { 
    title: "E-Commerce Setup", 
    desc: "WooCommerce and Shopify stores optimized for sales, performance, and UX.", 
    icon: "src/icons/shopify.svg"
  },

  // UI / UX & Design
  { 
    title: "UI / UX Design", 
    desc: "Clean, user-centered interfaces with Figma-to-WordPress conversion.", 
    icon: "src/icons/design.svg"
  },
  { 
    title: "Responsive Web Design", 
    desc: "Mobile-first websites that look perfect on all devices and screen sizes.", 
    icon: "src/icons/responsive.svg"
  },
  { 
    title: "Interaction Design", 
    desc: "Subtle animations and micro-interactions using GSAP & Framer Motion.", 
    icon: "src/icons/animation.svg"
  },

  // Performance & Optimization
  { 
    title: "Performance Optimization", 
    desc: "Fast-loading websites with clean code, caching, and SEO fundamentals.", 
    icon: "src/icons/perfomance.svg"
  },
  { 
    title: "SEO & Analytics", 
    desc: "SEO-ready websites with Google Analytics and conversion tracking setup.", 
    icon: "src/icons/seo.svg"
  },
  { 
    title: "Maintenance & Security", 
    desc: "Ongoing updates, backups, and protection for worry-free website operation.", 
    icon: "src/icons/security.svg"
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
      controls.start({ y: scrollProgress * 30 }); // gentler parallax for performance
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="what-i-do-bubbles" ref={containerRef}>
      <h2 className="section-title">My Professional Skills</h2>

      <div className="bubbles-container">
        {services.map((service, index) => {
          const randomX = Math.random() * 40 - 20;
          const randomY = Math.random() * 20 - 10;
          const floatDuration = 6 + Math.random() * 3;

          return (
            <motion.div
              key={index}
              className="bubble"
              onClick={() => setModalService(service)}
              initial={{ x: randomX, y: randomY }}
              animate={{
                x: [randomX, randomX + 6, randomX, randomX - 6, randomX],
                y: [randomY, randomY - 8, randomY, randomY + 8, randomY],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.15,
                rotate: 0,
                boxShadow: "0 20px 40px rgba(124,124,255,0.4)",
              }}
            >
              <div className="bubble-icon">
                <img src={service.icon} alt={service.title} />
              </div>
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
            <button className="btn-secondary" onClick={() => setModalService(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhatIDoBubbles;