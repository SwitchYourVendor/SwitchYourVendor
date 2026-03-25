import ServicePageTemplate from "./ServicePageTemplate";

export default function MCACompliancePage() {
  return (
    <ServicePageTemplate
      accent="#f59e0b"
      emoji="🛡️"
      title="MCA Compliance"
      tagline="ROC Filed · Board Ready · Zero Penalties"
      heroDesc="Stay 100% compliant with the Ministry of Corporate Affairs. We manage your annual filings, statutory registers, board resolutions, and all ROC interactions."
      trustBadges={[
        { icon: "✅", label: "ICSI Certified CS" },
        { icon: "🛡️", label: "Zero Penalty Record" },
        { icon: "📋", label: "All ROC Forms Covered" },
        { icon: "⚡", label: "5-Day Onboarding" },
      ]}
      stats={[
        { value: "800+", label: "Companies Managed" },
        { value: "Zero", label: "Penalty Instances" },
        { value: "100%", label: "Filing Accuracy" },
        { value: "4.8★", label: "Client Rating" },
      ]}
      services={[
        { icon: "📁", title: "Annual ROC Filing", desc: "MGT-7 (Annual Return), AOC-4 (Financial Statements), and all DIR forms filed before due dates. We track every deadline automatically.", stat: "100%", statLabel: "On-Time" },
        { icon: "📝", title: "Board Resolutions", desc: "Drafting of ordinary and special resolutions for all board and general meeting decisions — share allotments, director changes, and more.", stat: "Same Day", statLabel: "Drafts" },
        { icon: "📚", title: "Statutory Registers", desc: "Maintenance of all mandatory registers including Register of Members, Directors, Charges, and Related Party Transactions in digital and physical formats.", stat: "All 15", statLabel: "Registers" },
        { icon: "👔", title: "Director Compliance", desc: "DIN activation, DIR-3 KYC annual filing, disqualification checks, and appointment/resignation filings — no director penalty ever.", stat: "Zero", statLabel: "DIN Issues" },
        { icon: "🔄", title: "Share Transfers & Allotments", desc: "End-to-end handling of share transfers, new allotments, ESOP grants, and conversion filings with ROC and share registry.", stat: "Fast Track", statLabel: "Processing" },
        { icon: "🏢", title: "Registered Office Changes", desc: "Change of registered office within city, state, or across states — including INC-22, MGT-14, and publication requirements fully managed.", stat: "30 days", statLabel: "Completion" },
      ]}
      process={[
        { icon: "📞", title: "Company Review", desc: "We review your incorporation documents, current filing status, and any outstanding compliance gaps." },
        { icon: "📅", title: "Compliance Calendar", desc: "A personalised calendar of all your due dates — ROC forms, board meetings, KYC — shared on Day 1." },
        { icon: "📋", title: "Ongoing Filing", desc: "We prepare, review with you, and file all documents. Board resolutions drafted within 24 hours of request." },
        { icon: "📊", title: "Annual Health Check", desc: "Yearly review of your company's compliance standing with a formal report and recommendations." },
      ]}
      pricingPlans={[
        {
          name: "Private Ltd",
          price: "₹8,999",
          period: "/year",
          features: ["MGT-7 & AOC-4 filing", "Annual board meeting minutes", "DIR-3 KYC for all directors", "Statutory register maintenance", "Email support"],
        },
        {
          name: "Active Co.",
          price: "₹18,999",
          period: "/year",
          features: ["Everything in Private Ltd", "Share transfer filings", "Up to 4 board resolutions/month", "ROC correspondence", "Dedicated CS manager", "Priority support"],
        },
        {
          name: "Full Suite",
          price: "Custom",
          period: "pricing",
          features: ["Everything in Active Co.", "Unlimited board resolutions", "EGM/AGM management", "ESOP scheme compliance", "Group company filing", "Secretarial audit support"],
        },
      ]}
      faqs={[
        { q: "What is the annual ROC filing deadline for a private limited company?", a: "MGT-7 (Annual Return) must be filed within 60 days from AGM. AOC-4 (Financial Statements) within 30 days. AGM itself must be held within 6 months of the financial year end — typically by September 30." },
        { q: "What happens if we miss an ROC filing?", a: "Late filing attracts additional fees of ₹100 per day per form, with no upper limit. Prolonged non-filing can lead to director disqualification and company strike-off. We prevent this entirely." },
        { q: "Do you handle XBRL filing for large companies?", a: "Yes. Companies with paid-up capital above ₹5Cr or turnover above ₹100Cr are required to file financials in XBRL format. We handle the full conversion and submission." },
        { q: "Can you manage compliance for a group of companies?", a: "Absolutely. We offer group pricing for 2 or more companies under common ownership. A single CS manager handles all entities with consolidated reporting." },
        { q: "Is the CS / Company Secretary involved or is it just software filing?", a: "All our MCA filings are handled by practising Company Secretaries (PCS) holding valid certificates of practice. Every document is professionally reviewed before submission." },
      ]}
    />
  );
}