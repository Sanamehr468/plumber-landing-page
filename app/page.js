// app/page.js
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPhone, FiMail, FiMapPin, FiClock, FiShield, FiTool, 
  FiCheckCircle, FiStar, FiChevronDown, FiMenu, FiX, 
  FiDroplet, FiAlertTriangle, FiHome, FiSettings, FiDollarSign
} from 'react-icons/fi';

export default function FlowFixLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('');
  
  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Emergency Leak Repair',
    area: 'Clifton',
    notes: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setBookingStatus('Please fill in all required fields.');
      return;
    }
    setBookingStatus('Booking confirmed! Our plumber is dispatching to your location.');
    setFormData({ name: '', phone: '', service: 'Emergency Leak Repair', area: 'Clifton', notes: '' });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flowfix-app">
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-info">
            <a href="tel:+923000000000"><FiPhone /> +92 300 0000000</a>
            <a href="mailto:hello@flowfix.example"><FiMail /> hello@flowfix.example</a>
            <span><FiClock /> 24/7 Emergency Service across Karachi</span>
          </div>
          <div className="topbar-badge">
            <span>⚡ Average 30-Min Response Time</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="logo">
            <FiDroplet className="logo-icon" />
            <span>FlowFix<span className="accent">Plumbing</span></span>
          </div>

          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>Process</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#areas" onClick={() => setMobileMenuOpen(false)}>Areas</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="tel:+923000000000" className="nav-phone-btn">
              <FiPhone /> Call Now
            </a>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Hero Section with Booking Form */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-pill">
              <FiShield /> Karachi’s Most Trusted Licensed Plumbers
            </div>
            <h1>Fast, Reliable Plumbing Solutions in Karachi</h1>
            <p>
              From midnight burst pipes in DHA to stubborn clogs in Gulshan, our expert technicians arrive within 30 minutes. Transparent pricing, guaranteed workmanship.
            </p>
            <div className="hero-highlights">
              <div><FiCheckCircle /> No Hidden Fees</div>
              <div><FiCheckCircle /> Licensed & Verified</div>
              <div><FiCheckCircle /> 100% Satisfaction Guarantee</div>
            </div>
          </motion.div>

          <motion.div 
            className="booking-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="booking-header">
              <h3>Book a Plumber Instantly</h3>
              <p>Fill out the form and we'll dispatch immediately.</p>
            </div>
            <form onSubmit={handleBookingSubmit} className="booking-form">
              <div className="form-group">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="e.g. Ali Khan" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="03XX XXXXXXX" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleInputChange}>
                    <option value="Emergency Leak Repair">Emergency Leak Repair</option>
                    <option value="Drain Unclogging">Drain Unclogging</option>
                    <option value="Water Pump Installation">Water Pump Installation</option>
                    <option value="Geyser Repair / Fitting">Geyser Repair / Fitting</option>
                    <option value="General Maintenance">General Maintenance</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Karachi Area</label>
                  <select name="area" value={formData.area} onChange={handleInputChange}>
                    <option value="Clifton">Clifton</option>
                    <option value="Defence (DHA)">Defence (DHA)</option>
                    <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
                    <option value="PECHS">PECHS</option>
                    <option value="North Nazimabad">North Nazimabad</option>
                    <option value="Bahria Town">Bahria Town</option>
                    <option value="Other Area">Other Area</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Additional Notes (Optional)</label>
                <textarea 
                  name="notes" 
                  rows="2" 
                  placeholder="Describe your plumbing issue..." 
                  value={formData.notes} 
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary full-width">
                Dispatch Plumber Now
              </button>
              {bookingStatus && <p className="booking-status">{bookingStatus}</p>}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Our Professional Services</h2>
            <p>Comprehensive residential and commercial plumbing solutions delivered across Karachi.</p>
          </div>
          <div className="services-grid">
            {[
              { icon: <FiAlertTriangle />, title: "Emergency Leak Repair", desc: "Rapid response for burst pipes, flooding, and sudden major leaks day or night." },
              { icon: <FiTool />, title: "Drain & Sewer Unclogging", desc: "Advanced hydro-jetting and mechanical clearing for stubborn bathroom and kitchen blockages." },
              { icon: <FiSettings />, title: "Water Pump Installation", desc: "Expert motor fitting, automatic float switch setup, and suction troubleshooting." },
              { icon: <FiHome />, title: "Geyser & Water Heater", desc: "Gas and electric geyser installation, thermostat replacement, and tank servicing." },
              { icon: <FiDroplet />, title: "Bathroom & Kitchen Fixtures", desc: "Faceted tap replacements, sink installation, flush tank repairs, and shower setups." },
              { icon: <FiShield />, title: "Complete Piping & Re-piping", desc: "UPVC, PPRC, and galvanized pipe installation and leakage proofing for entire homes." }
            ].map((srv, idx) => (
              <motion.div 
                className="service-card" 
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="service-icon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
                <a href="#booking" className="service-link">Book Service &rarr;</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why Karachi Chooses FlowFix</h2>
            <p>We combine international standards of plumbing craftsmanship with local expertise.</p>
          </div>
          <div className="features-grid">
            {[
              { title: "30-Min Emergency Response", desc: "Strategic neighborhood dispatch units stationed across DHA, Clifton, Gulshan, and Nazimabad." },
              { title: "Transparent Upfront Pricing", desc: "No surprise bills. We diagnose the issue and give you a fixed quote before touching a wrench." },
              { title: "Background-Checked Experts", desc: "Every technician is fully verified, professionally trained, and carries official FlowFix identification." },
              { title: "30-Day Workmanship Warranty", desc: "If the same leak or issue returns within 30 days, we fix it completely free of charge." }
            ].map((feat, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-number">0{idx + 1}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>How FlowFix Works</h2>
            <p>Getting your plumbing fixed has never been this hassle-free.</p>
          </div>
          <div className="steps-grid">
            {[
              { step: "1", title: "Book Online or Call", desc: "Submit our quick form or call +92 300 0000000 with details of your plumbing emergency." },
              { step: "2", title: "Instant Dispatch", desc: "Our nearest mobile plumbing unit receives the alert and travels immediately to your location." },
              { step: "3", title: "Diagnosis & Fix", desc: "Our technician inspects, provides a clear cost estimate, and executes professional repairs." },
              { step: "4", title: "Test & Payment", desc: "We test everything thoroughly in front of you. Pay securely via cash or digital transfer." }
            ].map((st, idx) => (
              <div className="step-card" key={idx}>
                <div className="step-badge">{st.step}</div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Simple, Transparent Pricing</h2>
            <p>No hidden travel charges or secret fees. Standardized rates for Karachi homes.</p>
          </div>
          <div className="pricing-grid">
            {[
              {
                title: "Inspection & Minor Fix",
                price: "Rs. 1,000",
                period: "starting visit",
                features: ["Expert diagnosis", "Minor washer/nut tightening", "Tap leak adjustments", "30-min arrival estimate"],
                popular: false
              },
              {
                title: "Standard Repair & Unclog",
                price: "Rs. 2,500",
                period: "per service",
                features: ["Drain snake unclogging", "Flush tank mechanism change", "Geyser element check", "14-day warranty"],
                popular: true
              },
              {
                title: "Major Installation",
                price: "Rs. 5,000+",
                period: "custom quote",
                features: ["Water pump installation", "Complete geyser replacement", "Extensive pipe re-routing", "30-day workmanship warranty"],
                popular: false
              }
            ].map((plan, idx) => (
              <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={idx}>
                {plan.popular && <span className="popular-badge">Most Popular</span>}
                <h3>{plan.title}</h3>
                <div className="price-tag">
                  <span className="amount">{plan.price}</span>
                  <span className="period">/ {plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx}><FiCheckCircle /> {feat}</li>
                  ))}
                </ul>
                <a href="#booking" className={`btn-${plan.popular ? 'primary' : 'outline'} full-width`}>
                  Book This Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Proudly Serving All Over Karachi</h2>
            <p>Our rapid response teams are strategically stationed across major residential and commercial zones.</p>
          </div>
          <div className="areas-grid">
            {[
              "Defence (DHA Phases 1-8)", "Clifton & Boat Basin", "Gulshan-e-Iqbal", 
              "PECHS & Society Areas", "North Nazimabad", "Gulistan-e-Jauhar", 
              "Bahria Town Karachi", "KDA Scheme 1", "FB Area & Shahrah-e-Faisal"
            ].map((area, idx) => (
              <div className="area-pill" key={idx}>
                <FiMapPin /> {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Trusted by Homeowners Across Karachi</h2>
            <p>Read genuine feedback from our valued customers.</p>
          </div>
          <div className="reviews-grid">
            {[
              {
                name: "Farhan Siddiqui",
                location: "DHA Phase 6",
                text: "Had a major pipe burst at 2 AM. FlowFix sent a technician within 25 minutes. Extremely professional, clean work, and very fair pricing. Lifesaver!",
                stars: 5
              },
              {
                name: "Dr. Ayesha Malik",
                location: "Clifton Block 4",
                text: "Our water pump stopped working right before office hours. The plumber arrived equipped with the exact spare motor parts needed. Fixed in under an hour.",
                stars: 5
              },
              {
                name: "Zainab Tariq",
                location: "Gulshan-e-Iqbal",
                text: "Transparent pricing is what I loved most. No bargaining needed—they told me the exact cost before starting the geyser installation. Highly recommended.",
                stars: 5
              }
            ].map((rev, idx) => (
              <div className="review-card" key={idx}>
                <div className="stars">
                  {[...Array(rev.stars)].map((_, sIdx) => (
                    <FiStar key={sIdx} className="star-icon" />
                  ))}
                </div>
                <p className="review-text">"{rev.text}"</p>
                <div className="reviewer-info">
                  <strong>{rev.name}</strong>
                  <span>{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Got questions about our plumbing services in Karachi? We have answers.</p>
          </div>
          <div className="faq-container">
            {[
              {
                q: "How quickly can a plumber reach my home in Karachi?",
                a: "Our average dispatch time is 30 minutes. We have dedicated mobile units stationed in DHA, Clifton, Gulshan, PECHS, and North Nazimabad to ensure rapid emergency response."
              },
              {
                q: "Are your plumbers verified and safe to invite home?",
                a: "Yes, absolutely. All FlowFix plumbers undergo rigorous background checks, CNIC verification, and professional trade testing before stepping into your home."
              },
              {
                q: "Do you charge extra for late-night emergency visits?",
                a: "We operate 24/7 with transparent pricing standards. While emergency dispatch carries a standard night-visit fee, we always inform you of the exact cost upfront before starting any work."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cash on completion, direct bank transfers (IBFT), and mobile wallet payments (JazzCash / EasyPaisa)."
              },
              {
                q: "Do you offer any warranty on plumbing repairs?",
                a: "Yes! All major repairs and installations come with a standard 30-day workmanship warranty. If the same issue recurs, our plumber will fix it at zero additional cost."
              }
            ].map((faq, idx) => (
              <div className={`faq-item ${activeFaq === idx ? 'active' : ''}`} key={idx}>
                <button className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <FiChevronDown className="faq-icon" />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Facing a Plumbing Emergency in Karachi?</h2>
          <p>Don’t let a leaking pipe or clogged drain ruin your day. Our expert technicians are ready to assist you right now.</p>
          <div className="cta-actions">
            <a href="tel:+923000000000" className="btn-accent">
              <FiPhone /> Call +92 300 0000000
            </a>
            <a href="#booking" className="btn-outline-white">
              Book Online
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="logo footer-logo">
              <FiDroplet className="logo-icon" />
              <span>FlowFix<span className="accent">Plumbing</span></span>
            </div>
            <p>
              Karachi’s premier 24/7 emergency plumbing service provider. Fast response, licensed professionals, transparent pricing.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#why-us">Why Choose Us</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#areas">Service Areas</a>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p><FiPhone /> +92 300 0000000</p>
            <p><FiMail /> hello@flowfix.example</p>
            <p><FiMapPin /> Karachi, Pakistan — test site, no real office address</p>
            <p><FiClock /> Open 24 Hours, 7 Days a Week</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} FlowFix Plumbing. All rights reserved. Serving Karachi with pride.</p>
        </div>
      </footer>
    </div>
  );
}
