import FlipCard from "../common/FlipCard";
import { TESTIMONIAL_PAIRS } from "../../data/testimonialData";

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "96px 0", background: "#f8fafc" }}>
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
            Client Stories
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
            What Our Clients Say
          </h2>
          <p style={{ color: "#64748b", fontSize: 17 }}>
            6 real stories — tap each card to reveal another perspective
          </p>
        </div>

        {/* Flip cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 28,
          }}
        >
          {TESTIMONIAL_PAIRS.map((pair, i) => (
            <FlipCard key={i} front={pair.front} back={pair.back} />
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: 13,
            marginTop: 20,
            fontWeight: 600,
          }}
        >
          👆 Tap any card to read another client's story
        </p>
      </div>
    </section>
  );
}