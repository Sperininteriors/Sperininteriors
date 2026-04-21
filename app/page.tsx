const services = [
  { title: "Kitchens", price: "From £5,999", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80" },
  { title: "Bathrooms", price: "From £3,999", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80" },
  { title: "Loft Conversions", price: "From £19,999", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" },
  { title: "Media Walls", price: "From £1,999", image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80" },
  { title: "Home Bars", price: "From £2,499", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80" },
  { title: "Bi-Fold Doors", price: "From £2,999", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80" },
];

const gallery = [
  { label: "Modern Kitchen", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80" },
  { label: "Luxury Bathroom", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80" },
  { label: "Media Wall", image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80" },
  { label: "Loft Conversion", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80" },
  { label: "Home Bar", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80" },
  { label: "Bi-Fold Doors", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80" },
];

const trust = [
  "Free Quotes",
  "Fully Insured",
  "Fast Turnaround",
  "Free Design & Planning",
  "Insurance Work Undertaken",
  "All Building Works Undertaken",
];

const extras = [
  "Extensions",
  "Man Caves",
  "Plastering",
  "Electrical Services",
  "Bathrooms",
  "Kitchens",
  "Media Walls",
  "Loft Conversions",
];

export default function HomePage() {
  return (
    <main>
      <section className="section" style={{ borderBottom: "8px solid #f0cb1b" }}>
        <div className="container hero">
          <div>
            <div className="logo-row">
              <img src="/logo.png" alt="Sperin Interiors logo" className="site-logo" />
            </div>

            <h1>Complete Home Renovation &amp; Building Specialists</h1>
            <p>From small jobs to full renovations — we handle it all across the West Midlands and South UK.</p>

            <div className="button-row">
              <a href="tel:07506720035" className="btn btn-blue">Call Today For A Free Quote</a>
              <a href="mailto:info@sperininteriors.uk" className="btn btn-yellow">Email Us Now</a>
            </div>

            <div className="trust-row">
              {trust.slice(0, 3).map((item) => (
                <div key={item} className="trust-pill">{item}</div>
              ))}
            </div>
          </div>

          <div className="hero-grid">
            {gallery.slice(0, 4).map((item) => (
              <div key={item.label} className="hero-card">
                <img src={item.image} alt={item.label} />
                <div className="hero-overlay" />
                <div className="hero-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section blue">
        <div className="container">
          <div className="center-head">
            <h2>Straightforward Pricing</h2>
            <p>Premium workmanship with clear starting prices.</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-title">{service.title}</div>
                <div className="service-price-wrap">
                  <div className="service-price">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-top">
            <div>
              <h2 style={{ fontSize: "clamp(32px,4vw,52px)", textTransform: "uppercase", fontWeight: 800, color: "#08204f" }}>Recent Work</h2>
              
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "end" }}>
              <a href="tel:07506720035" className="btn btn-yellow">Call 07506 720035</a>
            </div>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <div key={item.label} className="gallery-card">
                <div className="gallery-image">
                  <img src={item.image} alt={item.label} />
                </div>
                <div className="label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split-two">
          <div>
            <h2 style={{ fontSize: "clamp(32px,4vw,52px)", textTransform: "uppercase", fontWeight: 800, color: "#08204f" }}>Why Choose Sperin Interiors</h2>
            <div className="tick-grid">
              {trust.map((item) => (
                <div key={item} className="tick">✓ {item}</div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "36px", textTransform: "uppercase", fontWeight: 800, color: "#08204f" }}>All Building Works Undertaken</h3>
            <div className="extra-grid">
              {extras.map((item) => (
                <div key={item} className="extra">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-two">
          <div className="contact-box">
            <h2>Call Today For A <span className="yellow">Free Quote!</span></h2>
            <div className="contact-list">
              <div><strong>Phone:</strong> 07506 720035</div>
              <div><strong>Email:</strong> info@sperininteriors.uk</div>
              <div><strong>Area:</strong> West Midlands &amp; South UK</div>
              <div><strong>Website:</strong> sperininteriors.uk</div>
            </div>
            <div className="button-row">
              <a href="tel:07506720035" className="btn btn-yellow">Call Now</a>
              <a href="mailto:info@sperininteriors.uk" className="btn btn-outline">Send Email</a>
            </div>
          </div>

          <div className="form-box">
            <h3>Request A Quote</h3>
            <div className="form-grid">
              <input className="input" placeholder="Your name" />
              <input className="input" placeholder="Phone number" />
              <input className="input" placeholder="Email address" />
              <input className="input" placeholder="What service do you need?" />
              <textarea className="textarea" placeholder="Tell us about your project" />
              <button className="btn btn-blue" type="button">Get My Free Quote</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-row">
          <div>
            <div className="footer-brand">SPERIN INTERIORS</div>
            <div className="footer-sub">Complete Home Renovation &amp; Building Specialists</div>
          </div>
          <div className="footer-copy">Serving West Midlands &amp; South UK · info@sperininteriors.uk · 07506 720035</div>
        </div>
      </footer>
    </main>
  );
}
