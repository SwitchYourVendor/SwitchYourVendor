export default function HeroSection({ heroRef, servicesRef, contactRef }) {
  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={heroRef}
      style={{
        paddingTop: 100,
        paddingBottom: 80,
        background: "linear-gradient(135deg,#fff5f5 0%,#ffffff 45%,#f0f4ff 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left: copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#fff1f1",
              border: "1px solid #fecaca",
              borderRadius: 999,
              padding: "7px 16px",
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "#dc2626",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
              }}
            />
            <span style={{ color: "#b91c1c", fontWeight: 700, fontSize: 13 }}>
              India's #1 Vendor Switching Platform
            </span>
          </div>

          <h1
            style={{
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Stop Settling,
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#dc2626,#f43f5e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Start Switching
            </span>
          </h1>

          <p style={{ color: "#64748b", fontSize: 18, lineHeight: 1.7, maxWidth: 420 }}>
            Replace your vendors at your convenience. From compliance to supplies — one partner,
            zero hassle.
          </p>

          <div style={{ display: "flex", gap: 14 }}>
            <button
              onClick={() => scrollTo(contactRef)}
              style={{
                background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                color: "white",
                fontWeight: 800,
                padding: "14px 28px",
                borderRadius: 16,
                border: "none",
                cursor: "pointer",
                fontSize: 15,
                boxShadow: "0 12px 40px rgba(220,38,38,0.3)",
                fontFamily: "inherit",
              }}
            >
              Request a Quote →
            </button>
            <button
              onClick={() => scrollTo(servicesRef)}
              style={{
                border: "2px solid #e2e8f0",
                color: "#374151",
                fontWeight: 800,
                padding: "14px 28px",
                borderRadius: 16,
                cursor: "pointer",
                fontSize: 15,
                background: "white",
                fontFamily: "inherit",
              }}
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 32, paddingTop: 4 }}>
            {[
              ["500+", "Happy Clients"],
              ["10+", "Services"],
              ["30%", "Cost Savings"],
            ].map(([n, l]) => (
              <div key={l}>
                <p style={{ fontSize: 26, fontWeight: 900, color: "#0f172a" }}>{n}</p>
                <p style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600, marginTop: 2 }}>
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
              alt="Team"
              style={{ width: "100%", height: 420, objectFit: "cover" }}
            />
          </div>

          {/* Badge: clients */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              left: -20,
              background: "white",
              borderRadius: 18,
              padding: "16px 20px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
              border: "1px solid #f1f5f9",
            }}
          >
            <p style={{ fontWeight: 900, fontSize: 24, color: "#0f172a" }}>500+</p>
            <p style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>Happy Clients</p>
          </div>

          {/* Badge: rating */}
          <div
            style={{
              position: "absolute",
              top: -20,
              right: -20,
              background: "linear-gradient(135deg,#dc2626,#b91c1c)",
              borderRadius: 18,
              padding: "14px 18px",
              boxShadow: "0 12px 40px rgba(220,38,38,0.4)",
            }}
          >
            <p style={{ fontWeight: 900, fontSize: 18, color: "white" }}>⭐ 4.9/5</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
              Client Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}