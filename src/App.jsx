import "./App.css";
import { useState } from "react";

const fabrics = [
  {
    name: "Supima Cotton",
    img: "https://tirupurhub.in/wp-content/uploads/2025/11/Supima-Cotton-edited.jpg",
    url: "https://tirupurhub.in/supima-tshirt-manufacturer/",
  },
  {
    name: "Organic Cotton",
    img: "https://tirupurhub.in/wp-content/uploads/2025/10/Organic-Cotton-1-1024x1024.jpg",
    url: "https://tirupurhub.in/organic-cotton/",
  },
  {
    name: "Bamboo Cotton",
    img: "https://tirupurhub.in/wp-content/uploads/2025/11/Bamboo-Cotton-edited.jpg",
    url: "https://tirupurhub.in/bamboo-cotton/",
  },
  {
    name: "Tencel Cotton",
    img: "https://tirupurhub.in/wp-content/uploads/2025/11/Tencel-Cotton-edited.jpg",
    url: "https://tirupurhub.in/tencel-cotton/",
  },
  {
    name: "Suvin Cotton",
    img: "https://tirupurhub.in/wp-content/uploads/2025/10/Suvin-Cotton.jpg",
    url: "https://tirupurhub.in/suvin-cotton/",
  },
  {
    name: "Polyester",
    img: "https://tirupurhub.in/wp-content/uploads/2025/10/polyester.jpg",
    url: "https://tirupurhub.in/polyester/",
  },
];

const products = [
  {
    name: "T-Shirt",
    sub: "Round Neck & V Neck",
    img: "https://tirupurhub.in/wp-content/uploads/2025/10/1-2-1024x1024.png",
  },
  {
    name: "Polo T-Shirt",
    sub: "Premium collar designs",
    img: "https://tirupurhub.in/wp-content/uploads/2025/10/2-2-1024x1024.png",
  },
  {
    name: "Jogger",
    sub: "Activewear essentials",
    img: "https://tirupurhub.in/wp-content/uploads/2025/10/3-2-1024x1024.png",
  },
  {
    name: "Hoodie",
    sub: "Comfort & warmth",
    img: "https://tirupurhub.in/wp-content/uploads/2025/10/4-2-1024x1024.png",
  },
  {
    name: "Kids Romper",
    sub: "Soft & safe for kids",
    img: "https://tirupurhub.in/wp-content/uploads/2025/11/6-edited.png",
  },
  {
    name: "Sweatshirt",
    sub: "Casual & sporty fits",
    img: "https://tirupurhub.in/wp-content/uploads/2025/10/5-2-1024x1024.png",
  },
];

const steps = [
  {
    n: 1,
    title: "Sampling",
    desc: "We start by making a sample based on your tech pack, reference garment, or idea. This helps finalize fabric, construction, sizing, and trims.",
  },
  {
    n: 2,
    title: "Fabric Development",
    desc: "We source yarn from trusted mills and develop fabric according to your GSM, color, and blend requirements. Only approved fabric is used.",
  },
  {
    n: 3,
    title: "Cutting & Stitching",
    desc: "Once the fabric is cleared, we cut it using proper patterns and size charts. Stitching is monitored to maintain quality.",
  },
  {
    n: 4,
    title: "Trims & Branding",
    desc: "We apply all brand elements — neck labels, hang tags, wash care labels, and tapes. The goal is to deliver a retail-ready garment.",
  },
  {
    n: 5,
    title: "Quality Check",
    desc: "Quality control is built into every part of our process — from fabric inspection to stitching, branding, and final packing.",
  },
  {
    n: 6,
    title: "Final Packing & Dispatch",
    desc: "We pack per your instructions — polybags, sets, or branded packaging. Cartons are labelled and organized for shipping.",
  },
];

const productionSteps = [
  { n: 1, label: "Confirmation" },
  { n: 2, label: "Fabric Calculation" },
  { n: 3, label: "Yarn Procurement" },
  { n: 4, label: "Knitting" },
  { n: 5, label: "Dyeing" },
  { n: 6, label: "Washing" },
  { n: 7, label: "Cutting" },
  { n: 8, label: "PP Sample" },
  { n: 9, label: "Sewing" },
  { n: 10, label: "Quality Check" },
  { n: 11, label: "Dispatch" },
  { n: 12, label: "Door Delivery" },
];

