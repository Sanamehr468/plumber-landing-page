'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Wrench, 
  Phone, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  Droplets, 
  Flame, 
  Pipette, 
  Bath, 
  AlertTriangle 
} from 'lucide-react'

const servicesList = [
  { name: 'Leak Repair', href: '#services', icon: Droplets, desc: 'Fast detection & repair' },
  { name: 'Drain Cleaning', href: '#services', icon: Wrench, desc: 'Advanced hydro-jetting' },
  { name: 'Water Heaters', href: '#services', icon: Flame, desc: 'Tankless & standard' },
  { name: 'Pipe Installation', href: '#services', icon: Pipette, desc: 'PEX & copper repiping' },
  { name: 'Bathroom/Kitchen', href: '#services', icon: Bath, desc: 'Fixtures & remodels' },
  { name: 'Emergency Repairs', href: '#services', icon: AlertTriangle, desc: '24/7 rapid dispatch' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-400">
        {/* Top bar */}
        <div className={`bg-surface border-b border-border transition-all duration-400 ${isScrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'py-2.5 opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-muted gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-accent font-semibold">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span>24/7 Emergency Service Available</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-copper" />
                <span>Mon - Sun: Open 24 Hours</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+0001234567" 
                className="flex items-center gap-1.5 text-white font-medium hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                aria-label="Call FlowRight Plumbing emergency line"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Emergency Line: (000) 123-4567</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className={`transition-all duration-400 bg-primary/90 backdrop-blur-md border-b border-border ${isScrolled ? 'py-3 shadow-xl' : 'py-5'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-surface border border-accent/30 flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
                  FlowRight <span className="text-accent">Plumbing</span>
                </span>
                <span className="text-[10px] text-muted font-body uppercase tracking-wider">Licensed & Insured</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Services Dropdown */}
              <div 
                className="relative group py-2"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <a 
                  href="#services" 
                  className="flex items-center gap-1 text-sm font-body text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-accent' : ''}`} />
                </a>

                {/* Mega Menu Dropdown */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-surface border border-border rounded-2xl p-4 shadow-2xl grid grid-cols-2 gap-3 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 translate-y-2 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  {servicesList.map((srv, idx) => {
                    const IconComp = srv.icon
                    return (
                      <a
                        key={idx}
                        href={srv.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl bg-primary/50 border border-transparent hover:border-accent/40 hover:bg-surface-hover transition-all group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent group-hover/item:border-accent shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover/item:text-accent transition-colors">{srv.name}</div>
                          <div className="text-xs text-muted">{srv.desc}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              <a href="#about" className="text-sm font-body text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1">About</a>
              <a href="#areas" className="text-sm font-body text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1">Areas</a>
              <a href="#reviews" className="text-sm font-body text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1">Reviews</a>
              <a href="#faq" className="text-sm font-body text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1">FAQ</a>
              <a href="#contact" className="text-sm font-body text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1">Contact</a>
            </div>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-4">
              <a 
                href="tel:+0001234567" 
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border text-white text-sm font-semibold hover:bg-surface transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>(000) 123-4567</span>
              </a>
              <a 
                href="#contact" 
                className="bg-accent text-primary font-bold rounded-xl px-5 py-3 text-sm hover:bg-accent-hover transition-all shadow-lg shadow-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-surface border border-border text-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 bg-primary/80 backdrop-blur-xl lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-surface border-l border-border p-6 flex flex-col justify-between transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-20 overflow-y-auto space-y-6">
            <div className="flex flex-col space-y-3">
              <span className="text-xs uppercase tracking-wider text-muted font-bold px-2">Navigation</span>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-primary/50 text-white font-medium hover:text-accent hover:bg-primary transition-all flex items-center justify-between"
              >
                <span>Services</span>
                <Wrench className="w-4 h-4 text-accent" />
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-primary/50 text-white font-medium hover:text-accent hover:bg-primary transition-all"
              >
                About Us
              </a>
              <a 
                href="#areas" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-primary/50 text-white font-medium hover:text-accent hover:bg-primary transition-all"
              >
                Service Areas
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-primary/50 text-white font-medium hover:text-accent hover:bg-primary transition-all"
              >
                Customer Reviews
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-primary/50 text-white font-medium hover:text-accent hover:bg-primary transition-all"
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-primary/50 text-white font-medium hover:text-accent hover:bg-primary transition-all"
              >
                Contact & Quote
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-primary border border-border space-y-3">
              <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>24/7 Rapid Emergency Dispatch</span>
              </div>
              <p className="text-xs text-muted">Got a burst pipe or overflowing toilet? Our expert plumbers are ready right now.</p>
              <a 
                href="tel:+0001234567" 
                className="w-full bg-accent text-primary font-bold rounded-xl py-3 flex items-center justify-center gap-2 text-sm hover:bg-accent-hover transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call (000) 123-4567
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border text-center text-xs text-muted">
            FlowRight Plumbing. All rights reserved.
          </div>
        </div>
      </div>

      {/* Sticky Call Now button on mobile only */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex gap-3">
        <a 
          href="tel:+0001234567" 
          className="flex-1 bg-accent text-primary font-bold rounded-2xl py-3.5 px-4 shadow-2xl flex items-center justify-center gap-2 text-sm border-2 border-white/20 active:scale-95 transition-transform"
          aria-label="Call Now for emergency plumbing"
        >
          <Phone className="w-4 h-4 fill-primary" />
          <span>Call Now: (000) 123-4567</span>
        </a>
        <a 
          href="#contact" 
          className="bg-surface text-white font-semibold rounded-2xl py-3.5 px-4 border border-border flex items-center justify-center text-sm shadow-xl active:scale-95 transition-transform"
        >
          Quote
        </a>
      </div>
    </>
  )
}
