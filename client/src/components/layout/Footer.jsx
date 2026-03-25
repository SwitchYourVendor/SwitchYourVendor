import { useNavigate } from "react-router-dom";

const SERVICE_ROUTES = {
  "Accounting": "/services/accounting",
  "GST Filing": "/services/gst-filing",
  "Income Tax": "/services/income-tax",
  "MCA Compliance": "/services/mca-compliance",
  "Office Supplies": "/services/office-supplies",
  "Kitchen Supplies": "/services/kitchen-supplies",
  "Fresh Fruits": "/services/fresh-fruits",
  "Corporate Gifts": "/services/corporate-gifts",
};

const RESOURCE_ROUTES = {
  "About Us": "/about",
  "Contact Us": "/contact",
  "Partner with Us": "/partner",
  "Privacy Policy": "/privacy-policy",
  "Terms of Service": "/terms-of-service",
  "Refund Policy": "/refund-policy",
};

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer({ contactRef, servicesRef, whyRef, howRef }) {
  const navigate = useNavigate();

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNav = (label, ref) => {
    // If we're already on home and have a ref, smooth scroll
    if (ref) {
      scrollTo(ref);
    } else {
      navigate("/");
    }
  };

  const LinkItem = ({ label, route, style = {} }) => (
    <p
      onClick={() => navigate(route)}
      style={{
        color: "#94a3b8",
        fontSize: 13.5,
        marginBottom: 10,
        cursor: "pointer",
        transition: "color 0.2s",
        display: "flex",
        alignItems: "center",
        gap: 6,
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#dc2626")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
    >
      <span style={{ color: "#475569", fontSize: 10 }}>›</span>
      {label}
    </p>
  );

  return (
    <footer style={{ background: "linear-gradient(135deg,#0a0a0f,#111827)", padding: "72px 0 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Top CTA strip ── */}
        <div style={{
          background: "linear-gradient(135deg,#dc2626,#b91c1c)",
          borderRadius: 24,
          padding: "32px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 64,
          boxShadow: "0 16px 48px rgba(220,38,38,0.3)",
          flexWrap: "wrap",
          gap: 20,
        }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>
              Ready to Switch?
            </p>
            <h3 style={{ color: "white", fontSize: 24, fontWeight: 900, letterSpacing: "-0.02em" }}>
              Get a free consultation today
            </h3>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => scrollTo(contactRef)}
              style={{
                background: "white", color: "#dc2626", fontWeight: 800, fontSize: 14,
                padding: "12px 24px", borderRadius: 12, border: "none", cursor: "pointer",
                fontFamily: "inherit", boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              Request Quote →
            </button>
            <button
              onClick={() => window.open("about:blank", "_blank")}
              style={{
                background: "rgba(255,255,255,0.15)", color: "white", fontWeight: 800, fontSize: 14,
                padding: "12px 24px", borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.3)",
                cursor: "pointer", fontFamily: "inherit",
              }}
            >
              🚀 Partner Portal
            </button>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1.2fr", gap: 40, marginBottom: 56 }}>

          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 42, height: 42, background: "linear-gradient(135deg,#dc2626,#b91c1c)", borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(220,38,38,0.4)" }}>
                <span style={{ color: "white", fontWeight: 900, fontSize: 19 }}>S</span>
              </div>
              <div>
                <p style={{ color: "white", fontWeight: 900, fontSize: 15, lineHeight: 1 }}>SwitchYourVendor</p>
                <p style={{ color: "#475569", fontSize: 10, marginTop: 3, fontWeight: 600 }}>Stop Settling. Start Switching.</p>
              </div>
            </div>
            <p style={{ color: "#475569", fontSize: 13.5, lineHeight: 1.75, marginBottom: 20, maxWidth: 260 }}>
              India's #1 one-stop vendor platform for SMEs — compliance, supplies, and everything in between.
            </p>

            {/* Contact info */}
            {[
              ["✉", "info@switchyourvendor.com"],
              ["📞", "+91 98765 43210"],
              ["📍", "Business Hub, Mumbai"],
            ].map(([icon, val]) => (
              <p key={val} style={{ color: "#475569", fontSize: 12.5, marginBottom: 8, display: "flex", gap: 9, alignItems: "flex-start" }}>
                <span style={{ color: "#dc2626", fontSize: 13 }}>{icon}</span>
                {val}
              </p>
            ))}

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  style={{
                    width: 38, height: 38, borderRadius: 11,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#64748b", textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#dc2626";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#dc2626";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Compliance col */}
          <div>
            <h4 style={{ color: "white", fontWeight: 800, marginBottom: 20, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Compliance
            </h4>
            {Object.entries(SERVICE_ROUTES).slice(0, 4).map(([label, route]) => (
              <LinkItem key={label} label={label} route={route} />
            ))}
          </div>

          {/* Supplies col */}
          <div>
            <h4 style={{ color: "white", fontWeight: 800, marginBottom: 20, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Supplies
            </h4>
            {Object.entries(SERVICE_ROUTES).slice(4).map(([label, route]) => (
              <LinkItem key={label} label={label} route={route} />
            ))}
          </div>


           {/* Resources col */}
          <div>
            <h4 style={{ color: "white", fontWeight: 800, marginBottom: 20, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em" }}>
              Resources
            </h4>
            {Object.entries(RESOURCE_ROUTES).map(([label, route]) => (
              <LinkItem key={label} label={label} route={route} />
            ))}
          </div>


{/* Follow Us col */}
<div>
  <h4
    style={{
      color: "white",
      fontWeight: 800,
      marginBottom: 20,
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
    }}
  >
    Follow Us
  </h4>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 46px)",
      gap: 14,
    }}
  >
    {SOCIAL_LINKS.map((s) => (
      <a
        key={s.name}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        title={s.name}
        style={{
          width: 46,
          height: 46,
          borderRadius: 12,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#64748b",
          textDecoration: "none",
          transition: "all 0.25s ease",
          fontSize: 20,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#dc2626";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.borderColor = "#dc2626";
          e.currentTarget.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          e.currentTarget.style.color = "#64748b";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {s.icon}
      </a>
    ))}
  </div>
</div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: "1px solid #1e293b", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12.5, color: "#334155" }}>
            © 2024 SwitchYourVendor. All rights reserved. Made with ❤️ in India.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {[["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"], ["Refund Policy", "/refund-policy"]].map(([label, route]) => (
              <span
                key={label}
                onClick={() => navigate(route)}
                style={{ fontSize: 12, color: "#334155", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#dc2626")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}