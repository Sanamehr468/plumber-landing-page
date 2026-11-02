import React from 'react'
import { 
  Droplets, 
  Wrench, 
  Flame, 
  Pipette, 
  Bath, 
  AlertTriangle, 
  ArrowRight,
  Check
} from 'lucide-react'
import Reveal from '../Reveal'

const servicesData = [
  {
    title: 'Leak Repair',
    icon: Droplets,
    description: 'Advanced electronic leak detection and precise pipe repair to prevent costly structural water damage in your home or business.',
    priceHint: 'Starting from $99',
    features: ['Non-invasive detection', 'Slab & wall leaks', 'Same-day repair']
  },
  {
    title: 'Drain Cleaning',
    icon: Wrench,
    description: 'Professional snaking and high-pressure hydro-jetting to completely clear stubborn blockages and restore full pipe flow.',
    priceHint: 'Starting from $129',
    features: ['Hydro-jetting tech', 'Root removal', 'Camera inspection']
  },
  {
    title: 'Water Heaters',
    icon: Flame,
    description: 'Expert repair, maintenance, and new installation for traditional tank systems and high-efficiency tankless water heaters.',
    priceHint: 'Starting from $149',
    features: ['Tankless & standard', 'Same-day replacement', 'Energy efficient']
  },
  {
    title: 'Pipe Installation',
    icon: Pipette,
    description: 'Complete repiping services using durable PEX and copper materials for reliable, long-lasting water pressure throughout your property.',
    priceHint: 'Starting from $299',
    features: ['Whole-house repipe', 'PEX & copper', 'Code compliant']
  },
  {
    title: 'Bathroom/Kitchen Plumbing',
    icon: Bath,
    description: 'Upgrade your fixtures, sinks, faucets, toilets, and showers with expert plumbing installation and custom remodeling support.',
    priceHint: 'Starting from $119',
    features: ['Fixture upgrades', 'Garbage disposals', 'Leak-proof seals']
  },
  {
    title: 'Emergency Repairs',
    icon: AlertTriangle,
    description: 'Round-the-clock rapid dispatch for urgent plumbing crises including burst pipes, overflowing toilets, and major backups.',
    priceHint: '24/7 Rapid Dispatch',
    features: ['On-call 24 hours', '60 min response', 'No overtime hidden fees']
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface text-accent border border-accent/20">
              <span>Comprehensive Solutions</span>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Our Professional Plumbing Services
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="font-body text-base sm:text-lg text-muted">
              Whether you need routine maintenance or emergency midnight repairs, FlowRight Plumbing delivers unmatched craftsmanship backed by our satisfaction guarantee.
            </p>
          </Reveal>
        </div>

        {/* Services Grid: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-surface border border-[#1E293B] rounded-2xl p-6 sm:p-8 hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                  
                  {/* Subtle hover gradient top glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div>
                    {/* Header: Icon & Price Hint */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary border border-border flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-accent bg-primary px-3 py-1 rounded-full border border-border">
                        {service.priceHint}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm text-muted mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Bullet List */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link / Hover Button */}
                  <div className="pt-4 border-t border-border">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                    >
                      <span>Learn more & book</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <Reveal delay={200}>
          <div className="mt-16 bg-surface border border-border rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="font-display font-bold text-2xl text-white">Need a custom plumbing service not listed here?</h3>
              <p className="text-muted text-sm max-w-xl">We handle complex commercial projects, custom home builds, and specialized industrial plumbing as well.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a 
                href="tel:+0001234567" 
                className="bg-accent text-primary font-bold rounded-xl px-6 py-3.5 hover:bg-accent-hover transition-all text-center shadow-lg shadow-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Call (000) 123-4567
              </a>
              <a 
                href="#contact" 
                className="border border-[#1E293B] text-white rounded-xl px-6 py-3.5 hover:bg-surface transition-all text-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Contact Expert
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
