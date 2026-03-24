export default function Navbar({ heroRef, servicesRef, whyRef, howRef, contactRef }) {
  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #f1f5f9",
        boxShadow: "0 1px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo(heroRef)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "none",
            border: "none",
            cursor: "pointer",
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
              boxShadow: "0 4px 12px rgba(220,38,38,0.3)",
            }}
          >
            <span style={{ color: "white", fontWeight: 900, fontSize: 18 }}>S</span>
          </div>
          <div>
            <p style={{ fontWeight: 900, color: "#0f172a", fontSize: 15, lineHeight: 1 }}>
              SwitchYourVendor
            </p>
            <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 2, fontWeight: 600 }}>
              Stop Settling. Start Switching.
            </p>
          </div>
        </button>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {[
            ["Services", servicesRef],
            ["Why Switch", whyRef],
            ["How It Works", howRef],
          ].map(([label, ref]) => (
            <button
              key={label}
              onClick={() => scrollTo(ref)}
              style={{
                color: "#64748b",
                fontWeight: 700,
                fontSize: 14,
                padding: "8px 14px",
                borderRadius: 10,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo(contactRef)}
            style={{
              background: "linear-gradient(135deg,#dc2626,#b91c1c)",
              color: "white",
              fontWeight: 800,
              padding: "9px 20px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              marginLeft: 8,
              boxShadow: "0 4px 14px rgba(220,38,38,0.35)",
              fontFamily: "inherit",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}