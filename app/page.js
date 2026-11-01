"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" } }),
};

const SERVICES = [
  { icon: "💧", title: "Leak Detection & Repair", cat: "Emergency", desc: "Burst pipes, dripping taps and hidden leaks — found with listening and pressure testing, not guesswork.", from: "Rs 1,500+", time: "30–60 min", includes: ["Leak located & isolated", "Pipe / joint repaired", "Pressure test after fix"] },
  { icon: "🌀", title: "Drain Cleaning & Unblocking", cat: "Emergency", desc: "Blocked sinks, toilets, showers and main drains cleared, then checked so the blockage does not return next week.", from: "Rs 2,000+", time: "45–90 min", includes: ["Drain cleared & flushed", "Cause explained on site", "Prevention advice"] },
  { icon: "🔥", title: "Water Heaters & Geysers", cat: "Home", desc: "Gas and electric heater repair, replacement and new installation, sized for your household — not oversold.", from: "Rs 3,500+", time: "1–2 hours", includes: ["Safety & thermostat check", "Old unit removed", "New unit tested twice"] },
  { icon: "🚿", title: "Bathroom & Kitchen Fitting", cat: "Home", desc: "Taps, showers, toilets and sinks fitted neatly, sealed properly and tested for leaks before we leave.", from: "Rs 2,500+", time: "1–3 hours", includes: ["Fitting supplied / fitted", "Sealing & leak test", "Old fitting removed"] },
  { icon: "🧱", title: "Pipe Replacement & Repiping", cat: "Home", desc: "Old, rusted pipework replaced in copper or PPR, with a clear plan for access and patching — no open-ended hourly billing.", from: "On inspection", time: "1–4 days", includes: ["Written scope & price first", "Copper / PPR pipework", "Pressure test & tidy-up"] },
  { icon: "🏢", title: "Commercial Plumbing", cat: "Commercial", desc: "Offices, restaurants and buildings — planned maintenance, emergency cover and one point of contact.", from: "On quote", time: "As scheduled", includes: ["Maintenance contract option", "Priority emergency cover", "Monthly job report"] },
];

const AREAS = [
  { name: "DHA", time: "45 min" }, { name: "Clifton", time: "50 min" },
  { name: "Gulshan-e-Iqbal", time: "60 min" }, { name: "North Nazimabad", time: "70 min" },
  { name: "PECHS", time: "55 min" }, { name: "Saddar", time: "65 min" },
  { name: "Gulistan-e-Johar", time: "75 min" }, { name: "Malir Cantt", time: "90 min" },
];

const REVIEWS = [
  { name: "Ahmed R. — DHA", service: "Leak", stars: 5, date: "Oct 2026", text: "Pipe burst at midnight, team arrived in 40 minutes and stopped the water before it ruined the floor. Clear price before they started.", reply: "Thanks Ahmed — glad we caught it early. Your 12-month guarantee covers that repair." },
  { name: "Fatima S. — Gulshan-e-Iqbal", service: "Drain", stars: 5, date: "Sep 2026", text: "Blocked main drain for two days. They cleared it, showed me the cause, and explained how to avoid it again. No upselling.", reply: null },
  { name: "Bilal K. — Clifton", service: "Heater", stars: 5, date: "Sep 2026", text: "New geyser installed the same day. Clean work, no mess left behind, and they tested everything twice before leaving.", reply: null },
  { name: "Sara M. — PECHS", service: "Leak", stars: 4, date: "Aug 2026", text: "Good, honest work. Arrived a little late in traffic but they called ahead, which most plumbers never do.", reply: "Thanks Sara — traffic on that route is on us to plan better, and we did call ahead as promised." },
];

