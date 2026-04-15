import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  const [zoomed, setZoomed] = useState(false);
  const backdropRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleClose = () => onClose();

  const toggleZoom = () => setZoomed(!zoomed);

  return (
    <motion.div
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div
        className="project-modal"
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        <div className="modal-header">
          <h2>{project.title}</h2>
          <button onClick={handleClose}>
            <FiX size={22} />
          </button>
        </div>

        {/* IMAGE */}
        <div
          className={`modal-showcase ${zoomed ? "zoomed" : ""}`}
          onClick={toggleZoom}
        >
          <img src={project.image} alt={project.title} />
        </div>

        {/* CONTENT */}
        <div className="modal-content">

          <div className="project-impact">
            🚀 <strong>Impact:</strong> {project.result}
          </div>

          <p className="project-description">
            {project.description}
          </p>

          <div className="tech-stack">
            <strong>Tech:</strong> {project.tech.join(" • ")}
          </div>

        </div>

        {/* ACTIONS */}
        <div className="modal-actions">
          {project.live && (
            <a href={project.live} target="_blank" className="btn-primary">
              <FiExternalLink /> Live
            </a>
          )}

          {project.github && (
            <a href={project.github} target="_blank" className="btn-secondary">
              <FiGithub /> Code
            </a>
          )}
        </div>

      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;