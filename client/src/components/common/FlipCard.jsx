import { useState } from "react";

function CardFace({ data, isFront }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: isFront
          ? "white"
          : `linear-gradient(145deg,${data.color}18,${data.color}06)`,
        border: `1.5px solid ${isFront ? "#f1f5f9" : data.color + "45"}`,
        borderRadius: 24,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: isFront ? "rotateY(0deg)" : "rotateY(180deg)",
        boxShadow: isFront
          ? "0 4px 24px rgba(0,0,0,0.06)"
          : `0 8px 32px ${data.color}20`,
      }}
    >
      {/* Flip hint */}
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 16,
          fontSize: 10,
          color: "#94a3b8",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <span style={{ fontSize: 12 }}>{isFront ? "👆" : "🔄"}</span>
        {isFront ? "Tap to flip" : "Flip back"}
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: 3 }}>
        {Array(data.stars)
          .fill(0)
          .map((_, i) => (
            <span key={i} style={{ color: "#fbbf24", fontSize: 17 }}>
              ★
            </span>
          ))}
      </div>

      {/* Quote */}
      <p
        style={{
          color: "#475569",
          lineHeight: 1.75,
          fontSize: 14,
          fontStyle: "italic",
          flex: 1,
        }}
      >
        "{data.text}"
      </p>

      {/* Author */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          paddingTop: 14,
          borderTop: `1px solid ${isFront ? "#f1f5f9" : data.color + "25"}`,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            background: `linear-gradient(135deg,${data.color},${data.color}cc)`,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 900,
            fontSize: 13,
            flexShrink: 0,
          }}
        >
          {data.avatar}
        </div>
        <div>
          <p style={{ fontWeight: 800, fontSize: 14, color: "#0f172a" }}>{data.name}</p>
          <p style={{ fontSize: 12, color: "#64748b" }}>
            {data.role} ·{" "}
            <span style={{ color: data.color, fontWeight: 700 }}>{data.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped((f) => !f)}
      style={{
        position: "relative",
        cursor: "pointer",
        height: 268,
        perspective: 1000,
        WebkitPerspective: 1000,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.23,1,0.32,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <CardFace data={front} isFront={true} />
        <CardFace data={back} isFront={false} />
      </div>
    </div>
  );
}