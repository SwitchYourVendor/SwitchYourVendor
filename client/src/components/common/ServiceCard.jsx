import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* Map service title → route path */
const SERVICE_ROUTES = {
  "Accounting Services": "/services/accounting",
  "GST Filing Services": "/services/gst-filing",
  "Income Tax Filing": "/services/income-tax",
  "MCA Compliance": "/services/mca-compliance",
  "Office Supplies": "/services/office-supplies",
  "Kitchen & Pantry Supplies": "/services/kitchen-supplies",
  "Fresh Fruits Supply": "/services/fresh-fruits",
  "Branded Apparel": "/services/branded-apparel",
  "Corporate Gifts": "/services/corporate-gifts",
  "Organic Canteen Setup": "/services/canteen-setup",
};

export default function ServiceCard({ icon, title, desc, features, detail, accentColor }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const r = parseInt(accentColor.slice(1, 3), 16);
  const g = parseInt(accentColor.slice(3, 5), 16);
  const b = parseInt(accentColor.slice(5, 7), 16);
  const rgb = `${r},${g},${b}`;

  const route = SERVICE_ROUTES[title];

  return (
    <div
      onClick={() => setExpanded((v) => !v)}
      style={{
        background: expanded
          ? `linear-gradient(145deg,rgba(${rgb},0.07) 0%,rgba(${rgb},0.02) 100%)`
          : "white",
        border: `1.5px solid ${expanded ? `rgba(${rgb},0.35)` : "#f1f5f9"}`,
        borderRadius: 20,
        padding: 28,
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        boxShadow: expanded
          ? `0 24px 60px rgba(${rgb},0.14),0 4px 20px rgba(0,0,0,0.06)`
          : "0 2px 12px rgba(0,0,0,0.04)",
        transform: expanded ? "translateY(-2px)" : "none",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: expanded ? accentColor : "transparent",
        borderRadius: "20px 20px 0 0", transition: "background 0.3s",
      }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{
          width: 54, height: 54, borderRadius: 16,
          background: `rgba(${rgb},0.1)`, border: `1px solid rgba(${rgb},0.18)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, flexShrink: 0,
        }}>{icon}</div>
        <div style={{
          width: 30, height: 30, borderRadius: "50%",
          background: expanded ? accentColor : "#f1f5f9",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: expanded ? "white" : "#94a3b8",
          fontSize: 20, fontWeight: 700,
          transform: expanded ? "rotate(45deg)" : "none",
          transition: "all 0.3s", flexShrink: 0,
        }}>+</div>
      </div>

      <h3 style={{
        fontSize: 16.5, fontWeight: 800,
        color: expanded ? accentColor : "#0f172a",
        marginBottom: 8, letterSpacing: "-0.02em", transition: "color 0.3s",
      }}>{title}</h3>

      <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, marginBottom: 16 }}>{desc}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {features.map((f) => (
          <span key={f} style={{
            fontSize: 11.5, fontWeight: 600, padding: "5px 12px", borderRadius: 999,
            background: expanded ? `rgba(${rgb},0.09)` : "#f8fafc",
            color: expanded ? accentColor : "#64748b",
            border: `1px solid ${expanded ? `rgba(${rgb},0.22)` : "#e2e8f0"}`,
            transition: "all 0.3s",
          }}>{f}</span>
        ))}
      </div>

      {expanded && (
        <div style={{ marginTop: 20, animation: "fadeSlideIn 0.35s ease" }}>
          <div style={{
            background: `rgba(${rgb},0.06)`, border: `1px solid rgba(${rgb},0.14)`,
            borderRadius: 14, padding: "14px 16px", marginBottom: 14,
          }}>
            <p style={{ fontSize: 10.5, fontWeight: 800, color: accentColor, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>Details</p>
            <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.75 }}>{detail}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (route) {
                navigate(route);
              } else {
                window.open("about:blank", "_blank");
              }
            }}
            style={{
              width: "100%", padding: "13px 0", borderRadius: 14,
              background: accentColor, color: "white",
              fontWeight: 800, fontSize: 13.5, border: "none", cursor: "pointer",
              boxShadow: `0 6px 20px rgba(${rgb},0.3)`, fontFamily: "inherit",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            {route ? `Explore ${title} \u2192` : `Get a Quote for ${title} \u2192`}
          </button>
        </div>
      )}
    </div>
  );
}