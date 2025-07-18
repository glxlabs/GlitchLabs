import React, { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "terminal";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  onClick,
  ...props
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsGlitching(true);
    setTimeout(() => {
      setIsGlitching(false);
      if (onClick) onClick(e);
    }, 150);
  };

  const baseClasses =
    "font-mono font-bold transition-all duration-300 relative overflow-hidden";

  const variantClasses = {
    primary:
      "bg-cyber-green text-cyber-black hover:bg-cyber-green-bright px-6 py-3 border-2 border-cyber-green",
    secondary:
      "bg-transparent text-cyber-green border-2 border-cyber-green hover:bg-cyber-green hover:text-cyber-black px-6 py-3",
    terminal:
      "bg-transparent text-cyber-green border border-cyber-green hover:bg-cyber-green hover:text-cyber-black px-4 py-2 font-mono text-sm",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        isGlitching ? "animate-glitch" : ""
      } ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className={isGlitching ? "animate-rgb-split" : ""}>{children}</span>
      {isGlitching && (
        <div className="absolute inset-0 bg-cyber-magenta opacity-20 animate-pulse" />
      )}
    </button>
  );
};

export default Button;
