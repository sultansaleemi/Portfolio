import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaWhatsapp,
    FaFileDownload,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import profile from "../assets/sultan.png";
import resume from "../assets/Sultan_mehmood_Saleemi_resume.pdf";
import "./Contacts.css";

const Contact = () => {
    const [command, setCommand] = useState("");
    const [terminal, setTerminal] = useState([
        "Sultan Portfolio Terminal v1.0",
        "System initialized...",
        "Type 'help' to view commands."
    ]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        type: "",
        message: ""
    });
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState("");

    const commands = {
        help: `
Available Commands:

whatsapp  → Open WhatsApp
resume    → View Resume
email     → Send Email
github    → Open Github
linkedin  → Open LinkedIn
about     → About Sultan
location  → UAE Location
clear     → Clear Terminal
`,
        whatsapp: "Opening WhatsApp UAE contact...",
        resume: "Opening professional resume...",
        email: "Opening email client...",
        github: "Opening Github profile...",
        linkedin: "Opening LinkedIn profile...",
        about: `
Sultan Mehmood Saleemi

WordPress Developer
Elementor Pro Specialist
WooCommerce Developer

Focus:
Design + Performance + Business Growth
`,
        location: `
🇦🇪 Dubai, UAE

Available For:

• Full-Time
• Part-Time
• Remote
• Freelance Projects
`,
        availability: `
Currently available for:

✓ UAE Companies
✓ Remote Teams
✓ Website Projects
`
    };

    const executeCommand = (e) => {
        e.preventDefault();
        const cmd = command.toLowerCase().trim();

        if (!cmd) return;

        if (cmd === "whatsapp") {
            window.open("https://wa.me/971541825667", "_blank");
        }

        if (cmd === "resume") {
            window.open(resume, "_blank");
        }

        if (cmd === "email") {
            window.location.href = "mailto:sultan.saleemi321@gmail.com";
        }

        if (cmd === "github") {
            window.open("https://github.com/sultansaleemi", "_blank");
        }

        if (cmd === "linkedin") {
            window.open("https://linkedin.com", "_blank");
        }

        if (cmd === "clear") {
            setTerminal([]);
            setCommand("");
            return;
        }

        setTerminal((prev) => [
            ...prev,
            `visitor@portfolio:~$ ${cmd}`,
            commands[cmd] || "Command not found. Type help."
        ]);

        setCommand("");
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setSuccess("");

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/sultan.saleemi321@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        _subject: "🚀 New Portfolio Contact Request",
                        name: form.name,
                        email: form.email,
                        phone: form.phone,
                        company: form.company,
                        opportunity: form.type,
                        message: form.message
                    })
                }
            );

            if (response.ok) {
                setSuccess(
                    "✅ Message sent successfully! I will contact you soon."
                );
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    type: "",
                    message: ""
                });
            } else {
                setSuccess("❌ Failed to send message. Please try again.");
            }
        } catch (error) {
            setSuccess("❌ Something went wrong. Please try again.");
        }

        setSending(false);
    };

    return (
        <section className="contact-page">
            <motion.div
                className="contact-header"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span>CONTACT</span>
                <h1>
                    Let's build something
                    <br />
                    <span>great together.</span>
                </h1>
                <p>
                    🇦🇪 Available for UAE opportunities
                    <br />
                    Full-Time • Part-Time • Freelance Projects
                </p>
            </motion.div>

            <div className="contact-wrapper">
                {/* PROFILE */}
                <motion.div
                    className="contact-profile"
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="profile-photo">
                        <img src={profile} alt="Sultan" />
                    </div>

                    <h2>Sultan Mehmood Saleemi</h2>
                    <h3>WordPress Developer</h3>

                    <div className="available">● Available For Hiring</div>

                    <div className="profile-info">
                        <p>
                            <FaMapMarkerAlt />
                            UAE
                        </p>
                        <p>3+ Years Experience</p>
                        <p>20+ Websites Delivered</p>
                    </div>

                    <div className="contact-actions">
                        <a
                            href="mailto:sultan.saleemi321@gmail.com"
                            className="contact-btn primary"
                        >
                            <FaEnvelope />
                            Hire Me
                        </a>

                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn secondary"
                        >
                            <FaFileDownload />
                            Resume
                        </a>

                        <a
                            href="https://wa.me/971541825667"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn ghost"
                        >
                            <FaWhatsapp />
                            WhatsApp
                        </a>

                        <a
                            href="https://github.com/sultansaleemi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn ghost"
                        >
                            <FaGithub />
                            Github
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn ghost"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className="contact-right"
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="form-card">
                        <h2>Start A Project</h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="WhatsApp Number"
                                required
                            />

                            <input
                                type="text"
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                placeholder="Company Name"
                                required
                            />

                            <select
                                name="type"
                                value={form.type}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Opportunity Type</option>
                                <option value="Full-Time Position">
                                    Full-Time Position
                                </option>
                                <option value="Part-Time Work">
                                    Part-Time Work
                                </option>
                                <option value="Freelance Project">
                                    Freelance Project
                                </option>
                                <option value="Website Development">
                                    Website Development
                                </option>
                            </select>

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project"
                                rows="6"
                                required
                            />

                            <button type="submit" disabled={sending}>
                                <FaPaperPlane />
                                {sending ? "Sending..." : "Send Message"}
                            </button>

                            {success && (
                                <p className="form-message">{success}</p>
                            )}
                        </form>
                    </div>

                    {/* TERMINAL */}
                    <div className="terminal">
                        <div className="terminal-header">
                            <span></span>
                            <span></span>
                            <span></span>
                            Terminal
                        </div>

                        <div className="terminal-body">
                            {terminal.map((line, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    {line}
                                </motion.p>
                            ))}

                            <form onSubmit={executeCommand}>
                                <label>visitor@portfolio:~</label>
                                <input
                                    value={command}
                                    onChange={(e) => setCommand(e.target.value)}
                                    placeholder="type command..."
                                />
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;