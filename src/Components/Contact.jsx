import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-modern" id="contact">
      {/* CODE BACKGROUND */}
      <div className="code-layer">
        <pre className="code-stream stream-1">
{`const build = (idea) => {
  return {
    design: "Clean UI",
    code: "Scalable",
    result: "Impact"
  }
}

export default build`}
        </pre>

        <pre className="code-stream stream-2">
{`function connect(client) {
  if (!client.idea) return;
  console.log("Let’s build something meaningful");
}

connect();`}
        </pre>

        <pre className="code-stream stream-3">
{`<Portfolio>
  <Hero />
  <Projects />
  <Contact />
</Portfolio>`}
        </pre>
      </div>

      {/* CONTENT (UNCHANGED) */}
      <div className="contact-inner">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="contact-title"
        >
          Let’s build something
          <span> meaningful</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="contact-text"
        >
          Have an idea, a project, or just want to say hi?  
          I’m always open to discussing new opportunities.
        </motion.p>

        <motion.div
          className="contact-actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="mailto:youremail@example.com"
            className="contact-btn primary"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation →
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            className="contact-btn secondary"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="contact-btn ghost"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>

        <motion.p
          className="contact-foot"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Available for freelance & full-time opportunities.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
