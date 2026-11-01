"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" } }),
};

const services = [
  { icon: "💧", title: "Leak Detection & Repair", desc: "Burst pipes, dripping taps, hidden leaks and water damage — found fast and fixed properly.", from: "Rs 1,500+" },
  { icon: "🌀", title: "Drain Cleaning & Unblocking", desc: "Blocked sinks, toilets, showers and main drains cleared with professional drain equipment.", from: "Rs 2,000+" },
  { icon: "🔥", title: "Water Heaters & Geysers", desc: "Gas and electric water heater repair, replacement and new installation, sized for your home.", from: "Rs 3,500+" },
  { icon: "🚿", title: "Bathroom & Kitchen Fitting", desc: "Taps, showers, toilets, sinks and full bathroom refits — neat work, sealed and tested.", from: "Rs 2,500+" },
  { icon: "🧱", title: "Pipe Replacement & Repiping", desc: "Old, rusted or leaking pipework replaced in copper or PPR, with minimal disruption.", from: "On inspection" },
  { icon: "🏢", title: "Commercial Plumbing", desc: "Offices, restaurants, schools and buildings — maintenance contracts and planned work.", from: "On quote" },
];

const reviews = [
  { name: "Ahmed R. — DHA, Karachi", text: "Pipe burst at midnight, team arrived in 40 minutes and stopped the water before it ruined the floor. Clear price before they started.", stars: "★★★★★" },
  { name: "Fatima S. — Gulshan-e-Iqbal", text: "Blocked main drain for two days. They cleared it, showed me the cause on camera, and explained how to avoid it again.", stars: "★★★★★" },
  { name: "Bilal K. — Clifton", text: "New geyser installed the same day. Clean work, no mess left behind, and they tested everything twice before leaving.", stars: "★★★★★" },
];

const faqs = [
  { q: "How fast can you reach me in an emergency?", a: "For emergencies in our service areas, we aim to arrive within 60–90 minutes, day or night. Call the emergency number and tell us what is leaking or blocked so we can bring the right parts." },
  { q: "Do I get a price before work starts?", a: "Yes. After a quick inspection we confirm the price in writing before work begins. If the job changes, we tell you first — no surprise charges at the end." },
  { q: "Are your plumbers licensed and insured?", a: "Yes. Our plumbers are trained, background-checked, licensed and insured, and all work is covered by our 12-month workmanship guarantee." },
  { q: "Which areas do you cover?", a: "DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad, PECHS, Saddar and nearby Karachi areas. If you are just outside, call us — we will tell you honestly if we can reach you." },
];

