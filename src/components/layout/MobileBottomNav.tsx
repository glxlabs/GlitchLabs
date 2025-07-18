import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const navItems = [
    { path: "/", label: "HOME", icon: "~/" },
    { path: "/about", label: "ABOUT", icon: "cat" },
    { path: "/services", label: "SERV", icon: "ls" },
    { path: "/portfolio", label: "PORT", icon: "git" },
    { path: "/contact", label: "PING", icon: ">>>" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* Terminal Command Line Style */}
      <div className="bg-cyber-black border-t-2 border-cyber-green">
        <div className="flex items-center px-4 py-2">
          <span className="text-cyber-green font-mono text-xs mr-2">
            guest@glitchlabs:~$
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="flex space-x-1 animate-marquee">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-mono text-xs px-2 py-1 whitespace-nowrap transition-colors ${
                    currentPath === item.path
                      ? "text-cyber-green bg-cyber-green/10 border border-cyber-green"
                      : "text-cyber-gray hover:text-cyber-green"
                  }`}
                  onClick={() => setCurrentPath(item.path)}
                >
                  {item.icon} {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-cyber-green font-mono text-xs animate-terminal-cursor">
            |
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
