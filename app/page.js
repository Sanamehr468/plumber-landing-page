"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PHONE = "+92 300 0000000";
const PHONE_LINK = "tel:+923000000000";
const EMAIL = "hello@flowfix.example";
const TECHNICIANS = ["Ahmed Raza", "Sara Khan", "Bilal Malik"];

const SERVICES = [
  { id: "leak", name: "Emergency leak repair", cat: "Emergency", time: "60 to 90 minutes", price: 2500, includes: ["Water shut-off first", "Leak repair and test", "Clean-up after the job"], problem: "A pipe is leaking and water is spreading. We stop it first, then fix it." },
  { id: "drain", name: "Drain unblocking", cat: "Home", time: "45 minutes", price: 1500, includes: ["Drain inspection", "Unblocking and flush", "Advice on what caused it"], problem: "A sink, shower or floor drain is slow or blocked." },
  { id: "tap", name: "Tap and fixture fitting", cat: "Home", time: "60 minutes", price: 1200, includes: ["Old fixture removal", "New fitting and seals", "Leak test"], problem: "A tap drips, a shower is weak, or a fixture needs replacing." },
  { id: "pump", name: "Water pump and motor repair", cat: "Home", time: "90 minutes", price: 3000, includes: ["Pump and motor check", "Repair or replacement advice", "Test under load"], problem: "The pump will not start, or the tank is not filling. During load shedding, our technicians carry a backup generator to test the pump." },
  { id: "bathroom", name: "Bathroom and kitchen work", cat: "Home", time: "2 to 4 hours", price: 5000, includes: ["Full fitting check", "Pipes, traps and seals", "Written quote before work"], problem: "A bathroom or kitchen needs new pipes, a WC, or a full refit check." },
  { id: "commercial", name: "Commercial plumbing", cat: "Commercial", time: "By appointment", price: 0, includes: ["Site visit and survey", "Maintenance schedule", "Priority response"], problem: "An office, shop or building needs a reliable plumbing contract." },
];

const AREAS = [
  { zone: "South", areas: [{ name: "DHA", time: "45 minutes" }, { name: "Clifton", time: "45 minutes" }, { name: "Saddar", time: "60 minutes" }] },
  { zone: "Central", areas: [{ name: "Gulshan-e-Iqbal", time: "60 minutes" }, { name: "North Nazimabad", time: "60 minutes" }, { name: "PECHS", time: "60 minutes" }] },
  { zone: "East", areas: [{ name: "Malir Cantt", time: "90 minutes" }, { name: "Gulistan-e-Jauhar", time: "75 minutes" }, { name: "Korangi", time: "75 minutes" }] },
  { zone: "West", areas: [{ name: "Orangi Town", time: "90 minutes" }, { name: "SITE", time: "75 minutes" }] },
  { zone: "North", areas: [{ name: "North Karachi", time: "75 minutes" }, { name: "Surjani Town", time: "90 minutes" }] },
];
const AREA_TIMES = Object.fromEntries(AREAS.flatMap((z) => z.areas.map((a) => [a.name, a.time])));

const REVIEWS = [
  { name: "Farhan Siddiqui", role: "DHA, leak repair, verified job", quote: "The plumber arrived in 40 minutes, showed the price before touching a pipe, and the leak has not come back. That is the whole review.", reply: "FlowFix reply: Thank you, Farhan. The same fault is covered for 30 days." },
  { name: "Dr. Ayesha Malik", role: "Gulshan, pump repair, verified job", quote: "Our pump failed during load shedding. They tested it with their own generator and told us the motor, not the wiring, was the problem.", reply: "FlowFix reply: Thank you, Dr. Malik. Pump testing during an outage is part of the visit." },
  { name: "Zainab Tariq", role: "Clifton, drain unblocking, verified job", quote: "No surprise bill. The price on the phone was the price on the job card, parts listed separately.", reply: "FlowFix reply: Thank you, Zainab. Parts are always listed separately." },
];

const FAQS = [
  { q: "How much will the visit cost?", a: "A home visit starts from Rs 1,500 for labour. Parts are listed separately, and you get the full quote before work starts. If the quote changes, work stops until you agree.", cat: "Pricing" },
  { q: "How fast can you reach me?", a: "Emergency visits in DHA and Clifton are usually 45 minutes. Other areas are 60 to 90 minutes, depending on traffic. The area list on this page shows the honest time for each area.", cat: "Areas" },
  { q: "What if the leak comes back?", a: "The same fault is covered for 30 days with no labour charge. Call the number on your booking and we will send the same technician where possible.", cat: "Guarantee" },
  { q: "Do you work during load shedding?", a: "Yes. For pump and motor work, technicians carry a backup generator so the pump can be tested even when the power is out.", cat: "Booking" },
  { q: "Do I need to be home for the whole visit?", a: "You need to be home at the start, to show the problem and agree the quote. After that, the technician can finish most jobs and show you the result at the end.", cat: "Booking" },
  { q: "Is this a real business?", a: "No. FlowFix is a fictional test business for this page. The phone number and email on this page are test details, not a real booking line.", cat: "General" },
];

