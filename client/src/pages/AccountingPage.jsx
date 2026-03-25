import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

/* ── palette ── */
const C = {
  accent: "#6366f1",
  accentDark: "#4f46e5",
  accentLight: "#eef2ff",
  accentMid: "#818cf8",
  red: "#dc2626",
  dark: "#0f172a",
  mid: "#334155",
  muted: "#64748b",
  border: "#e2e8f0",
  bg: "#f8fafc",
  white: "#ffffff",
};

/* ── data ── */
const SERVICES = [
  {
    icon: "📒",
    title: "Monthly Bookkeeping",
    desc: "Complete recording of every transaction — income, expenses, bank reconciliations — delivered as clean, audit-ready ledgers each month.",
    stat: "99.8%", statLabel: "Accuracy Rate",
  },
  {
    icon: "📊",
    title: "Financial Statements",
    desc: "GAAP-compliant P&L, balance sheet, and cash-flow statements prepared monthly so you always know exactly where your business stands.",
    stat: "48h", statLabel: "Turnaround",
  },
  {
    icon: "👥",
    title: "Payroll Processing",
    desc: "End-to-end payroll management: salary calculation, TDS deductions, payslip generation, and PF/ESI filings — never miss a deadline.",
    stat: "100%", statLabel: "On-Time Filing",
  },
  {
    icon: "📈",
    title: "Budget Planning",
    desc: "Annual budget creation with rolling monthly forecasts, variance analysis, and actionable CFO-level insights tailored to your growth targets.",
    stat: "30%", statLabel: "Cost Optimised",
  },
  {
    icon: "🧾",
    title: "Accounts Payable & Receivable",
    desc: "We manage your vendor payments and client collections — reducing DSO, avoiding late fees, and keeping cash flow healthy.",
    stat: "2x", statLabel: "Faster Collections",
  },
  {
    icon: "🔍",
    title: "Internal Audit Support",
    desc: "Pre-audit preparation, document organisation, gap analysis, and accompaniment during statutory or internal audit engagements.",
    stat: "0", statLabel: "Penalty Instances",
  },
];

const PROCESS = [
  { n: "01", title: "Discovery Call", desc: "We learn your business structure, current pain points, and accounting software stack in a free 30-min session.", icon: "📞" },
  { n: "02", title: "Data Migration", desc: "Our team imports historical data, cleans it, and sets up your chart of accounts — zero disruption to operations.", icon: "🔄" },
  { n: "03", title: "Monthly Cycle", desc: "Books closed by the 5th of every month. Reports shared with your preferred dashboard on the 7th.", icon: "📅" },
  { n: "04", title: "Review & Insights", desc: "Monthly video call with your dedicated CA to walk through numbers and answer questions in plain language.", icon: "💡" },
];

const FAQS = [
  { q: "Which accounting software do you support?", a: "We work with Tally, Zoho Books, QuickBooks, Busy, and any custom ERP. We can also migrate you to a better tool if needed." },
  { q: "Is my financial data secure?", a: "All data is stored in encrypted, SOC 2-compliant cloud infrastructure with role-based access and full audit logs. We sign a strict NDA before onboarding." },
  { q: "Can I switch from my current CA or accountant?", a: "Absolutely. We handle the full transition — fetching past filings, migrating records, and briefing our team — typically within 5 business days." },
  { q: "What does monthly bookkeeping cost?", a: "Plans start at ₹4,999/month for startups. Mid-market pricing is custom based on transaction volume. Contact us for a tailored quote in 24 hours." },
  { q: "Do I need to be in Mumbai to work with you?", a: "No — we serve clients across all of India, fully remotely. All document exchange happens via a secure client portal." },
];

const STATS = [
  { value: "500+", label: "Clients Served" },
  { value: "₹200Cr+", label: "Books Managed" },
  { value: "12+", label: "Years Experience" },
  { value: "4.9★", label: "Client Rating" },
];

/* ── hook: animate number in ── */
function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

