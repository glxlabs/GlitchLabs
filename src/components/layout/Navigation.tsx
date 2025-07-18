import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const navItems = [
    { path: "/", label: "home", command: "cd ~/" },
    { path: "/about", label: "about", command: "cat about.md" },
    { path: "/services", label: "services", command: "ls services/" },
    { path: "/portfolio", label: "portfolio", command: "ls portfolio/" },
    { path: "/contact", label: "contact", command: "ping contact" },
  ];

  return (
    <nav className="font-mono text-sm">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`group relative transition-all duration-300 ${
              currentPath === item.path
                ? "text-cyber-green"
                : "text-cyber-gray hover:text-cyber-green"
            }`}
            onClick={() => setCurrentPath(item.path)}
          >
            <span className="block group-hover:animate-rgb-split">
              {item.command}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-green transition-all duration-300 group-hover:w-full" />
            {currentPath === item.path && (
              <span className="absolute -left-4 top-0 text-cyber-green animate-terminal-cursor">
                {"&gt;"}
              </span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
