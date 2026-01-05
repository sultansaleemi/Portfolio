import { forwardRef } from "react";

const Rope = forwardRef((props, ropeRef) => {
  return (
    <svg
      ref={ropeRef}
      className="rope-svg"
      width="26"
      height="220"
      viewBox="0 0 26 220"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="ropeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4d9a6" />
          <stop offset="45%" stopColor="#caa36a" />
          <stop offset="75%" stopColor="#9a6f3c" />
          <stop offset="100%" stopColor="#6e4b28" />
        </linearGradient>
      </defs>

      {/* Rope segments */}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect
          key={i}
          className="rope-segment"
          x="8"
          y={i * 22}
          width="10"
          height="22"
          rx="5"
          fill="url(#ropeGradient)"
        />
      ))}
    </svg>
  );
});

export default Rope;
