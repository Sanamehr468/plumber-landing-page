'use client'

import Image from 'next/image'
import { DollarSign, Clock, ShieldCheck, Award } from 'lucide-react'
import Reveal from '../Reveal'

const benefits = [
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'No hidden fees or surprise overtime charges. You approve the exact price before our tools ever touch a pipe.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Prompt arrival windows and fully stocked trucks mean most repairs are completed on the very first visit.',
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed Work',
    description: 'We stand behind every weld, replacement, and installation with a rock-solid lifetime workmanship guarantee.',
  },
  {
    icon: Award,
    title: 'Certified Pros',
    description: 'Licensed, insured, background-checked master plumbers dedicated to treating your home with utmost respect.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <div className="space-y-6">
                <div>
                  <span className="inline-block rounded-full text-xs font-semibold bg-surface text-accent border border-accent/20 px-3 py-1 mb-3">
                    Why Choose FlowRight
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                    Reliable plumbing backed by decades of excellence.
                  </h2>
                  <p className="text-muted font-body text-base sm:text-lg mt-4">
                    We combine old-school craftsmanship with modern diagnostic technology to deliver flawless residential and commercial plumbing solutions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <div 
                        key={index} 
                        className="bg-surface border border-[#1E293B] rounded-2xl p-5 hover:border-accent/40 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-white font-display font-bold text-lg mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-muted font-body text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-copper/20 rounded-3xl blur-2xl -z-10 opacity-70" />
                <div className="relative rounded-2xl overflow-hidden border border-[#1E293B] shadow-2xl bg-surface aspect-[4/3] sm:aspect-[16/10]">
                  <Image
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                    alt="Professional plumber working on modern piping system"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-surface border border-[#1E293B] p-5 rounded-2xl shadow-xl hidden sm:block max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent text-primary font-bold flex items-center justify-center text-xl shrink-0 font-display">
                      15+
                    </div>
                    <div>
                      <div className="text-white font-display font-bold text-sm">Years of Experience</div>
                      <div className="text-muted text-xs">Serving residential & commercial clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
