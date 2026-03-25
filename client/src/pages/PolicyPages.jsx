import { useNavigate } from "react-router-dom";

const C = { red: "#dc2626", redDark: "#b91c1c", dark: "#0f172a", mid: "#334155", muted: "#64748b", border: "#e2e8f0", bg: "#f8fafc", white: "#ffffff" };

const GLOBAL_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
`;

function PolicyNav({ title, emoji, navigate }) {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${C.border}`, boxShadow: "0 1px 20px rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#fff1f1", border: "1.5px solid #fecaca", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.red} strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
          </div>
          <div>
            <p style={{ fontWeight: 900, fontSize: 15, color: C.dark, lineHeight: 1 }}>SwitchYourVendor</p>
            <p style={{ fontSize: 10, color: C.muted, fontWeight: 600, marginTop: 2 }}>← Back to Home</p>
          </div>
        </button>
        <div style={{ background: "#fff1f1", border: "1px solid #fecaca", borderRadius: 999, padding: "6px 16px" }}>
          <span style={{ fontWeight: 700, fontSize: 13, color: C.red }}>{emoji} {title}</span>
        </div>
        <div style={{ width: 120 }} />
      </div>
    </nav>
  );
}

function PolicyHero({ title, subtitle, lastUpdated }) {
  return (
    <section style={{ paddingTop: 112, paddingBottom: 48, background: "linear-gradient(135deg,#fff5f5,#ffffff,#f0f4ff)", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>Last Updated: {lastUpdated}</p>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 50, fontWeight: 900, lineHeight: 1.1, marginBottom: 14, color: C.dark }}>{title}</h1>
        <p style={{ color: C.muted, fontSize: 16, lineHeight: 1.7 }}>{subtitle}</p>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 900, color: C.dark, marginBottom: 14, paddingBottom: 10, borderBottom: `2px solid ${C.border}` }}>{title}</h2>
      <div style={{ color: C.mid, fontSize: 15, lineHeight: 1.85 }}>{children}</div>
    </div>
  );
}

function P({ children }) {
  return <p style={{ marginBottom: 12 }}>{children}</p>;
}

function Ul({ items }) {
  return (
    <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
      {items.map((item, i) => <li key={i} style={{ marginBottom: 8 }}>{item}</li>)}
    </ul>
  );
}

function PolicyFooter({ navigate }) {
  return (
    <footer style={{ background: C.dark, padding: "24px 0", textAlign: "center" }}>
      <button onClick={() => navigate("/")} style={{ color: C.red, fontSize: 13, fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>← Back to SwitchYourVendor</button>
    </footer>
  );
}

function PolicyWrapper({ children }) {
  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "48px 24px 96px", background: C.white }}>
      <div style={{ background: C.white, borderRadius: 24, border: `1.5px solid ${C.border}`, padding: "48px 56px", boxShadow: "0 8px 40px rgba(0,0,0,0.05)" }}>
        {children}
      </div>
    </div>
  );
}

/* ─── PRIVACY POLICY ─── */
export function PrivacyPolicyPage() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "'Nunito',system-ui,sans-serif", color: C.dark, background: C.bg }}>
      <style>{GLOBAL_STYLE}</style>
      <PolicyNav title="Privacy Policy" emoji="🔒" navigate={navigate} />
      <PolicyHero title="Privacy Policy" subtitle="We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information." lastUpdated="January 1, 2024" />
      <PolicyWrapper>
        <Section title="1. Information We Collect">
          <P>We collect information you provide directly to us when you:</P>
          <Ul items={["Fill out our contact or quote request forms", "Register for or use our services", "Subscribe to our newsletters or updates", "Communicate with us via email, phone, or chat"]} />
          <P>This may include your name, email address, phone number, company name, and business details.</P>
        </Section>
        <Section title="2. How We Use Your Information">
          <P>We use the information we collect to:</P>
          <Ul items={["Provide, maintain, and improve our services", "Process transactions and send related information", "Send you technical notices and support messages", "Respond to your comments, questions, and requests", "Send marketing communications (with your consent)", "Monitor and analyse trends and usage patterns"]} />
        </Section>
        <Section title="3. Information Sharing">
          <P>We do not sell, trade, or otherwise transfer your personal information to outside parties except:</P>
          <Ul items={["To trusted service providers who assist in our operations, bound by confidentiality agreements", "When required by law or to protect our legal rights", "In connection with a merger, acquisition, or sale of assets (with prior notice)"]} />
        </Section>
        <Section title="4. Data Security">
          <P>We implement industry-standard security measures including SSL encryption, access controls, and regular security audits. All client data is stored on SOC 2-compliant cloud infrastructure. We sign a non-disclosure agreement (NDA) with all clients before accessing their financial data.</P>
        </Section>
        <Section title="5. Data Retention">
          <P>We retain your personal data only as long as necessary to provide our services or as required by law. Financial and compliance records are retained for 7 years as mandated by Indian tax law. You may request deletion of your personal profile data at any time.</P>
        </Section>
        <Section title="6. Your Rights">
          <P>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <strong>privacy@switchyourvendor.com</strong>. We will respond within 30 days.</P>
        </Section>
        <Section title="7. Cookies">
          <P>We use cookies to enhance your browsing experience, analyse site traffic, and personalise content. You can control cookie settings through your browser. Disabling cookies may affect site functionality.</P>
        </Section>
        <Section title="8. Contact Us">
          <P>For any privacy-related queries, contact our Data Protection Officer at <strong>privacy@switchyourvendor.com</strong> or write to us at Business Hub, Lower Parel, Mumbai 400013.</P>
        </Section>
      </PolicyWrapper>
      <PolicyFooter navigate={navigate} />
    </div>
  );
}

