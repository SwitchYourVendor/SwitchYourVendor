import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

/* ── Scroll-reveal hook ── */
export function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

/* ── Animated reveal wrapper ── */
export function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── FAQ Accordion ── */
export function FAQItem({ q, a, index, accent }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.06}>
      <div style={{
        borderRadius: 16,
        border: `1.5px solid ${open ? accent + "55" : "#e2e8f0"}`,
        overflow: "hidden",
        background: open ? accent + "08" : "#ffffff",
        transition: "all 0.3s ease",
        marginBottom: 12,
      }}>
        <button onClick={() => setOpen(v => !v)} style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "18px 24px",
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "inherit", textAlign: "left", gap: 16,
        }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: open ? accent : "#0f172a", flex: 1 }}>{q}</span>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: open ? accent : "#f1f5f9",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, transition: "all 0.3s",
            transform: open ? "rotate(45deg)" : "none",
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke={open ? "#fff" : "#94a3b8"} strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </button>
        {open && (
          <div style={{ padding: "0 24px 20px", animation: "fadeSlideIn 0.3s ease" }}>
            <p style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.75 }}>{a}</p>
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ── Shared Navbar for service pages ── */
export function ServiceNav({ title, emoji, accent }) {
  const navigate = useNavigate();
  const r = parseInt(accent.slice(1,3),16);
  const g = parseInt(accent.slice(3,5),16);
  const b = parseInt(accent.slice(5,7),16);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)",
      borderBottom: "1px solid #e2e8f0", boxShadow: "0 1px 20px rgba(0,0,0,0.06)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `rgba(${r},${g},${b},0.1)`, border: `1.5px solid rgba(${r},${g},${b},0.25)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </div>
          <div>
            <p style={{ fontWeight: 900, fontSize: 15, color: "#0f172a", lineHeight: 1 }}>SwitchYourVendor</p>
            <p style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600, marginTop: 2 }}>← Back to Home</p>
          </div>
        </button>
        <div style={{ background: `rgba(${r},${g},${b},0.08)`, border: `1px solid rgba(${r},${g},${b},0.2)`, borderRadius: 999, padding: "6px 16px" }}>
          <span style={{ fontWeight: 700, fontSize: 13, color: accent }}>{emoji} {title}</span>
        </div>
        <button onClick={() => document.getElementById("svc-contact")?.scrollIntoView({ behavior: "smooth" })}
          style={{ background: `linear-gradient(135deg,${accent},${accent}cc)`, color: "#fff", fontWeight: 800, fontSize: 14, padding: "9px 22px", borderRadius: 12, border: "none", cursor: "pointer", fontFamily: "inherit", boxShadow: `0 4px 16px rgba(${r},${g},${b},0.4)` }}>
          Get a Free Quote
        </button>
      </div>
    </nav>
  );
}

