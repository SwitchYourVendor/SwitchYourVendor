import { useState } from "react";
import ServiceCard from "../common/ServiceCard";
import { COMPLIANCE_SERVICES, SUPPLY_SERVICES } from "../../data/servicesData";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("compliance");

  const tabs = [
    { id: "compliance", label: "Compliance Services", icon: "📄", color: "#6366f1" },
    { id: "supplies", label: "Business Supplies", icon: "📦", color: "#0ea5e9" },
  ];

  return (
    <section style={{ padding: "96px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              color: "#dc2626",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            What We Offer
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
            Our Services
          </h2>
          <p style={{ color: "#64748b", fontSize: 17 }}>
            Comprehensive solutions for every business need — click any card to explore.
          </p>
        </div>

        {/* Tab toggle pill */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
          <div
            style={{
              display: "inline-flex",
              background: "white",
              border: "1.5px solid #e2e8f0",
              borderRadius: 999,
              padding: 5,
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              gap: 4,
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "11px 26px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontWeight: 800,
                    fontSize: 14.5,
                    transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
                    background: isActive
                      ? "linear-gradient(135deg,#dc2626,#b91c1c)"
                      : "transparent",
                    color: isActive ? "white" : "#64748b",
                    boxShadow: isActive ? "0 6px 20px rgba(220,38,38,0.3)" : "none",
                    transform: isActive ? "scale(1.03)" : "scale(1)",
                  }}
                >
                  <span style={{ fontSize: 17 }}>{tab.icon}</span>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <div style={{ animation: "fadeSlideIn 0.35s ease" }} key={activeTab}>
          {activeTab === "compliance" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 20,
                alignItems: "start",
              }}
            >
              {COMPLIANCE_SERVICES.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          )}
          {activeTab === "supplies" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
                alignItems: "start",
              }}
            >
              {SUPPLY_SERVICES.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}