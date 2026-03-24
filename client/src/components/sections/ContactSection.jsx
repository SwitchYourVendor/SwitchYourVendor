import { useState } from "react";
import { SERVICES_DROPDOWN } from "../../data/servicesData";

const INPUT_STYLE = {
  width: "100%",
  border: "1.5px solid #e2e8f0",
  borderRadius: 12,
  padding: "11px 14px",
  fontSize: 14,
  outline: "none",
  background: "#f8fafc",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

export default function ContactSection({ contactRef }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone || !form.company || !form.service) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  return (
    <section ref={contactRef} style={{ padding: "96px 0", background: "white" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>

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
            Let's Talk
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
            Get Started Today
          </h2>
          <p style={{ color: "#64748b", fontSize: 17 }}>
            Fill out the form — we'll respond within 24 hours
          </p>
        </div>

        {/* Success state */}
        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 32px",
              background: "linear-gradient(135deg,#f0fdf4,#ecfdf5)",
              borderRadius: 28,
              border: "1.5px solid #bbf7d0",
            }}
          >
            <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
            <h3 style={{ fontSize: 24, fontWeight: 900, color: "#15803d", marginBottom: 8 }}>
              Request Submitted!
            </h3>
            <p style={{ color: "#16a34a", marginBottom: 24 }}>
              Our team will reach out within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                background: "#dc2626",
                color: "white",
                fontWeight: 800,
                padding: "12px 28px",
                borderRadius: 14,
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontFamily: "inherit",
              }}
            >
              Submit Another
            </button>
          </div>
        ) : (
          <div
            style={{
              background: "white",
              borderRadius: 28,
              border: "1.5px solid #f1f5f9",
              padding: 40,
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            }}
          >
            {/* Name + Email + Phone + Company */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              {[
                ["Full Name", "name", "John Doe", "text"],
                ["Email Address", "email", "john@company.com", "email"],
                ["Phone Number", "phone", "+91 98765 43210", "tel"],
                ["Company Name", "company", "Your Company", "text"],
              ].map(([label, key, placeholder, type]) => (
                <div key={key}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#374151",
                      marginBottom: 8,
                    }}
                  >
                    {label} <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={INPUT_STYLE}
                  />
                </div>
              ))}
            </div>

            {/* Service dropdown */}
            <div style={{ marginTop: 18 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#374151",
                  marginBottom: 8,
                }}
              >
                Service Interested In <span style={{ color: "#dc2626" }}>*</span>
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                style={{ ...INPUT_STYLE, appearance: "none" }}
              >
                <option value="">Select a service…</option>
                {SERVICES_DROPDOWN.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div style={{ marginTop: 18 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#374151",
                  marginBottom: 8,
                }}
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your requirements…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...INPUT_STYLE, resize: "none" }}
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              style={{
                marginTop: 24,
                width: "100%",
                color: "white",
                fontWeight: 800,
                padding: "15px 0",
                borderRadius: 16,
                background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                border: "none",
                cursor: "pointer",
                fontSize: 15,
                boxShadow: "0 12px 40px rgba(220,38,38,0.3)",
                fontFamily: "inherit",
              }}
            >
              Submit Request →
            </button>

            <p
              style={{
                textAlign: "center",
                color: "#94a3b8",
                fontSize: 12,
                marginTop: 14,
              }}
            >
              🔒 Your information is secure. We never share your data.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}