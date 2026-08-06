import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./AnimatedLink.css";

const hoverColors = [
  "#7c7cff",
  "#80d4ff",
  "#a855f7",
  "#38bdf8",
  "#ffffff",
];

const AnimatedLink = ({
  to,
  href,
  text,
  target = "_self",
  className = "",
}) => {
  const content = (
    <span className={`animated-link ${className}`}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="animated-letter"
          whileHover={{
            color: hoverColors[index % hoverColors.length],
            y: -2,
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return (
    <a href={href} target={target} rel="noreferrer">
      {content}
    </a>
  );
};

export default AnimatedLink;