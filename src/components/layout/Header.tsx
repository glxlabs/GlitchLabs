import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import GlitchText from "../ui/GlitchText";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/95 backdrop-blur-sm border-b border-cyber-green/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyber-green relative overflow-hidden">
                <div className="absolute inset-0 bg-cyber-magenta animate-pulse opacity-30" />
                <div className="absolute inset-1 bg-cyber-black" />
                <div className="absolute inset-2 bg-cyber-green animate-pulse" />
              </div>
              <GlitchText
                className="text-xl md:text-2xl font-brutalist font-black tracking-tighter group-hover:text-cyber-green transition-colors duration-300"
                glitchOnHover
              >
                GLITCHLABS
              </GlitchText>
            </div>
          </Link>

          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
