import React from "react";
import { Link } from "react-router-dom";
import GlitchText from "../components/ui/GlitchText";
import Button from "../components/ui/Button";
import RGBSplit from "../components/effects/RGBSplit";
import ScanLines from "../components/effects/ScanLines";
import Terminal from "../components/ui/Terminal";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  const terminalCommands = [
    "git clone https://github.com/glxlabs/chaos.git",
    "cd chaos && npm install",
    "npm run build:beautiful-destruction",
    'echo "Welcome to GlitchLabs"',
  ];

  return (
    <>
      <SEO
        title="GlitchLabs - Digital Brutalism & Creative Code Solutions"
        description="Elite hacker collective specializing in digital brutalism, creative coding, and cutting-edge web experiences. Where beautiful chaos meets precision."
        keywords="GlitchLabs, digital brutalism, creative coding, web development, glitch effects, creative technology studio, custom development, React, TypeScript"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <ScanLines intensity="light" className="absolute inset-0" />

          <div className="container mx-auto px-6 text-center">
            <div className="mb-8">
              <RGBSplit trigger="always" intensity={6}>
                <h1 className="text-6xl md:text-8xl font-brutalist font-black tracking-tighter mb-4">
                  DIGITAL
                </h1>
              </RGBSplit>
              <GlitchText
                className="text-6xl md:text-8xl font-brutalist font-black tracking-tighter block"
                glitchOnHover
              >
                CHAOS
              </GlitchText>
              <div className="text-2xl md:text-4xl font-mono text-cyber-green mt-4">
                MEETS PRECISION
              </div>
            </div>

            <p className="text-xl md:text-2xl text-cyber-gray max-w-3xl mx-auto mb-12 font-mono">
              We are{" "}
              <GlitchText className="text-cyber-green" glitchOnHover>
                GlitchLabs
              </GlitchText>{" "}
              — a creative technology studio that builds digital experiences
              where beautiful chaos disrupts the ordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button variant="primary">INITIATE_CHAOS()</Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="secondary">VIEW_PORTFOLIO</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-cyber-dark">
          <div className="container mx-auto px-6">
            <RGBSplit trigger="scroll">
              <h2 className="text-4xl md:text-6xl font-brutalist font-black text-center mb-16">
                WHAT WE <span className="text-cyber-green">BREAK</span>
              </h2>
            </RGBSplit>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-cyber-black border border-cyber-green/20 p-8 hover:border-cyber-green transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-cyber-green mb-4 group-hover:animate-glitch" />
                  <h3 className="text-2xl font-brutalist font-bold text-cyber-green mb-4">
                    CREATIVE DEV
                  </h3>
                </div>
                <p className="text-cyber-gray font-mono text-sm">
                  Custom web applications that challenge conventional design. We
                  build experiences that make users stop scrolling and pay
                  attention.
                </p>
              </div>

              <div className="group bg-cyber-black border border-cyber-green/20 p-8 hover:border-cyber-green transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-cyber-magenta mb-4 group-hover:animate-glitch" />
                  <h3 className="text-2xl font-brutalist font-bold text-cyber-green mb-4">
                    BRAND IDENTITY
                  </h3>
                </div>
                <p className="text-cyber-gray font-mono text-sm">
                  Visual identities for brands that refuse to blend in. Digital
                  campaigns that create genuine emotional reactions.
                </p>
              </div>

              <div className="group bg-cyber-black border border-cyber-green/20 p-8 hover:border-cyber-green transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-cyber-magenta-bright mb-4 group-hover:animate-glitch" />
                  <h3 className="text-2xl font-brutalist font-bold text-cyber-green mb-4">
                    WEB3 & BLOCKCHAIN
                  </h3>
                </div>
                <p className="text-cyber-gray font-mono text-sm">
                  Decentralized applications that disrupt traditional models.
                  DeFi, NFTs, and smart contracts with unconventional flair.
                </p>
              </div>

              <div className="group bg-cyber-black border border-cyber-green/20 p-8 hover:border-cyber-green transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-cyber-green-bright mb-4 group-hover:animate-glitch" />
                  <h3 className="text-2xl font-brutalist font-bold text-cyber-green mb-4">
                    PRODUCT INNOVATION
                  </h3>
                </div>
                <p className="text-cyber-gray font-mono text-sm">
                  Developer tools and libraries for the creative community.
                  Technical experiments that become tomorrow's standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-brutalist font-black mb-8">
                  <GlitchText glitchOnHover>GLITCH</GlitchText> AS FEATURE,
                  <br />
                  NOT BUG
                </h2>
                <p className="text-lg text-cyber-gray font-mono mb-8">
                  We believe the most interesting digital experiences happen at
                  the edges — where perfect meets broken, where polished meets
                  raw. Our work celebrates the beauty in digital imperfection.
                </p>
                <Button variant="terminal">cat philosophy.md</Button>
              </div>

              <div>
                <Terminal commands={terminalCommands} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cyber-dark relative">
          <ScanLines intensity="medium" className="absolute inset-0" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <RGBSplit trigger="scroll" intensity={8}>
              <h2 className="text-4xl md:text-6xl font-brutalist font-black mb-8">
                READY TO GLITCH
                <br />
                <span className="text-cyber-green">THE SYSTEM?</span>
              </h2>
            </RGBSplit>

            <p className="text-xl text-cyber-gray font-mono mb-12 max-w-2xl mx-auto">
              Let's build something that breaks the rules and creates new ones.
              Your most ambitious digital ideas deserve unconventional
              execution.
            </p>

            <Link to="/contact">
              <Button variant="primary" className="text-lg px-8 py-4">
                START_PROJECT()
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
