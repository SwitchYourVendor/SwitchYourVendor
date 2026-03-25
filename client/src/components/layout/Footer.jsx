import { useNavigate } from "react-router-dom";

const COMPLIANCE_LINKS = [
  { label: "Accounting Services", route: "/services/accounting" },
  { label: "GST Filing Services", route: "/services/gst-filing" },
  { label: "Income Tax Filing", route: "/services/income-tax" },
  { label: "MCA Compliance", route: "/services/mca-compliance" },
];

const SUPPLY_LINKS = [
  { label: "Office Supplies", route: "/services/office-supplies" },
  { label: "Kitchen & Pantry", route: "/services/kitchen-supplies" },
  { label: "Fresh Fruits Supply", route: "/services/fresh-fruits" },
  { label: "Branded Apparel", route: "/services/branded-apparel" },
  { label: "Corporate Gifts", route: "/services/corporate-gifts" },
  { label: "Organic Canteen Setup", route: "/services/canteen-setup" },
];

const RESOURCE_LINKS = [
  { label: "About Us", route: "/about" },
  { label: "Contact Us", route: "/contact" },
  { label: "Partner with Us", route: "/partner" },
  { label: "Privacy Policy", route: "/privacy-policy" },
  { label: "Terms of Service", route: "/terms-of-service" },
  { label: "Refund Policy", route: "/refund-policy" },
];

const SOCIAL_LINKS = [
  {
    name: "Facebook", href: "https://facebook.com",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    name: "Twitter", href: "https://twitter.com",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
  },
  {
    name: "LinkedIn", href: "https://linkedin.com",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    name: "Instagram", href: "https://instagram.com",
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
];

function NavLink({ label, route }) {
  const navigate = useNavigate();
  return (
    <p
      onClick={() => navigate(route)}
      onMouseEnter={e => e.currentTarget.style.color = "#dc2626"}
      onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}
      style={{ color:"#94a3b8", fontSize:13.5, marginBottom:10, cursor:"pointer", transition:"color 0.2s", display:"flex", alignItems:"center", gap:6 }}
    >
      <span style={{ color:"#475569", fontSize:10 }}>›</span>{label}
    </p>
  );
}

