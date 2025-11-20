import React, { useEffect, useState } from 'react';
import Marquee from './components/Marquee';
import { Shield, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-teal selection:text-brand-dark">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-display font-bold tracking-tighter text-brand-dark">
            EV<span className="text-brand-teal">SOUND</span> <span className="text-black ml-1">PEST CONTROL</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/green-shield-logo.svg" alt="Green Shield Certified" className="h-12 w-auto hidden sm:block" />
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-dark text-white px-6 py-2 font-display uppercase tracking-wider hover:bg-brand-teal transition-colors"
            >
              Get an Audit
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          
          <div className="relative z-10 col-span-1 lg:col-span-1 order-1">
            <h1 className="text-4xl sm:text-6xl lg:text-[9rem] leading-[0.9] font-display font-bold text-brand-dark mb-4 lg:mb-8">
              ENVIRON<br/>
              MENTALLY<br/>
              <span className="text-brand-teal">SOUND.</span>
            </h1>
            <p className="text-sm sm:text-xl text-slate-600 max-w-md leading-relaxed mb-6 lg:mb-10 font-light">
              High-performance pest management for New York's most sensitive environments. Hospitals, food plants, and commercial facilities rely on our science-led precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 bg-brand-dark text-white px-6 py-3 lg:px-8 lg:py-4 font-display text-sm lg:text-lg uppercase tracking-wide hover:bg-slate-800 transition-all"
              >
                Schedule Consultation <ArrowRight size={16} className="lg:w-5 lg:h-5" />
              </button>
            </div>
          </div>

          {/* Hero Image / Graphic */}
          <div className="relative flex justify-end lg:justify-end col-span-1 lg:col-span-1 order-2">
            {/* Added overflow-visible so ripples can expand beyond this container */}
            <div className="relative w-full max-w-[150px] sm:max-w-xs lg:max-w-lg aspect-square flex items-center justify-center overflow-visible">
              
              {/* Pulse/Ripple Effects - Increased opacity and scale */}
              <div className="absolute inset-0 bg-brand-cyan/30 rounded-full animate-ripple mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-brand-teal/20 rounded-full animate-ripple mix-blend-multiply" style={{ animationDelay: '0.45s' }}></div>
              
              {/* Static Glow */}
              <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse z-0"></div>
              
              <img 
                src="/ev-sound-shield.svg" 
                alt="Environmentally Sound Shield" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-heartbeat"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Infinite Marquee */}
      <Marquee items={[
        "Hospitals", "Food Distribution", "Nursing Homes", "Pharmaceutical", "LEED Certified", 
        "School Districts", "Office Complexes", "Manufacturing"
      ]} />

      {/* Green Shield Certification Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 skew-x-12 transform origin-top-right"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="bg-white p-8 rounded-sm max-w-md mx-auto lg:mx-0 rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/green-shield-logo.svg" 
                  alt="Green Shield Certified" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <div className="inline-block bg-brand-green text-brand-dark px-4 py-1 font-display font-bold uppercase tracking-wider mb-6">
                The Green Standard
              </div>
              <h2 className="text-5xl lg:text-7xl font-display font-bold mb-8 leading-none">
                AUDIT-READY.<br/>
                <span className="text-brand-green">Zero Tolerance.</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We are a Green Shield Certified company. This isn't just a label—it's a rigorous, science-based methodology.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-display font-bold">IPM Methodology</h4>
                    <p className="text-slate-400 text-sm">We address root causes using biological and physical controls, minimizing chemical usage.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-display font-bold">Sensitive Population Safety</h4>
                    <p className="text-slate-400 text-sm">Safe for patients, elderly, and children. Ideal for healthcare and education sectors.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-display font-bold">Regulatory Compliance</h4>
                    <p className="text-slate-400 text-sm">Full documentation and reporting for health department and 3rd party audits.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Services "Big List" Section */}
      <section className="py-32 bg-slate-100">
        <div className="container mx-auto px-6">
          <h3 className="text-sm font-display font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
            Our Expertise
          </h3>
          
          <div className="space-y-0 divide-y divide-slate-300 border-t border-b border-slate-300">
            {[
              { 
                title: "Healthcare Facilities", 
                desc: "Sterile environment protection for hospitals & clinics.",
                details: "We utilize non-volatile, HEPA-filtered treatments designed specifically for JCAHO-accredited facilities. Our protocols ensure zero airborne contaminants in ORs, ICUs, and patient wards, protecting immunocompromised individuals while maintaining 24/7 compliance."
              },
              { 
                title: "Food Distribution", 
                desc: "FSMA compliant strategies for warehouses & processing.",
                details: "From GMP audits to HARPC planning, our IPM programs are built to withstand FDA scrutiny. We focus on exclusion, pheromone monitoring, and organic-compliant controls to protect your supply chain without risking product contamination."
              },
              { 
                title: "Long-Term Care", 
                desc: "Compassionate, low-impact solutions for nursing homes.",
                details: "We prioritize the comfort and safety of residents. Our discreet, low-odor applications and 'prevention-first' physical barriers significantly reduce the need for chemical interventions in living areas, ensuring peace of mind for families and administrators."
              },
              { 
                title: "Commercial Property", 
                desc: "Discreet, effective management for high-end offices.",
                details: "Protect your Class-A reputation. We offer after-hours service, discreet unmarked response, and LEED-credit-eligible pest management strategies that align with your building's sustainability goals."
              }
            ].map((service, idx) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div 
                  key={idx} 
                  onClick={() => setIsOpen(!isOpen)}
                  className="group py-12 cursor-pointer hover:bg-white transition-all duration-300 px-4"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </h2>
                    <div className="flex items-center gap-4 mt-4 lg:mt-0">
                      <p className="text-slate-500 max-w-md lg:text-right group-hover:text-brand-dark transition-colors">
                        {service.desc}
                      </p>
                      <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ArrowRight className={`hidden lg:block ${isOpen ? 'text-brand-teal' : 'text-slate-300'}`} />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-lg text-slate-700 leading-relaxed max-w-3xl border-l-4 border-brand-teal pl-6">
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl lg:text-6xl font-display font-bold text-brand-dark mb-6">
                START YOUR&nbsp;
                <span className="text-brand-teal">AUDIT.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Secure your facility with a Green Shield Certified inspection. Tell us about your environment, and we will deploy the appropriate specialist.
              </p>
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
                <h4 className="font-display font-bold text-xl mb-4">Direct Line</h4>
                <p className="text-slate-600 mb-6">For emergency commercial response:</p>
                <a href="tel:5551234567" className="text-3xl font-display font-bold text-brand-dark hover:text-brand-teal transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>

            <form className="bg-slate-50 p-8 lg:p-12 rounded-sm border border-slate-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Company</label>
                  <input type="text" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="Facility Name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Phone</label>
                  <input type="tel" className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Facility Type</label>
                <select className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors text-slate-600">
                  <option>Healthcare / Hospital</option>
                  <option>Food Processing / Distribution</option>
                  <option>Nursing Home / Long-Term Care</option>
                  <option>Commercial Office</option>
                  <option>Education / School</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                <textarea className="w-full bg-white border border-slate-300 px-4 py-3 h-32 focus:outline-none focus:border-brand-teal transition-colors" placeholder="Describe your pest concern or compliance requirements..."></textarea>
              </div>

              <button className="w-full bg-brand-dark text-white font-display font-bold uppercase tracking-widest py-4 hover:bg-brand-teal transition-colors">
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-6 grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-display font-bold mb-6">ENVIRONMENTALLY SOUND</h2>
            <p className="text-slate-400 max-w-sm mb-8">
              Protecting New York's most critical infrastructure with science, safety, and sustainability.
            </p>
            <div className="flex gap-4">
              <img src="/ev-sound-shield.svg" className="h-16 w-auto opacity-80 grayscale hover:grayscale-0 transition-all" />
              <img src="/green-shield-logo.svg" className="h-16 w-auto opacity-80 grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-wider text-brand-teal">CONTACT</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <Phone size={18} /> (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} /> hello@evsoundpestcontrol.com
              </li>
              <li>
                Long Island & NYC<br/>
                Commercial Services Division
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-wider text-brand-teal">QUICK LINKS</h4>
            <ul className="space-y-4 text-slate-300">
              <li><a href="#" className="hover:text-brand-teal transition-colors">Our Method</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Audit Support</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">MSDS Portal</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-6 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Environmentally Sound Pest Control. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
