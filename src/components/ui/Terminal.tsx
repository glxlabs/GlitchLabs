import React, { useState, useEffect } from "react";

interface TerminalProps {
  commands: string[];
  autoPlay?: boolean;
  speed?: number;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({
  commands,
  autoPlay = true,
  speed = 50,
  className = "",
}) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!autoPlay || currentCommandIndex >= commands.length) return;

    setIsTyping(true);
    const command = commands[currentCommandIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < command.length) {
        setCurrentText(command.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        setTimeout(() => {
          setCurrentCommandIndex((prev) => prev + 1);
          setCurrentText("");
        }, 1000);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [currentCommandIndex, commands, autoPlay, speed]);

  return (
    <div
      className={`bg-cyber-dark border border-cyber-green font-mono text-sm ${className}`}
    >
      <div className="bg-cyber-green text-cyber-black px-3 py-2 flex items-center space-x-2">
        <div className="w-3 h-3 bg-cyber-magenta rounded-full" />
        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
        <div className="w-3 h-3 bg-cyber-green-bright rounded-full" />
        <span className="ml-4 font-bold">GLITCHLABS TERMINAL</span>
      </div>

      <div className="p-4 min-h-[200px]">
        {commands.slice(0, currentCommandIndex).map((command, index) => (
          <div key={index} className="mb-2">
            <span className="text-cyber-green">guest@glitchlabs:~$ </span>
            <span className="text-cyber-white">{command}</span>
          </div>
        ))}

        {currentCommandIndex < commands.length && (
          <div className="mb-2">
            <span className="text-cyber-green">guest@glitchlabs:~$ </span>
            <span className="text-cyber-white">
              {currentText}
              {isTyping && <span className="animate-terminal-cursor">|</span>}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