/* ── Animated section wrapper ── */
function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── FAQ accordion item ── */
function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.07}>
      <div
        style={{
          borderRadius: 16,
          border: `1.5px solid ${open ? C.accent + "55" : C.border}`,
          overflow: "hidden",
          background: open ? C.accentLight : C.white,
          transition: "all 0.3s ease",
          marginBottom: 12,
        }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            textAlign: "left",
            gap: 16,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 15, color: open ? C.accent : C.dark, flex: 1 }}>{q}</span>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: open ? C.accent : C.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.3s",
              transform: open ? "rotate(45deg)" : "none",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open ? "#fff" : C.muted} strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </button>
        {open && (
          <div style={{ padding: "0 24px 20px", animation: "fadeSlideIn 0.3s ease" }}>
            <p style={{ fontSize: 14.5, color: C.mid, lineHeight: 1.75 }}>{a}</p>
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ── Service card ── */
function ServiceCard({ icon, title, desc, stat, statLabel, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? `linear-gradient(145deg,${C.accent},${C.accentDark})` : C.white,
          border: `1.5px solid ${hovered ? "transparent" : C.border}`,
          borderRadius: 24,
          padding: "28px 28px 24px",
          transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: hovered ? `0 24px 60px ${C.accent}33` : "0 2px 12px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-6px)" : "none",
          cursor: "default",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: hovered ? "rgba(255,255,255,0.15)" : C.accentLight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            {icon}
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: hovered ? C.white : C.accent }}>{stat}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: hovered ? "rgba(255,255,255,0.6)" : C.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>{statLabel}</div>
          </div>
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: hovered ? C.white : C.dark }}>{title}</h3>
        <p style={{ fontSize: 13.5, color: hovered ? "rgba(255,255,255,0.8)" : C.muted, lineHeight: 1.7, flex: 1 }}>{desc}</p>
      </div>
    </Reveal>
  );
}

