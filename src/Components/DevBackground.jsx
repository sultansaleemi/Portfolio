import "./DevBackground.css";

const elements = [
  "</>", "{ }", "()", "=>", "const", "function()", "useState()", "<div>", "</>"
];

const DevBackground = () => {
  return (
    <div className="dev-elements-bg">
      {elements.map((el, i) => (
        <span
          key={i}
          className="floating"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
          }}
        >
          {el}
        </span>
      ))}
    </div>
  );
};

export default DevBackground;