const FAQS = [
  { cat: "Emergency", q: "How fast can you reach me in an emergency?", a: "For emergencies in our service areas, we aim for 60–90 minutes, day or night. Tell us what is leaking or blocked when you call so we bring the right parts — that is what actually saves time." },
  { cat: "Emergency", q: "What should I do while I wait for the plumber?", a: "Turn off the main water valve if you can, put towels or a bucket under the leak, avoid using that tap or drain, and take a photo of the leak. Do not try to open a wall or force a blocked drain with chemicals." },
  { cat: "Pricing", q: "Do I get a price before work starts?", a: "Yes. After inspection we confirm the price in writing before work begins. If the scope changes, we tell you first — no surprise charges at the end." },
  { cat: "Pricing", q: "What is not included in the starting price?", a: "Parts beyond the standard allowance, major access work such as opening a wall, and after-hours emergency surcharge are quoted separately — and always before we do that work." },
  { cat: "Booking", q: "How does booking work?", a: "Pick a service, pick a time slot, leave your name and phone. We confirm within 15 minutes during working hours. For emergencies, call — a form is too slow when water is running." },
  { cat: "Guarantee", q: "Are your plumbers licensed and insured?", a: "Yes. Trained, background-checked, licensed and insured, with a 12-month workmanship guarantee. Licence reference for this test page: KHI-PLM-2024-1187 (fictional)." },
  { cat: "Guarantee", q: "What if the same problem comes back?", a: "Tell us within 12 months and we return to re-check the same repair at no labour charge, provided it is the same fault and not new damage." },
];

const SLOTS = ["Today, 2:00 PM", "Today, 4:30 PM", "Today, 7:00 PM", "Tomorrow, 10:00 AM", "Tomorrow, 1:00 PM"];

