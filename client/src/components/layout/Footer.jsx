export default function Footer({ contactRef }) {
  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        background: "linear-gradient(135deg,#0a0a0f,#111827)",
        padding: "64px 0 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "white", fontWeight: 900, fontSize: 18 }}>S</span>
              </div>
              <span style={{ color: "white", fontWeight: 900, fontSize: 17 }}>
                SwitchYourVendor
              </span>
            </div>
            <p style={{ color: "#475569", fontSize: 13.5, lineHeight: 1.7 }}>
              Your trusted partner for business compliance and supply solutions across India.
            </p>
          </div>

          {/* Compliance links */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 700,
                marginBottom: 18,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Compliance
            </h4>
            {["Accounting", "GST Filing", "Income Tax", "MCA Compliance"].map((s) => (
              <p
                key={s}
                style={{ color: "#475569", fontSize: 13.5, marginBottom: 10, cursor: "pointer" }}
              >
                {s}
              </p>
            ))}
          </div>

          {/* Supplies links */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 700,
                marginBottom: 18,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Supplies
            </h4>
            {["Office Supplies", "Kitchen Supplies", "Fresh Fruits", "Corporate Gifts"].map((s) => (
              <p
                key={s}
                style={{ color: "#475569", fontSize: 13.5, marginBottom: 10, cursor: "pointer" }}
              >
                {s}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 700,
                marginBottom: 18,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Contact
            </h4>
            {[
              ["✉", "info@switchyourvendor.com"],
              ["📞", "+91 98765 43210"],
              ["📍", "Business Hub, Mumbai, India"],
            ].map(([icon, val]) => (
              <p
                key={val}
                style={{
                  color: "#475569",
                  fontSize: 13.5,
                  marginBottom: 12,
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#dc2626" }}>{icon}</span>
                {val}
              </p>
            ))}
            <button
              onClick={() => window.open("about:blank", "_blank")}
              style={{
                marginTop: 18,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                color: "white",
                fontWeight: 800,
                fontSize: 13,
                padding: "11px 20px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(220,38,38,0.4)",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}
            >
              <span style={{ fontSize: 16 }}>🚀</span>
              Open Partner Portal
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{ flexShrink: 0 }}
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1e293b",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: 13, color: "#334155" }}>
            © 2024 SwitchYourVendor. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((p) => (
              <span key={p} style={{ fontSize: 12, color: "#334155", cursor: "pointer" }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}