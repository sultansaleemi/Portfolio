import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

/* =========================
   ADVANCED SOUND ENGINE (NO FILES)
========================= */
let audioCtx;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
};

const playModalOpenSound = () => {
  const ctx = initAudio();

  // Soft wind whoosh upward
  const whoosh = ctx.createOscillator();
  const whooshGain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  whoosh.type = "sine";
  whoosh.frequency.setValueAtTime(180, ctx.currentTime);
  whoosh.frequency.exponentialRampToValueAtTime(380, ctx.currentTime + 0.35);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1200, ctx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.4);

  whooshGain.gain.setValueAtTime(0.001, ctx.currentTime);
  whooshGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.1);
  whooshGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

  whoosh.connect(whooshGain);
  whooshGain.connect(filter);
  filter.connect(ctx.destination);

  whoosh.start();
  whoosh.stop(ctx.currentTime + 0.45);

  // Soft chime at end
  setTimeout(() => {
    const chime = ctx.createOscillator();
    const chimeGain = ctx.createGain();
    chime.type = "sine";
    chime.frequency.value = 720;
    chimeGain.gain.setValueAtTime(0.05, ctx.currentTime);
    chimeGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    chime.connect(chimeGain);
    chimeGain.connect(ctx.destination);
    chime.start();
    chime.stop(ctx.currentTime + 0.3);
  }, 300);
};

const playModalCloseSound = () => {
  const ctx = initAudio();

  const whoosh = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  whoosh.type = "sine";
  whoosh.frequency.setValueAtTime(380, ctx.currentTime);
  whoosh.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.3);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(800, ctx.currentTime);

  gain.gain.setValueAtTime(0.001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

  whoosh.connect(gain);
  gain.connect(filter);
  filter.connect(ctx.destination);

  whoosh.start();
  whoosh.stop(ctx.currentTime + 0.35);

  // Subtle click at end
  setTimeout(() => {
    const click = ctx.createOscillator();
    const clickGain = ctx.createGain();
    click.type = "square";
    click.frequency.value = 900;
    clickGain.gain.setValueAtTime(0.04, ctx.currentTime);
    clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    click.connect(clickGain);
    clickGain.connect(ctx.destination);
    click.start();
    click.stop(ctx.currentTime + 0.05);
  }, 250);
};

const playZoomSound = () => {
  const ctx = initAudio();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(500, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.15);
  gain.gain.setValueAtTime(0.03, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.2);
};

/* =========================
   PROJECT MODAL
========================= */
const ProjectModal = ({ project, onClose }) => {
  const backdropRef = useRef(null);
  const showcaseRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    playModalOpenSound();

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        playModalCloseSound();
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleClose = () => {
    playModalCloseSound();
    onClose();
  };

  const toggleZoom = () => {
    playZoomSound();
    setZoomed(!zoomed);
  };

  // Interactive backdrop glow
  const handleMouseMove = (e) => {
    if (!backdropRef.current) return;
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    backdropRef.current.style.background = `
      radial-gradient(800px circle at ${x}% ${y}%, 
        rgba(100, 100, 255, 0.25), 
        rgba(0, 0, 0, 0.92) 50%)
    `;
  };

  return (
    <motion.div
      ref={backdropRef}
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      onClick={handleClose}
    >
      <motion.div
        className="project-modal"
        initial={{ scale: 0.85, y: 80, rotateX: 10, opacity: 0 }}
        animate={{ scale: 1, y: 0, rotateX: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 60, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 120 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Background Particles */}
        <div className="modal-bg-particles">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -80, 40, 0],
                opacity: [0.1, 0.4, 0.2, 0.1],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.2,
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="modal-header">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.title}
          </motion.h2>
          <button className="close-btn" onClick={handleClose} aria-label="Close">
            <FiX size={26} />
          </button>
        </div>

        {/* Image Showcase */}
        <div
          ref={showcaseRef}
          className={`modal-showcase ${zoomed ? "zoomed" : ""}`}
          onClick={toggleZoom}
          style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
        >
          <img src={project.image} alt={project.title} draggable="false" />
          <div className="zoom-hint">Double-click or tap to zoom</div>
        </div>

        {/* Content */}
        <div className="modal-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.desc || project.description || "A modern, responsive project built with cutting-edge technologies."}
          </motion.p>

          {project.tech && (
            <motion.div
              className="tech-stack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <strong>Tech Stack:</strong> {project.tech.join(" • ")}
            </motion.div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="modal-actions">
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <FiExternalLink size={20} />
              Live Demo
            </motion.a>
          )}

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <FiGithub size={20} />
              View Code
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;