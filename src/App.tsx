import React from 'react';
import { Terminal, Shield, Code2, Fingerprint, Lock, Webhook, ChevronRight, Mail, Github, Linkedin, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-[#FF4444]" />
            <span className="font-bold">SecurityPro</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-[#FF4444] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#FF4444] transition-colors">Skills</a>
            <a href="#certificates" className="hover:text-[#FF4444] transition-colors">Certificates</a>
            <a href="#projects" className="hover:text-[#FF4444] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#FF4444] transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Offensive Security
              <br />
              <span className="text-[#FF4444]">Specialist</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Penetration Testing | Vulnerability Assessment | Red-Team Engagements
            </p>
            <a 
              href="#contact"
              className="group flex items-center space-x-2 bg-[#FF4444] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF4444]/90 transition-colors"
            >
              <span>Get in touch</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-[#FF4444]" />,
                title: 'Penetration Testing',
                description: 'Comprehensive security assessments of web applications, networks, and infrastructure.'
              },
              {
                icon: <Code2 className="w-8 h-8 text-[#FF4444]" />,
                title: 'Vulnerability Assessment',
                description: 'Systematic review of security weaknesses in systems and applications.'
              },
              {
                icon: <Fingerprint className="w-8 h-8 text-[#FF4444]" />,
                title: 'Red Team Operations',
                description: 'Advanced adversary simulation and security control validation.'
              },
              {
                icon: <Lock className="w-8 h-8 text-[#FF4444]" />,
                title: 'Security Consulting',
                description: 'Strategic security guidance and best practice recommendations.'
              },
              {
                icon: <Webhook className="w-8 h-8 text-[#FF4444]" />,
                title: 'Social Engineering',
                description: 'Human vulnerability assessment and awareness training.'
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Certifications</h2>
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
              {[
                {
                  title: 'OSCP',
                  issuer: 'Offensive Security',
                  date: '2023',
                  description: 'Offensive Security Certified Professional'
                },
                {
                  title: 'CEH',
                  issuer: 'EC-Council',
                  date: '2022',
                  description: 'Certified Ethical Hacker'
                },
                {
                  title: 'CISSP',
                  issuer: 'ISC²',
                  date: '2021',
                  description: 'Certified Information Systems Security Professional'
                },
                {
                  title: 'GPEN',
                  issuer: 'GIAC',
                  date: '2020',
                  description: 'GIAC Penetration Tester'
                }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="flex-none w-[300px] p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-[#FF4444]/20"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-6 h-6 text-[#FF4444]" />
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                  </div>
                  <p className="text-[#FF4444] font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-2">{cert.description}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
              {[
                {
                  title: 'Financial Institution Security Audit',
                  description: 'Led a comprehensive security assessment for a major financial institution, identifying and helping remediate critical vulnerabilities.',
                  tags: ['Web Security', 'Network Penetration', 'Compliance']
                },
                {
                  title: 'Healthcare Provider Protection',
                  description: 'Conducted red team operations for a healthcare network, improving their security posture and HIPAA compliance.',
                  tags: ['Red Team', 'Social Engineering', 'Compliance']
                },
                {
                  title: 'E-commerce Platform Assessment',
                  description: 'Performed thorough penetration testing of a major e-commerce platform, securing customer data and payment systems.',
                  tags: ['Application Security', 'Payment Systems', 'PCI DSS']
                },
                {
                  title: 'Government Agency Security',
                  description: 'Provided security consulting and vulnerability assessment for a government agency\'s critical infrastructure.',
                  tags: ['Infrastructure', 'Compliance', 'Risk Assessment']
                }
              ].map((project, index) => (
                <div 
                  key={index}
                  className="flex-none w-[400px] p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-[#FF4444]/10 text-[#FF4444] text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <p className="text-gray-400 mb-8">
                Looking to improve your security posture? Let's discuss how I can help protect your organization.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:contact@example.com"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <form className="flex-1 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#FF4444] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#FF4444] focus:outline-none"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#FF4444] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#FF4444] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF4444]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl text-center text-gray-400">
          © {new Date().getFullYear()} SecurityPro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;