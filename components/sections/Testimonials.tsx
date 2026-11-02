'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Reveal from '../Reveal';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'Downtown District',
    rating: 5,
    text: 'FlowRight Plumbing saved our home when a pipe burst at 2 AM. The technician arrived in under 30 minutes, shut off the main, and had a permanent fix installed before breakfast. Incredible service!',
    initials: 'SJ',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Marcus Vance',
    location: 'Northside Hills',
    rating: 5,
    text: 'Transparent pricing with zero hidden fees. They replaced our old water heater and explained the entire process. Professional, tidy, and extremely polite.',
    initials: 'MV',
    date: 'A month ago',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    location: 'Riverside Residences',
    rating: 5,
    text: 'We run a local restaurant, and a grease trap backup is our worst nightmare. FlowRight handled our commercial emergency immediately and kept us operational. Lifesavers!',
    initials: 'ER',
    date: '3 weeks ago',
  },
  {
    id: 4,
    name: 'David Callahan',
    location: 'Hillcrest Estates',
    rating: 5,
    text: 'Fixed a persistent slab leak that three other plumbing companies could not diagnose. Their acoustic detection gear found the exact spot without tearing up our hardwood floors.',
    initials: 'DC',
    date: '2 months ago',
  },
  {
    id: 5,
    name: 'Aisha Patel',
    location: 'Brookfield Commons',
    rating: 5,
    text: 'Super clean work installing our new bathroom fixtures. They wore boot covers inside the house and cleaned up every speck of debris. Highly recommended.',
    initials: 'AP',
    date: '1 month ago',
  },
  {
    id: 6,
    name: 'Robert Thorne',
    location: 'Old Town Square',
    rating: 5,
    text: 'Called for a routine drain clearing and they also spotted a failing pressure regulator that could have caused major damage. Honest advice and great craftsmanship.',
    initials: 'RT',
    date: '3 weeks ago',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-surface text-accent border border-accent/20 mb-4 tracking-wide uppercase">
              Customer Reviews
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Homeowners and Businesses Alike
            </h2>
            <p className="text-muted text-base sm:text-lg font-body leading-relaxed">
              Read verified feedback from real clients across our service areas who rely on FlowRight Plumbing for fast, honest, and expert work.
            </p>
          </div>
        </Reveal>

        {/* Overall Rating Summary */}
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-surface border border-[#1E293B] rounded-2xl p-6 sm:p-8 max-w-xl mx-auto mb-12 shadow-lg">
            <div className="flex items-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold font-display text-white">4.9 out of 5.0</div>
              <div className="text-sm text-muted">Based on over 1,250+ verified local reviews</div>
            </div>
          </div>
        </Reveal>

        {/* Carousel Container */}
        <Reveal>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-surface border border-[#1E293B] rounded-2xl p-8 sm:p-12 relative shadow-xl overflow-hidden">
              <div className="absolute top-6 right-6 text-[#1E293B]/6{-} pointer-events-none">
                <Quote className="w-24 h-24 text-accent/5" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-1 text-accent mb-6">
                  {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-white font-body leading-relaxed mb-8 italic">
                  &ldquo;{REVIEWS[currentIndex].text}&rdquo;
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#1E293B]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-hover border border-accent/30 flex items-center justify-center text-accent font-bold font-display text-lg">
                      {REVIEWS[currentIndex].initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white font-display text-base sm:text-lg">
                        {REVIEWS[currentIndex].name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted">
                        {REVIEWS[currentIndex].location} &bull; <span className="text-accent/80">{REVIEWS[currentIndex].date}</span>
                      </p>
                    </div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevReview}
                      aria-label="Previous review"
                      className="w-11 h-11 rounded-xl bg-primary border border-[#1E293B] flex items-center justify-center text-white hover:border-accent hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextReview}
                      aria-label="Next review"
                      className="w-11 h-11 rounded-xl bg-primary border border-[#1E293B] flex items-center justify-center text-white hover:border-accent hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-8">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-accent' : 'w-2.5 bg-[#1E293B] hover:bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
