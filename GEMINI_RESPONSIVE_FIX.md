### 1. Responsive Service Card Design

**Card Component Structure (Concrete Copy & CSS Grid Logic):**

```html
<div class="service-card">
  <!-- Accent Bar -->
  <div class="accent-bar" style="background: #00A676;"></div>
  
  <div class="card-content">
    <!-- Icon Tile & Distinctive Badge -->
    <div class="card-header">
      <div class="icon-tile">
        <svg><!-- Wrench/Pipe SVG --></svg>
      </div>
      <span class="badge badge-emergency">⚡ 45-Min Clifton Dispatch</span>
    </div>

    <!-- Category & Problem Statement -->
    <span class="category-tag">Emergency Repairs</span>
    <h3 class="card-title">Burst Geyser & Major Pipe Leaks</h3>
    <p class="problem-statement">Sudden pressure drops or leaking galvanized lines flooding your ceiling? We isolate mains and re-seal joints instantly.</p>

    <!-- Separated Price Footer -->
    <div class="price-footer">
      <div class="price-block">
        <span class="price-label">Starting From</span>
        <span class="price-value">PKR 1,500</span>
      </div>
      <a href="#book" class="cta-button" role="button">Book Verified Plumber</a>
    </div>
  </div>
</div>
```

**Responsive Layout Specifications (No Horizontal Overflow):**
*   **360px (Mobile):** Single column stack. `max-width: 100%; box-sizing: border-box; margin: 0 12px;` Card width scales dynamically to fit viewport padding, completely eliminating horizontal scroll.
*   **768px (Tablet):** 2-column CSS Grid (`grid-template-columns: repeat(2, 1fr); gap: 20px;`). Cards stretch to equal height using `display: flex; flex-direction: column;`.
*   **1280px (Desktop):** 4-column CSS Grid (`grid-template-columns: repeat(4, 1fr); gap: 24px;`). 
*   **Accessibility & Touch Targets:** The `.cta-button` is engineered with `min-height: 48px; padding: 12px 24px; display: flex; align-items: center; justify-content: center;` to ensure frictionless tapping on mobile screens.

---

### 2. Professional 4-Column Footer

```html
<footer class="site-footer">
  <div class="footer-grid">
    
    <!-- Column 1: Brand, Licence & Rating -->
    <div class="footer-col brand-col">
      <h2 class="footer-logo">KarachiPipes<span>.</span></h2>
      <p class="footer-bio">DHA & Clifton’s trusted plumbing masters. Serving elite residential and commercial properties since 2012.</p>
      <div class="credentials">
        <p><strong>Licence #:</strong> KMC-PL-88942</p>
        <p class="rating">⭐ 4.9/5 (1,420+ DHA Reviews)</p>
      </div>
    </div>

    <!-- Column 2: Services Links -->
    <div class="footer-col">
      <h3>Expert Services</h3>
      <ul class="footer-links">
        <li><a href="/geyser-repair">Geyser Installation & Repair</a></li>
        <li><a href="/water-tank">Water Tank Deep Cleaning</a></li>
        <li><a href="/leak-detection">Acoustic Leak Detection</a></li>
        <li><a href="/motor-repair">Water Pump & Motor Fix</a></li>
      </ul>
    </div>

    <!-- Column 3: Help Links -->
    <div class="footer-col">
      <h3>Customer Support</h3>
      <ul class="footer-links">
        <li><a href="/pricing">Transparent Rate Card</a></li>
        <li><a href="/coverage">Area Coverage (Phase 1-8)</a></li>
        <li><a href="/guarantee">100-Day Leak Warranty</a></li>
        <li><a href="/faq">Karachi Water Board FAQs</a></li>
      </ul>
    </div>

    <!-- Column 4: Contact, Hours & Emergency CTA -->
    <div class="footer-col contact-col">
      <h3>Direct Dispatch</h3>
      <p class="contact-info">📍 Office 4B, 9th Commercial Street, Phase 4, DHA, Karachi.</p>
      <p class="contact-info">🕒 Mon–Sun: 24/7 Emergency Rota</p>
      <a href="tel:+923001234567" class="emergency-cta-btn" role="button">🚨 Call 0300-1234567</a>
    </div>

  </div>

  <!-- Bottom Bar -->
  <div class="footer-bottom">
    <p class="test-note">🚧 Staging Environment: Karachi Plumber Conversion Landing Page v2.4</p>
    <a href="#top" class="back-to-top">Back to Top ↑</a>
  </div>
</footer>
```

NOTE FROM MUSE: The structure above was used, but Gemini's invented business name, licence, phone and address were NOT used. All live values stay FlowFix Plumbing, test phone +92 300 0000000, test email hello@flowfix.example, fictional licence KHI-PLM-2024-1187.