/* ── Main page ── */
export default function AccountingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", size: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Nunito', system-ui, sans-serif", background: C.white, color: C.dark, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        input:focus, select:focus, textarea:focus { border-color: ${C.accent} !important; outline: none; background: white !important; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.accent}66; border-radius: 99px; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${C.border}`,
        boxShadow: "0 1px 24px rgba(0,0,0,0.06)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Back to home */}
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "none", border: "none", cursor: "pointer", fontFamily: "inherit",
            }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 10, background: C.accentLight, border: `1.5px solid ${C.accent}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            </div>
            <div>
              <p style={{ fontWeight: 900, fontSize: 15, color: C.dark, lineHeight: 1 }}>SwitchYourVendor</p>
              <p style={{ fontSize: 10, color: C.muted, fontWeight: 600, marginTop: 2 }}>← Back to Home</p>
            </div>
          </button>

          {/* Service badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: C.accentLight, border: `1px solid ${C.accent}33`, borderRadius: 999, padding: "6px 16px" }}>
            <span style={{ fontSize: 16 }}>🧮</span>
            <span style={{ fontWeight: 700, fontSize: 13, color: C.accent }}>Accounting Services</span>
          </div>

          <button
            onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: `linear-gradient(135deg,${C.accent},${C.accentDark})`,
              color: C.white, fontWeight: 800, fontSize: 14,
              padding: "9px 22px", borderRadius: 12, border: "none", cursor: "pointer",
              boxShadow: `0 4px 16px ${C.accent}44`, fontFamily: "inherit",
            }}
          >
            Get a Free Quote
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden",
        background: `linear-gradient(135deg, ${C.accentLight} 0%, ${C.white} 50%, #f0f9ff 100%)`,
      }}>
        {/* Decorative rings */}
        {[320, 500, 680].map((size, i) => (
          <div key={i} style={{
            position: "absolute", top: "50%", right: -size / 3,
            width: size, height: size, borderRadius: "50%",
            border: `1.5px solid ${C.accent}${i === 0 ? "25" : i === 1 ? "15" : "08"}`,
            transform: "translateY(-50%)", pointerEvents: "none",
          }} />
        ))}
        {/* Floating emoji */}
        <div style={{ position: "absolute", top: 140, right: "12%", fontSize: 60, animation: "float 4s ease-in-out infinite", pointerEvents: "none" }}>🧮</div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <span style={{ fontSize: 12, color: C.muted, fontWeight: 600, cursor: "pointer" }} onClick={() => navigate("/")}>Home</span>
              <span style={{ color: C.border }}>›</span>
              <span style={{ fontSize: 12, color: C.muted, fontWeight: 600, cursor: "pointer" }} onClick={() => navigate("/")}>Services</span>
              <span style={{ color: C.border }}>›</span>
              <span style={{ fontSize: 12, color: C.accent, fontWeight: 700 }}>Accounting</span>
            </div>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.accentLight, border: `1px solid ${C.accent}33`, borderRadius: 999, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", animation: "pulse 2s infinite", display: "inline-block" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: C.accent }}>Certified CAs · Pan-India · Fully Remote</span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 20, color: C.dark }}>
              Smart Accounting<br />
              <span style={{ background: `linear-gradient(135deg,${C.accent},${C.accentMid})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                for Modern Businesses
              </span>
            </h1>

            <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75, marginBottom: 32, maxWidth: 440 }}>
              From daily bookkeeping to CFO-level financial reporting — our certified accountants become your finance department, at a fraction of the cost.
            </p>

            <div style={{ display: "flex", gap: 14, marginBottom: 40 }}>
              <button
                onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  background: `linear-gradient(135deg,${C.accent},${C.accentDark})`,
                  color: C.white, fontWeight: 800, fontSize: 15, padding: "14px 28px",
                  borderRadius: 16, border: "none", cursor: "pointer",
                  boxShadow: `0 12px 40px ${C.accent}40`, fontFamily: "inherit",
                }}
              >
                Start Free Consultation →
              </button>
              <button
                style={{
                  border: `2px solid ${C.border}`, color: C.mid, fontWeight: 800, fontSize: 15,
                  padding: "14px 28px", borderRadius: 16, cursor: "pointer", background: C.white, fontFamily: "inherit",
                }}
              >
                Download Brochure
              </button>
            </div>

            {/* Trust strip */}
            <div style={{ display: "flex", gap: 28 }}>
              {[["🔒", "NDA Signed"], ["✅", "ICAI Certified"], ["⚡", "5-Day Onboarding"]].map(([icon, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: C.mid }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                background: i % 2 === 0 ? `linear-gradient(145deg,${C.accent},${C.accentDark})` : C.white,
                border: `1.5px solid ${i % 2 === 0 ? "transparent" : C.border}`,
                borderRadius: 24, padding: "32px 24px",
                boxShadow: i % 2 === 0 ? `0 16px 48px ${C.accent}35` : "0 4px 20px rgba(0,0,0,0.05)",
                animation: `float ${3.5 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 900, color: i % 2 === 0 ? C.white : C.accent, marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: i % 2 === 0 ? "rgba(255,255,255,0.7)" : C.muted, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "96px 0", background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: C.accent, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Everything Included</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 900, marginTop: 10, marginBottom: 12 }}>
                What We Take Care Of
              </h2>
              <p style={{ color: C.muted, fontSize: 17, maxWidth: 520, margin: "0 auto" }}>Six core pillars, handled end-to-end by our team so you can focus on growth.</p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "96px 0", background: `linear-gradient(160deg,${C.dark} 0%,#1e1b4b 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle,${C.accent}12,transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{ color: C.accentMid, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Process</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 900, color: C.white, marginTop: 10, marginBottom: 12 }}>
                How It Works
              </h2>
              <p style={{ color: "#64748b", fontSize: 17 }}>From first call to monthly reports — a seamless 4-step journey.</p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
            {/* Connector */}
            <div style={{ position: "absolute", top: 44, left: "12.5%", right: "12.5%", height: 2, background: `linear-gradient(to right,${C.accent}50,${C.accentMid}50)`, zIndex: 0 }} />

            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
                  <div style={{
                    width: 88, height: 88, borderRadius: "50%",
                    background: `linear-gradient(135deg,${C.accent},${C.accentDark})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 34, marginBottom: 20,
                    boxShadow: `0 0 0 8px ${C.accent}18, 0 12px 40px ${C.accent}40`,
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: C.accentMid, letterSpacing: "0.15em", marginBottom: 8 }}>STEP {step.n}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: C.white, marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TABS ── */}
      <section style={{ padding: "96px 0", background: C.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ color: C.accent, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Transparent Pricing</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 900, marginTop: 10, marginBottom: 12 }}>Simple, Honest Plans</h2>
              <p style={{ color: C.muted, fontSize: 17 }}>No surprises. Cancel anytime.</p>
            </div>
          </Reveal>

          {/* Tab selector */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
            <div style={{ display: "inline-flex", background: C.bg, border: `1.5px solid ${C.border}`, borderRadius: 999, padding: 4, gap: 4 }}>
              {["Starter", "Growth", "Enterprise"].map((t, i) => (
                <button key={t} onClick={() => setActiveTab(i)} style={{
                  padding: "10px 24px", borderRadius: 999, border: "none", cursor: "pointer",
                  fontFamily: "inherit", fontWeight: 800, fontSize: 14,
                  background: activeTab === i ? `linear-gradient(135deg,${C.accent},${C.accentDark})` : "transparent",
                  color: activeTab === i ? C.white : C.muted,
                  boxShadow: activeTab === i ? `0 4px 16px ${C.accent}40` : "none",
                  transition: "all 0.3s",
                }}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Plan cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} key={activeTab}>
            {[
              {
                name: ["Startup", "SME", "Corporate"][activeTab],
                price: ["₹4,999", "₹12,999", "Custom"][activeTab],
                period: "/month",
                highlight: activeTab === 1,
                features: [
                  ["Bookkeeping (up to 200 txns)", "Monthly P&L & Balance Sheet", "Annual ITR filing", "Email support", "1 bank account reconciliation"],
                  ["Everything in Starter", "Bookkeeping (up to 1000 txns)", "Payroll (up to 25 employees)", "Quarterly MIS reports", "Dedicated CA manager", "Priority support"],
                  ["Everything in Growth", "Unlimited transactions", "Multi-entity accounting", "Board-ready financial packs", "CFO advisory sessions", "White-glove onboarding"],
                ][activeTab],
              },
            ].map((plan) => (
              <Reveal key={plan.name} style={{ gridColumn: "1 / -1" }}>
                <div style={{
                  background: plan.highlight ? `linear-gradient(145deg,${C.accent},${C.accentDark})` : C.bg,
                  border: `1.5px solid ${plan.highlight ? "transparent" : C.border}`,
                  borderRadius: 28, padding: 40,
                  boxShadow: plan.highlight ? `0 24px 64px ${C.accent}35` : "none",
                  display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center",
                }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: plan.highlight ? "rgba(255,255,255,0.6)" : C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>{plan.name} Plan</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 900, color: plan.highlight ? C.white : C.accent }}>{plan.price}</span>
                      <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.5)" : C.muted, fontWeight: 600 }}>{plan.period}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
                      {plan.features.map((f) => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 20, height: 20, borderRadius: "50%", background: plan.highlight ? "rgba(255,255,255,0.2)" : C.accentLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={plan.highlight ? C.white : C.accent} strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                          </div>
                          <span style={{ fontSize: 13.5, color: plan.highlight ? "rgba(255,255,255,0.85)" : C.mid }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center", minWidth: 160 }}>
                    <button
                      onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
                      style={{
                        width: "100%", padding: "14px 0", borderRadius: 16,
                        background: plan.highlight ? C.white : `linear-gradient(135deg,${C.accent},${C.accentDark})`,
                        color: plan.highlight ? C.accent : C.white,
                        fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer",
                        boxShadow: plan.highlight ? "0 8px 24px rgba(255,255,255,0.3)" : `0 8px 24px ${C.accent}40`,
                        fontFamily: "inherit",
                      }}
                    >
                      Get Started →
                    </button>
                    <p style={{ fontSize: 11, color: plan.highlight ? "rgba(255,255,255,0.5)" : C.muted, textAlign: "center" }}>No lock-in. Cancel anytime.</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "80px 0 96px", background: C.bg }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ color: C.accent, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 900, marginTop: 10, marginBottom: 12 }}>
                Frequently Asked
              </h2>
            </div>
          </Reveal>
          {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section ref={contactRef} style={{ padding: "96px 0", background: `linear-gradient(135deg,${C.accentLight},${C.white})` }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ color: C.accent, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Free Consultation</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 900, marginTop: 10, marginBottom: 12 }}>
                Let's Fix Your Books
              </h2>
              <p style={{ color: C.muted, fontSize: 17 }}>Tell us about your business. We'll come back with a tailored plan in 24 hours.</p>
            </div>
          </Reveal>

          {submitted ? (
            <Reveal>
              <div style={{ textAlign: "center", padding: "60px 32px", background: C.white, borderRadius: 28, border: `1.5px solid ${C.accent}33`, boxShadow: `0 20px 60px ${C.accent}15` }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: C.dark, marginBottom: 10 }}>We've Got Your Request!</h3>
                <p style={{ color: C.muted, marginBottom: 28, fontSize: 16 }}>Expect a call from our accounting team within 24 hours.</p>
                <button
                  onClick={() => navigate("/")}
                  style={{ background: `linear-gradient(135deg,${C.accent},${C.accentDark})`, color: C.white, fontWeight: 800, padding: "13px 28px", borderRadius: 14, border: "none", cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}
                >
                  ← Back to Home
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div style={{ background: C.white, borderRadius: 28, border: `1.5px solid ${C.border}`, padding: 40, boxShadow: "0 20px 60px rgba(0,0,0,0.07)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                  {[
                    ["Full Name", "name", "Rajesh Kumar", "text"],
                    ["Email Address", "email", "rajesh@company.com", "email"],
                    ["Phone Number", "phone", "+91 98765 43210", "tel"],
                    ["Company Name", "company", "Your Company", "text"],
                  ].map(([label, key, placeholder, type]) => (
                    <div key={key}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>
                        {label} {["name","email","phone"].includes(key) && <span style={{ color: C.red }}>*</span>}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={formData[key]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        style={{ width: "100%", border: `1.5px solid ${C.border}`, borderRadius: 12, padding: "11px 14px", fontSize: 14, background: C.bg, fontFamily: "inherit" }}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 18 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>Company Size</label>
                  <select
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    style={{ width: "100%", border: `1.5px solid ${C.border}`, borderRadius: 12, padding: "11px 14px", fontSize: 14, background: C.bg, fontFamily: "inherit", appearance: "none" }}
                  >
                    <option value="">Select…</option>
                    {["1–10 employees", "11–50 employees", "51–200 employees", "200+ employees"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <div style={{ marginTop: 18 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>Specific Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current accounting challenges, software, transaction volume…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: "100%", border: `1.5px solid ${C.border}`, borderRadius: 12, padding: "11px 14px", fontSize: 14, background: C.bg, fontFamily: "inherit", resize: "none" }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    marginTop: 24, width: "100%", padding: "15px 0", borderRadius: 16,
                    background: `linear-gradient(135deg,${C.accent},${C.accentDark})`,
                    color: C.white, fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer",
                    boxShadow: `0 12px 40px ${C.accent}40`, fontFamily: "inherit",
                  }}
                >
                  Request Free Consultation →
                </button>
                <p style={{ textAlign: "center", color: C.muted, fontSize: 12, marginTop: 14 }}>
                  🔒 Your data is secure. We sign an NDA before starting.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.dark, padding: "32px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, background: `linear-gradient(135deg,${C.accent},${C.accentDark})`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: C.white, fontWeight: 900, fontSize: 16 }}>S</span>
            </div>
            <span style={{ color: "#475569", fontSize: 13, fontWeight: 600 }}>© 2024 SwitchYourVendor · Accounting Services</span>
          </div>
          <button
            onClick={() => navigate("/")}
            style={{ color: C.accentMid, fontSize: 13, fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to all services
          </button>
        </div>
      </footer>
    </div>
  );
}