const faqs = [
  {
    q: "1. What types of garments do you manufacture?",
    a: "We specialize in knitted apparel including T-shirts, polos, hoodies, sweatshirts, and activewear for men, women, and kids — customized to meet global quality standards.",
  },
  {
    q: "4. Which countries do you export to?",
    a: "We export to multiple regions including the USA, UK, Europe, and the Middle East, serving both emerging brands and established international labels.",
  },
  {
    q: "5. What is your lead time and minimum order quantity (MOQ)?",
    a: "Our typical lead time ranges from 45 to 60 days. The minimum order quantity (MOQ) is 1000 pieces per style, with flexibility for long-term partners.",
  },
  {
    q: "6. How can I get in touch with Tirupur Hub?",
    a: "You can reach us through our website contact form, email us at business@tirupurhub.in, or connect via WhatsApp or LinkedIn.",
  },
];

const galleryImgs = [
  {
    src: "https://tirupurhub.in/wp-content/uploads/2025/07/Untitled-design-43-1024x819.jpg",
    alt: "Exterior view of Tirupur Hub manufacturing facility",
  },
  {
    src: "https://tirupurhub.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-07-01-at-6.31.15-PM.jpeg",
    alt: "Worker preparing red fabric at manufacturing table",
  },
  {
    src: "https://tirupurhub.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-26-at-10.10.53-AM-2.jpeg",
    alt: "Workers handling fabric patterns on cutting table",
  },
  {
    src: "https://tirupurhub.in/wp-content/uploads/2025/10/IMG_0098-edited.jpg",
    alt: "Interior view of Tirupur Hub sewing facility with workers at machines",
  },
  {
    src: "https://tirupurhub.in/wp-content/uploads/2025/10/IMG-20200915-WA0019-e1609477279660.jpg",
    alt: "Workers ironing garments at Tirupur Hub facility",
  },
  {
    src: "https://tirupurhub.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-26-at-1.30.55-PM.jpeg",
    alt: "Quality inspection process at Tirupur Hub",
  },
];

const blogs = [
  {
    title:
      "3 Yarn Types That Define Cotton T-Shirt Manufacturing: A Guide for Buyers",
    date: "February 27, 2026",
    url: "https://tirupurhub.in/2026/02/27/3-yarn-types-that-define-cotton-t-shirt-manufacturing-a-guide-for-buyers/",
  },
  {
    title:
      "The Science Behind Export Garment Manufacturing: Process, Reports & Quality Controls",
    date: "February 14, 2026",
    url: "https://tirupurhub.in/2026/02/14/the-science-behind-export-garment-manufacturing-process-reports-quality-controls/",
  },
  {
    title:
      "9-Step Polo T-Shirt Checklist | Insights by a T-Shirt Manufacturer in Tirupur",
    date: "January 18, 2026",
    url: "https://tirupurhub.in/2026/01/18/9-step-polo-t-shirt-checklist-insights-by-a-t-shirt-manufacturer-in-tirupur/",
  },
  {
    title:
      "5 Changes in Basic T-Shirts Your Brand Needs in 2026 to Drive 8X Sales",
    date: "January 6, 2026",
    url: "https://tirupurhub.in/2026/01/06/5-changes-in-basic-t-shirts-your-brand-needs-in-2026-to-drive-8x-sales/",
  },
  {
    title: "How to Find the Right Garment Manufacturer and Save Lakhs",
    date: "December 30, 2025",
    url: "https://tirupurhub.in/2025/12/30/how-to-find-the-right-garment-manufacturer-and-save-lakhs/",
  },
  {
    title:
      "Where Should You Source Your Garments in 2026: India, Bangladesh, Vietnam or China?",
    date: "December 16, 2025",
    url: "https://tirupurhub.in/2025/12/16/where-should-you-source-your-garments-in-2026-india-bangladesh-vietnam-or-china-complete-guide/",
  },
];

