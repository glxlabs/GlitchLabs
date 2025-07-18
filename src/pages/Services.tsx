import React from "react";
import { Link } from "react-router-dom";
import GlitchText from "../components/ui/GlitchText";
import Button from "../components/ui/Button";
import RGBSplit from "../components/effects/RGBSplit";
import ScanLines from "../components/effects/ScanLines";
import SEO from "../components/SEO";

const Services: React.FC = () => {
  const services = [
    {
      title: "CUSTOM DEVELOPMENT",
      category: "CREATIVE_DEV",
      description: "React/Next.js applications with distinctive visual flair",
      features: [
        "WebGL experiences and interactive installations",
        "E-commerce platforms that convert through bold design",
        "Progressive web apps that push boundaries",
        "Performance optimization for complex creative projects",
      ],
      icon: "█",
      color: "cyber-green",
    },
    {
      title: "DESIGN SYSTEMS",
      category: "BRAND_IDENTITY",
      description: "Component libraries that embrace unconventional aesthetics",
      features: [
        "Design tokens for brands that dare to be different",
        "Style guides that inspire rather than constrain",
        "Accessible brutalist design patterns",
        "Documentation that developers actually read",
      ],
      icon: "▓",
      color: "cyber-magenta",
    },
    {
      title: "WEB3 & BLOCKCHAIN",
      category: "DECENTRALIZED",
      description:
        "Next-gen blockchain applications that disrupt traditional models",
      features: [
        "DeFi protocols with unconventional UX/UI",
        "NFT marketplaces that break the mold",
        "Smart contract development and auditing",
        "Decentralized applications (dApps) with personality",
      ],
      icon: "⬢",
      color: "cyber-magenta-bright",
    },
    {
      title: "TECHNICAL CONSULTING",
      category: "OPTIMIZATION",
      description: "Architecture planning for ambitious digital experiences",
      features: [
        "Performance audits and optimization strategies",
        "Code reviews and technical mentorship",
        "Technology stack recommendations",
        "Scalability planning for creative projects",
      ],
      icon: "▒",
      color: "cyber-green-bright",
    },
  ];

  return (
    <>
      <SEO
        title="Services - Custom Development & Digital Brutalism Solutions | GlitchLabs"
        description="Explore GlitchLabs services: custom development, design systems, Web3 & blockchain, and technical consulting. Services that break barriers and challenge conventions."
        keywords="GlitchLabs services, custom development, design systems, Web3 blockchain, technical consulting, creative development, digital brutalism design"
        path="/services"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <ScanLines intensity="light" className="absolute inset-0" />
          <div className="container mx-auto px-6 relative z-10">
            <RGBSplit trigger="scroll" intensity={6}>
              <h1 className="text-5xl md:text-7xl font-brutalist font-black mb-8">
                SERVICES THAT
                <br />
                <span className="text-cyber-green">BREAK BARRIERS</span>
              </h1>
            </RGBSplit>

            <p className="text-xl md:text-2xl text-cyber-gray font-mono max-w-4xl">
              From concept to deployment, we transform ambitious ideas into
              digital experiences that refuse to be ignored.
              <GlitchText className="text-cyber-green" glitchOnHover>
                Every project is a rebellion
              </GlitchText>
              .
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-cyber-dark">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.category}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                    <div className="mb-4">
                      <span className="text-cyber-green font-mono text-sm">
                        ./services/{service.category.toLowerCase()}/
                      </span>
                    </div>

                    <RGBSplit trigger="scroll">
                      <h2 className="text-4xl md:text-5xl font-brutalist font-black mb-6">
                        {service.title}
                      </h2>
                    </RGBSplit>

                    <p className="text-lg text-cyber-gray font-mono mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <span className={`text-${service.color} font-mono`}>
                            →
                          </span>
                          <span className="text-cyber-gray font-mono text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="terminal">
                      git clone {service.category.toLowerCase()}
                    </Button>
                  </div>

                  <div
                    className={`${index % 2 === 1 ? "order-1 lg:order-2" : ""}`}
                  >
                    <div className="bg-cyber-black border border-cyber-green/20 p-8 group hover:border-cyber-green transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 bg-${service.color} flex items-center justify-center text-2xl font-mono font-bold text-cyber-black group-hover:animate-glitch`}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-cyber-green font-mono text-sm">
                            {service.category}.init()
                          </div>
                          <div className="text-cyber-white font-mono text-xs">
                            Status: READY_TO_BREAK_THINGS
                          </div>
                        </div>
                      </div>

                      <div className="font-mono text-sm text-cyber-green space-y-2">
                        <div>
                          $ npm install @glitchlabs/
                          {service.category.toLowerCase()}
                        </div>
                        <div>$ npm run build:chaos</div>
                        <div className="text-cyber-white">
                          ✓ Ready to disrupt the ordinary
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <RGBSplit trigger="scroll">
              <h2 className="text-4xl md:text-5xl font-brutalist font-black text-center mb-16">
                OUR <span className="text-cyber-green">PROCESS</span>
              </h2>
            </RGBSplit>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "DISCOVERY",
                  desc: "We break down your vision and identify the rules worth breaking",
                },
                {
                  step: "02",
                  title: "DESIGN",
                  desc: "We create concepts that challenge expectations and demand attention",
                },
                {
                  step: "03",
                  title: "DEVELOP",
                  desc: "We build with precision while embracing controlled chaos",
                },
                {
                  step: "04",
                  title: "DEPLOY",
                  desc: "We launch experiences that disrupt and inspire",
                },
              ].map((phase, index) => (
                <div key={phase.step} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-cyber-dark border-2 border-cyber-green flex items-center justify-center font-mono font-bold text-xl group-hover:animate-glitch">
                      {phase.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-cyber-green/30" />
                    )}
                  </div>
                  <h3 className="text-xl font-brutalist font-bold text-cyber-green mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-cyber-gray font-mono text-sm">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cyber-dark relative">
          <ScanLines intensity="medium" className="absolute inset-0" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <RGBSplit trigger="scroll" intensity={8}>
              <h2 className="text-4xl md:text-6xl font-brutalist font-black mb-8">
                READY TO BUILD
                <br />
                <span className="text-cyber-green">SOMETHING UNEXPECTED?</span>
              </h2>
            </RGBSplit>

            <p className="text-xl text-cyber-gray font-mono mb-12 max-w-3xl mx-auto">
              Every great project starts with a conversation about breaking the
              rules. Let's discuss how we can bring your most ambitious digital
              ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button variant="primary" className="text-lg px-8 py-4">
                  START_PROJECT()
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="secondary" className="text-lg px-8 py-4">
                  VIEW_PORTFOLIO
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
