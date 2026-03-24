import { WHY_SWITCH } from "../../data/servicesData";

export default function WhySwitchSection({ whyRef }) {
  return (
    <section ref={whyRef} style={{ padding: "96px 0", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            style={{
              color: "#dc2626",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            The SYV Advantage
          </span>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 900,
              marginTop: 10,
              marginBottom: 12,
              letterSpacing: "-0.03em",
            }}
          >
            Why Switch to Us?
          </h2>
          <p style={{ color: "#64748b", fontSize: 17 }}>
            Experience the difference with our vendor solutions
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 24,
          }}
        >
          {WHY_SWITCH.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#f8fafc",
                borderRadius: 24,
                padding: 32,
                border: "1.5px solid #f1f5f9",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  background: `${item.color}15`,
                  borderRadius: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  marginBottom: 20,
                }}
              >
                {item.icon}
              </div>
              <div style={{ fontSize: 34, fontWeight: 900, color: item.color, marginBottom: 2 }}>
                {item.stat}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 12,
                }}
              >
                {item.statLabel}
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: "#64748b", fontSize: 13.5, lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}