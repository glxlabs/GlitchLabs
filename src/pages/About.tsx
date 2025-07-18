import React from "react";
import GlitchText from "../components/ui/GlitchText";
import RGBSplit from "../components/effects/RGBSplit";
import ScanLines from "../components/effects/ScanLines";
import SEO from "../components/SEO";

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About GlitchLabs - Digital Brutalism Philosophy & Creative Vision"
        description="Discover the philosophy behind GlitchLabs: where digital chaos meets precision. We embrace the unexpected, raw, and unapologetically bold in creative technology."
        keywords="about GlitchLabs, digital brutalism philosophy, creative technology studio, glitch as feature, unconventional design, digital chaos"
        path="/about"
      />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <ScanLines intensity="light" className="absolute inset-0" />
          <div className="container mx-auto px-6 relative z-10">
            <RGBSplit trigger="scroll" intensity={6}>
              <h1 className="text-5xl md:text-7xl font-brutalist font-black mb-8">
                WHERE DIGITAL CHAOS
                <br />
                <span className="text-cyber-green">MEETS PRECISION</span>
              </h1>
            </RGBSplit>

            <p className="text-xl md:text-2xl text-cyber-gray font-mono max-w-4xl">
              <GlitchText glitchOnHover>GlitchLabs</GlitchText> is a creative
              technology studio that specializes in building digital experiences
              that break the mold. We embrace the unexpected, the raw, and the
              unapologetically bold.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-cyber-dark">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-brutalist font-black mb-16 text-center">
              OUR <span className="text-cyber-green">PHILOSOPHY</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-cyber-black border border-cyber-green/20 p-8">
                <h3 className="text-2xl font-brutalist font-bold text-cyber-green mb-6">
                  <GlitchText glitchOnHover>GLITCH AS FEATURE</GlitchText>
                </h3>
                <p className="text-cyber-gray font-mono text-sm leading-relaxed">
                  We believe the most interesting digital experiences happen at
                  the edges - where perfect meets broken, where polished meets
                  raw. Our work celebrates the beauty in digital imperfection.
                </p>
              </div>

              <div className="bg-cyber-black border border-cyber-green/20 p-8">
                <h3 className="text-2xl font-brutalist font-bold text-cyber-green mb-6">
                  FUNCTION THROUGH DISRUPTION
                </h3>
                <p className="text-cyber-gray font-mono text-sm leading-relaxed">
                  Every project starts with the question: "What if we didn't do
                  it the expected way?" We build things that work beautifully
                  precisely because they break the rules.
                </p>
              </div>

              <div className="bg-cyber-black border border-cyber-green/20 p-8">
                <h3 className="text-2xl font-brutalist font-bold text-cyber-green mb-6">
                  COMMUNITY-DRIVEN INNOVATION
                </h3>
                <p className="text-cyber-gray font-mono text-sm leading-relaxed">
                  We create tools and experiences for builders, makers, and
                  digital rebels. Our work empowers others to create their own
                  beautiful chaos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <RGBSplit trigger="scroll">
              <h2 className="text-4xl md:text-5xl font-brutalist font-black mb-16 text-center">
                WHAT WE <span className="text-cyber-green">DO</span>
              </h2>
            </RGBSplit>

            <div className="space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-brutalist font-bold text-cyber-green mb-6">
                    CREATIVE DEVELOPMENT
                  </h3>
                  <ul className="space-y-3 text-cyber-gray font-mono">
                    <li>
                      → Custom web applications that challenge conventional
                      design
                    </li>
                    <li>
                      → Interactive experiences that blur the line between art
                      and technology
                    </li>
                    <li>
                      → Experimental interfaces that push browser capabilities
                      to their limits
                    </li>
                  </ul>
                </div>
                <div className="bg-cyber-dark p-8 border border-cyber-green/20">
                  <div className="font-mono text-sm text-cyber-green">
                    <div className="mb-2">
                      class CreativeApp extends React.Component {"{"}
                    </div>
                    <div className="ml-4 mb-2">render() {"{"}</div>
                    <div className="ml-8 mb-2">
                      return &lt;GlitchMagic /&gt;
                    </div>
                    <div className="ml-4 mb-2">{"}"}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-cyber-dark p-8 border border-cyber-green/20">
                  <div className="font-mono text-sm text-cyber-green">
                    <div className="mb-2"># Brand Identity Transformation</div>
                    <div className="mb-2">$ git init your-brand</div>
                    <div className="mb-2">$ npm install --save rebellion</div>
                    <div className="mb-2">$ npm run build:authentic</div>
                    <div className="text-cyber-white">
                      ✓ Brand identity deployed
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-brutalist font-bold text-cyber-green mb-6">
                    BRAND IDENTITY & DIGITAL DESIGN
                  </h3>
                  <ul className="space-y-3 text-cyber-gray font-mono">
                    <li>
                      → Visual identities for brands that refuse to blend in
                    </li>
                    <li>
                      → Websites that make users stop scrolling and pay
                      attention
                    </li>
                    <li>
                      → Digital campaigns that create genuine emotional
                      reactions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-brutalist font-bold text-cyber-green mb-6">
                    PRODUCT INNOVATION
                  </h3>
                  <ul className="space-y-3 text-cyber-gray font-mono">
                    <li>
                      → Developer tools and libraries for the creative community
                    </li>
                    <li>
                      → Open-source projects that solve real problems
                      differently
                    </li>
                    <li>
                      → Technical experiments that become tomorrow's standards
                    </li>
                  </ul>
                </div>
                <div className="bg-cyber-dark p-8 border border-cyber-green/20">
                  <div className="font-mono text-sm text-cyber-green">
                    <div className="mb-2">
                      import {"{ GlitchEffect }"} from '@glitchlabs/chaos'
                    </div>
                    <div className="mb-4"></div>
                    <div className="mb-2">
                      const innovation = () =&gt; {"{"}
                    </div>
                    <div className="ml-4 mb-2">return breakTheRules()</div>
                    <div className="mb-2">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Difference Section */}
        <section className="py-20 bg-cyber-dark relative">
          <ScanLines intensity="medium" className="absolute inset-0" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <RGBSplit trigger="scroll" intensity={8}>
              <h2 className="text-4xl md:text-6xl font-brutalist font-black mb-8">
                THE GLITCHLABS
                <br />
                <span className="text-cyber-green">DIFFERENCE</span>
              </h2>
            </RGBSplit>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-cyber-gray font-mono mb-8 leading-relaxed">
                We're not your typical agency. We're the studio you call when
                "normal" isn't an option. When your project needs to stand out,
                break through, or completely redefine what's possible — that's
                where we thrive.
              </p>

              <p className="text-lg text-cyber-gray font-mono">
                Our clients range from startups building the next big thing to
                established brands ready to take creative risks. What they all
                share is a willingness to
                <GlitchText className="text-cyber-green mx-2" glitchOnHover>
                  embrace the unconventional
                </GlitchText>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