export default function Footer({ contactRef, servicesRef }) {
  const navigate = useNavigate();

  return (
    <footer style={{ background:"linear-gradient(135deg,#0a0a0f,#111827)", padding:"72px 0 32px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>

        {/* ── Top CTA strip ── */}
        <div style={{ background:"linear-gradient(135deg,#dc2626,#b91c1c)", borderRadius:24, padding:"32px 40px", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:64, boxShadow:"0 16px 48px rgba(220,38,38,0.28)", flexWrap:"wrap", gap:20 }}>
          <div>
            <p style={{ color:"rgba(255,255,255,0.65)", fontSize:12, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:6 }}>Ready to Switch?</p>
            <h3 style={{ color:"#fff", fontSize:24, fontWeight:900, letterSpacing:"-0.02em" }}>Get a free consultation today</h3>
          </div>
          <div style={{ display:"flex", gap:12 }}>
            <button
              onClick={() => contactRef?.current?.scrollIntoView({ behavior:"smooth" })}
              style={{ background:"#fff", color:"#dc2626", fontWeight:800, fontSize:14, padding:"12px 24px", borderRadius:12, border:"none", cursor:"pointer", fontFamily:"inherit" }}
            >
              Request Quote →
            </button>
            <button
              onClick={() => window.open("about:blank","_blank")}
              style={{ background:"rgba(255,255,255,0.12)", color:"#fff", fontWeight:800, fontSize:14, padding:"12px 24px", borderRadius:12, border:"1.5px solid rgba(255,255,255,0.25)", cursor:"pointer", fontFamily:"inherit" }}
            >
              🚀 Partner Portal
            </button>
          </div>
        </div>

        {/* ── Main grid: Brand | Compliance | Supplies | Resources ── */}
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1.3fr 1fr", gap:40, marginBottom:56 }}>

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
              <div style={{ width:42, height:42, background:"linear-gradient(135deg,#dc2626,#b91c1c)", borderRadius:13, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 14px rgba(220,38,38,0.4)" }}>
                <span style={{ color:"#fff", fontWeight:900, fontSize:19 }}>S</span>
              </div>
              <div>
                <p style={{ color:"#fff", fontWeight:900, fontSize:15, lineHeight:1 }}>SwitchYourVendor</p>
                <p style={{ color:"#475569", fontSize:10, marginTop:3, fontWeight:600 }}>Stop Settling. Start Switching.</p>
              </div>
            </div>
            <p style={{ color:"#475569", fontSize:13.5, lineHeight:1.75, marginBottom:20, maxWidth:260 }}>
              India's #1 one-stop vendor platform for SMEs — compliance, supplies, and everything in between.
            </p>
            {[["✉","info@switchyourvendor.com"],["📞","+91 98765 43210"],["📍","Business Hub, Mumbai"]].map(([icon,val]) => (
              <p key={val} style={{ color:"#475569", fontSize:12.5, marginBottom:8, display:"flex", gap:9, alignItems:"flex-start" }}>
                <span style={{ color:"#dc2626", fontSize:13 }}>{icon}</span>{val}
              </p>
            ))}
            {/* Social icons */}
            <div style={{ display:"flex", gap:10, marginTop:20 }}>
              {SOCIAL_LINKS.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" title={s.name}
                  onMouseEnter={e => { e.currentTarget.style.background="#dc2626"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#dc2626"; }}
                  onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.color="#64748b"; e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; }}
                  style={{ width:38, height:38, borderRadius:11, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center", color:"#64748b", textDecoration:"none", transition:"all 0.2s" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h4 style={{ color:"#fff", fontWeight:800, marginBottom:20, fontSize:11, textTransform:"uppercase", letterSpacing:"0.18em" }}>Compliance</h4>
            {COMPLIANCE_LINKS.map(l => <NavLink key={l.label} {...l} />)}
          </div>

          {/* Supplies */}
          <div>
            <h4 style={{ color:"#fff", fontWeight:800, marginBottom:20, fontSize:11, textTransform:"uppercase", letterSpacing:"0.18em" }}>Business Supplies</h4>
            {SUPPLY_LINKS.map(l => <NavLink key={l.label} {...l} />)}
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ color:"#fff", fontWeight:800, marginBottom:20, fontSize:11, textTransform:"uppercase", letterSpacing:"0.18em" }}>Resources</h4>
            {RESOURCE_LINKS.map(l => <NavLink key={l.label} {...l} />)}

            {/* Follow Us */}
            <h4 style={{ color:"#fff", fontWeight:800, margin:"24px 0 14px", fontSize:11, textTransform:"uppercase", letterSpacing:"0.18em" }}>Follow Us</h4>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {SOCIAL_LINKS.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" title={s.name}
                  onMouseEnter={e => { e.currentTarget.style.background="#dc2626"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#dc2626"; }}
                  onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.color="#64748b"; e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; }}
                  style={{ width:36, height:36, borderRadius:10, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center", color:"#64748b", textDecoration:"none", transition:"all 0.2s" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop:"1px solid #1e293b", paddingTop:24, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontSize:12.5, color:"#334155" }}>© 2024 SwitchYourVendor. All rights reserved. Made with ❤️ in India.</p>
          <div style={{ display:"flex", gap:20 }}>
            {[["Privacy Policy","/privacy-policy"],["Terms of Service","/terms-of-service"],["Refund Policy","/refund-policy"]].map(([label,route]) => (
              <span key={label} onClick={() => navigate(route)}
                onMouseEnter={e => e.currentTarget.style.color="#dc2626"}
                onMouseLeave={e => e.currentTarget.style.color="#334155"}
                style={{ fontSize:12, color:"#334155", cursor:"pointer", transition:"color 0.2s" }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
