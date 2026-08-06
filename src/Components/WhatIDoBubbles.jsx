import { motion } from "framer-motion";
import { useState } from "react";
import "./WhatIDoBubbles.css";
import { icons } from "./icons";

const services = [
  { 
    title: "WordPress Development", 
    desc: "Building scalable, high-performance WordPress websites focused on real business results.", 
    icon: icons.wordpress
  },
  { 
    title: "Elementor & Divi Expert", 
    desc: "Creating pixel-perfect, responsive layouts with advanced UI/UX and modern design standards.", 
    icon: icons.elementor
  },
  { 
    title: "E-Commerce Development", 
    desc: "Developing WooCommerce stores optimized for conversions and smooth user experience.", 
    icon: icons.shopify
  },
  { 
    title: "Frontend Development", 
    desc: "Strong skills in HTML, CSS, and JavaScript for building responsive interfaces.", 
    icon: icons.responsive
  },
  { 
    title: "Figma to WordPress", 
    desc: "Converting designs into pixel-perfect, production-ready websites.", 
    icon: icons.design
  },
  { 
    title: "Animations & Interactions", 
    desc: "Enhancing UI with smooth animations using modern tools like Framer Motion.", 
    icon: icons.animation
  },
  { 
    title: "Performance Optimization", 
    desc: "Improving speed, Core Web Vitals, and overall performance.", 
    icon: icons.perfor
  },
  { 
    title: "SEO & Tracking", 
    desc: "Implementing SEO best practices and analytics tracking.", 
    icon: icons.seo
  },
  
];


const WhatIDoBubbles = () => {
  const [modalService, setModalService] = useState(null);

  return (
    <section className="what-i-do-bubbles">

     

      {/* CONTENT */}
      <h2 className="section-title">Professional <span>Expertise</span></h2>

      <p className="section-subtitle">
        Delivering high-quality web solutions focused on performance, design, and business growth.
      </p>

      {/* BUBBLES */}
      <div className="bubbles-container">
        {services.map((service, index) => {
          const randomX = Math.random() * 40 - 20;
          const randomY = Math.random() * 20 - 10;

          return (
            <motion.div
              key={index}
              className="bubble"
              onClick={() => setModalService(service)}
              initial={{ x: randomX, y: randomY }}
              animate={{
                x: [randomX, randomX + 6, randomX, randomX - 6, randomX],
                y: [randomY, randomY - 8, randomY, randomY + 8, randomY],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
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

      {/* MODAL */}
      {modalService && (
        <div className="bubble-modal" onClick={() => setModalService(null)}>
          <div className="bubble-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalService.title}</h3>
            <p>{modalService.desc}</p>
            <button className="btn-secondary" onClick={() => setModalService(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhatIDoBubbles;