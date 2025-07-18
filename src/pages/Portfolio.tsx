import React from 'react'
import GlitchText from '../components/ui/GlitchText'
import Button from '../components/ui/Button'
import RGBSplit from '../components/effects/RGBSplit'
import ScanLines from '../components/effects/ScanLines'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Portfolio: React.FC = () => {
  // Empty projects array - ready for real projects
  const projects: any[] = []
  
  /* Example project structure for when adding real projects:
  const projects = [
    {
      title: 'PROJECT_NAME',
      category: 'E-COMMERCE', // or 'BRAND_IDENTITY', 'OPEN_SOURCE', 'WEB_APP', etc.
      description: 'Project description that explains the challenge and solution.',
      tech: ['React', 'Next.js', 'TypeScript', 'etc'],
      status: 'LIVE', // or 'DEPLOYED', 'OSS', 'BETA'
      glitchIntensity: 6 // 1-10 for hover effect intensity
    }
  ]
  */

  return (
    <>
      <SEO
        title="Portfolio - Beautiful Chaos Projects | GlitchLabs"
        description="Explore GlitchLabs portfolio of rule-breaking projects: e-commerce platforms, brand identities, open-source tools, and experimental web applications."
        keywords="GlitchLabs portfolio, creative projects, digital brutalism projects, custom web development, experimental design, rebellion profitable"
        path="/portfolio"
      />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <ScanLines intensity="light" className="absolute inset-0" />
        <div className="container mx-auto px-6 relative z-10">
          <RGBSplit trigger="scroll" intensity={6}>
            <h1 className="text-5xl md:text-7xl font-brutalist font-black mb-8">
              PORTFOLIO OF
              <br />
              <span className="text-cyber-green">BEAUTIFUL CHAOS</span>
            </h1>
          </RGBSplit>
          
          <p className="text-xl md:text-2xl text-cyber-gray font-mono max-w-4xl">
            Projects that break rules, challenge expectations, and prove that 
            <GlitchText className="text-cyber-green" glitchOnHover>rebellion can be profitable</GlitchText>.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-6">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-2xl mx-auto">
                <GlitchText className="text-4xl md:text-6xl font-brutalist font-black mb-8" glitchOnHover>
                  PROJECTS_LOADING...
                </GlitchText>
                <p className="text-xl text-cyber-gray font-mono mb-8">
                  Current status: Building beautiful chaos for clients who dare to be different.
                </p>
                <div className="bg-cyber-black border border-cyber-green/20 p-6 font-mono text-sm text-cyber-green">
                  <div>$ git status</div>
                  <div className="text-cyber-white mt-2">On branch: main</div>
                  <div className="text-cyber-white">Working directory: clean</div>
                  <div className="text-cyber-white">Ready for: next_rebellion()</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="group bg-cyber-black border border-cyber-green/20 hover:border-cyber-green transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyber-green font-mono text-sm">
                      ./{project.category.toLowerCase()}/
                    </span>
                    <div className={`px-3 py-1 border text-xs font-mono ${
                      project.status === 'LIVE' ? 'border-cyber-green text-cyber-green' :
                      project.status === 'DEPLOYED' ? 'border-cyber-magenta text-cyber-magenta' :
                      project.status === 'OSS' ? 'border-cyber-green-bright text-cyber-green-bright' :
                      'border-yellow-400 text-yellow-400'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <RGBSplit trigger="hover" intensity={project.glitchIntensity}>
                    <h3 className="text-3xl font-brutalist font-black mb-4 group-hover:text-cyber-green transition-colors">
                      {project.title}
                    </h3>
                  </RGBSplit>
                  
                  <p className="text-cyber-gray font-mono text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {/* {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-cyber-dark border border-cyber-green/30 text-cyber-green font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))} */}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button variant="terminal" className="flex-1">
                      VIEW_CASE_STUDY
                    </Button>
                    <Button variant="secondary">
                      LIVE_DEMO
                    </Button>
                  </div>
                </div>
                
                {/* Fake terminal preview */}
                <div className="bg-cyber-dark border-t border-cyber-green/20 p-4">
                  <div className="bg-cyber-black border border-cyber-green/30 p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-cyber-magenta rounded-full" />
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <div className="w-2 h-2 bg-cyber-green rounded-full" />
                    </div>
                    <div className="font-mono text-xs text-cyber-green space-y-1">
                      <div>$ git clone {project.title.toLowerCase()}</div>
                      <div>$ npm run deploy:chaos</div>
                      <div className="text-cyber-white">✓ {project.status} deployment successful</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <RGBSplit trigger="scroll">
            <h2 className="text-4xl md:text-5xl font-brutalist font-black text-center mb-16">
              CHAOS <span className="text-cyber-green">METRICS</span>
            </h2>
          </RGBSplit>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: '47', label: 'PROJECTS_DEPLOYED', suffix: '+' },
              { metric: '99.2', label: 'UPTIME_CHAOS', suffix: '%' },
              { metric: '156', label: 'RULES_BROKEN', suffix: 'K' },
              { metric: '23', label: 'AWARDS_IGNORED', suffix: '' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-6xl font-brutalist font-black text-cyber-green mb-2 group-hover:animate-glitch">
                  {stat.metric}{stat.suffix}
                </div>
                <div className="text-cyber-gray font-mono text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-brutalist font-black mb-8">
            FROM CONCEPT TO <span className="text-cyber-green">CHAOS</span>
          </h2>
          
          <p className="text-xl text-cyber-gray font-mono mb-12 max-w-3xl mx-auto">
            Every project follows our proven methodology: Question everything, 
            break what's expected, build something that demands attention.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { phase: 'DISCOVERY', desc: 'We dissect your industry\'s conventions and find the cracks' },
              { phase: 'REBELLION', desc: 'We design solutions that challenge user expectations' },
              { phase: 'DEPLOYMENT', desc: 'We build and launch experiences that can\'t be ignored' }
            ].map((phase, index) => (
              <div key={index} className="bg-cyber-black border border-cyber-green/20 p-6">
                <h3 className="text-2xl font-brutalist font-bold text-cyber-green mb-4">
                  <GlitchText glitchOnHover>{phase.phase}</GlitchText>
                </h3>
                <p className="text-cyber-gray font-mono text-sm">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
          
          <Link to="/contact">
            <Button variant="primary" className="text-lg px-8 py-4">
              START_YOUR_REBELLION()
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}

export default Portfolio