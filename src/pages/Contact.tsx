import React, { useState } from "react";
import GlitchText from "../components/ui/GlitchText";
import Button from "../components/ui/Button";
import RGBSplit from "../components/effects/RGBSplit";
import ScanLines from "../components/effects/ScanLines";
import Terminal from "../components/ui/Terminal";
import SEO from "../components/SEO";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const terminalCommands = [
    "Initializing secure connection...",
    "Establishing encrypted channel...",
    "Ready to receive transmission...",
    "> Awaiting your project details...",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        project: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <>
      <SEO
        title="Contact GlitchLabs - Start Your Digital Rebellion Project"
        description="Ready to glitch the system? Contact GlitchLabs to discuss your most ambitious digital projects. Let's build something unexpected together."
        keywords="contact GlitchLabs, start project, digital rebellion, custom development quote, creative technology consulting, glitch the system"
        path="/contact"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <ScanLines intensity="light" className="absolute inset-0" />
          <div className="container mx-auto px-6 relative z-10">
            <RGBSplit trigger="scroll" intensity={6}>
              <h1 className="text-5xl md:text-7xl font-brutalist font-black mb-8">
                LET'S BUILD
                <br />
                <span className="text-cyber-green">SOMETHING UNEXPECTED</span>
              </h1>
            </RGBSplit>

            <p className="text-xl md:text-2xl text-cyber-gray font-mono max-w-4xl">
              Ready to glitch the system? Let's talk about how we can bring your
              most ambitious digital ideas to life.{" "}
              <GlitchText className="text-cyber-green" glitchOnHover>
                Every rebellion starts with a conversation
              </GlitchText>
              .
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-cyber-dark">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-brutalist font-bold text-cyber-green mb-8">
                  INITIATE_CONTACT( )
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  {/* Hidden field for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field for spam protection */}
                  <div style={{ display: "none" }}>
                    <input name="bot-field" />
                  </div>
                  <div>
                    <label className="block text-cyber-green font-mono text-sm mb-2">
                      NAME:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-cyber-black border border-cyber-green/30 text-cyber-white font-mono p-3 focus:border-cyber-green focus:outline-none transition-colors"
                      placeholder="Your name here..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-cyber-green font-mono text-sm mb-2">
                      EMAIL:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-cyber-black border border-cyber-green/30 text-cyber-white font-mono p-3 focus:border-cyber-green focus:outline-none transition-colors"
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-cyber-green font-mono text-sm mb-2">
                      PROJECT_TYPE:
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-cyber-black border border-cyber-green/30 text-cyber-white font-mono p-3 focus:border-cyber-green focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select project type...</option>
                      <option value="web-app">Custom Web Application</option>
                      <option value="brand-identity">
                        Brand Identity & Design
                      </option>
                      <option value="technical-consulting">
                        Technical Consulting
                      </option>
                      <option value="other">Something Else Entirely</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-cyber-green font-mono text-sm mb-2">
                      MESSAGE:
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-cyber-black border border-cyber-green/30 text-cyber-white font-mono p-3 focus:border-cyber-green focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, your vision, and how you want to break the rules..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "TRANSMITTING..." : "TRANSMIT_MESSAGE()"}
                  </Button>

                  {/* Status Message */}
                  {isSubmitting && (
                    <div className="mt-4 p-4 border border-yellow-400 text-yellow-400 bg-yellow-400/10 font-mono text-sm">
                      <div className="flex items-center space-x-2">
                        <span>...</span>
                        <span>ESTABLISHING_SECURE_CONNECTION...</span>
                      </div>
                    </div>
                  )}

                  {submitted && !isSubmitting && (
                    <div className="mt-4 p-4 border border-cyber-green text-cyber-green bg-cyber-green/10 font-mono text-sm">
                      <div className="flex items-center space-x-2">
                        <span>✓</span>
                        <span>
                          TRANSMISSION_SUCCESSFUL {">"}{" "}
                          MESSAGE_QUEUED_FOR_GLITCHLABS
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Terminal & Info */}
              <div className="space-y-8">
                <Terminal commands={terminalCommands} />

                <div className="bg-cyber-black border border-cyber-green/20 p-6">
                  <h3 className="text-xl font-brutalist font-bold text-cyber-green mb-4">
                    DIRECT_CHANNELS
                  </h3>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-cyber-green">{">"}</span>
                      <span className="text-cyber-gray">
                        ping hello@theglitchlabs.xyz
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-cyber-green">{">"}</span>
                      <span className="text-cyber-gray">
                        git clone github.com/glxabs
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-cyber-green">{">"}</span>
                      <span className="text-cyber-gray">
                        curl -X GET twitter.com/theglitchlabs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-cyber-black border border-cyber-green/20 p-6">
                  <h3 className="text-xl font-brutalist font-bold text-cyber-green mb-4">
                    RESPONSE_TIME
                  </h3>
                  <div className="font-mono text-sm text-cyber-gray space-y-2">
                    <div>→ Initial response: &lt; 24 hours</div>
                    <div>→ Project discussion: 48-72 hours</div>
                    <div>→ Proposal delivery: 3-5 business days</div>
                    <div className="text-cyber-green">
                      → Chaos deployment: When you're ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <RGBSplit trigger="scroll">
              <h2 className="text-4xl md:text-5xl font-brutalist font-black text-center mb-16">
                FREQUENTLY <span className="text-cyber-green">ASKED</span>
              </h2>
            </RGBSplit>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer:
                    "Every project is different, but most custom developments take 6-12 weeks. We move fast while maintaining our obsession with quality and disruption.",
                },
                {
                  question:
                    "Do you work with startups or only established companies?",
                  answer:
                    "We work with rebels of all sizes. From ambitious startups to established brands ready to break their own rules. What matters is your willingness to embrace the unconventional.",
                },
                {
                  question: "What technologies do you typically use?",
                  answer:
                    "React, Next.js, TypeScript, Node.js, and whatever else the project demands. We're not religious about tech stacks — we choose tools that serve the vision.",
                },
                {
                  question:
                    "Can you help with ongoing maintenance and support?",
                  answer:
                    "Absolutely. We build relationships, not just websites. Our support ranges from quick fixes to ongoing feature development and performance optimization.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-cyber-dark border border-cyber-green/20 p-6"
                >
                  <h3 className="text-xl font-brutalist font-bold text-cyber-green mb-3">
                    <GlitchText glitchOnHover>{faq.question}</GlitchText>
                  </h3>
                  <p className="text-cyber-gray font-mono text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-cyber-dark relative">
          <ScanLines intensity="medium" className="absolute inset-0" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <RGBSplit trigger="scroll" intensity={8}>
              <h2 className="text-4xl md:text-6xl font-brutalist font-black mb-8">
                GLITCH THE SYSTEM
                <br />
                <span className="text-cyber-green">WITH US</span>
              </h2>
            </RGBSplit>

            <p className="text-xl text-cyber-gray font-mono mb-12 max-w-3xl mx-auto">
              Your most ambitious ideas deserve unconventional execution. Let's
              build something that breaks the internet — in the best possible
              way.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
