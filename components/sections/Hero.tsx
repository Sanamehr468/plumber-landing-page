'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  Phone, 
  ShieldCheck, 
  Star, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Send
} from 'lucide-react'
import Reveal from '../Reveal'

export default function Hero() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Leak Repair' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setFormSubmitted(true)
  }

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-copper/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs, Trust Badges */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface text-accent border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span>Licensed, Insured & Trusted Local Experts</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Fast, Reliable Plumbing <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-200 to-white">
                  When You Need It Most
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-body text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
                From emergency leak repairs and stubborn clogs to complete water heater installations, FlowRight Plumbing delivers professional residential and commercial service 24 hours a day.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a 
                  href="tel:+0001234567" 
                  className="bg-accent text-primary font-bold rounded-xl px-6 py-4 hover:bg-accent-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white group text-base"
                >
                  <Phone className="w-5 h-5 fill-primary group-hover:rotate-12 transition-transform" />
                  <span>Call Now: (000) 123-4567</span>
                </a>
                <a 
                  href="#contact" 
                  className="border border-border text-white rounded-xl px-6 py-4 hover:bg-surface transition-all flex items-center justify-center gap-2 font-semibold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </a>
              </div>
            </Reveal>

            {/* Trust Badges Row */}
            <Reveal delay={400}>
              <div className="pt-6 border-t border-border grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-accent shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Licensed</div>
                    <div className="text-xs text-muted">& Fully Insured</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-accent shrink-0">
                    <Award className="w-5 h-5 text-copper" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">15+ Years</div>
                    <div className="text-xs text-muted">Expert Experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-accent shrink-0">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                      <span className="text-xs font-bold text-white">4.9</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">1,200+</div>
                    <div className="text-xs text-muted">5-Star Reviews</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image with floating stat cards & mini quick-quote form */}
          <div className="lg:col-span-5">
            <Reveal delay={200} className="relative">
              {/* Main Image Frame */}
              <div className="relative w-full h-[460px] sm:h-[520px] rounded-3xl overflow-hidden border border-border shadow-2xl bg-surface">
                <Image 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
                  alt="Professional FlowRight plumber fixing a complex pipe system" 
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stat Card 1: Emergency Response */}
              <div className="absolute -top-6 -left-6 bg-surface/90 backdrop-blur-md border border-border rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted font-medium">Emergency Response</div>
                  <div className="text-white font-bold text-sm">60 Min Or Less</div>
                </div>
              </div>

              {/* Floating Stat Card 2: Rating */}
              <div className="absolute bottom-28 -right-4 sm:-right-8 bg-surface/90 backdrop-blur-md border border-border rounded-2xl p-4 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-copper/10 border border-copper/30 flex items-center justify-center text-copper">
                  <Star className="w-5 h-5 fill-copper" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">4.9 Star Rating</div>
                  <div className="text-xs text-muted">Verified Homeowners</div>
                </div>
              </div>

              {/* Inline Quick-Quote Mini Form Card */}
              <div className="absolute -bottom-10 left-4 right-4 sm:left-6 sm:right-6 bg-surface border border-border rounded-2xl p-5 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-3 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-accent/20 text-accent mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-white text-sm">Request Received!</div>
                    <p className="text-xs text-muted">We will call you in under 5 minutes. (Placeholder form)</p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-accent underline pt-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Request Instant Callback</span>
                      <span className="text-[10px] text-muted">No obligation</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full bg-primary border border-border rounded-xl px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus-visible:outline-none"
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="w-full bg-primary border border-border rounded-xl px-3 py-2 text-sm text-white placeholder:text-muted focus:border-accent focus-visible:outline-none"
                      />
                    </div>
                    <div className="flex gap-2">
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-primary border border-border rounded-xl px-3 py-2 text-sm text-white focus:border-accent focus-visible:outline-none"
                      >
                        <option value="Leak Repair">Leak Repair</option>
                        <option value="Drain Cleaning">Drain Cleaning</option>
                        <option value="Water Heaters">Water Heaters</option>
                        <option value="Emergency">Emergency Repair</option>
                      </select>
                      <button 
                        type="submit" 
                        className="bg-accent text-primary font-bold px-4 py-2 rounded-xl text-sm hover:bg-accent-hover transition-colors shrink-0 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <span>Send</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