// SVG ICONS
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4C3 20.418 3.582 21 4.3 21h15.4c.718 0 1.3-.582 1.3-1.3V4.3C21 3.582 20.418 3 19.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764h-2.669v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`faq-item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      role="button"
      aria-expanded={open}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
    >
      <div className="faq-q">
        <span>{q}</span>
        <span className="faq-icon" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </div>
      {open && <p className="faq-a">{a}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <a href="#main-content" className="skip-link sr-only">
        Skip to main content
      </a>

      {/* NAVBAR */}
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-left">
          <img
            src="https://i0.wp.com/tirupurhub.in/wp-content/uploads/2025/03/cropped-4-5.png?fit=512%2C512&ssl=1"
            alt="Tirupur Hub Private Limited logo"
            className="nav-logo"
            width="44"
            height="44"
          />
          <div className="nav-brand-text">
            <span className="nav-brand-title">TIRUPUR HUB</span>
            <span className="nav-brand-sub">
              KNITTED APPAREL MANUFACTURER & EXPORTER
            </span>
          </div>
        </div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#process">Process</a>
          <a href="#fabrics">Fabrics</a>
          <a href="#blog">Blog</a>
          <a href="#contact" className="nav-cta">
            Get a Quote
          </a>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <main id="main-content">
        {/* HERO */}
        <section className="hero" aria-label="Hero banner">
          <img
            className="hero-bg"
            src="https://tirupurhub.in/wp-content/uploads/2025/10/Untitled-1000-x-500-mm-1-1-1024x512.jpg"
            alt="Tirupur Hub knitting factory machinery"
            loading="eager"
            fetchpriority="high"
            width="1024"
            height="512"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-card">
              <h1>
                Trusted Apparel Manufacturer
                <br />
                in Tirupur, India
              </h1>
              <p>
                Your Reliable T-Shirt Manufacturing Partner in Tirupur, India.
                <br />
                Quality · Consistency · On-Time Global Delivery.
              </p>
              <p className="hero-email">✉ business@tirupurhub.in</p>

              {/* HERO SOCIAL ICONS */}
              <div className="hero-social">
                <a
                  href="https://www.linkedin.com/company/tirupur-hub-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Tirupur Hub on LinkedIn"
                  className="social-icon linkedin"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/tirupurhub.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Tirupur Hub on Instagram"
                  className="social-icon instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://wa.me/918421467154"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Tirupur Hub on WhatsApp"
                  className="social-icon whatsapp"
                >
                  <WhatsAppIcon />
                </a>
              </div>

              <div className="hero-btns">
                <a href="#contact" className="btn-primary">
                  Get a Quote
                </a>
                <a href="#process" className="btn-outline">
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-bar" aria-label="Company statistics">
          {[
            ["85+", "Employees"],
            ["7+", "Years Experience"],
            ["20+", "Renowned Brands"],
            ["1.5M+", "Monthly Capacity"],
          ].map(([v, l]) => (
            <div key={l} className="stat-item">
              <span className="stat-val" aria-label={`${v} ${l}`}>
                {v}
              </span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </section>

        {/* ABOUT */}
        <section className="section" id="about" aria-labelledby="about-heading">
          <div className="section-inner">
            <div className="about-grid">
              <div>
                <p className="eyebrow">Bulk Garment Manufacturing Solutions</p>
                <h2 id="about-heading">
                  Leading Knitted Garment
                  <br />
                  Manufacturer & Exporter
                </h2>
                <p className="body-text">
                  Tirupur Hub Pvt Ltd is a trusted garment manufacturing and
                  export partner from India, delivering high-quality knitted
                  garments to global markets across the USA, UK, Europe, and the
                  Middle East. We specialize in menswear & kids wear, crafted
                  with precision, consistency, and international compliance to
                  support brands and private labels worldwide.
                </p>
              </div>
              <div className="about-facility">
                <h2>Our Manufacturing Facility in Tirupur</h2>
                <p className="body-text">
                  Our Tirupur unit is a fully integrated garment manufacturing
                  facility equipped for cutting, stitching, and fabric sampling.
                  We handle end-to-end production with a focus on quality,
                  consistency, and timely delivery. With strong infrastructure
                  and 8+ years of industry experience, we deliver garments that
                  meet global standards.
                </p>
                <div className="facility-video">
                  <iframe
                    title="Tirupur Hub manufacturing facility video tour"
                    src="https://videopress.com/embed/V3DXhVVp?cover=1&preloadContent=metadata&hd=0"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    aria-label="Video tour of Tirupur Hub manufacturing facility"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          className="section bg-light"
          id="products"
          aria-labelledby="products-heading"
        >
          <div className="section-inner">
            <p className="eyebrow center">What We Make</p>
            <h2 className="center" id="products-heading">
              Our Product Range
            </h2>
            <div className="products-grid">
              {products.map((p) => (
                <div key={p.name} className="product-card">
                  <img
                    src={p.img}
                    alt={`${p.name} - ${p.sub}`}
                    loading="lazy"
                    width="80"
                    height="80"
                  />
                  <h3>{p.name}</h3>
                  <p>{p.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          className="section"
          id="process"
          aria-labelledby="process-heading"
        >
          <div className="section-inner">
            <p className="eyebrow center">How It Works</p>
            <h2 className="center" id="process-heading">
              Our 6-Step Manufacturing Process
            </h2>
            <div className="process-grid">
              {steps.map((s) => (
                <div key={s.n} className="process-card">
                  <div className="process-num" aria-label={`Step ${s.n}`}>
                    {s.n}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTION PIPELINE */}
        <section
          className="section bg-light"
          aria-labelledby="pipeline-heading"
        >
          <div className="section-inner">
            <p className="eyebrow center">From Concept to Delivery</p>
            <h2 className="center" id="pipeline-heading">
              From Apparel Concept to Bulk Production
            </h2>
            <div className="pipeline-grid">
              {productionSteps.map((s) => (
                <div key={s.n} className="pipeline-step">
                  <div className="pipeline-num" aria-label={`Step ${s.n}`}>
                    {s.n}
                  </div>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FABRICS */}
        <section
          className="section"
          id="fabrics"
          aria-labelledby="fabrics-heading"
        >
          <div className="section-inner">
            <p className="eyebrow center">Materials</p>
            <h2 className="center" id="fabrics-heading">
              Knitted Fabrics We Work With
            </h2>
            <div className="fabrics-grid">
              {fabrics.map((f) => (
                <a
                  key={f.name}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fabric-card"
                  aria-label={`Learn more about ${f.name}`}
                >
                  <img
                    src={f.img}
                    alt={`${f.name} fabric texture`}
                    loading="lazy"
                  />
                  <div className="fabric-overlay" aria-hidden="true">
                    <span>{f.name}</span>
                    <span className="fabric-link">Know More →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* T-SHIRT FOCUS */}
        <section className="section bg-light" aria-labelledby="tshirt-heading">
          <div className="section-inner">
            <div className="tshirt-grid">
              <div className="tshirt-text">
                <h2 id="tshirt-heading">
                  Volume T-Shirt Manufacturing in Tirupur
                </h2>
                <p className="body-text">
                  As a trusted t-shirt manufacturer in Tirupur, we focus on
                  building systems, not just products. Our process starts with
                  careful yarn selection and fabric engineering — ensuring the
                  right balance of softness, strength, and structure. Each batch
                  is tested for GSM stability, shrinkage, and color performance.
                </p>
                <p className="body-text">
                  Stitching follows standardized workflows guided by trained
                  quality teams. Measurements, seam strength, and finishing are
                  checked at multiple stages. Washing and finishing processes
                  are controlled to improve hand feel and protect long-term
                  shape and color.
                </p>
              </div>
              <div className="tshirt-img">
                <img
                  src="https://tirupurhub.in/wp-content/uploads/2025/10/00ef45337f50f3022abd104644a250f8.jpg"
                  alt="Close-up of a man wearing a quality polo shirt manufactured at Tirupur Hub"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section" aria-labelledby="gallery-heading">
          <div className="section-inner">
            <p className="eyebrow center">Inside Our Factory</p>
            <h2 className="center" id="gallery-heading">
              Our Manufacturing Facility
            </h2>
            <div className="gallery-grid">
              {galleryImgs.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        {/* ANIMAL WELFARE */}
        <section className="section bg-light" aria-labelledby="welfare-heading">
          <div className="section-inner">
            <div className="welfare-grid">
              <div>
                <p className="eyebrow">Our Values</p>
                <h2 id="welfare-heading">
                  Tirupur Hub's Animal Welfare Initiative
                </h2>
                <p className="body-text">
                  At our manufacturing unit in Tirupur, responsibility extends
                  far beyond production targets and shipment schedules. We
                  believe a truly strong business creates value not only for
                  brands and buyers, but also for the lives that exist around
                  it.
                </p>
                <p className="body-text">
                  Through partnerships with{" "}
                  <strong>Thangam Memorial Trust</strong>, we contribute
                  resources and time to ensure consistent support where it is
                  needed most. We actively support local initiatives that
                  provide food, medical assistance, and safe shelter for stray
                  and injured animals.
                </p>
              </div>
              <div className="welfare-img">
                <img
                  src="https://tirupurhub.in/wp-content/uploads/2025/10/WhatsApp-Image-2019-05-10-at-5.19.37-PM-2.webp"
                  alt="Cats rescued and cared for through Tirupur Hub's animal welfare initiative with Thangam Memorial Trust"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="faq-heading">
          <div className="section-inner">
            <div className="faq-layout">
              <div className="faq-left">
                <p className="eyebrow">More About Us</p>
                <h2 id="faq-heading">Frequently Asked Questions</h2>
              </div>
              <div className="faq-right">
                {faqs.map((f) => (
                  <FAQ key={f.q} {...f} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section
          className="section bg-light"
          id="blog"
          aria-labelledby="blog-heading"
        >
          <div className="section-inner">
            <h2 id="blog-heading">
              Latest Insights & Textile Industry Updates
            </h2>
            <div className="blog-list">
              {blogs.map((b) => (
                <a
                  key={b.url}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-row"
                  aria-label={`Read article: ${b.title}, published ${b.date}`}
                >
                  <span className="blog-title">{b.title}</span>
                  <span className="blog-date" aria-hidden="true">
                    {b.date}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="section contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="section-inner">
            <h2 id="contact-heading">Get in Touch</h2>
            <p className="center body-text">
              Ready to manufacture? Let's talk.
            </p>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-block">
                  <h3>Pune Head Office</h3>
                  <p>
                    Amey Apartment Basement Godown
                    <br />
                    B-1CTS No 212, Shaniwar Peth,
                    <br />
                    Pune Maharashtra 411030
                  </p>
                  <p>
                    <a href="tel:918421467154">+91 84214 67154</a>
                  </p>
                </div>
                <div className="contact-block">
                  <h3>Tirupur Manufacturing Unit</h3>
                  <p>
                    Murugampalayam, Tiruppur,
                    <br />
                    Tamil Nadu 641605
                  </p>
                  <p>
                    <a href="tel:919923110525">+91 99231 10525</a>
                  </p>
                </div>
                <div className="contact-block">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:business@tirupurhub.in">
                      business@tirupurhub.in
                    </a>
                  </p>
                </div>
              </div>
              <form className="contact-form" aria-label="Contact enquiry form">
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  aria-required="true"
                />
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  aria-required="true"
                />
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone (WhatsApp preferred)"
                />
                <label htmlFor="company" className="sr-only">
                  Company Name
                </label>
                <input id="company" type="text" placeholder="Company Name" />
                <label htmlFor="looking-for" className="sr-only">
                  What are you looking for?
                </label>
                <select id="looking-for" aria-label="What are you looking for?">
                  <option value="">Are you looking for?</option>
                  <option value="custom">Custom Manufacturing</option>
                  <option value="wholesale">Wholesale Blanks</option>
                  <option value="both">Both</option>
                </select>
                <label htmlFor="message" className="sr-only">
                  Your requirement
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us about your requirement — product, quantity, timeline..."
                />
                <button type="submit" className="btn-primary full">
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-col">
            <img
              src="https://i0.wp.com/tirupurhub.in/wp-content/uploads/2025/03/cropped-4-5.png?fit=512%2C512&ssl=1"
              alt="Tirupur Hub Private Limited logo"
              className="footer-logo"
              width="48"
              height="48"
            />
            <p className="footer-brand">Tirupur Hub Private Limited</p>
            <p>
              Questions? Chat with our team on WhatsApp for product details,
              quotations, or quick support.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/tirupurhub.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tirupur Hub on Instagram"
                className="social-icon instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/tirupur-hub-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Tirupur Hub on LinkedIn"
                className="social-icon linkedin"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://wa.me/918421467154"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Tirupur Hub on WhatsApp"
                className="social-icon whatsapp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>
              <strong>Pune Head Office</strong>
              <br />
              Amey Apartment Basement Godown
              <br />
              B-1CTS No 212, Shaniwar Peth, Pune 411030
              <br />
              <a href="tel:918421467154">+91 84214 67154</a>
            </p>
            <p>
              <strong>Tirupur Manufacturing Unit</strong>
              <br />
              Murugampalayam, Tiruppur, TN 641605
              <br />
              <a href="tel:919923110525">+91 99231 10525</a>
            </p>
          </div>
          <div className="footer-col">
            <h3>Menu</h3>
            <nav aria-label="Footer navigation">
              <a
                href="https://tirupurhub.in/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
              <a
                href="https://tirupurhub.in/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
              <a
                href="https://tirupurhub.in/blank-t-shirts-ready-stock/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blank T-Shirts
              </a>
              <a
                href="https://tirupurhub.in/blogs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blogs
              </a>
              <a
                href="https://tirupurhub.in/faqs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FAQ's
              </a>
              <a
                href="https://tirupurhub.in/sustainability-at-our-garment-manufacturing-facility-in-india/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sustainability
              </a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 Tirupur Hub Private Limited · Murugampalayam, Tirupur, Tamil
          Nadu · business@tirupurhub.in
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/918421467154?text=I%20am%20interested%20in%20your%20manufacturing%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
