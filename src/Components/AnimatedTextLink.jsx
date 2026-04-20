import { motion } from "framer-motion";


const colors = [
  "#ffb3c1", "#fbbf91", "#ffd77b", "#b3ffb8",
  "#80ffea", "#80d4ff", "#b58fff", "#ff9ee3"
];

const AnimatedTextLink = ({ text, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="animated-link"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          whileHover={{
            color: colors[i % colors.length],
            y: -2,
            scale: 1.15,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="letter"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </a>
  );
};

export default AnimatedTextLink;