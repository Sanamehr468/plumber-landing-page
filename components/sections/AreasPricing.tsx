import React from 'react';
import Image from 'next/image';
import { MapPin, Check, ShieldCheck, Clock, Zap } from 'lucide-react';
import Reveal from '../Reveal';

const AREAS = [
  'Downtown',
  'Northside',
  'Riverside',
  'Hillcrest',
  'Brookfield',
  'Lakeside',
  'Old Town',
  'Green Valley',
];

const PRICING_TIERS = [
  {
    name: 'Basic Repair',
    price: '89 USD',
    subtitle: 'For minor leaks, fixture tweaks, and slow drains.',
    popular: false,
    features: [
      'Minor leak & drip fixes',
      'Standard faucet / drain repair',
      'Upfront diagnosis',
      '90-day workmanship guarantee',
    ],
  },
  {
    name: 'Standard Service',
    price: '149 USD',
    subtitle: 'For water heaters, toilet installs, and pipe snaking.',
    popular: true,
    features: [
      'Advanced leak detection',
      'Water heater flush & check',
      'Toilet & disposal replacement',
      'High-pressure drain snaking',
      '1-year workmanship warranty',
    ],
  },
  {
    name: 'Emergency Call-Out',
    price: '199 USD',
    subtitle: 'Immediate 24/7 dispatched priority response.',
    popular: false,
    features: [
      'Guaranteed priority dispatch',
      'Immediate night/weekend arrival',
      'Main water line shut-off assistance',
      'Emergency pipe patching',
      'Complete damage assessment',
    ],
  },
];

export default function AreasPricing() {
  return (
    <section id="areas" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Areas Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-accent border border-accent/20 mb-4 tracking-wide uppercase">
              Service Coverage & Transparent Rates
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Proudly Serving Your Neighborhood 24/7
            </h2>
            <p className="text-muted text-base sm:text-lg font-body leading-relaxed">
              We provide rapid dispatch across the metropolitan area with clear, upfront pricing and no surprise fees.
            </p>
          </div>
        </Reveal>

        {/* Areas Grid & Visual Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          
          {/* Left: Areas List */}
          <Reveal className="lg:col-span-6">
            <div className="bg-primary border border-[#1E293B] rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-accent" />
                Primary Coverage Zones
              </h3>
              <p className="text-muted text-sm sm:text-base mb-6">
                Our mobile response units are stationed strategically across all districts to guarantee rapid arrival times.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {AREAS.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-surface border border-[#1E293B] hover:border-accent/40 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-white font-medium text-sm sm:text-base font-body">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#1E293B] flex items-center gap-3 text-muted text-sm">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Average arrival time across all zones is under 45 minutes for emergencies.</span>
              </div>
            </div>
          </Reveal>

          {/* Right: Map-Style Visual Panel */}
          <Reveal className="lg:col-span-6">
            <div className="relative h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-[#1E293B] group">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                alt="Modern cityscape service coverage zone overview"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              
              {/* Simulated Map Pins / Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-primary/80 backdrop-blur-md text-accent text-xs font-bold border border-accent/20">
                    Live Fleet Tracking Active
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white bg-primary/80 backdrop-blur-md px-3 py-1 rounded-lg border border-[#1E293B]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    8 Units on Duty
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {AREAS.slice(0, 4).map((area, i) => (
                    <div key={i} className="bg-primary/90 backdrop-blur-md border border-[#1E293B] p-3 rounded-xl text-center">
                      <div className="text-accent font-bold text-xs">{area}</div>
                      <div className="text-[10px] text-muted">Ready</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pricing Section Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Transparent, Upfront Pricing
            </h3>
            <p className="text-muted text-sm sm:text-base font-body">
              No guesswork. You approve the quote before a single wrench turns.
            </p>
          </div>
        </Reveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier, index) => (
            <Reveal key={index} className="flex">
              <div
                className={`w-full flex flex-col justify-between bg-primary rounded-2xl p-6 sm:p-8 border transition-all duration-300 relative ${
                  tier.popular
                    ? 'border-accent shadow-xl shadow-accent/5'
                    : 'border-[#1E293B] hover:border-accent/40'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-primary text-xs font-bold font-display uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display font-bold text-xl text-white">{tier.name}</h4>
                    <Zap className={`w-5 h-5 ${tier.popular ? 'text-accent' : 'text-muted'}`} />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold font-display text-white">{tier.price}</span>
                    <span className="text-muted text-xs ml-2">starting rate</span>
                  </div>

                  <p className="text-muted text-sm mb-6 pb-6 border-b border-[#1E293B]">
                    {tier.subtitle}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-white font-body">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-[11px] text-muted italic mb-4">
                    * Final price is confirmed after inspection before any work begins.
                  </div>
                  <a
                    href="#contact"
                    className={`w-full text-center block rounded-xl px-6 py-3.5 font-bold font-display transition-colors ${
                      tier.popular
                        ? 'bg-accent text-primary hover:bg-accent-hover'
                        : 'bg-surface hover:bg-surface-hover text-white border border-[#1E293B]'
                    }`}
                  >
                    Book Service Now
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