export default function Home() {
  const [urgency, setUrgency] = useState("Emergency");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      <div className="topbar">
        <div className="topbar-inner">
          <span>📍 Serving Karachi &nbsp;•&nbsp; <b>Licensed &amp; Insured</b></span>
          <span>24/7 Emergency: <b>+92 300 0000000 (test number)</b></span>
        </div>
      </div>

      <header className="header">
        <div className="header-inner">
          <div className="logo">FlowFix <span>Plumbing</span></div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#why">Why us</a>
            <a href="#pricing">Pricing</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn btn-orange btn-sm" href="#book">Book a plumber</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <span className="eyebrow"><span className="dot" /> Plumbers available now — 24/7 in Karachi</span>
            <h1>Leak? Blocked drain? <em>We fix it today,</em> not next week.</h1>
            <p>Licensed plumbers, upfront pricing and a 12-month guarantee. Tell us the problem, pick emergency or scheduled, and we will confirm your visit straight away.</p>
            <div className="hero-cta">
              <a className="btn btn-orange" href="tel:+923000000000">🚨 Call for emergency</a>
              <a className="btn btn-outline" href="#book">Book a scheduled visit</a>
            </div>
            <div className="hero-points">
              <div><b>★ 4.9 / 5</b>2,400+ verified reviews</div>
              <div><b>60–90 min</b>Emergency response</div>
              <div><b>Rs 0</b>Call-out check with repair</div>
            </div>
          </motion.div>

          <motion.div id="book" className="booking" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h2>Book a plumber</h2>
            <p>Fill this in — we confirm by phone within 15 minutes during working hours.</p>
            {submitted ? (
              <div className="success">Request received (demo form). A plumber will call you to confirm the time and price — no payment is taken here.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="field"><label>Your name</label><input required placeholder="e.g. Ahmed Raza" /></div>
                <div className="field"><label>Phone</label><input required placeholder="03xx-xxxxxxx" /></div>
                <div className="field"><label>What is the problem?</label>
                  <select>
                    <option>Leak / burst pipe</option><option>Blocked drain or toilet</option>
                    <option>Water heater / geyser</option><option>New fitting / installation</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="field"><label>How urgent is it?</label>
                  <div className="urgency">
                    {["Emergency", "Today", "This week"].map((u) => (
                      <button type="button" key={u} className={urgency === u ? "active" : ""} onClick={() => setUrgency(u)}>{u}</button>
                    ))}
                  </div>
                </div>
                <button className="btn btn-orange" style={{ width: "100%" }} type="submit">Request my visit →</button>
                <p className="small" style={{ marginTop: 10 }}>No hidden charges. Price confirmed before work starts.</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <div className="trustbar">
        <motion.div className="trust-grid" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div><b>2,400+</b><span>Jobs completed</span></div>
          <div><b>4.9 ★</b><span>Average review rating</span></div>
          <div><b>12 months</b><span>Workmanship guarantee</span></div>
          <div><b>24/7</b><span>Emergency cover</span></div>
        </motion.div>
      </div>

      <section className="section" id="services">
        <div className="section-head">
          <span className="kicker">Services — grouped by your problem</span>
          <h2>Find your problem. We will fix it properly.</h2>
          <p>No vague service list. Pick what is actually wrong and get a clear starting price before you book.</p>
        </div>
        <div className="grid">
          {services.map((s, i) => (
            <motion.div key={s.title} className="card" custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div><span className="from">From {s.from}</span> &nbsp;•&nbsp; <a className="link" href="#book">Book this →</a></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="dark">
        <div className="section why" id="why">
          <div>
            <span className="kicker">Why FlowFix</span>
            <h2 style={{ fontSize: 38, lineHeight: 1.15 }}>The plumber who actually shows up on time.</h2>
            <p style={{ color: "#cdd9ec" }}>Most plumbing complaints are not about skill — they are about no-shows, vague prices and mess left behind. We built this service around fixing those three things first.</p>
            <ul style={{ color: "#cdd9ec" }}>
              <li><b style={{ color: "#fff" }}>Upfront pricing:</b> price agreed before work, in writing.</li>
              <li><b style={{ color: "#fff" }}>Clean work:</b> shoe covers, dust sheets, and a tidy-up before we leave.</li>
              <li><b style={{ color: "#fff" }}>Real guarantee:</b> 12 months on our workmanship, parts as per manufacturer.</li>
              <li><b style={{ color: "#fff" }}>Local team:</b> plumbers based in Karachi, not a call centre elsewhere.</li>
            </ul>
          </div>
          <motion.div className="guarantee" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h3>⏰ On-Time Guarantee</h3>
            <p>If we are more than 30 minutes late for a scheduled visit without calling you first, you get Rs 1,000 off the job. That is our promise, not a slogan.</p>
            <p style={{ fontSize: 14 }}>Applies to scheduled visits in our service areas. Emergencies are prioritised by severity.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span className="kicker">How it works</span>
          <h2>Three steps, no chasing, no waiting all day.</h2>
        </div>
        <div className="steps">
          {[
            ["1", "Tell us the problem", "Call or book online in 2 minutes. Send a photo if you can — it helps us bring the right parts."],
            ["2", "Get a confirmed price", "We inspect, explain the fix in plain words, and agree the price before any work starts."],
            ["3", "Fixed & guaranteed", "Work completed, tested twice, area left clean — covered for 12 months."],
          ].map(([n, t, d]) => (
            <div className="card" key={n}><div className="step-num">{n}</div><h3>{t}</h3><p style={{ color: "var(--muted)" }}>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="section" id="pricing" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="kicker">Pricing guidance</span>
          <h2>Know roughly what it costs — before you call.</h2>
          <p>Starting prices for common jobs. Final price depends on parts and access, and is confirmed after a free inspection.</p>
        </div>
        <div className="price-table">
          {[["Leak repair (tap / visible pipe)", "30–60 min", "Rs 1,500+"], ["Drain unblocking", "45–90 min", "Rs 2,000+"], ["Geyser / water heater repair", "1–2 hours", "Rs 3,500+"], ["Toilet repair / replacement", "1–2 hours", "Rs 2,500+"], ["Full bathroom refit plumbing", "2–4 days", "On quote"]].map(([job, time, price]) => (
            <div className="price-row" key={job}><b>{job}</b><span style={{ color: "var(--muted)" }}>{time}</span><b>{price}</b></div>
          ))}
        </div>
        <p className="small" style={{ marginTop: 12 }}>Financing available on larger jobs like repiping and water heater replacement — ask when you book.</p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="kicker">Service areas</span>
          <h2>We work where you live in Karachi.</h2>
        </div>
        <div className="areas">
          {["DHA", "Clifton", "Gulshan-e-Iqbal", "North Nazimabad", "PECHS", "Saddar", "Gulistan-e-Johar", "Malir Cantt"].map((a) => <span className="chip" key={a}>📍 {a}</span>)}
        </div>
      </section>

      <section className="section" id="reviews" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="kicker">Reviews</span>
          <h2>What Karachi homeowners say after the job.</h2>
        </div>
        <div className="review-grid">
          {reviews.map((r, i) => (
            <motion.div key={r.name} className="card" custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="stars">{r.stars}</div>
              <p style={{ marginTop: 10 }}>“{r.text}”</p>
              <b>{r.name}</b>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section faq" id="faq" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <span className="kicker">FAQ</span>
          <h2>Questions people ask before booking.</h2>
        </div>
        {faqs.map((f, i) => (
          <div className="faq-item" key={f.q}>
            <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>{f.q}<span>{openFaq === i ? "−" : "+"}</span></button>
            {openFaq === i && <div className="faq-a">{f.a}</div>}
          </div>
        ))}
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta">
          <h2>Water leaking right now? Do not wait.</h2>
          <p>Turn off the main valve if you can, then call us. We will talk you through the first step while a plumber is on the way.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 22 }}>
            <a className="btn btn-orange" href="tel:+923000000000">Call +92 300 0000000</a>
            <a className="btn btn-outline" href="#book">Book online</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div><b>FlowFix Plumbing</b><br />A fictional test business, built to demonstrate a professional plumber landing page.<br />Email: hello@flowfix.example • Phone: +92 300 0000000 (test number)</div>
          <div><b>Hours</b><br />Emergency: 24/7<br />Scheduled: Mon–Sat, 8am–8pm</div>
          <div><b>Built with</b><br />Next.js • Framer Motion • Deployed on Vercel</div>
        </div>
      </footer>
    </main>
  );
}
