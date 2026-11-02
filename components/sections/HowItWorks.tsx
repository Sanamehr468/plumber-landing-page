'use client'

import { PhoneCall, Search, Wrench, ShieldCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Call',
    description: 'Reach our 24/7 dispatch team to explain your issue or schedule routine maintenance.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Inspect',
    description: 'Our certified plumber arrives on time, diagnoses the core problem, and gives upfront pricing.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Fix',
    description: 'We execute precision repairs using top-grade equipment, keeping your home clean throughout.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Guarantee',
    description: 'We test the system thoroughly and back our workmanship with a rock-solid guarantee.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>
            <div>
              <span className="inline-block rounded-full text-xs font-semibold bg-primary text-accent border border-accent/20 px-3 py-1 mb-3">
                Simple 4-Step Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                How FlowRight Works For You
              </h2>
              <p className="text-muted font-body text-base sm:text-lg mt-4">
                We have streamlined our dispatch and repair process so you can get back to your routine with zero hassle.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-[#1E293B] -translate-y-8 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index}>
                <div className="bg-primary border border-[#1E293B] rounded-2xl p-6 relative z-10 hover:border-accent/40 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-surface border border-accent/20 flex items-center justify-center text-accent">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-display font-extrabold text-muted/40">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-white font-display font-bold text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted font-body text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-accent font-semibold">
                    <span>Step {step.number} of 04</span>
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
