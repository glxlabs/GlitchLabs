import React from "react";

interface ScanLinesProps {
  children?: React.ReactNode;
  intensity?: "light" | "medium" | "heavy";
  className?: string;
}

const ScanLines: React.FC<ScanLinesProps> = ({
  children,
  intensity = "medium",
  className = "",
}) => {
  const intensityClasses = {
    light: "opacity-10",
    medium: "opacity-20",
    heavy: "opacity-30",
  };

  return (
    <div className={`relative scanlines ${className}`}>
      {children}
      <div
        className={`absolute inset-0 pointer-events-none ${intensityClasses[intensity]}`}
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            #00ff41 2px,
            #00ff41 4px
          )`,
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-0.5 bg-cyber-green animate-scanlines" />
      </div>
    </div>
  );
};

export default ScanLines;
