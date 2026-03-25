import { useState } from "react";
import { useNavigate } from "react-router-dom";

const C = { red: "#dc2626", redDark: "#b91c1c", dark: "#0f172a", mid: "#334155", muted: "#64748b", border: "#e2e8f0", bg: "#f8fafc", white: "#ffffff" };

const IS = { width: "100%", border: `1.5px solid ${C.border}`, borderRadius: 12, padding: "11px 14px", fontSize: 14, outline: "none", background: C.bg, boxSizing: "border-box", fontFamily: "inherit" };

const OFFICES = [
  { city: "Mumbai (HQ)", address: "Business Hub, Lower Parel, Mumbai 400013", phone: "+91 98765 43210", emoji: "🏢" },
  { city: "Delhi NCR", address: "Cyber City, Gurugram, Haryana 122002", phone: "+91 98765 43211", emoji: "🏙️" },
  { city: "Bengaluru", address: "Koramangala, Bengaluru, Karnataka 560034", phone: "+91 98765 43212", emoji: "🌆" },
];

export default function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) { alert("Please fill required fields."); return; }
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
            <span style={{ fontWeight: 700, fontSize: 13, color: C.red }}>📞 Contact Us</span>
          </div>
          <a href="tel:+919876543210" style={{ background: `linear-gradient(135deg,${C.red},${C.redDark})`, color: C.white, fontWeight: 800, fontSize: 14, padding: "9px 22px", borderRadius: 12, border: "none", cursor: "pointer", fontFamily: "inherit", textDecoration: "none", boxShadow: "0 4px 16px rgba(220,38,38,0.35)" }}>
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 112, paddingBottom: 64, background: "linear-gradient(135deg,#fff5f5,#ffffff,#f0f9ff)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff1f1", border: "1px solid #fecaca", borderRadius: 999, padding: "6px 18px", marginBottom: 20 }}>
            <span style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: C.red }}>Response within 24 hours · Guaranteed</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 54, fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Let's Start a<br />
            <span style={{ background: `linear-gradient(135deg,${C.red},#f43f5e)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Conversation</span>
          </h1>
          <p style={{ color: C.muted, fontSize: 17, lineHeight: 1.7 }}>Whether you have a question, need a quote, or want to explore a partnership — we're here.</p>
        </div>
      </section>

      {/* OFFICES */}
      <section style={{ padding: "0 0 56px", background: C.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {OFFICES.map((o) => (
              <div key={o.city} style={{ background: C.bg, border: `1.5px solid ${C.border}`, borderRadius: 20, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{o.emoji}</div>
                <h3 style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{o.city}</h3>
                <p style={{ color: C.muted, fontSize: 13.5, lineHeight: 1.6, marginBottom: 10 }}>{o.address}</p>
                <p style={{ color: C.red, fontWeight: 700, fontSize: 13.5 }}>{o.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: "0 0 96px", background: C.bg }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 38, fontWeight: 900, marginBottom: 10 }}>Send Us a Message</h2>
            <p style={{ color: C.muted, fontSize: 16 }}>Fill the form — our team will reply within 24 hours.</p>
          </div>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "60px 32px", background: C.white, borderRadius: 28, border: "1.5px solid #bbf7d0" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 900, color: "#15803d", marginBottom: 10 }}>Message Sent!</h3>
              <p style={{ color: "#16a34a", marginBottom: 24 }}>We'll get back to you within 24 hours.</p>
              <button onClick={() => navigate("/")} style={{ background: `linear-gradient(135deg,${C.red},${C.redDark})`, color: C.white, fontWeight: 800, padding: "12px 28px", borderRadius: 14, border: "none", cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Back to Home</button>
            </div>
          ) : (
            <div style={{ background: C.white, borderRadius: 28, border: `1.5px solid ${C.border}`, padding: 40, boxShadow: "0 20px 60px rgba(0,0,0,0.07)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                {[["Full Name *", "name", "Your Name", "text"], ["Email Address *", "email", "you@company.com", "email"], ["Phone Number", "phone", "+91 98765 43210", "tel"], ["Company Name", "company", "Your Company", "text"]].map(([l, k, p, t]) => (
                  <div key={k}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>{l}</label>
                    <input type={t} placeholder={p} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} style={IS} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 18 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>Subject</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} style={{ ...IS, appearance: "none" }}>
                  <option value="">Select a topic…</option>
                  {["General Enquiry", "Pricing & Quote", "Compliance Services", "Supply Services", "Partnership", "Support"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ marginTop: 18 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: C.mid, marginBottom: 8 }}>Message *</label>
                <textarea rows={5} placeholder="Tell us how we can help…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...IS, resize: "none" }} />
              </div>
              <button onClick={handleSubmit} style={{ marginTop: 24, width: "100%", padding: "15px 0", borderRadius: 16, background: `linear-gradient(135deg,${C.red},${C.redDark})`, color: C.white, fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 12px 40px rgba(220,38,38,0.3)", fontFamily: "inherit" }}>
                Send Message →
              </button>
              <p style={{ textAlign: "center", color: C.muted, fontSize: 12, marginTop: 14 }}>🔒 We never share your data with third parties.</p>
            </div>
          )}
        </div>
      </section>

      <footer style={{ background: C.dark, padding: "24px 0", textAlign: "center" }}>
        <button onClick={() => navigate("/")} style={{ color: C.red, fontSize: 13, fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>← Back to SwitchYourVendor</button>
      </footer>

      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
    </div>
  );
}