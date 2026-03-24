import { useState } from "react";
import { ROADMAP_STEPS } from "../../data/roadmapData";

export default function RoadmapStep({ step, index, total }) {
  const [hovered, setHovered] = useState(false);
  const isLast = index === total - 1;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        flex: 1,
        padding: "0 8px",
      }}
    >
      {/* Connector line */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            top: 44,
            left: "calc(50% + 48px)",
            right: "calc(-50% + 48px)",
            height: 2,
            background: `linear-gradient(to right,${step.color}70,${ROADMAP_STEPS[index + 1].color}50)`,
            zIndex: 0,
          }}
        />
      )}

      {/* Circle icon */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: hovered ? 96 : 76,
          height: hovered ? 96 : 76,
          borderRadius: "50%",
          background: hovered ? step.color : `${step.color}18`,
          border: `2.5px solid ${hovered ? step.color : step.color + "50"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: hovered ? 38 : 30,
          position: "relative",
          zIndex: 2,
          transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: hovered
            ? `0 0 0 14px ${step.color}15,0 10px 30px ${step.color}35`
            : "none",
          marginBottom: 16,
          cursor: "default",
        }}
      >
        {step.icon}
        {/* Step number badge */}
        <div
          style={{
            position: "absolute",
            top: hovered ? -7 : -5,
            right: hovered ? -7 : -5,
            width: hovered ? 28 : 22,
            height: hovered ? 28 : 22,
            borderRadius: "50%",
            background: step.color,
            color: "white",
            fontSize: hovered ? 12 : 10,
            fontWeight: 900,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2.5px solid #0f172a",
            transition: "all 0.35s",
          }}
        >
          {step.n}
        </div>
      </div>

      {/* Tag */}
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: step.color,
          background: `${step.color}18`,
          border: `1px solid ${step.color}40`,
          borderRadius: 999,
          padding: "3px 11px",
          marginBottom: 10,
          letterSpacing: "0.05em",
          display: "inline-block",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "all 0.3s",
        }}
      >
        {step.tag}
      </span>

      {/* Title */}
      <h3
        style={{
          color: hovered ? "white" : "#94a3b8",
          fontWeight: 800,
          fontSize: hovered ? 17 : 14,
          marginBottom: 8,
          textAlign: "center",
          transition: "all 0.3s",
          transform: hovered ? "translateY(-3px)" : "none",
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: hovered ? "#cbd5e1" : "#334155",
          fontSize: hovered ? 13.5 : 12.5,
          lineHeight: 1.7,
          textAlign: "center",
          maxWidth: 190,
          transition: "all 0.35s",
          transform: hovered ? "translateY(-2px)" : "none",
        }}
      >
        {step.desc}
      </p>

      {/* Underline accent */}
      <div
        style={{
          width: hovered ? 52 : 0,
          height: 3,
          borderRadius: 99,
          background: step.color,
          marginTop: 12,
          transition: "width 0.35s cubic-bezier(0.23,1,0.32,1)",
        }}
      />
    </div>
  );
}