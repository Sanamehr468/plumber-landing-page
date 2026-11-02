'use client'

import React, { useEffect, useState, useRef } from 'react'
import { ShieldCheck, Award, Users, Clock, Star } from 'lucide-react'

export default function TrustBar() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <section ref={ref} className="bg-surface border-y border-border py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Stat 1 */}
          <div className="text-center p-6 rounded-2xl bg-primary border border-border hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1">
              {inView ? <Counter end={15} suffix="+" /> : '15+'}
            </div>
            <div className="text-sm font-medium text-muted">Years Experience</div>
          </div>

          {/* Stat 2 */}
          <div className="text-center p-6 rounded-2xl bg-primary border border-border hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1">
              {inView ? <Counter end={12000} suffix="+" /> : '12,000+'}
            </div>
            <div className="text-sm font-medium text-muted">Jobs Completed</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center p-6 rounded-2xl bg-primary border border-border hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1">
              {inView ? <Counter end={60} suffix=" Min" /> : '60 Min'}
            </div>
            <div className="text-sm font-medium text-muted">Avg Emergency Response</div>
          </div>

          {/* Stat 4 */}
          <div className="text-center p-6 rounded-2xl bg-primary border border-border hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent mx-auto mb-4">
              <Star className="w-6 h-6 fill-accent text-accent" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-1">
              {inView ? <Counter end={4.9} decimals={1} suffix=" / 5" /> : '4.9 / 5'}
            </div>
            <div className="text-sm font-medium text-muted">Customer Rating</div>
          </div>
        </div>

        {/* Certification Badges Row */}
        <div className="pt-8 border-t border-border flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>Licensed Master Plumber</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>Fully Insured & Bonded</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>Background-Checked Pros</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>5-Star Rated Service</span>
          </div>
        </div>

      </div>
    </section>
  )
}

function Counter({ end, decimals = 0, suffix = '' }: { end: number; decimals?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const duration = 1500 // 1.5 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const current = progress * end

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }

    requestAnimationFrame(animateCount)
  }, [end])

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}