/* ─── TERMS OF SERVICE ─── */
export function TermsOfServicePage() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "'Nunito',system-ui,sans-serif", color: C.dark, background: C.bg }}>
      <style>{GLOBAL_STYLE}</style>
      <PolicyNav title="Terms of Service" emoji="📋" navigate={navigate} />
      <PolicyHero title="Terms of Service" subtitle="By using SwitchYourVendor's services, you agree to be bound by these terms. Please read them carefully before proceeding." lastUpdated="January 1, 2024" />
      <PolicyWrapper>
        <Section title="1. Acceptance of Terms">
          <P>By accessing or using SwitchYourVendor's website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.</P>
        </Section>
        <Section title="2. Services Provided">
          <P>SwitchYourVendor provides the following categories of services to businesses:</P>
          <Ul items={["Compliance services: Accounting, GST filing, Income Tax filing, MCA compliance", "Business supply services: Office supplies, kitchen supplies, fresh fruits, branded apparel, corporate gifts, canteen setup", "Advisory and consulting services as agreed in individual service agreements"]} />
        </Section>
        <Section title="3. Service Agreements">
          <P>Each service engagement is governed by a specific Service Level Agreement (SLA) agreed upon before onboarding. Service timelines, deliverables, and pricing are detailed in your individual agreement. SwitchYourVendor reserves the right to modify services with 30 days' prior notice.</P>
        </Section>
        <Section title="4. Payment Terms">
          <Ul items={["Invoices are raised on the 1st of each month for monthly services", "Payment is due within 15 days of invoice date", "Late payments attract a 1.5% monthly interest charge", "Annual plans are billed upfront with a 10% discount", "GST is applicable on all services as per prevailing rates"]} />
        </Section>
        <Section title="5. Cancellation Policy">
          <P>You may cancel services with 30 days' written notice. Cancellations take effect at the end of the current billing cycle. Prepaid annual plans are refunded on a pro-rata basis after deducting a 10% processing fee. Please also refer to our Refund Policy for full details.</P>
        </Section>
        <Section title="6. Client Responsibilities">
          <P>Clients are responsible for providing accurate and timely information required for service delivery. Delays caused by incomplete client submissions do not constitute a breach by SwitchYourVendor. Clients must ensure authorised persons communicate with our team.</P>
        </Section>
        <Section title="7. Limitation of Liability">
          <P>SwitchYourVendor's liability is limited to the fees paid in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential damages. Compliance services are provided based on information supplied by the client — penalties arising from incorrect client data are the client's responsibility.</P>
        </Section>
        <Section title="8. Governing Law">
          <P>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.</P>
        </Section>
        <Section title="9. Contact">
          <P>For questions about these terms, contact us at <strong>legal@switchyourvendor.com</strong>.</P>
        </Section>
      </PolicyWrapper>
      <PolicyFooter navigate={navigate} />
    </div>
  );
}

/* ─── REFUND POLICY ─── */
export function RefundPolicyPage() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "'Nunito',system-ui,sans-serif", color: C.dark, background: C.bg }}>
      <style>{GLOBAL_STYLE}</style>
      <PolicyNav title="Refund Policy" emoji="💳" navigate={navigate} />
      <PolicyHero title="Refund Policy" subtitle="We stand behind the quality of our services. Here's everything you need to know about our fair and transparent refund process." lastUpdated="January 1, 2024" />
      <PolicyWrapper>
        <Section title="1. Our Commitment">
          <P>SwitchYourVendor is committed to delivering high-quality services. If you are unsatisfied for any reason, we will work to resolve the issue. If resolution is not possible, our refund policy applies as described below.</P>
        </Section>
        <Section title="2. Compliance Services">
          <P><strong>Monthly Plans:</strong> No refund for months already in service. If you cancel before the month begins, a full refund is issued for that month.</P>
          <P><strong>Annual Plans:</strong> Pro-rata refund for unused months, minus a 10% processing fee. Minimum 2 months must have elapsed before a refund is considered.</P>
          <P><strong>One-Time Filings (ITR, GST Registration, etc.):</strong> Refundable only if the filing has not been initiated. Once work begins, fees are non-refundable.</P>
        </Section>
        <Section title="3. Supply Services">
          <Ul items={["Office, kitchen, and pantry supplies: Returns accepted within 7 days of delivery for damaged or incorrect items.", "Fresh fruits: Claims for quality issues must be raised within 24 hours of delivery with photographic evidence.", "Branded apparel: Returns accepted within 14 days if there is a manufacturing defect. Custom-printed items are non-refundable unless defective.", "Corporate gifts: Non-refundable once customised. Replacements issued for damaged deliveries."]} />
        </Section>
        <Section title="4. Canteen Setup Services">
          <P>Setup costs are non-refundable once equipment installation begins. Monthly management fees are refundable on a pro-rata basis with 30 days' notice.</P>
        </Section>
        <Section title="5. Refund Processing">
          <Ul items={["Approved refunds are processed within 7–10 business days", "Refunds are credited to the original payment method", "Bank transfer charges (if any) are deducted from the refund amount", "GST paid is not refundable as per government regulations"]} />
        </Section>
        <Section title="6. How to Request a Refund">
          <P>Email <strong>refunds@switchyourvendor.com</strong> with your client ID, invoice number, reason for refund, and supporting evidence. Our team will acknowledge within 24 hours and resolve within 5 business days.</P>
        </Section>
        <Section title="7. Disputes">
          <P>If you disagree with our refund decision, you may escalate to <strong>escalations@switchyourvendor.com</strong>. Our senior management will review and respond within 3 business days. All decisions post-escalation are final.</P>
        </Section>
      </PolicyWrapper>
      <PolicyFooter navigate={navigate} />
    </div>
  );
}