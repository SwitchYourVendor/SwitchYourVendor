import RoadmapStep from "../common/RoadmapStep";
import { ROADMAP_STEPS } from "../../data/roadmapData";

export default function Roadmap({ howRef }) {
  return (
    <section
      ref={howRef}
      style={{
        padding: "100px 0 120px",
        background: "linear-gradient(160deg,#0f172a 0%,#1a1035 60%,#0c1a2e 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "4%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(220,38,38,0.07) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          right: "4%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(14,165,233,0.07) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 76 }}>
          <span
            style={{
              color: "#f87171",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Your Journey With Us
          </span>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "white",
              margin: "12px 0 14px",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Contact to Go Live
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#dc2626,#f87171)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              in Under 7 Days
            </span>
          </h2>
          <p style={{ color: "#64748b", fontSize: 17 }}>Hover each step to explore your path</p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
            gap: 0,
          }}
        >
          {ROADMAP_STEPS.map((step, i) => (
            <RoadmapStep
              key={step.n}
              step={step}
              index={i}
              total={ROADMAP_STEPS.length}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 18,
              padding: "16px 32px",
            }}
          >
            <span style={{ fontSize: 22 }}>⚡</span>
            <p style={{ color: "#94a3b8", fontSize: 14.5, fontWeight: 600 }}>
              Average onboarding:{" "}
              <span style={{ color: "white", fontWeight: 900 }}>under 7 days</span> — or we
              expedite at no extra cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}