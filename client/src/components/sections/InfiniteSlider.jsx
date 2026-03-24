import { PARTNER_COMPANIES } from "../../data/servicesData";

export default function InfiniteSlider() {
  const items = [...PARTNER_COMPANIES, ...PARTNER_COMPANIES];

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#0f172a,#1e1b4b)",
        padding: "40px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: "linear-gradient(to right,#0f172a,transparent)",
          zIndex: 10,
        }}
      />
      {/* Right fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 100,
          background: "linear-gradient(to left,#0f172a,transparent)",
          zIndex: 10,
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        Trusted by 500+ companies across India
      </p>

      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "center",
          animation: "scroll-left 35s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((co, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 11,
                fontWeight: 800,
              }}
            >
              {co[0]}
            </div>
            <span style={{ color: "#94a3b8", fontWeight: 500, fontSize: 13 }}>{co}</span>
          </div>
        ))}
      </div>

      <style>{`@keyframes scroll-left{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}