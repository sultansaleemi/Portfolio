import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import "./Contact.css";
import resume from "../assets/Sultan_mehmmod.pdf";

const Contact = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 🔥 Cursor glow tracking
  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="contact-modern" id="contact">

      {/* 🔥 CURSOR GLOW */}
      <div
        className="cursor-glow"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      {/* CODE BACKGROUND */}
      <div className="code-layer">
        <pre className="code-stream stream-1">
{`const developer = "Sultan";

function build(idea) {
  return "exceptional experience";
}`}
        </pre>

        <pre className="code-stream stream-2">
{`if (project) {
  console.log("Let's build together 🚀");
}`}
        </pre>
      </div>

      <div className="contact-inner">

        {/* 🔥 TYPING HEADING */}
        <h2 className="contact-title">
          <span className="code-line">const name = "</span>
          <span className="typing">
            <Typewriter
              words={["Sultan", "Wordpress Developer", "UI Specialist"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
          <span className="code-line">";</span>
        </h2>

        <p className="contact-text">
          I design and build high-performance websites that convert and stand out.
        </p>

        {/* 🔥 TERMINAL BOX */}
        <div className="terminal">
          <p><span>$</span> npm run build-project</p>
          <p className="success">✔ Project compiled successfully</p>
          <p><span>$</span> deploy --live</p>
          <p className="success">✔ Your idea is now live 🚀</p>
        </div>

        {/* BUTTONS */}
        <div className="contact-actions">

          <a
            href="mailto:sultan.saleemi321@gmail.com"
            className="contact-btn primary"
          >
            Hire Me →
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn secondary"
          >
            View Resume
          </a>

          <a
            href="https://wa.me/971541825667"
            target="_blank"
            className="contact-btn ghost"
          >
            WhatsApp
          </a>

        </div>

        <p className="contact-foot">
          Available for freelance & full-time opportunities.
        </p>

      </div>
    </section>
  );
};

export default Contact;