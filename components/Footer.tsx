'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const SERVICES_LINKS = [
  '24/7 Emergency Plumbing',
  'Residential Plumbing',
  'Commercial Plumbing',
  'Drain Cleaning & Hydro-Jetting',
  'Water Heater Repair & Install',
  'Leak Detection & Pipe Repair',
];

const QUICK_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Areas', href: '#areas' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-primary text-white border-t border-[#1E293B] relative overflow-hidden">
      
      {/* Top CTA Strip */}
      <div className="border-b border-[#1E293B] bg-surface/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Need a plumber today?
            </h3>
            <p className="text-muted text-sm sm:text-base font-body">
              Fast 24/7 emergency dispatch across all metropolitan zones.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+0001234567"
              className="inline-flex items-center gap-2.5 bg-accent text-primary font-bold font-display rounded-xl px-6 py-3.5 hover:bg-accent-hover transition-colors shadow-lg shadow-accent/10"
            >
              <Phone className="w-5 h-5" />
              <span>(000) 123-4567</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-surface hover:bg-surface-hover text-white border border-[#1E293B] font-bold font-display rounded-xl px-6 py-3.5 transition-colors"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block font-display text-2xl font-black text-white tracking-tight">
              FlowRight<span className="text-accent">.</span>
            </Link>
            <p className="text-muted text-sm sm:text-base font-body leading-relaxed">
              FlowRight Plumbing provides expert residential and commercial plumbing services with 24/7 emergency dispatch, transparent pricing, and unmatched craftsmanship.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-surface border border-[#1E293B] flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-surface border border-[#1E293B] flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl bg-surface border border-[#1E293B] flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Linkedin"
                className="w-10 h-10 rounded-xl bg-surface border border-[#1E293B] flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-white text-base tracking-wider uppercase">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((srv, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-muted text-sm hover:text-accent font-body transition-colors"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-white text-base tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((lnk, idx) => (
                <li key={idx}>
                  <a
                    href={lnk.href}
                    className="text-muted text-sm hover:text-accent font-body transition-colors"
                  >
                    {lnk.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display font-bold text-white text-base tracking-wider uppercase">Contact & Updates</h4>
            
            <div className="space-y-3 text-sm text-muted font-body">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+0001234567" className="text-white hover:text-accent transition-colors font-medium">
                  (000) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:hello@flowright.com" className="text-white hover:text-accent transition-colors font-medium">
                  hello@flowright.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span>24/7 Emergency &bull; Mon &ndash; Sun</span>
              </div>
            </div>

            {/* Newsletter form */}
            <div className="pt-2">
              <p className="text-xs text-muted mb-3 font-body">Subscribe for plumbing tips and seasonal offers:</p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-accent text-sm bg-surface p-3.5 rounded-xl border border-accent/30">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Subscribed successfully! Thank you.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full bg-surface border border-[#1E293B] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent"
                  />
                  <button
                    type="submit"
                    className="bg-accent text-primary font-bold font-display rounded-xl px-4 py-2.5 text-sm hover:bg-accent-hover transition-colors flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E293B] py-6 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-body">
          <div>
            &copy; {new Date().getFullYear()} FlowRight Plumbing. All rights reserved. Licensed and Insured.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">License Info</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
