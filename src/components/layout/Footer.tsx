import React from "react";
import GlitchText from "../ui/GlitchText";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-green/20 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <GlitchText className="text-lg font-brutalist font-bold mb-4 text-cyber-green">
              GLITCHLABS
            </GlitchText>
            <p className="text-cyber-gray text-sm font-mono">
              Where digital chaos meets precision.
              <br />
              Building the unexpected since 2023.
            </p>
          </div>

          <div>
            <h3 className="text-cyber-green font-mono font-bold mb-4">
              SERVICES
            </h3>
            <ul className="space-y-2 text-cyber-gray text-sm font-mono">
              <li className="hover:text-cyber-green transition-colors cursor-pointer">
                Creative Development
              </li>
              <li className="hover:text-cyber-green transition-colors cursor-pointer">
                Brand Identity
              </li>
              <li className="hover:text-cyber-green transition-colors cursor-pointer">
                Product Innovation
              </li>
              <li className="hover:text-cyber-green transition-colors cursor-pointer">
                Technical Consulting
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyber-green font-mono font-bold mb-4">
              CONNECT
            </h3>
            <div className="space-y-2 text-cyber-gray text-sm font-mono">
              <div className="hover:text-cyber-green transition-colors cursor-pointer">
                &gt; ping hello@theglitchlabs.xyz
              </div>
              <div className="hover:text-cyber-green transition-colors cursor-pointer">
                &gt; git clone github.com/glxlabs
              </div>
              <div className="hover:text-cyber-green transition-colors cursor-pointer">
                &gt; curl -X GET twitter.com/theglitchlabs
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyber-green/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-cyber-gray text-sm font-mono">
            <p>
              &copy; {new Date().getFullYear()} GLITCHLABS. ALL RIGHTS
              CORRUPTED.
            </p>
            <p className="mt-2 md:mt-0">
              <GlitchText glitchOnHover>GLITCH THE SYSTEM</GlitchText>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
