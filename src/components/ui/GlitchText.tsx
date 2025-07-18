import React, { useState } from "react";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  glitchOnHover?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  className = "",
  glitchOnHover = false,
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleMouseEnter = () => {
    if (glitchOnHover) {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }
  };

  return (
    <span
      className={`glitch-text ${
        isGlitching ? "animate-rgb-split" : ""
      } ${className}`}
      data-text={children}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </span>
  );
};

export default GlitchText;
