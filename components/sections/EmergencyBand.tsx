'use client'

import { Phone, Clock, ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'

export default function EmergencyBand() {
  return (
    <section className="py-12 bg-accent text-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0A1128_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <span>24/7 Emergency Dispatch</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
                  Burst pipe? We are there in 60 minutes.
                </h2>
                <p className="text-primary/80 font-body text-sm sm:text-base mt-1 max-w-xl">
                  Do not let water damage destroy your property. Our certified emergency plumbers are on standby right now.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <a
                href="tel:+0001234567"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white font-bold rounded-xl px-6 py-4 hover:bg-primary/90 transition-all shadow-lg text-base"
                aria-label="Call FlowRight Plumbing at (000) 123-4567"
              >
                <Phone className="w-5 h-5 text-accent animate-pulse" />
                <span>(000) 123-4567</span>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary font-bold rounded-xl px-6 py-4 hover:bg-primary/10 transition-all text-base"
              >
                <span>Get Help Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