export default function Home() {
  const [serviceFilter, setServiceFilter] = useState("All");
  const [bookService, setBookService] = useState(SERVICES[0].title);
  const [bookStep, setBookStep] = useState(1);
  const [urgency, setUrgency] = useState("Emergency");
  const [slot, setSlot] = useState(SLOTS[0]);
  const [submitted, setSubmitted] = useState(false);
  const [areaQuery, setAreaQuery] = useState("");
  const [reviewFilter, setReviewFilter] = useState("All");
  const [faqSearch, setFaqSearch] = useState("");
  const [faqCat, setFaqCat] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredServices = serviceFilter === "All" ? SERVICES : SERVICES.filter((s) => s.cat === serviceFilter);
  const filteredReviews = reviewFilter === "All" ? REVIEWS : REVIEWS.filter((r) => r.service === reviewFilter);
  const filteredFaqs = FAQS.filter((f) =>
    (faqCat === "All" || f.cat === faqCat) &&
    (faqSearch.trim() === "" || (f.q + " " + f.a).toLowerCase().includes(faqSearch.toLowerCase()))
  );
  const areaMatch = useMemo(() => {
    const q = areaQuery.trim().toLowerCase();
    if (!q) return null;
    return AREAS.find((a) => a.name.toLowerCase().includes(q) || q.includes(a.name.toLowerCase()));
  }, [areaQuery]);

  const chooseService = (title) => {
    setBookService(title);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="topbar"><div className="topbar-inner">
        <span>📍 Serving Karachi &nbsp;•&nbsp; <b>Licensed &amp; Insured</b> &nbsp;•&nbsp; Licence ref: KHI-PLM-2024-1187 (test)</span>
        <span>24/7 Emergency: <b>+92 300 0000000 (test number)</b></span>
      </div></div>

      <header className="header"><div className="header-inner">
        <div className="logo">FlowFix <span>Plumbing</span></div>
        <nav className="nav">
          <a href="#services">Services</a><a href="#why">Why us</a><a href="#pricing">Pricing</a>
          <a href="#areas">Areas</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-orange btn-sm" href="#book">Book a plumber</a>
      </div></header>

      {/* HERO — job: in 5 seconds, prove local, reachable, and which path to take */}
      <section className="hero"><div className="hero-inner">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <span className="eyebrow"><span className="dot" /> Plumbers available now — 24/7 in Karachi</span>
          <h1>Emergency plumber in Karachi. <em>Same-day fix,</em> upfront price.</h1>
          <p>Not “quality plumbing solutions”. A licensed plumber who answers, arrives on time, and tells you the price before touching a pipe.</p>
          <div className="hero-phone">📞 <a href="tel:+923000000000">+92 300 0000000</a><span>Tap to call — test number</span></div>
          <div className="hero-cta">
            <a className="btn btn-orange" href="tel:+923000000000">🚨 Emergency — call now</a>
            <a className="btn btn-outline" href="#book">Book a scheduled visit</a>
          </div>
          <div className="hero-review">★★★★★ <b>4.9</b> · 2,400+ reviews · <i>“Arrived in 40 minutes at midnight and stopped the water.” — Ahmed R., DHA</i></div>
          <div className="hero-points">
            <div><b>60–90 min</b>Emergency response</div>
            <div><b>Rs 0</b>Call-out check with repair</div>
            <div><b>12 months</b>Workmanship guarantee</div>
          </div>
        </motion.div>

        {/* BOOKING — job: service → slot → minimal details → confirmation, in that order */}
        <motion.div id="book" className="booking" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="steps-indicator">Step {bookStep} of 3 — {["Choose service", "Pick a time", "Your details"][bookStep - 1]}</div>
          <h2>Book a plumber</h2>
          {submitted ? (
            <div className="success">
              <b>Request received (demo).</b><br />
              {bookService} · {urgency} · {slot}<br />
              A plumber will call to confirm the price — no payment is taken here. For a live emergency, please call instead of waiting for a form.
              <br /><button className="btn btn-outline btn-sm" style={{ marginTop: 12 }} onClick={() => { setSubmitted(false); setBookStep(1); }}>Book another visit</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              {bookStep === 1 && (<>
                <div className="field"><label>What is the problem?</label>
                  <select value={bookService} onChange={(e) => setBookService(e.target.value)}>{SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}</select>
                </div>
                <div className="field"><label>How urgent is it?</label><div className="urgency">
                  {["Emergency", "Today", "This week"].map((u) => <button type="button" key={u} className={urgency === u ? "active" : ""} onClick={() => setUrgency(u)}>{u}</button>)}
                </div></div>
                <p className="small">Emergency = water running, flooding or no water. Those jobs go by phone first.</p>
              </>)}
              {bookStep === 2 && (<>
                <div className="field"><label>Pick a time slot</label><div className="slot-grid">
                  {SLOTS.map((s) => <button type="button" key={s} className={slot === s ? "active" : ""} onClick={() => setSlot(s)}>{s}</button>)}
                </div></div>
                <p className="small">Slots shown are demo availability. Your visit is confirmed by phone, not by this form alone.</p>
              </>)}
              {bookStep === 3 && (<>
                <div className="field"><label>Your name</label><input required placeholder="e.g. Ahmed Raza" /></div>
                <div className="field"><label>Phone</label><input required placeholder="03xx-xxxxxxx" /></div>
                <div className="field"><label>Area</label><input placeholder="e.g. DHA Phase 5" /></div>
                <div className="summary-box"><b>{bookService}</b><br />{urgency} · {slot}</div>
              </>)}
              <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                {bookStep > 1 && <button type="button" className="btn btn-outline" onClick={() => setBookStep(bookStep - 1)}>Back</button>}
                {bookStep < 3 && <button type="button" className="btn btn-navy" style={{ flex: 1 }} onClick={() => setBookStep(bookStep + 1)}>Continue →</button>}
                {bookStep === 3 && <button type="submit" className="btn btn-orange" style={{ flex: 1 }}>Request my visit →</button>}
              </div>
            </form>
          )}
        </motion.div>
      </div></section>

      <div className="trustbar"><motion.div className="trust-grid" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div><b>2,400+</b><span>Jobs completed</span></div>
        <div><b>4.9 ★</b><span>Average review rating</span></div>
        <div><b>12 months</b><span>Workmanship guarantee</span></div>
        <div><b>24/7</b><span>Emergency cover</span></div>
      </motion.div></div>

      {/* SERVICES — job: filter by intent, show what is included, link straight to booking */}
      <section className="section" id="services">
        <div className="section-head">
          <span className="kicker">Services — grouped by your problem</span>
          <h2>Find your problem. See what is included.</h2>
          <p>A service name alone does not help you choose. Each card shows duration, starting price and exactly what the visit covers.</p>
        </div>
        <div className="tabs">{["All", "Emergency", "Home", "Commercial"].map((t) => (
          <button key={t} className={serviceFilter === t ? "active" : ""} onClick={() => setServiceFilter(t)}>{t}</button>
        ))}</div>
        <motion.div layout className="grid">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((s, i) => (
              <motion.div key={s.title} layout className="card" custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} exit={{ opacity: 0, scale: 0.96 }}>
                <div className="icon">{s.icon}</div>
                <span className="tag">{s.cat}</span>
                <h3>{s.title}</h3><p>{s.desc}</p>
                <ul className="includes">{s.includes.map((x) => <li key={x}>✓ {x}</li>)}</ul>
                <div><span className="from">From {s.from}</span> · {s.time}</div>
                <button className="btn btn-navy btn-sm" style={{ marginTop: 14 }} onClick={() => chooseService(s.title)}>Book this service →</button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* WHY — job: make the promise checkable, and show who actually arrives */}
      <section className="dark"><div className="section why" id="why">
        <div>
          <span className="kicker">Why FlowFix</span>
          <h2 style={{ fontSize: 38, lineHeight: 1.15 }}>The plumber who actually shows up on time.</h2>
          <p style={{ color: "#cdd9ec" }}>Compare the promise with what most homeowners actually get — then judge us on the left column.</p>
          <table className="compare">
            <tbody>
              <tr><th></th><th>FlowFix</th><th>Typical plumber</th></tr>
              <tr><td>Price before work</td><td>✓ In writing</td><td>✗ “We will see”</td></tr>
              <tr><td>Arrival window</td><td>✓ 60–90 min, called ahead</td><td>✗ All-day window</td></tr>
              <tr><td>Clean-up</td><td>✓ Included, every job</td><td>✗ Often left to you</td></tr>
              <tr><td>Guarantee</td><td>✓ 12 months</td><td>✗ Verbal only</td></tr>
            </tbody>
          </table>
          <h3 style={{ marginTop: 28 }}>Meet the team (fictional, for this demo)</h3>
          <div className="team">
            {[["AR", "Ahmed Raza", "Lead plumber · 12 yrs"], ["SK", "Sara Khan", "Drain & sewer specialist · 8 yrs"], ["MB", "Bilal Malik", "Heater & fitting · 9 yrs"]].map(([ini, name, role]) => (
              <div className="team-card" key={name}><div className="avatar">{ini}</div><b>{name}</b><span>{role}</span></div>
            ))}
          </div>
        </div>
        <motion.div className="guarantee" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <h3>⏰ On-Time Guarantee</h3>
          <p>If we are more than 30 minutes late for a scheduled visit without calling you first, you get Rs 1,000 off the job.</p>
          <p style={{ fontSize: 14 }}>Applies to scheduled visits in our service areas. Emergencies are prioritised by severity, not by order of calling.</p>
        </motion.div>
      </div></section>

      {/* HOW IT WORKS — job: remove the “what happens next?” anxiety */}
      <section className="section">
        <div className="section-head"><span className="kicker">How it works</span><h2>Three steps, and you always know what happens next.</h2></div>
        <div className="steps">
          {[["1", "Tell us the problem", "2 minutes by phone or form. Send a photo if you can.", "Confirmation in 15 min"], ["2", "Get a confirmed price", "We inspect, explain in plain words, agree the price in writing.", "No work before you agree"], ["3", "Fixed & guaranteed", "Work tested twice, area left clean, guarantee in writing.", "12-month cover"]].map(([n, t, d, note]) => (
            <div className="card" key={n}><div className="step-num">{n}</div><h3>{t}</h3><p style={{ color: "var(--muted)" }}>{d}</p><b>{note}</b></div>
          ))}
        </div>
        <div className="checklist">
          <h3>🚨 While you wait — emergency checklist</h3>
          <ol>
            <li>Turn off the main water valve if you can find it safely.</li>
            <li>Put towels or a bucket under the leak; do not use that tap or drain.</li>
            <li>Take a photo of the leak and the valve location for the plumber.</li>
            <li>Keep children and electronics away from standing water.</li>
          </ol>
        </div>
      </section>

      {/* PRICING — job: price-book style, what is included and what is not */}
      <section className="section" id="pricing" style={{ paddingTop: 0 }}>
        <div className="section-head"><span className="kicker">Pricing — flat-rate price book</span><h2>Know what it costs, and what it does not cover.</h2>
        <p>Flat rates agreed before work, not an hourly meter running while you worry. Final price is confirmed after inspection.</p></div>
        <div className="price-table">
          {[["Leak repair (tap / visible pipe)", "Repair + pressure test", "30–60 min", "Rs 1,500+"], ["Drain unblocking", "Clear + flush + cause check", "45–90 min", "Rs 2,000+"], ["Geyser / water heater repair", "Safety check + repair", "1–2 hours", "Rs 3,500+"], ["Toilet repair / replacement", "Fitting + sealing + test", "1–2 hours", "Rs 2,500+"], ["Full bathroom refit plumbing", "Written scope, staged work", "2–4 days", "On quote"]].map(([job, inc, time, price]) => (
            <div className="price-row" key={job}><b>{job}</b><span style={{ color: "var(--muted)" }}>{inc}</span><span style={{ color: "var(--muted)" }}>{time}</span><b>{price}</b></div>
          ))}
        </div>
        <div className="price-notes">
          <div><b>Not included, quoted separately:</b> parts beyond standard allowance, opening a wall, after-hours emergency surcharge (Rs 1,000, stated before dispatch).</div>
          <div className="plan-card"><b>FlowFix Care Plan — Rs 9,999 / year</b><br />Annual inspection, priority booking, 10% off repairs, no emergency surcharge. For homes that want small problems found before they flood.</div>
        </div>
      </section>

      {/* AREAS — job: prove coverage by response time, let the visitor check their own area */}
      <section className="section" id="areas" style={{ paddingTop: 0 }}>
        <div className="section-head"><span className="kicker">Service areas</span><h2>Check your area — and how fast we can reach you.</h2>
        <p>We do not claim the whole city at the same speed. Each area below has an honest emergency response estimate.</p></div>
        <div className="field" style={{ maxWidth: 420 }}><label>Check your area</label>
          <input value={areaQuery} onChange={(e) => setAreaQuery(e.target.value)} placeholder="Type your area, e.g. DHA" />
          {areaQuery.trim() && (areaMatch
            ? <p className="success" style={{ marginTop: 10 }}>✓ {areaMatch.name} is covered — emergency response about {areaMatch.time}.</p>
            : <p className="small" style={{ marginTop: 10 }}>Not in the list below? Call us — we will tell you honestly if we can reach you, rather than promising and arriving late.</p>)}
        </div>
        <div className="areas">
          {AREAS.map((a) => <span className="chip" key={a.name}>📍 {a.name} <b>· {a.time}</b></span>)}
        </div>
      </section>

      {/* REVIEWS — job: summary + breakdown + filter + verified, not just three quotes */}
      <section className="section" id="reviews" style={{ paddingTop: 0 }}>
        <div className="section-head"><span className="kicker">Reviews</span><h2>Not just a star count — the breakdown behind it.</h2></div>
        <div className="review-summary">
          <div><b style={{ fontSize: 44 }}>4.9</b><div className="stars">★★★★★</div><span>2,400+ selected reviews (demo data)</span></div>
          <div className="bars">
            {[["5★", "86%"], ["4★", "11%"], ["3★", "2%"], ["2★ or less", "1%"]].map(([label, pct]) => (
              <div className="bar-row" key={label}><span>{label}</span><div className="bar"><div style={{ width: pct }} /></div><span>{pct}</span></div>
            ))}
          </div>
        </div>
        <div className="tabs">{["All", "Leak", "Drain", "Heater"].map((t) => (
          <button key={t} className={reviewFilter === t ? "active" : ""} onClick={() => setReviewFilter(t)}>{t}</button>
        ))}</div>
        <div className="review-grid">
          {filteredReviews.map((r, i) => (
            <motion.div key={r.name} className="card" custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
              <p style={{ marginTop: 10 }}>“{r.text}”</p>
              <b>{r.name}</b> · <span className="small">{r.date} · Verified job · {r.service}</span>
              {r.reply && <div className="owner-reply"><b>Reply from FlowFix:</b> {r.reply}</div>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ — job: searchable, categorised, animated — find the answer in seconds */}
      <section className="section faq" id="faq" style={{ paddingTop: 0 }}>
        <div className="section-head"><span className="kicker">FAQ</span><h2>Find your answer, without scrolling through everything.</h2></div>
        <div className="field"><input value={faqSearch} onChange={(e) => setFaqSearch(e.target.value)} placeholder="Search FAQs, e.g. price, emergency, guarantee…" /></div>
        <div className="tabs">{["All", "Emergency", "Pricing", "Booking", "Guarantee"].map((t) => (
          <button key={t} className={faqCat === t ? "active" : ""} onClick={() => setFaqCat(t)}>{t}</button>
        ))}</div>
        {filteredFaqs.length === 0 && <p className="small">No FAQ matches that search — try “price”, “emergency” or “guarantee”, or call us.</p>}
        {filteredFaqs.map((f, i) => {
          const idx = FAQS.indexOf(f);
          return (
            <div className="faq-item" key={f.q}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}><span>{f.q}</span><motion.span animate={{ rotate: openFaq === idx ? 45 : 0 }}>{openFaq === idx ? "×" : "+"}</motion.span></button>
              <AnimatePresence initial={false}>
                {openFaq === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                    <div className="faq-a">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>

      <section className="section" style={{ paddingTop: 0 }}><div className="cta">
        <h2>Water leaking right now? Do not wait.</h2>
        <p>Turn off the main valve if you can, then call us. We will talk you through the first step while a plumber is on the way.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 22 }}>
          <a className="btn btn-orange" href="tel:+923000000000">Call +92 300 0000000</a>
          <a className="btn btn-outline" href="#book">Book online</a>
        </div>
      </div></section>

      <footer className="footer"><div className="footer-inner">
        <div><b>FlowFix Plumbing</b><br />A fictional test business, built to demonstrate a professional plumber landing page.<br />Email: hello@flowfix.example • Phone: +92 300 0000000 (test number)<br />Licence ref: KHI-PLM-2024-1187 (test)</div>
        <div><b>Services</b><br />Leak repair • Drain cleaning • Water heaters<br />Fitting • Repiping • Commercial</div>
        <div><b>Hours</b><br />Emergency: 24/7<br />Scheduled: Mon–Sat, 8am–8pm</div>
        <div><b>Built with</b><br />Next.js • Framer Motion • Deployed on Vercel</div>
      </div></footer>

      <div className="sticky-bar">
        <a href="tel:+923000000000">📞 Call now</a>
        <a href="#book">Book a plumber</a>
      </div>
    </main>
  );
}
