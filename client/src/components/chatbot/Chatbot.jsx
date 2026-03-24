import { useState, useRef, useCallback } from "react";

const SYSTEM_PROMPT = `You are Vend, a friendly assistant for SwitchYourVendor — India's one-stop vendor platform for SMEs.
Services: Accounting, GST Filing, Income Tax, MCA Compliance, Office Supplies, Kitchen Supplies, Fresh Fruits, Branded Apparel, Corporate Gifts, Organic Canteen Setup.
Benefits: 30% cost savings, quality guarantee, flexible contracts, 24/7 support.
Contact: info@switchyourvendor.com | +91 98765 43210 | Mumbai.
Be warm, concise (2-4 sentences). Direct users to the contact form or phone for quotes.`;

const SUGGESTIONS = [
  "What services do you offer?",
  "How do I get started?",
  "What's your pricing?",
  "Tell me about GST filing",
];

function formatText(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm **Vend** 👋 your SwitchYourVendor assistant. Ask me about our services, pricing, or how to get started!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const endRef = useRef(null);

  const send = useCallback(
    async (text) => {
      const t = (text || input).trim();
      if (!t || loading) return;

      setInput("");
      setShowSuggestions(false);
      const next = [...msgs, { role: "user", content: t }];
      setMsgs(next);
      setLoading(true);

      try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1000,
            system: SYSTEM_PROMPT,
            messages: next.map((m) => ({ role: m.role, content: m.content })),
          }),
        });
        const data = await res.json();
        setMsgs((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data.content?.map((b) => b.text || "").join("") || "Sorry, try again.",
          },
        ]);
      } catch {
        setMsgs((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Something went wrong. Email info@switchyourvendor.com",
          },
        ]);
      } finally {
        setLoading(false);
        setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      }
    },
    [input, msgs, loading]
  );

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 50,
          width: 60,
          height: 60,
          borderRadius: 18,
          background: "linear-gradient(135deg,#dc2626,#b91c1c)",
          border: "none",
          cursor: "pointer",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 40px rgba(220,38,38,0.5)",
        }}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        )}
      </button>

      {/* Online dot */}
      {!open && (
        <span
          style={{
            position: "fixed",
            bottom: 76,
            right: 30,
            zIndex: 50,
            width: 12,
            height: 12,
            background: "#4ade80",
            borderRadius: "50%",
            border: "2px solid white",
            animation: "pulse 2s infinite",
          }}
        />
      )}

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 96,
            right: 24,
            zIndex: 50,
            width: 380,
            height: 560,
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "linear-gradient(135deg,#dc2626,#b91c1c)",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                🤖
              </div>
              <span
                style={{
                  position: "absolute",
                  bottom: -2,
                  right: -2,
                  width: 12,
                  height: 12,
                  background: "#4ade80",
                  borderRadius: "50%",
                  border: "2px solid #b91c1c",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: 15, margin: 0 }}>Vend</p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, margin: 0 }}>
                SwitchYourVendor · Online
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                width: 30,
                height: 30,
                borderRadius: 10,
                background: "rgba(255,255,255,0.1)",
                border: "none",
                cursor: "pointer",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: "#f8fafc",
            }}
          >
            {msgs.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 8,
                  flexDirection: m.role === "user" ? "row-reverse" : "row",
                }}
              >
                {m.role === "assistant" && (
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 10,
                      background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    🤖
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    fontSize: 13,
                    lineHeight: 1.6,
                    borderRadius:
                      m.role === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    background:
                      m.role === "user"
                        ? "linear-gradient(135deg,#dc2626,#b91c1c)"
                        : "white",
                    color: m.role === "user" ? "white" : "#1e293b",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  {formatText(m.content)}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                    background: "linear-gradient(135deg,#dc2626,#b91c1c)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                  }}
                >
                  🤖
                </div>
                <div
                  style={{
                    background: "white",
                    borderRadius: "16px 16px 16px 4px",
                    padding: "12px 16px",
                    display: "flex",
                    gap: 5,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      style={{
                        width: 7,
                        height: 7,
                        background: "#fca5a5",
                        borderRadius: "50%",
                        animation: `chatbounce 1.2s ${d * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Suggestion pills */}
            {showSuggestions && msgs.length === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    padding: "0 4px",
                  }}
                >
                  Quick Questions
                </p>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    style={{
                      textAlign: "left",
                      fontSize: 12.5,
                      background: "white",
                      border: "1.5px solid #e2e8f0",
                      borderRadius: 12,
                      padding: "9px 14px",
                      cursor: "pointer",
                      color: "#475569",
                      fontWeight: 600,
                      fontFamily: "inherit",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input bar */}
          <div
            style={{
              padding: "10px 14px",
              background: "white",
              borderTop: "1px solid #f1f5f9",
              display: "flex",
              gap: 8,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Ask me anything…"
              disabled={loading}
              style={{
                flex: 1,
                border: "1.5px solid #e2e8f0",
                borderRadius: 12,
                padding: "9px 14px",
                fontSize: 13,
                outline: "none",
                background: "#f8fafc",
                fontFamily: "inherit",
              }}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background:
                  input.trim() && !loading
                    ? "linear-gradient(135deg,#dc2626,#b91c1c)"
                    : "#f1f5f9",
                border: "none",
                cursor: input.trim() && !loading ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: input.trim() && !loading ? "white" : "#94a3b8",
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* Powered by */}
          <div
            style={{
              padding: 6,
              textAlign: "center",
              background: "#f8fafc",
              borderTop: "1px solid #f1f5f9",
            }}
          >
            <p style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600 }}>
          
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatbounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}