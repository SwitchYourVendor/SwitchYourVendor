import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const C = { red: "#dc2626", redDark: "#b91c1c", dark: "#0f172a", mid: "#334155", muted: "#64748b", border: "#e2e8f0", bg: "#f8fafc", white: "#ffffff" };

const TEAM = [
  { name: "Arjun Mehta", role: "Founder & CEO", avatar: "AM", color: "#dc2626", bio: "15 years in B2B operations. Previously at McKinsey and Deloitte India." },
  { name: "Priya Nair", role: "Head of Compliance", avatar: "PN", color: "#6366f1", bio: "Chartered Accountant with 12 years. Expert in GST, MCA and corporate tax." },
  { name: "Rohit Singh", role: "Head of Supply Chain", avatar: "RS", color: "#10b981", bio: "Ex-Amazon logistics. Built vendor networks across 22 Indian states." },
  { name: "Kavya Sharma", role: "Chief Technology Officer", avatar: "KS", color: "#f59e0b", bio: "IIT Bombay alumnus. Built SYV's platform from the ground up." },
];

const MILESTONES = [
  { year: "2018", title: "Founded in Mumbai", desc: "Started with 3 compliance services and 12 clients." },
  { year: "2019", title: "100 Clients Milestone", desc: "Expanded to office and pantry supplies division." },
  { year: "2021", title: "Pan-India Operations", desc: "Launched in 10 cities. Added fresh fruits and canteen services." },
  { year: "2023", title: "Series A Funded", desc: "Raised ₹12Cr to scale technology and onboarding speed." },
  { year: "2024", title: "500+ Happy Clients", desc: "Managing ₹200Cr+ in books across India." },
];

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease` }}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "'Nunito',system-ui,sans-serif", color: C.dark, background: C.white }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap'); *{box-sizing:border-box;margin:0;padding:0} @keyframes fadeSlideIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}} @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.border}`, boxShadow: "0 1px 20px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "#fff1f1", border: "1.5px solid #fecaca", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.red} strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            </div>
            <div>
              <p style={{ fontWeight: 900, fontSize: 15, color: C.dark, lineHeight: 1 }}>SwitchYourVendor</p>
              <p style={{ fontSize: 10, color: C.muted, fontWeight: 600, marginTop: 2 }}>← Back to Home</p>
            </div>
          </button>
          <div style={{ background: "#fff1f1", border: "1px solid #fecaca", borderRadius: 999, padding: "6px 16px" }}>
            <span style={{ fontWeight: 700, fontSize: 13, color: C.red }}>About Us</span>
          </div>
          <button onClick={() => navigate("/")} style={{ background: `linear-gradient(135deg,${C.red},${C.redDark})`, color: C.white, fontWeight: 800, fontSize: 14, padding: "9px 22px", borderRadius: 12, border: "none", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 16px rgba(220,38,38,0.35)" }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: "linear-gradient(135deg,#fff5f5 0%,#ffffff 50%,#f0f9ff 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "-5%", width: 500, height: 500, borderRadius: "50%", border: "1.5px solid rgba(220,38,38,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", right: "2%", width: 320, height: 320, borderRadius: "50%", border: "1.5px solid rgba(220,38,38,0.07)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff1f1", border: "1px solid #fecaca", borderRadius: 999, padding: "6px 18px", marginBottom: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.red }}>Our Story · Est. 2018 · Mumbai</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 60, fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 20 }}>
            We Exist to Help<br />
            <span style={{ background: `linear-gradient(135deg,${C.red},#f43f5e)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Indian SMEs Thrive</span>
          </h1>
          <p style={{ color: C.muted, fontSize: 18, lineHeight: 1.75, maxWidth: 580, margin: "0 auto 40px" }}>
            We saw thousands of small businesses drowning in vendor chaos — multiple contacts, missed deadlines, broken trust. SwitchYourVendor was built to fix that.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 40 }}>
            {[["500+", "Clients"], ["₹200Cr+", "Books Managed"], ["10+", "Services"], ["6", "Years"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 900, color: C.red }}>{n}</p>
                <p style={{ fontSize: 12, color: C.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: "80px 0", background: C.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <Reveal>
            <span style={{ color: C.red, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Mission</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 900, marginTop: 10, marginBottom: 16, lineHeight: 1.15 }}>One Partner. Zero Chaos.</h2>
            <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Indian SMEs spend 30% of their time managing vendors instead of building their business. We consolidated compliance, supply, and support into a single reliable relationship.
            </p>
            <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.8 }}>
              Our model is simple: one account manager, one invoice, one call to resolve anything. That's how we've maintained a 4.9★ rating across 500+ clients.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["🎯", "Client-First", "Every decision is measured by one metric: does it make the client's life easier?"], ["🔒", "Trust & Security", "NDA-backed, audit-ready, and SOC 2 compliant across all our data handling."], ["⚡", "Speed Obsessed", "5-day onboarding, 24h quote turnaround, same-day supply dispatch."], ["🌱", "Built for Growth", "Services that scale with you from 5 to 500 employees without changing partners."]].map(([icon, title, desc]) => (
                <div key={title} style={{ background: C.bg, borderRadius: 20, padding: 24, border: `1.5px solid ${C.border}` }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
                  <h4 style={{ fontWeight: 800, fontSize: 14, marginBottom: 6 }}>{title}</h4>
                  <p style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "80px 0", background: `linear-gradient(160deg,${C.dark},#1e1b4b)` }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "#f87171", fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Journey</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 900, color: C.white, marginTop: 10 }}>From Idea to Impact</h2>
            </div>
          </Reveal>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom,#dc262640,#dc2626,#dc262640)", transform: "translateX(-50%)" }} />
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 40, flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>
                  <div style={{ flex: 1, textAlign: i % 2 === 0 ? "right" : "left", padding: i % 2 === 0 ? "0 36px 0 0" : "0 0 0 36px" }}>
                    <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "20px 24px", display: "inline-block", textAlign: "left", maxWidth: 300 }}>
                      <p style={{ color: C.red, fontWeight: 800, fontSize: 13, marginBottom: 6 }}>{m.year}</p>
                      <h4 style={{ color: C.white, fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{m.title}</h4>
                      <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6 }}>{m.desc}</p>
                    </div>
                  </div>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg,${C.red},${C.redDark})`, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 900, fontSize: 11, flexShrink: 0, boxShadow: "0 0 0 6px rgba(220,38,38,0.15)", zIndex: 1 }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "80px 0 96px", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={{ color: C.red, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>The People</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 900, marginTop: 10 }}>Meet Our Leadership</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div style={{ background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 24, padding: 28, textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: `linear-gradient(135deg,${t.color},${t.color}cc)`, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 900, fontSize: 20, margin: "0 auto 16px", boxShadow: `0 8px 24px ${t.color}35` }}>{t.avatar}</div>
                  <h3 style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{t.name}</h3>
                  <p style={{ color: t.color, fontWeight: 700, fontSize: 12, marginBottom: 10 }}>{t.role}</p>
                  <p style={{ color: C.muted, fontSize: 12.5, lineHeight: 1.65 }}>{t.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer style={{ background: C.dark, padding: "24px 0", textAlign: "center" }}>
        <button onClick={() => navigate("/")} style={{ color: "#dc2626", fontSize: 13, fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>← Back to SwitchYourVendor</button>
      </footer>
    </div>
  );
}