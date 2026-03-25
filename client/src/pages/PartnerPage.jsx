import { useState } from "react";
import { useNavigate } from "react-router-dom";

const C = { red: "#dc2626", redDark: "#b91c1c", dark: "#0f172a", mid: "#334155", muted: "#64748b", border: "#e2e8f0", bg: "#f8fafc", white: "#ffffff" };
const IS = { width: "100%", border: `1.5px solid ${C.border}`, borderRadius: 12, padding: "11px 14px", fontSize: 14, outline: "none", background: C.bg, boxSizing: "border-box", fontFamily: "inherit" };

const BENEFITS = [
  { icon: "💼", title: "Exclusive Lead Access", desc: "Get referred to verified SME clients actively looking for your services. Average partner receives 8–12 qualified leads/month." },
  { icon: "💰", title: "Revenue Share Model", desc: "Earn 10–20% referral commission on every client you bring to SYV. Transparent monthly payouts." },
  { icon: "🛡️", title: "Co-Branded Marketing", desc: "Feature on our platform, joint social campaigns, and inclusion in our partner directory seen by 500+ businesses." },
  { icon: "📊", title: "Partner Dashboard", desc: "Real-time analytics on referral status, earnings, and client activity — all in one portal." },
  { icon: "🤝", title: "Dedicated Partner Manager", desc: "Your own account manager to help you onboard clients, resolve issues, and maximise your partnership." },
  { icon: "🚀", title: "Fast Onboarding", desc: "Partner agreement signed and portal access granted within 48 hours of application approval." },
];

const PARTNER_TYPES = [
  { icon: "🧮", label: "CA / Tax Consultant" },
  { icon: "⚖️", label: "CS / Legal Firm" },
  { icon: "💻", label: "SaaS / Tech Company" },
  { icon: "📦", label: "Supplier / Distributor" },
  { icon: "🏢", label: "Business Consultant" },
  { icon: "🎯", label: "Marketing Agency" },
];

export default function PartnerPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", type: "", revenue: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.type) { alert("Please fill required fields."); return; }
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Nunito',system-ui,sans-serif", color: C.dark, background: C.white }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap'); *{box-sizing:border-box;margin:0;padding:0} input:focus,select:focus,textarea:focus{border-color:#dc2626!important;background:white!important;outline:none}`}</style>

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
            <span style={{ fontWeight: 700, fontSize: 13, color: C.red }}>🤝 Partner with Us</span>
          </div>
          <button onClick={() => navigate("/")} style={{ background: `linear-gradient(135deg,${C.red},${C.redDark})`, color: C.white, fontWeight: 800, fontSize: 14, padding: "9px 22px", borderRadius: 12, border: "none", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 16px rgba(220,38,38,0.35)" }}>
            Apply Now
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 112, paddingBottom: 72, background: `linear-gradient(160deg,${C.dark} 0%,#1e1b4b 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(220,38,38,0.1),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: 999, padding: "6px 18px", marginBottom: 20 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#f87171" }}>120+ Active Partners Across India</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 52, fontWeight: 900, lineHeight: 1.1, color: C.white, marginBottom: 20 }}>
              Grow Together.<br />
              <span style={{ background: "linear-gradient(135deg,#dc2626,#f87171)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Earn More.</span>
            </h1>
            <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>
              Join India's fastest-growing vendor platform as a referral or service partner. Build a new revenue stream while helping businesses thrive.
            </p>
            <div style={{ display: "flex", gap: 28 }}>
              {[["₹2L+", "Avg. Partner Earnings/yr"], ["48h", "Approval Time"], ["10–20%", "Commission Rate"]].map(([n, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 900, color: C.red }}>{n}</p>
                  <p style={{ fontSize: 11, color: "#64748b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {PARTNER_TYPES.map((t) => (
              <div key={t.label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "20px 18px", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 24 }}>{t.icon}</span>
                <span style={{ color: C.white, fontWeight: 700, fontSize: 13.5 }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "80px 0", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ color: C.red, fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Partner Benefits</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 40, fontWeight: 900, marginTop: 10 }}>What You Get</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {BENEFITS.map((b) => (
              <div key={b.title} style={{ background: C.white, border: `1.5px solid ${C.border}`, borderRadius: 22, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{b.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ color: C.muted, fontSize: 13.5, lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={{ padding: "80px 0 96px", background: C.white }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 40, fontWeight: 900, marginBottom: 10 }}>Apply to Partner</h2>
            <p style={{ color: C.muted, fontSize: 16 }}>We review every application within 48 hours.</p>
          </div>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "60px 32px", background: "linear-gradient(135deg,#f0fdf4,#ecfdf5)", borderRadius: 28, border: "1.5px solid #bbf7d0" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 900, color: "#15803d", marginBottom: 10 }}>Application Received!</h3>
              <p style={{ color: "#16a34a", marginBottom: 24 }}>Our partnerships team will reach out within 48 hours.</p>
              <button onClick={() => navigate("/")} style={{ background: `linear-gradient(135deg,${C.red},${C.redDark})`, color: C.white, fontWeight: 800, padding: "12px 28px", borderRadius: 14, border: "none", cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Back to Home</button>
            </div>
          ) : (
            <div style={{ background: C.bg, borderRadius: 28, border: `1.5px solid ${C.border}`, padding: 40, boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                {[["Full Name *", "name", "Your Name", "text"], ["Email Address *", "email", "you@company.com", "email"], ["Phone Number", "phone", "+91 98765 43210", "tel"], ["Company / Firm Name", "company", "Your Company", "text"]].map(([l, k, p, t]) => (
                  <div key={k}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>{l}</label>
                    <input type={t} placeholder={p} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} style={IS} />
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>Partner Type *</label>
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} style={{ ...IS, appearance: "none" }}>
                    <option value="">Select type…</option>
                    {PARTNER_TYPES.map((t) => <option key={t.label}>{t.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>Annual Revenue</label>
                  <select value={form.revenue} onChange={(e) => setForm({ ...form, revenue: e.target.value })} style={{ ...IS, appearance: "none" }}>
                    <option value="">Select range…</option>
                    {["Below ₹10L", "₹10L – ₹50L", "₹50L – ₹2Cr", "Above ₹2Cr"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ marginTop: 18 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>Tell us about your network</label>
                <textarea rows={4} placeholder="Describe your client base, services, and why you'd like to partner with us…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...IS, resize: "none" }} />
              </div>
              <button onClick={handleSubmit} style={{ marginTop: 24, width: "100%", padding: "15px 0", borderRadius: 16, background: `linear-gradient(135deg,${C.red},${C.redDark})`, color: C.white, fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 12px 40px rgba(220,38,38,0.3)", fontFamily: "inherit" }}>
                Submit Application →
              </button>
              <p style={{ textAlign: "center", color: C.muted, fontSize: 12, marginTop: 14 }}>🔒 All information is confidential and protected.</p>
            </div>
          )}
        </div>
      </section>

      <footer style={{ background: C.dark, padding: "24px 0", textAlign: "center" }}>
        <button onClick={() => navigate("/")} style={{ color: C.red, fontSize: 13, fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>← Back to SwitchYourVendor</button>
      </footer>
    </div>
  );
}