/* ── Full service page template ── */
export default function ServicePageTemplate({
  accent,        // hex color matching card
  emoji,
  title,
  tagline,
  heroDesc,
  trustBadges,   // [{icon, label}]
  stats,         // [{value, label}]
  services,      // [{icon, title, desc, stat, statLabel}]
  process,       // [{icon, title, desc}]
  pricingPlans,  // [{name, price, period, features}] – 3 items
  faqs,          // [{q, a}]
  imageUrl,
}) {
  const navigate = useNavigate();
  const contactRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({ name:"", email:"", phone:"", company:"", size:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const r = parseInt(accent.slice(1,3),16);
  const g = parseInt(accent.slice(3,5),16);
  const b = parseInt(accent.slice(5,7),16);
  const rgb = `${r},${g},${b}`;

  const IS = { width:"100%", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"11px 14px", fontSize:14, outline:"none", background:"#f8fafc", boxSizing:"border-box", fontFamily:"inherit" };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone) { alert("Please fill required fields."); return; }
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily:"'Nunito',system-ui,sans-serif", background:"#fff", color:"#0f172a", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes fadeSlideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
        input:focus,select:focus,textarea:focus{border-color:${accent}!important;outline:none;background:white!important}
        ::-webkit-scrollbar{width:6px}
        ::-webkit-scrollbar-thumb{background:${accent}66;border-radius:99px}
      `}</style>

      <ServiceNav title={title} emoji={emoji} accent={accent} />

      {/* ── HERO ── */}
      <section style={{ paddingTop:120, paddingBottom:80, position:"relative", overflow:"hidden", background:`linear-gradient(135deg,rgba(${rgb},0.06) 0%,#ffffff 50%,rgba(${rgb},0.04) 100%)` }}>
        {[320,500,680].map((size,i) => (
          <div key={i} style={{ position:"absolute", top:"50%", right:-size/3, width:size, height:size, borderRadius:"50%", border:`1.5px solid rgba(${rgb},${i===0?"0.18":i===1?"0.1":"0.06"})`, transform:"translateY(-50%)", pointerEvents:"none" }} />
        ))}
        <div style={{ position:"absolute", top:130, right:"11%", fontSize:64, animation:"float 4s ease-in-out infinite", pointerEvents:"none" }}>{emoji}</div>

        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <div>
            {/* Breadcrumb */}
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
              {[["Home","/"],["Services","/"]].map(([l,p],i) => (
                <span key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <span style={{ fontSize:12, color:"#94a3b8", fontWeight:600, cursor:"pointer" }} onClick={() => navigate(p)}>{l}</span>
                  <span style={{ color:"#e2e8f0" }}>›</span>
                </span>
              ))}
              <span style={{ fontSize:12, color:accent, fontWeight:700 }}>{title}</span>
            </div>

            {/* Live badge */}
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:`rgba(${rgb},0.08)`, border:`1px solid rgba(${rgb},0.2)`, borderRadius:999, padding:"6px 16px", marginBottom:20 }}>
              <span style={{ width:7, height:7, background:"#22c55e", borderRadius:"50%", animation:"pulse 2s infinite", display:"inline-block" }} />
              <span style={{ fontSize:12, fontWeight:700, color:accent }}>{tagline}</span>
            </div>

            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:54, fontWeight:900, lineHeight:1.08, letterSpacing:"-0.02em", marginBottom:18, color:"#0f172a" }}>
              {title.split(" ").slice(0,-1).join(" ")}<br />
              <span style={{ background:`linear-gradient(135deg,${accent},${accent}aa)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {title.split(" ").slice(-1)[0]}
              </span>
            </h1>

            <p style={{ color:"#64748b", fontSize:17, lineHeight:1.75, marginBottom:32, maxWidth:440 }}>{heroDesc}</p>

            <div style={{ display:"flex", gap:14, marginBottom:36 }}>
              <button onClick={() => document.getElementById("svc-contact")?.scrollIntoView({behavior:"smooth"})}
                style={{ background:`linear-gradient(135deg,${accent},${accent}cc)`, color:"#fff", fontWeight:800, fontSize:15, padding:"14px 28px", borderRadius:16, border:"none", cursor:"pointer", boxShadow:`0 12px 40px rgba(${rgb},0.35)`, fontFamily:"inherit" }}>
                Start Free Consultation →
              </button>
              <button style={{ border:"2px solid #e2e8f0", color:"#374151", fontWeight:800, fontSize:15, padding:"14px 28px", borderRadius:16, cursor:"pointer", background:"#fff", fontFamily:"inherit" }}>
                Download Brochure
              </button>
            </div>

            <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
              {trustBadges.map(({icon,label}) => (
                <div key={label} style={{ display:"flex", alignItems:"center", gap:7 }}>
                  <span style={{ fontSize:15 }}>{icon}</span>
                  <span style={{ fontSize:12.5, fontWeight:700, color:"#334155" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            {stats.map((s,i) => (
              <div key={s.label} style={{
                background: i%2===0 ? `linear-gradient(145deg,${accent},${accent}cc)` : "#fff",
                border:`1.5px solid ${i%2===0?"transparent":"#e2e8f0"}`,
                borderRadius:24, padding:"32px 24px",
                boxShadow: i%2===0 ? `0 16px 48px rgba(${rgb},0.3)` : "0 4px 20px rgba(0,0,0,0.05)",
                animation:`float ${3.5+i*0.4}s ease-in-out infinite`,
                animationDelay:`${i*0.3}s`,
              }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:36, fontWeight:900, color:i%2===0?"#fff":accent, marginBottom:6 }}>{s.value}</div>
                <div style={{ fontSize:12, fontWeight:700, color:i%2===0?"rgba(255,255,255,0.65)":"#94a3b8", textTransform:"uppercase", letterSpacing:"0.1em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES INCLUDED ── */}
      <section style={{ padding:"96px 0", background:"#f8fafc" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <span style={{ color:accent, fontWeight:700, fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase" }}>Everything Included</span>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:900, marginTop:10, marginBottom:12 }}>What We Take Care Of</h2>
              <p style={{ color:"#64748b", fontSize:17, maxWidth:520, margin:"0 auto" }}>Every deliverable, handled end-to-end by our dedicated team.</p>
            </div>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
            {services.map((s,i) => <ServiceCard key={s.title} {...s} accent={accent} rgb={rgb} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding:"96px 0", background:`linear-gradient(160deg,#0f172a,#1a1035)`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"10%", left:"5%", width:400, height:400, borderRadius:"50%", background:`radial-gradient(circle,rgba(${rgb},0.1),transparent 70%)`, pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:64 }}>
              <span style={{ color:`rgba(${rgb},0.9)`, fontWeight:700, fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase" }}>Our Process</span>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:900, color:"#fff", marginTop:10, marginBottom:12 }}>How It Works</h2>
              <p style={{ color:"#64748b", fontSize:17 }}>From first call to delivery — a seamless journey.</p>
            </div>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:`repeat(${process.length},1fr)`, gap:24, position:"relative" }}>
            <div style={{ position:"absolute", top:44, left:`${100/process.length/2}%`, right:`${100/process.length/2}%`, height:2, background:`linear-gradient(to right,rgba(${rgb},0.4),rgba(${rgb},0.2))`, zIndex:0 }} />
            {process.map((step,i) => (
              <Reveal key={step.title} delay={i*0.1}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", position:"relative", zIndex:1 }}>
                  <div style={{ width:88, height:88, borderRadius:"50%", background:`linear-gradient(135deg,${accent},${accent}cc)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:34, marginBottom:20, boxShadow:`0 0 0 8px rgba(${rgb},0.12),0 12px 40px rgba(${rgb},0.35)` }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize:11, fontWeight:800, color:`rgba(${rgb},0.8)`, letterSpacing:"0.15em", marginBottom:8 }}>STEP 0{i+1}</div>
                  <h3 style={{ fontSize:16, fontWeight:800, color:"#fff", marginBottom:10 }}>{step.title}</h3>
                  <p style={{ fontSize:13, color:"#64748b", lineHeight:1.7 }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding:"96px 0", background:"#fff" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:48 }}>
              <span style={{ color:accent, fontWeight:700, fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase" }}>Transparent Pricing</span>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:900, marginTop:10, marginBottom:12 }}>Simple, Honest Plans</h2>
              <p style={{ color:"#64748b", fontSize:17 }}>No surprises. No lock-in. Cancel anytime.</p>
            </div>
          </Reveal>
          {/* Tab selector */}
          <div style={{ display:"flex", justifyContent:"center", marginBottom:40 }}>
            <div style={{ display:"inline-flex", background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:999, padding:4, gap:4 }}>
              {pricingPlans.map((p,i) => (
                <button key={p.name} onClick={() => setActiveTab(i)} style={{ padding:"10px 28px", borderRadius:999, border:"none", cursor:"pointer", fontFamily:"inherit", fontWeight:800, fontSize:14, transition:"all 0.3s", background:activeTab===i?`linear-gradient(135deg,${accent},${accent}cc)`:"transparent", color:activeTab===i?"#fff":"#64748b", boxShadow:activeTab===i?`0 4px 16px rgba(${rgb},0.4)`:"none" }}>
                  {p.name}
                </button>
              ))}
            </div>
          </div>
          {pricingPlans[activeTab] && (
            <Reveal key={activeTab}>
              <div style={{ background:`linear-gradient(145deg,${accent},${accent}cc)`, borderRadius:28, padding:40, boxShadow:`0 24px 64px rgba(${rgb},0.3)`, display:"grid", gridTemplateColumns:"1fr auto", gap:32, alignItems:"center" }}>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.6)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:6 }}>{pricingPlans[activeTab].name} Plan</div>
                  <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:28 }}>
                    <span style={{ fontFamily:"'Playfair Display',serif", fontSize:52, fontWeight:900, color:"#fff" }}>{pricingPlans[activeTab].price}</span>
                    <span style={{ fontSize:14, color:"rgba(255,255,255,0.5)", fontWeight:600 }}>{pricingPlans[activeTab].period}</span>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px 28px" }}>
                    {pricingPlans[activeTab].features.map(f => (
                      <div key={f} style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <div style={{ width:20, height:20, borderRadius:"50%", background:"rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <span style={{ fontSize:13.5, color:"rgba(255,255,255,0.85)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:12, alignItems:"center", minWidth:168 }}>
                  <button onClick={() => document.getElementById("svc-contact")?.scrollIntoView({behavior:"smooth"})}
                    style={{ width:"100%", padding:"14px 0", borderRadius:16, background:"#fff", color:accent, fontWeight:800, fontSize:15, border:"none", cursor:"pointer", boxShadow:"0 8px 24px rgba(255,255,255,0.25)", fontFamily:"inherit" }}>
                    Get Started →
                  </button>
                  <p style={{ fontSize:11, color:"rgba(255,255,255,0.45)", textAlign:"center" }}>No lock-in. Cancel anytime.</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding:"80px 0 96px", background:"#f8fafc" }}>
        <div style={{ maxWidth:780, margin:"0 auto", padding:"0 24px" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:48 }}>
              <span style={{ color:accent, fontWeight:700, fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase" }}>Common Questions</span>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:900, marginTop:10 }}>Frequently Asked</h2>
            </div>
          </Reveal>
          {faqs.map((faq,i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} accent={accent} />)}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="svc-contact" ref={contactRef} style={{ padding:"96px 0", background:`linear-gradient(135deg,rgba(${rgb},0.05),#fff)` }}>
        <div style={{ maxWidth:720, margin:"0 auto", padding:"0 24px" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:48 }}>
              <span style={{ color:accent, fontWeight:700, fontSize:12, letterSpacing:"0.2em", textTransform:"uppercase" }}>Free Consultation</span>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:42, fontWeight:900, marginTop:10, marginBottom:12 }}>Let's Get Started</h2>
              <p style={{ color:"#64748b", fontSize:17 }}>Tell us about your business. We'll respond with a tailored plan in 24 hours.</p>
            </div>
          </Reveal>

          {submitted ? (
            <Reveal>
              <div style={{ textAlign:"center", padding:"60px 32px", background:"#fff", borderRadius:28, border:`1.5px solid rgba(${rgb},0.3)`, boxShadow:`0 20px 60px rgba(${rgb},0.1)` }}>
                <div style={{ fontSize:64, marginBottom:16 }}>🎉</div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:900, color:"#0f172a", marginBottom:10 }}>Request Received!</h3>
                <p style={{ color:"#64748b", marginBottom:28, fontSize:16 }}>Our team will reach out within 24 hours.</p>
                <button onClick={() => navigate("/")} style={{ background:`linear-gradient(135deg,${accent},${accent}cc)`, color:"#fff", fontWeight:800, padding:"13px 28px", borderRadius:14, border:"none", cursor:"pointer", fontSize:14, fontFamily:"inherit" }}>← Back to Home</button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div style={{ background:"#fff", borderRadius:28, border:"1.5px solid #e2e8f0", padding:40, boxShadow:"0 20px 60px rgba(0,0,0,0.06)" }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 }}>
                  {[["Full Name","name","Rajesh Kumar","text"],["Email Address","email","rajesh@company.com","email"],["Phone Number","phone","+91 98765 43210","tel"],["Company Name","company","Your Company","text"]].map(([l,k,p,t]) => (
                    <div key={k}>
                      <label style={{ display:"block", fontSize:13, fontWeight:700, color:"#374151", marginBottom:8 }}>{l} {["name","email","phone"].includes(k) && <span style={{ color:"#dc2626" }}>*</span>}</label>
                      <input type={t} placeholder={p} value={form[k]} onChange={e => setForm({...form,[k]:e.target.value})} style={IS} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:18 }}>
                  <label style={{ display:"block", fontSize:13, fontWeight:700, color:"#374151", marginBottom:8 }}>Company Size</label>
                  <select value={form.size} onChange={e => setForm({...form,size:e.target.value})} style={{ ...IS, appearance:"none" }}>
                    <option value="">Select…</option>
                    {["1–10 employees","11–50 employees","51–200 employees","200+ employees"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginTop:18 }}>
                  <label style={{ display:"block", fontSize:13, fontWeight:700, color:"#374151", marginBottom:8 }}>Specific Requirements</label>
                  <textarea rows={4} placeholder="Describe your current challenges and requirements…" value={form.message} onChange={e => setForm({...form,message:e.target.value})} style={{ ...IS, resize:"none" }} />
                </div>
                <button onClick={handleSubmit} style={{ marginTop:24, width:"100%", padding:"15px 0", borderRadius:16, background:`linear-gradient(135deg,${accent},${accent}cc)`, color:"#fff", fontWeight:800, fontSize:15, border:"none", cursor:"pointer", boxShadow:`0 12px 40px rgba(${rgb},0.35)`, fontFamily:"inherit" }}>
                  Request Free Consultation →
                </button>
                <p style={{ textAlign:"center", color:"#94a3b8", fontSize:12, marginTop:14 }}>🔒 Your data is secure. NDA signed before we begin.</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── PAGE FOOTER ── */}
      <footer style={{ background:"#0f172a", padding:"32px 0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:34, height:34, background:`linear-gradient(135deg,${accent},${accent}cc)`, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"#fff", fontWeight:900, fontSize:16 }}>S</span>
            </div>
            <span style={{ color:"#475569", fontSize:13, fontWeight:600 }}>© 2024 SwitchYourVendor · {title}</span>
          </div>
          <button onClick={() => navigate("/")} style={{ color:`rgba(${rgb},0.85)`, fontSize:13, fontWeight:700, background:"none", border:"none", cursor:"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", gap:6 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to all services
          </button>
        </div>
      </footer>
    </div>
  );
}

/* ── Individual service card (hover flip) ── */
function ServiceCard({ icon, title, desc, stat, statLabel, accent, rgb, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index*0.08}>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{ background:hovered?`linear-gradient(145deg,${accent},${accent}cc)`:"#fff", border:`1.5px solid ${hovered?"transparent":"#e2e8f0"}`, borderRadius:24, padding:"28px 28px 24px", transition:"all 0.4s cubic-bezier(0.23,1,0.32,1)", boxShadow:hovered?`0 24px 60px rgba(${rgb},0.25)`:"0 2px 12px rgba(0,0,0,0.04)", transform:hovered?"translateY(-6px)":"none", cursor:"default", height:"100%", display:"flex", flexDirection:"column", gap:12 }}>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between" }}>
          <div style={{ width:52, height:52, borderRadius:16, background:hovered?`rgba(255,255,255,0.15)`:`rgba(${rgb},0.1)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24 }}>{icon}</div>
          <div style={{ textAlign:"right" }}>
            <div style={{ fontSize:22, fontWeight:900, color:hovered?"#fff":accent }}>{stat}</div>
            <div style={{ fontSize:10, fontWeight:700, color:hovered?"rgba(255,255,255,0.6)":"#94a3b8", textTransform:"uppercase", letterSpacing:"0.08em" }}>{statLabel}</div>
          </div>
        </div>
        <h3 style={{ fontSize:16, fontWeight:800, color:hovered?"#fff":"#0f172a" }}>{title}</h3>
        <p style={{ fontSize:13.5, color:hovered?"rgba(255,255,255,0.8)":"#64748b", lineHeight:1.7, flex:1 }}>{desc}</p>
      </div>
    </Reveal>
  );
}
 