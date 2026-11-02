'use client';

import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Reveal from '../Reveal';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Do you offer 24/7 emergency service?',
    answer: 'Yes! FlowRight Plumbing operates 24 hours a day, 7 days a week, 365 days a year. Our emergency dispatch team is always ready for urgent calls.',
  },
  {
    question: 'How fast can you arrive?',
    answer: 'For emergency calls within our primary coverage zones, our average arrival time is between 30 and 45 minutes.',
  },
  {
    question: 'Are your plumbers licensed and insured?',
    answer: 'Absolutely. Every technician on our team is fully licensed, background-checked, insured, and certified for both residential and commercial work.',
  },
  {
    question: 'Do you give upfront pricing?',
    answer: 'Yes, we always provide a clear, written estimate after inspecting the issue before any work or repairs begin. No hidden surprises.',
  },
  {
    question: 'Do you guarantee your work?',
    answer: 'We stand by our craftsmanship with solid warranties ranging from 90 days to full multi-year guarantees on major replacements and installations.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve Downtown, Northside, Riverside, Hillcrest, Brookfield, Lakeside, Old Town, Green Valley, and surrounding neighborhoods.',
  },
];

const SERVICES_LIST = [
  '24/7 Emergency Plumbing',
  'Residential Plumbing',
  'Commercial Plumbing',
  'Drain Cleaning & Hydro-Jetting',
  'Water Heater Repair & Install',
  'Leak Detection & Pipe Repair',
];

export default function FaqCta() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES_LIST[0]);
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!phone.trim()) newErrors.phone = 'Phone number is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-surface text-accent border border-accent/20 mb-4 tracking-wide uppercase">
                Frequently Asked Questions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Got Questions? We Have Answers
              </h2>
              <p className="text-muted text-base sm:text-lg font-body leading-relaxed">
                Everything you need to know about our dispatch times, pricing policies, and plumbing guarantees.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={index}>
                  <div className="bg-surface border border-[#1E293B] rounded-2xl overflow-hidden transition-colors hover:border-accent/40">
                    <button
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-white text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ml-4 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-muted text-sm sm:text-base font-body leading-relaxed border-t border-[#1E293B]/50 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-surface relative overflow-hidden border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-accent border border-accent/20 mb-4 tracking-wide uppercase">
                Book Service / Get Quote
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Request Immediate Assistance
              </h2>
              <p className="text-muted text-base sm:text-lg font-body leading-relaxed">
                Fill out the form below for fast dispatch or routine scheduling. For immediate emergencies, call us right away.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Side */}
            <Reveal className="lg:col-span-7">
              <div className="bg-primary border border-[#1E293B] rounded-2xl p-6 sm:p-10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">Request Received Successfully!</h3>
                    <p className="text-muted max-w-md mx-auto text-sm sm:text-base font-body">
                      Thank you, <span className="text-white font-semibold">{name}</span>. Our dispatch team has received your request and will call you at <span className="text-white font-semibold">{phone}</span> within 10 minutes.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-6 py-3 rounded-xl bg-surface hover:bg-surface-hover text-white text-sm font-bold border border-[#1E293B] transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                          Your Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className={`w-full bg-primary border rounded-xl px-4 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent ${
                            errors.name ? 'border-red-500' : 'border-[#1E293B]'
                          }`}
                        />
                        {errors.name && (
                          <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                          Phone Number <span className="text-accent">*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(000) 123-4567"
                          className={`w-full bg-primary border rounded-xl px-4 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent ${
                            errors.phone ? 'border-red-500' : 'border-[#1E293B]'
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                        Select Service
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-primary border border-[#1E293B] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-accent"
                      >
                        {SERVICES_LIST.map((srv, idx) => (
                          <option key={idx} value={srv} className="bg-primary text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                        Message / Issue Description
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe the plumbing issue or service needed..."
                        className="w-full bg-primary border border-[#1E293B] rounded-xl px-4 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent text-primary font-bold font-display rounded-xl px-6 py-4 hover:bg-accent-hover transition-colors shadow-lg shadow-accent/10"
                    >
                      Book Dispatch / Request Quote
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Contact Details Side Panel */}
            <Reveal className="lg:col-span-5">
              <div className="space-y-6">
                <div className="bg-primary border border-[#1E293B] rounded-2xl p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-white mb-6">Direct Contact Info</h3>
                  
                  <div className="space-y-6">
                    <a
                      href="tel:+0001234567"
                      className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-[#1E293B] hover:border-accent/40 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted">Emergency Hotline</div>
                        <div className="text-white font-bold font-display text-base sm:text-lg">(000) 123-4567</div>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@flowright.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-[#1E293B] hover:border-accent/40 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted">Email Inquiries</div>
                        <div className="text-white font-bold font-display text-sm sm:text-base">hello@flowright.com</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-[#1E293B]">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted">Working Hours</div>
                        <div className="text-white font-bold font-display text-sm sm:text-base">24/7 Emergency Service (Mon &ndash; Sun)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface border border-[#1E293B] rounded-2xl p-6 sm:p-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base">Licensed & Insured</h4>
                    <p className="text-xs text-muted">Full professional coverage for complete peace of mind on every job.</p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