const PLANS = [
  { name: "Single visit", price: "From Rs 1,500", rows: ["Callout: included", "Labour: one job", "Parts: listed separately", "Guarantee: 30 days", "After-hours: Rs 1,000 surcharge, told before dispatch", "Response: 45 to 90 minutes"] },
  { name: "Care Plan", price: "Rs 9,999 a year", recommended: true, rows: ["Callout: included", "Labour: two visits a year", "Parts: listed separately", "Guarantee: 30 days", "After-hours: no surcharge", "Response: priority"] },
  { name: "Commercial", price: "Custom quote", rows: ["Callout: site visit", "Labour: contract rate", "Parts: listed separately", "Guarantee: 30 days", "After-hours: agreed in contract", "Response: agreed in contract"] },
];

function Fade({ children, delay = 0 }) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay }}>{children}</motion.div>;
}

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [service, setService] = useState("leak");
  const [area, setArea] = useState("DHA");
  const [slot, setSlot] = useState("Today, 4 to 6 pm");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [booking, setBooking] = useState(null);
  const [howOpen, setHowOpen] = useState(0);
  const [areaOpen, setAreaOpen] = useState(0);
  const [review, setReview] = useState(0);
  const [faqSearch, setFaqSearch] = useState("");
  const [faqCat, setFaqCat] = useState("All");

  const selectedService = SERVICES.find((s) => s.id === service) || SERVICES[0];
  const visibleServices = SERVICES.filter((s) => filter === "All" || s.cat === filter);
  const visibleFaqs = FAQS.filter((f) => (faqCat === "All" || f.cat === faqCat) && (f.q + f.a).toLowerCase().includes(faqSearch.toLowerCase()));

  function submitBooking(e) {
    e.preventDefault();
    const id = "FF-" + Math.floor(1000 + Math.random() * 9000);
    setBooking({ id, tech: TECHNICIANS[Math.floor(Math.random() * TECHNICIANS.length)], service: selectedService.name, area, slot });
  }

  function calendarFile() {
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT", "SUMMARY:FlowFix plumber visit", `DESCRIPTION:${selectedService.name} in ${area}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    const a = document.createElement("a"); a.href = url; a.download = "flowfix-booking.ics"; a.click(); URL.revokeObjectURL(url);
  }

  const howStages = [
    { name: "Tell us the problem", text: "Choose a service, an area and a time slot. Tell us where the water is, and what changed." },
    { name: "Get a flat quote", text: "You get the starting price and what is included before anyone is dispatched. Parts are listed separately." },
    { name: "Technician arrives", text: "The assigned technician arrives in the area window, shows the job card, and confirms the quote on site." },
    { name: "Fixed and guaranteed", text: "The job is tested before we leave. The same fault is covered for 30 days with no labour charge." },
  ];

  return (
    <main id="top">
      <div className="board heroBoard">
        <div className="tile nameTile"><h1>FlowFix</h1></div>
        <a className="tile linkTile" href="#services">Services</a>
        <a className="tile linkTile" href="#pricing">Pricing</a>
        <a className="tile linkTile" href="#areas">Areas</a>
        <a className="tile linkTile" href="#reviews">Reviews</a>
        <div className="heroLeft">
          <div className="tile photoTile portrait"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Plumber_uses_two_wrenches_to_tighten_a_fitting.jpg" width="1096" height="894" alt="A plumber tightening a fitting with two wrenches" /></div>
          <div className="tile factsTile"><p><strong>Karachi plumber.</strong> Emergency and scheduled visits.</p><p><strong>Test number.</strong> {PHONE}</p><p><strong>Flat prices.</strong> Quote before work.</p><p><strong>30 days.</strong> Same fault, no labour charge.</p><p><strong>Test site.</strong> Not a real business.</p></div>
        </div>
        <div className="heroCentre">
          <div className="tile photoTile large"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Karachi_street_scene.jpg/1920px-Karachi_street_scene.jpg" width="1920" height="1282" alt="A street scene in Karachi" /></div>
          <div className="tile statementTile"><p>Karachi plumbing, fixed on the first visit. Book a service, see the price, and know who is coming.</p></div>
        </div>
        <div className="heroRight">
          <div className="tile railTile">45 minutes in DHA and Clifton</div>
          <div className="tile railTile">4.9 from verified jobs</div>
          <div className="tile railTile">Parts listed separately</div>
          <div className="tile railTile">Pump testing during load shedding</div>
          <a className="tile railTile actionTile" href="#book">Book a plumber</a>
        </div>
      </div>

      <section className="board intro" aria-label="About FlowFix">
        <Fade><p className="lead">FlowFix is a Karachi plumber built around one promise: the price is said before the wrench comes out, the technician actually arrives, and if the same fault comes back within 30 days, we come back too.</p></Fade>
        <div className="introCols">
          <p><strong>Who.</strong> A small team of plumbers for homes and small businesses across Karachi, with emergency cover for leaks and burst pipes.</p>
          <p><strong>What.</strong> Leaks, drains, taps, pumps, bathrooms and commercial maintenance, with a flat starting price for each job.</p>
          <p><strong>Where.</strong> DHA, Clifton, Gulshan, North Nazimabad, Malir Cantt and the areas listed below, with honest response times for each.</p>
          <p><strong>How to reach us.</strong> Use the booking board below, or call the test number. This is a test page, so no real booking is made.</p>
        </div>
      </section>

      <section className="board" id="book" aria-label="Book a plumber">
        <Fade><div className="tile sectionHeadTile"><h2>Book a plumber</h2><p>Service, then area and time, then a few details. The confirmation shows your booking reference, technician and arrival window.</p></div></Fade>
        <div className="tile bookTile">
          <div className="checker"><p><strong>Area check.</strong> {area}: {AREA_TIMES[area] || "Ask for a time"}.</p><p><strong>Starting price.</strong> {selectedService.name}: {selectedService.price ? `Rs ${selectedService.price.toLocaleString()}+` : "Custom quote"}.</p></div>
          <form onSubmit={submitBooking}>
            <label>Service<select value={service} onChange={(e) => setService(e.target.value)}>{SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select></label>
            <label>Area<select value={area} onChange={(e) => setArea(e.target.value)}>{Object.keys(AREA_TIMES).map((a) => <option key={a}>{a}</option>)}</select></label>
            <fieldset><legend>Time slot</legend>{["Today, 4 to 6 pm", "Tomorrow, 9 to 11 am", "Tomorrow, 4 to 6 pm", "Emergency, as soon as possible"].map((s) => <button type="button" key={s} className={slot === s ? "slot active" : "slot"} onClick={() => setSlot(s)}>{s}</button>)}</fieldset>
            <label>Name<input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" /></label>
            <label>Phone<input value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="03xx xxxxxxx" /></label>
            <label>Address<input value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="House, street, area" /></label>
            <button className="btn" type="submit">Confirm booking</button>
          </form>
          {booking && <div className="confirm"><p><strong>Booking {booking.id}.</strong> {booking.service} in {booking.area}.</p><p>Technician: {booking.tech}. Slot: {booking.slot}.</p><button className="btn secondary" type="button" onClick={calendarFile}>Add to calendar</button><p className="small">Test booking only. No technician is dispatched from this page.</p></div>}
        </div>
      </section>

      <section className="board" id="services" aria-label="Services">
        <Fade><div className="tile sectionHeadTile"><h2>Services by problem</h2><p>Pick a problem, not a trade term. Every service shows its time, starting price and what is included.</p><div className="filters">{["All", "Emergency", "Home", "Commercial"].map((c) => <button key={c} type="button" className={filter === c ? "slot active" : "slot"} onClick={() => setFilter(c)}>{c}</button>)}</div></div></Fade>
        <div className="tile mosaicHead"><p>Leaks, drains, pumps and fittings</p></div>
        <div className="tile photoTile mosaicPhoto"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/-Three_Plumbers_with_Pipes_and_Tools-_MET_DP700384.jpg/1920px--Three_Plumbers_with_Pipes_and_Tools-_MET_DP700384.jpg" width="1920" height="1575" alt="Three plumbers with pipes and tools in an old photograph" loading="lazy" /></div>
        <div className="tile figureTile"><p className="figure">4.9</p><p>Average from verified jobs, with the breakdown in Reviews.</p></div>
        {visibleServices.map((s, i) => (
          <div className={`tile serviceTile ${i % 3 === 0 ? "wide" : ""}`} key={s.id}>
            <h3>{s.name}</h3><p>{s.problem}</p><p><strong>{s.time}.</strong> {s.price ? `From Rs ${s.price.toLocaleString()}.` : "Custom quote."}</p>
            <ul>{s.includes.map((x) => <li key={x}>{x}</li>)}</ul>
            <button className="btn secondary" type="button" onClick={() => { setService(s.id); document.getElementById("book")?.scrollIntoView({ behavior: "smooth" }); }}>Book this service</button>
          </div>
        ))}
      </section>

      <section className="board" id="why" aria-label="Why FlowFix">
        <div className="tile accentHeadTile"><h2>Why FlowFix works</h2></div>
        <div className="tile proofTile"><h3>He actually arrives</h3><p>Dispatch by area, not a central queue. The area time is shown before you book.</p></div>
        <div className="tile proofTile"><h3>Price first, wrench second</h3><p>The quote comes before work. Parts are listed separately, never folded into labour.</p></div>
        <div className="tile proofTile"><h3>A stranger you can let inside</h3><p>You get the technician name and booking reference before the visit.</p></div>
        <div className="tile proofTile"><h3>If it leaks again, we come back</h3><p>The same fault, 30 days, no labour charge.</p></div>
        <div className="tile statTile"><p className="figure">30 min</p><p>On-time promise. If we are 30 minutes late without calling, Rs 1,000 comes off the labour.</p></div>
        <div className="tile statTile"><p className="figure">Rs 0</p><p>Surprise-bill promise. No charge beyond the agreed quote without your agreement.</p></div>
        <div className="tile statTile"><p className="figure">30 days</p><p>Guarantee on the same fault, with no labour charge.</p></div>
      </section>

      <div className="marquee" aria-hidden="true"><div className="marqueeTrack"><span>FlowFix. Fixed on the first visit. Karachi. </span><span>FlowFix. Fixed on the first visit. Karachi. </span></div></div>

      <section className="board" id="how" aria-label="How it works">
        <Fade><div className="tile sectionHeadTile"><h2>How it works</h2><p>Four stages, in order, darkest to lightest. Click a stage to open it.</p></div></Fade>
        <div className="accordion">
          {howStages.map((s, i) => (
            <button key={s.name} type="button" className={`accPanel ${howOpen === i ? "open" : ""}`} onClick={() => setHowOpen(i)} aria-expanded={howOpen === i}>
              <span className="accName">{s.name}</span>{howOpen === i && <span className="accText">{s.text}</span>}
            </button>
          ))}
        </div>
      </section>

      <section className="board" id="pricing" aria-label="Pricing">
        <Fade><div className="tile sectionHeadTile"><h2>Pricing, in full</h2><p>What is included, and what is not. Parts beyond the allowance, opening a wall, and after-hours work are never hidden in the labour price.</p></div></Fade>
        <div className="tile tableTile">
          <table><thead><tr><th>What is compared</th>{PLANS.map((p) => <th key={p.name} className={p.recommended ? "rec" : ""}>{p.name}<br /><span>{p.price}</span></th>)}</tr></thead>
          <tbody>{PLANS[0].rows.map((_, ri) => <tr key={ri}><td>{PLANS[0].rows[ri].split(":")[0]}</td>{PLANS.map((p) => <td key={p.name} className={p.recommended ? "rec" : ""}>{p.rows[ri].split(": ").slice(1).join(": ")}</td>)}</tr>)}
          <tr><td>Book</td>{PLANS.map((p) => <td key={p.name} className={p.recommended ? "rec" : ""}><a className="btn" href="#book">{p.name === "Commercial" ? "Ask for a quote" : "Book this plan"}</a></td>)}</tr></tbody></table>
          <p className="small">Not included: parts beyond the allowance, opening a wall to reach a pipe, and after-hours work unless the plan says otherwise. Each is quoted before work starts.</p>
        </div>
      </section>

      <section className="board" id="areas" aria-label="Areas">
        <Fade><div className="tile sectionHeadTile"><h2>Karachi</h2><p>Choose a zone to see its areas and honest response times. Traffic can change a time, and we will call if it does.</p></div></Fade>
        {AREAS.map((z, i) => (
          <div className="tile areaBarTile" key={z.zone}>
            <button type="button" className="areaBar" onClick={() => setAreaOpen(i)} aria-expanded={areaOpen === i}><span>{z.zone}</span><span>{areaOpen === i ? "−" : "+"}</span></button>
            {areaOpen === i && <ul className="areaList">{z.areas.map((a) => <li key={a.name}><span>{a.name}</span><span>{a.time}</span></li>)}</ul>}
          </div>
        ))}
      </section>

      <section className="board" id="reviews" aria-label="Reviews">
        <Fade><div className="tile sectionHeadTile"><h2>Reviews</h2><p>Rating breakdown from verified jobs. Every review below shows its service and area, and the owner reply.</p></div></Fade>
        <div className="tile breakdownTile"><p className="figure">4.9</p><p>5 stars: 86% · 4 stars: 11% · 3 stars: 2% · 2 stars or less: 1%</p><div className="bars"><p><span>5</span><i style={{ width: "86%" }} /></p><p><span>4</span><i style={{ width: "11%" }} /></p><p><span>3</span><i style={{ width: "2%" }} /></p></div></div>
        <div className="reviewSplit">
          <div className="reviewName"><p><strong>{REVIEWS[review].name}</strong></p><p>{REVIEWS[review].role}</p></div>
          <div className="reviewQuote"><p>“{REVIEWS[review].quote}”</p><p className="small">{REVIEWS[review].reply}</p><div className="filters">{REVIEWS.map((r, i) => <button key={r.name} type="button" className={review === i ? "slot active" : "slot"} onClick={() => setReview(i)}>{r.name.split(" ")[0]}</button>)}</div></div>
        </div>
      </section>

      <section className="board" id="faq" aria-label="Questions">
        <div className="tile faqHeadTile"><h2>Questions, answered</h2></div>
        <div className="tile faqSearchTile"><label>Search questions<input value={faqSearch} onChange={(e) => setFaqSearch(e.target.value)} placeholder="Try: price, guarantee, load shedding" /></label><div className="filters">{["All", "Pricing", "Booking", "Guarantee", "Areas", "General"].map((c) => <button key={c} type="button" className={faqCat === c ? "slot active" : "slot"} onClick={() => setFaqCat(c)}>{c}</button>)}</div></div>
        {visibleFaqs.map((f, i) => <div className={`tile faqBand ${i % 2 ? "alt" : ""}`} key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}
        {visibleFaqs.length === 0 && <div className="tile"><p>No question matches that search. Try a shorter word, or call the test number.</p></div>}
      </section>

      <section className="board" id="cta" aria-label="Book now">
        <div className="tile photoTile ctaPhoto"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Street_in_Karachi%2C_Pakistan.jpg/1920px-Street_in_Karachi%2C_Pakistan.jpg" width="1920" height="1224" alt="A street in Karachi, Pakistan" loading="lazy" /></div>
        <div className="tile ctaTile"><h2>Book a plumber today</h2><p>Choose a service, an area and a time. Get the price before work starts.</p><a className="btn light" href="#book">Start booking</a><a className="btn light secondary" href={PHONE_LINK}>Call {PHONE}</a></div>
        <div className="tile ctaFlat" />
      </section>

      <footer className="board footerBoard">
        <div className="tile footerMark">{"FlowFix".split("").map((ch, i) => <span key={i} style={{ height: `${60 + ((i * 13) % 40)}%` }}>{ch}</span>)}</div>
        <div className="tile footerCol"><h3>Services</h3><ul>{SERVICES.map((s) => <li key={s.id}><a href="#services">{s.name}</a></li>)}</ul></div>
        <div className="tile footerCol"><h3>Help</h3><ul><li><a href="#pricing">Pricing</a></li><li><a href="#areas">Areas</a></li><li><a href="#reviews">Reviews</a></li><li><a href="#faq">Questions</a></li><li><a href="#why">Why FlowFix</a></li><li><a href="#book">Book</a></li></ul></div>
        <div className="tile footerCol"><h3>Contact</h3><p><a href={PHONE_LINK}>{PHONE} (test number)</a></p><p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p><p>Karachi, Pakistan. Test site, no real office address.</p></div>
        <div className="tile footerCol"><h3>Hours</h3><p>Emergency: every day, all hours, by phone.</p><p>Scheduled visits: 8 am to 8 pm.</p><p>Licence reference for this test: KHI-PLM-2024-1187.</p></div>
        <div className="tile footerBottom"><p>© FlowFix Plumbing, fictional test business. Pictures: “Three Plumbers with Pipes and Tools”, CC0, via Wikimedia Commons; “Plumber uses two wrenches to tighten a fitting” by Tomwsulcer, CC0, via Wikimedia Commons; “Street in Karachi, Pakistan” by Jan Kranendonk, CC BY-SA 4.0, via Wikimedia Commons; “Karachi street scene” by Jan Kranendonk, CC BY-SA 4.0, via Wikimedia Commons. The pictures show the trade and Karachi streets, and are not FlowFix's own team or premises.</p><a className="btn secondary" href="#top">Back to top</a></div>
      </footer>
      <div className="stickyBar"><a className="btn" href={PHONE_LINK}>Call {PHONE}</a><a className="btn secondary" href="#book">Book</a></div>
    </main>
  );
}
