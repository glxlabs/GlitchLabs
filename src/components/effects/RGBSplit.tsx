import React, { useEffect, useRef, useState } from "react";

interface RGBSplitProps {
  children: React.ReactNode;
  intensity?: number;
  trigger?: "hover" | "always" | "scroll";
  className?: string;
}

const RGBSplit: React.FC<RGBSplitProps> = ({
  children,
  intensity = 4,
  trigger = "hover",
  className = "",
}) => {
  const [isActive, setIsActive] = useState(trigger === "always");
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger === "scroll") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsActive(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger]);

  const handleMouseEnter = () => {
    if (trigger === "hover") setIsActive(true);
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") setIsActive(false);
  };

  return (
    <div
      ref={elementRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative ${isActive ? "animate-rgb-split" : ""}`}>
        {children}
      </div>
      {isActive && (
        <>
          <div
            className="absolute top-0 left-0 w-full h-full text-cyber-magenta opacity-80 pointer-events-none"
            style={{
              transform: `translate(-${intensity}px, 0)`,
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
            }}
          >
            {children}
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full text-cyber-green opacity-80 pointer-events-none"
            style={{
              transform: `translate(${intensity}px, 0)`,
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
            }}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default RGBSplit;
