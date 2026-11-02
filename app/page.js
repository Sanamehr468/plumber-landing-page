"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  // Booking Form State
  const [selectedService, setSelectedService] = useState("Emergency leak repair");
  const [selectedArea, setSelectedArea] = useState("DHA");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("As soon as possible");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Confirmation State
  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  // Dynamic pricing and response logic
  const areaTimes = {
    DHA: "45 minutes",
    Clifton: "45 minutes",
    Gulshan: "60 minutes",
    "North Nazimabad": "60 minutes",
    Saddar: "60 minutes",
    "Malir Cantt": "90 minutes",
  };

  const servicePrices = {
    "Emergency leak repair": { price: "Rs 2,500", time: "60 to 90 minutes" },
    "Drain unblocking": { price: "Rs 1,500", time: "45 minutes" },
    "Tap and fixture fitting": { price: "Rs 1,200", time: "60 minutes" },
    "Water pump and motor repair": { price: "Rs 3,000", time: "90 minutes" },
    "Bathroom and kitchen work": { price: "Rs 5,000", time: "2 to 4 hours" },
    "Commercial plumbing": { price: "Custom quote", time: "By appointment" },
  };

  const technicians = ["Ahmed Raza", "Sara Khan", "Bilal Malik"];

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refCode = `FF-${randomNum}`;
    const tech = technicians[Math.floor(Math.random() * technicians.length)];
    const arrivalTime = areaTimes[selectedArea] || "45 minutes";

    setBookingConfirmed({
      ref: refCode,
      technician: tech,
      arrival: arrivalTime,
      service: selectedService,
      area: selectedArea,
      timeSlot: selectedTimeSlot,
    });
  };

  const downloadIcs = () => {
    if (!bookingConfirmed) return;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//FlowFix Plumbing//Test Booking//EN",
      "BEGIN:VEVENT",
      `SUMMARY:FlowFix Plumbing - ${bookingConfirmed.service}`,
      `DESCRIPTION:Test booking reference ${bookingConfirmed.ref}. Technician: ${bookingConfirmed.technician}.`,
      `LOCATION:${bookingConfirmed.area}, Karachi, Pakistan`,
      "DTSTART:20260330T100000Z",
      "DTEND:20260330T120000Z",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `flowfix-${bookingConfirmed.ref}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const scrollToBooking = (serviceName) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const element = document.getElementById("booking-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-wrapper">
      {/* Top Nav */}
      <nav className="nav-bar">
        <div className="container nav-content">
          <a href="#" className="nav-logo">
            FlowFix
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#areas">Areas</a>
            <a href="#reviews">Reviews</a>
          </div>
          <div className="nav-actions">
            <a href="tel:+923000000000" className="nav-phone">
              +92 300 0000000
            </a>
            <button onClick={() => scrollToBooking()} className="btn btn-black">
              Book
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="booking-section" className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-left"
          >
            <h1 className="hero-title">
              Reliable plumbing dispatched across Karachi.
            </h1>
            <p className="hero-subtitle">
              Fictional test service operating in Karachi, Pakistan. Licenced, transparent pricing with guaranteed on-time arrival.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToBooking()} className="btn btn-black">
                Start booking
              </button>
              <a href="tel:+923000000000" className="btn btn-outline">
                Call test number
              </a>
            </div>
            <div className="hero-image-wrap">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Plumber_uses_two_wrenches_to_tighten_a_fitting.jpg"
                alt="Plumber working"
                className="hero-img"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-right"
          >
            <div className="booking-card">
              <h2>Request a visit</h2>
              <p className="booking-notice">Test booking only, no real plumber is dispatched.</p>

              {bookingConfirmed ? (
                <div className="confirmation-box">
                  <h3>Booking confirmed (Test)</h3>
                  <p><strong>Reference:</strong> {bookingConfirmed.ref}</p>
                  <p><strong>Service:</strong> {bookingConfirmed.service}</p>
                  <p><strong>Area:</strong> {bookingConfirmed.area}, Karachi</p>
                  <p><strong>Assigned technician:</strong> {bookingConfirmed.technician}</p>
                  <p><strong>Estimated arrival:</strong> Within {bookingConfirmed.arrival}</p>
                  <p><strong>Time slot:</strong> {bookingConfirmed.timeSlot}</p>
                  <div className="confirmation-actions">
                    <button onClick={downloadIcs} className="btn btn-black w-100">
                      Download calendar file (.ics)
                    </button>
                    <button onClick={() => setBookingConfirmed(null)} className="btn btn-outline w-100 mt-2">
                      Make another test booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookSubmit} className="booking-form">
                  <div className="form-group">
                    <label>Select service</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="form-control"
                    >
                      {Object.keys(servicePrices).map((srv) => (
                        <option key={srv} value={srv}>
                          {srv} ({servicePrices[srv].price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Select Karachi area</label>
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="form-control"
                    >
                      {Object.keys(areaTimes).map((area) => (
                        <option key={area} value={area}>
                          {area} (Est. {areaTimes[area]})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="live-estimate-banner">
                    <div>
                      <span>Estimated response: <strong>{areaTimes[selectedArea]}</strong></span>
                    </div>
                    <div>
                      <span>Starting price: <strong>{servicePrices[selectedService].price}</strong></span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Time slot</label>
                    <div className="pill-group">
                      {["As soon as possible", "Morning slot", "Evening slot"].map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          className={`time-pill ${selectedTimeSlot === slot ? "active" : ""}`}
                          onClick={() => setSelectedTimeSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Full name</label>
                    <input
                      type="text"
                      required
                      placeholder="Farhan Siddiqui"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Karachi address note</label>
                    <input
                      type="text"
                      required
                      placeholder="Street, block, neighborhood"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="btn btn-black w-100">
                    See price and book
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item">
            <strong>Licence KHI-PLM-2024-1187</strong>
            <span>Verified test registration</span>
          </div>
          <div className="trust-item">
            <strong>On-time promise</strong>
            <span>Rs 1,000 off if 30 mins late</span>
          </div>
          <div className="trust-item">
            <strong>30-day guarantee</strong>
            <span>Same fault covered free</span>
          </div>
          <div className="trust-item">
            <strong>Zero surprise bills</strong>
            <span>Agreed quote before work</span>
          </div>
        </div>
      </section>

      {/* Services by Problem (White Band) */}
      <section id="services" className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Services by problem</h2>
            <p>Professional plumbing solutions with clear scopes and upfront rates.</p>
          </div>

          <div className="services-grid">
            {[
              {
                name: "Emergency leak repair",
                time: "60 to 90 minutes",
                price: "From Rs 2,500",
                desc: "Rapid response for burst pipes, severe joint failures, and active flooding.",
                items: ["Pressure test", "Emergency valve shutoff", "Temporary or permanent patch"],
              },
              {
                name: "Drain unblocking",
                time: "45 minutes",
                price: "From Rs 1,500",
                desc: "Clear blocked kitchen sinks, bathroom floor traps, and main sewer lines.",
                items: ["Mechanical augering", "Trap cleaning", "Flow verification test"],
              },
              {
                name: "Tap and fixture fitting",
                time: "60 minutes",
                price: "From Rs 1,200",
                desc: "Installation and replacement of mixers, shower heads, and vanity basins.",
                items: ["Secure mounting", "Gasket sealing", "Leak check"],
              },
              {
                name: "Water pump and motor repair",
                time: "90 minutes",
                price: "From Rs 3,000",
                desc: "Technicians carry a backup generator to test pumps during load shedding.",
                items: ["Capacitor check", "Generator power test", "Impeller inspection"],
              },
              {
                name: "Bathroom and kitchen work",
                time: "2 to 4 hours",
                price: "From Rs 5,000",
                desc: "Comprehensive piping reconfiguration, sanitation setup, and fixture overhauls.",
                items: ["Pipe alignment", "Fixture installation", "Pressure balancing"],
              },
              {
                name: "Commercial plumbing",
                time: "By appointment",
                price: "Custom quote",
                desc: "Scheduled maintenance, multi-floor diagnostics, and corporate compliance.",
                items: ["Site inspection", "Custom maintenance plan", "Priority dispatch"],
              },
            ].map((srv, idx) => (
              <div key={idx} className="service-card">
                <div className="service-header-row">
                  <h3>{srv.name}</h3>
                  <span className="service-price">{srv.price}</span>
                </div>
                <p className="service-time">Est. time: {srv.time}</p>
                <p className="service-desc">{srv.desc}</p>
                <ul className="service-list">
                  {srv.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button onClick={() => scrollToBooking(srv.name)} className="btn btn-outline w-100">
                  Book this service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FlowFix (Black Band) */}
      <section className="section bg-black text-white">
        <div className="container">
          <div className="section-header">
            <h2 className="text-white">Why FlowFix</h2>
            <p className="text-grey">Engineered for absolute accountability and transparent operations.</p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>On-time promise</h3>
              <p className="text-grey">We respect your schedule. If our technician is more than 30 minutes late without prior notice, you receive Rs 1,000 off your labour total.</p>
            </div>
            <div className="why-card">
              <h3>Zero surprise bills</h3>
              <p className="text-grey">Every cost is itemized before work begins. No hidden callout charges, no unexplained material markups, and zero unexpected additions.</p>
            </div>
            <div className="why-card">
              <h3>30-day guarantee</h3>
              <p className="text-grey">If the exact same fault reappears within 30 days of service, we return and resolve it with zero labour charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (White Band) */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>How it works in 3 steps</h2>
            <p>From request to resolution in minutes.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Select & Book</h3>
              <p>Choose your service and Karachi area. Review estimated arrival times and starting rates instantly.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Dispatch & Quote</h3>
              <p>An assigned technician heads to your location. A transparent quote is confirmed before any work starts.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Repair & Verify</h3>
              <p>The job is completed cleanly, tested thoroughly, and backed by our 30-day guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing (Black Band) */}
      <section id="pricing" className="section bg-black text-white">
        <div className="container">
          <div className="section-header">
            <h2 className="text-white">Transparent pricing</h2>
            <p className="text-grey">Simple plans and clear cost structures with no hidden fees.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card bg-dark">
              <h3>Single visit</h3>
              <div className="price-tag">From Rs 1,500</div>
              <p className="text-grey">For urgent repairs, single fixtures, and one-off diagnostic requirements.</p>
              <ul className="pricing-list">
                <li>Callout included</li>
                <li>Labour billed per hour</li>
                <li>Parts listed separately</li>
                <li>30 day guarantee</li>
              </ul>
              <button onClick={() => scrollToBooking()} className="btn btn-white w-100 mt-4">
                Book visit
              </button>
            </div>

            <div className="pricing-card bg-white text-black featured-card">
              <div className="featured-badge">Featured plan</div>
              <h3>Care Plan</h3>
              <div className="price-tag">Rs 9,999 / year</div>
              <p className="text-dark-grey">Complete home plumbing coverage with priority dispatch and annual checks.</p>
              <ul className="pricing-list">
                <li>Priority 30-min dispatch</li>
                <li>Free annual inspection</li>
                <li>Zero labour surcharge</li>
                <li>Waived after-hours fees</li>
              </ul>
              <button onClick={() => scrollToBooking()} className="btn btn-black w-100 mt-4">
                Select Care Plan
              </button>
            </div>

            <div className="pricing-card bg-dark">
              <h3>Commercial</h3>
              <div className="price-tag">Custom quote</div>
              <p className="text-grey">Tailored maintenance contracts for offices, restaurants, and retail spaces.</p>
              <ul className="pricing-list">
                <li>Dedicated account manager</li>
                <li>Scheduled compliance checks</li>
                <li>SLA-backed response times</li>
                <li>Detailed invoicing</li>
              </ul>
              <button onClick={() => scrollToBooking()} className="btn.white btn btn-white w-100 mt-4">
                Request quote
              </button>
            </div>
          </div>

          <div className="pricing-notes text-grey">
            <p><strong>Note:</strong> Callout, labour, and parts are listed separately. After-hours visits carry a Rs 1,000 surcharge which is always communicated before dispatch. Parts beyond standard allowance, opening walls, and extensive after-hours work are not included unless stated, and are quoted before work begins.</p>
          </div>
        </div>
      </section>

      {/* Karachi Areas (White Band) */}
      <section id="areas" className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Karachi coverage areas</h2>
            <p>Guaranteed response windows across major neighborhoods.</p>
          </div>

          <div className="areas-grid">
            {[
              { area: "DHA", time: "45 minutes" },
              { area: "Clifton", time: "45 minutes" },
              { area: "Gulshan", time: "60 minutes" },
              { area: "North Nazimabad", time: "60 minutes" },
              { area: "Saddar", time: "60 minutes" },
              { area: "Malir Cantt", time: "90 minutes" },
            ].map((item, idx) => (
              <div key={idx} className="area-card">
                <h3>{item.area}</h3>
                <p>Estimated arrival: <strong>{item.time}</strong></p>
                <button onClick={() => { setSelectedArea(item.area); scrollToBooking(); }} className="btn btn-outline w-100 mt-2">
                  Book for {item.area}
                </button>
              </div>
            ))}
          </div>

          <div className="karachi-image-banner">
            <img
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Karachi_street_scene.jpg/1920px-Karachi_street_scene.jpg"
              alt="Karachi street scene"
              className="karachi-img"
            />
          </div>
        </div>
      </section>

      {/* Reviews (Black Band) */}
      <section id="reviews" className="section bg-black text-white">
        <div className="container">
          <div className="section-header">
            <h2 className="text-white">Customer reviews</h2>
            <p className="text-grey">Verified feedback from test bookings across Karachi.</p>
          </div>

          <div className="reviews-summary-card bg-dark">
            <div className="rating-overview">
              <div className="big-rating">4.9</div>
              <div className="rating-details">
                <p className="text-white font-bold">Overall rating</p>
                <p className="text-grey">Based on 100% test feedback</p>
              </div>
            </div>
            <div className="rating-bars">
              <div className="rating-bar-row">
                <span>5 stars</span>
                <div className="bar-bg"><div className="bar-fill" style={{ width: "86%" }}></div></div>
                <span>86%</span>
              </div>
              <div className="rating-bar-row">
                <span>4 stars</span>
                <div className="bar-bg"><div className="bar-fill" style={{ width: "11%" }}></div></div>
                <span>11%</span>
              </div>
              <div className="rating-bar-row">
                <span>3 stars</span>
                <div className="bar-bg"><div className="bar-fill" style={{ width: "2%" }}></div></div>
                <span>2%</span>
              </div>
              <div className="rating-bar-row">
                <span>2 stars or less</span>
                <div className="bar-bg"><div className="bar-fill" style={{ width: "1%" }}></div></div>
                <span>1%</span>
              </div>
            </div>
          </div>

          <div className="reviews-grid">
            <div className="review-card bg-dark">
              <div className="review-meta">
                <strong>Farhan Siddiqui</strong>
                <span className="badge-verified">Verified test job</span>
              </div>
              <p className="review-location text-grey">DHA, Karachi • Leak repair</p>
              <p className="review-text">"The technician arrived right within the 45 minute window. Fixed the burst pipe cleanly and explained every rupee of the bill beforehand."</p>
              <div className="owner-reply">
                <p><strong>FlowFix response:</strong> Thank you Farhan. Glad our DHA team could resolve the leak promptly.</p>
              </div>
            </div>

            <div className="review-card bg-dark">
              <div className="review-meta">
                <strong>Dr Ayesha Malik</strong>
                <span className="badge-verified">Verified test job</span>
              </div>
              <p className="review-location text-grey">Gulshan, Karachi • Drain work</p>
              <p className="review-text">"Kitchen sink was completely blocked. The auger cleared it in no time. Very professional test experience."</p>
              <div className="owner-reply">
                <p><strong>FlowFix response:</strong> Thanks Dr Malik. Keeping Gulshan flowing smoothly is our priority.</p>
              </div>
            </div>

            <div className="review-card bg-dark">
              <div className="review-meta">
                <strong>Zainab Tariq</strong>
                <span className="badge-verified">Verified test job</span>
              </div>
              <p className="review-location text-grey">Clifton, Karachi • Pump repair</p>
              <p className="review-text">"Load shedding was active when the pump failed, but their technician brought a backup generator to test the motor. Incredible attention to detail."</p>
              <div className="owner-reply">
                <p><strong>FlowFix response:</strong> Thank you Zainab. Our generators ensure testing never stops, even during K-Electric outages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (White Band) */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Frequently asked questions</h2>
            <p>Clear answers about our services, pricing, and operations.</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How much will the visit cost?</h3>
              <p>Visits start from Rs 1,500 for a single visit callout. Every job is fully quoted before any work starts so you never face surprises.</p>
            </div>
            <div className="faq-item">
              <h3>How fast can you reach me?</h3>
              <p>Response times range from 45 minutes in DHA and Clifton to 90 minutes in Malir Cantt, depending on traffic and location.</p>
            </div>
            <div className="faq-item">
              <h3>What if the leak comes back?</h3>
              <p>All work is covered by our 30-day guarantee. If the exact same fault reappears within 30 days, we return with zero labour charges.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work during load shedding?</h3>
              <p>Yes. Our technicians carry portable generators specifically designed to power and test water pumps and electrical plumbing fixtures during power outages.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need to be home for the whole visit?</h3>
              <p>An adult must be present at the Karachi property during the start to review the quote and at the end to verify the completed work.</p>
            </div>
            <div className="faq-item">
              <h3>Is this a real business?</h3>
              <p>No, this is a fictional test business. No real plumbing services are offered, and no real bookings or dispatches take place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Black Call to Action */}
      <section className="cta-section bg-black text-white">
        <div className="container cta-container">
          <div className="cta-image-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Street_in_Karachi%2C_Pakistan.jpg/1920px-Street_in_Karachi%2C_Pakistan.jpg"
              alt="Street in Karachi"
              className="cta-img"
            />
          </div>
          <div className="cta-content">
            <h2>Ready to book your test slot?</h2>
            <p className="text-grey">Experience our streamlined booking simulation right now. Licenced reference KHI-PLM-2024-1187.</p>
            <div className="cta-buttons">
              <button onClick={() => scrollToBooking()} className="btn btn-white">
                Start booking
              </button>
              <a href="tel:+923000000000" className="btn btn-outline-white">
                Call +92 300 0000000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Black) */}
      <footer className="footer bg-black text-white">
        <div className="container footer-grid">
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Emergency leak repair</a>
            <a href="#services">Drain unblocking</a>
            <a href="#services">Tap & fixture fitting</a>
            <a href="#services">Water pump repair</a>
            <a href="#services">Bathroom & kitchen</a>
            <a href="#services">Commercial plumbing</a>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <a href="#pricing">Pricing structure</a>
            <a href="#areas">Karachi areas</a>
            <a href="#reviews">Customer reviews</a>
            <a href="#faq">FAQ</a>
            <a href="#booking-section">Test booking</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+923000000000">+92 300 0000000</a>
            <a href="mailto:hello@flowfix.example">hello@flowfix.example</a>
            <p className="text-grey mt-2">Karachi, Pakistan<br />Test site, no real office address.</p>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <p className="text-grey">Emergency service:<br />24 / 7 dispatch simulation</p>
            <p className="text-grey mt-2">Standard hours:<br />Monday to Sunday<br />8:00 AM – 10:00 PM</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <div className="footer-meta-info">
            <p>Licence reference: KHI-PLM-2024-1187</p>
            <p>Test booking only, no real plumber is dispatched.</p>
            <p className="text-grey credit-text">
              Picture credits: Wikimedia Commons (Plumber uses two wrenches, Karachi street scene, Three plumbers with pipes and tools, Street in Karachi). The pictures show the trade and Karachi streets, not FlowFix own team or premises.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Call and Book Bar */}
      <div className="mobile-sticky-bar">
        <a href="tel:+923000000000" className="btn btn-outline-mobile">
          Call test number
        </a>
        <button onClick={() => scrollToBooking()} className="btn btn-black">
          Book test visit
        </button>
      </div>
    </div>
  );
}