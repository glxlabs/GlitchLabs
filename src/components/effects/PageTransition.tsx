import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    setGlitchIntensity(10);

    const glitchSequence = [
      { delay: 0, intensity: 10 },
      { delay: 100, intensity: 8 },
      { delay: 200, intensity: 15 },
      { delay: 300, intensity: 5 },
      { delay: 400, intensity: 12 },
      { delay: 500, intensity: 3 },
      { delay: 600, intensity: 0 },
    ];

    glitchSequence.forEach(({ delay, intensity }) => {
      setTimeout(() => {
        setGlitchIntensity(intensity);
      }, delay);
    });

    setTimeout(() => {
      setIsTransitioning(false);
      setGlitchIntensity(0);
    }, 700);
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Page Content */}
      <div
        className={`transition-all duration-300 ${
          isTransitioning ? "blur-sm" : "blur-0"
        }`}
        style={{
          transform:
            glitchIntensity > 0
              ? `translate(${
                  Math.random() * glitchIntensity - glitchIntensity / 2
                }px, ${
                  Math.random() * glitchIntensity - glitchIntensity / 2
                }px)`
              : "none",
        }}
      >
        {children}
      </div>

      {/* Glitch Overlay Effects */}
      {isTransitioning && (
        <>
          {/* Digital Noise Overlay */}
          <div
            className="fixed inset-0 z-40 pointer-events-none"
            style={{
              background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
              animation: "noise 0.1s infinite",
              opacity: glitchIntensity / 20,
            }}
          />

          {/* RGB Split Lines */}
          <div className="fixed inset-0 z-30 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full bg-cyber-magenta opacity-30"
                style={{
                  height: "2px",
                  top: `${20 + i * 20}%`,
                  left: `${
                    Math.random() * glitchIntensity - glitchIntensity / 2
                  }px`,
                  animation: `glitch-line 0.1s infinite`,
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <div
                key={`green-${i}`}
                className="absolute w-full bg-cyber-green opacity-30"
                style={{
                  height: "1px",
                  top: `${25 + i * 15}%`,
                  left: `${
                    Math.random() * glitchIntensity - glitchIntensity / 2
                  }px`,
                  animation: `glitch-line 0.15s infinite reverse`,
                }}
              />
            ))}
          </div>

          {/* Scanlines */}
          <div
            className="fixed inset-0 z-20 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 65, 0.1) 2px,
                rgba(0, 255, 65, 0.1) 4px
              )`,
              animation: "scanlines-fast 0.1s linear infinite",
            }}
          />

          {/* Terminal Loading Text */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
            <div className="bg-cyber-black/90 border border-cyber-green p-4 font-mono text-cyber-green text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyber-green animate-pulse" />
                <span>LOADING_PAGE...</span>
                <span className="animate-terminal-cursor">|</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PageTransition;
