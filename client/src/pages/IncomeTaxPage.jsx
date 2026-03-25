import ServicePageTemplate from "./ServicePageTemplate";

export default function IncomeTaxPage() {
  return (
    <ServicePageTemplate
      accent="#8b5cf6"
      emoji="📋"
      title="Income Tax Filing"
      tagline="ITR Experts · Max Deductions · Notice-Free Guarantee"
      heroDesc="Expert ITR filing for individuals, firms, and companies — maximising every legitimate deduction and keeping you fully protected from income tax notices."
      trustBadges={[
        { icon: "✅", label: "ICAI Certified CAs" },
        { icon: "🛡️", label: "Notice-Free Guarantee" },
        { icon: "💰", label: "Max Refund Assured" },
        { icon: "⚡", label: "48h Filing" },
      ]}
      stats={[
        { value: "5000+", label: "ITRs Filed" },
        { value: "₹8Cr+", label: "Refunds Processed" },
        { value: "48h", label: "Avg Turnaround" },
        { value: "Zero", label: "Penalty Instances" },
      ]}
      services={[
        { icon: "📑", title: "ITR Filing (All Forms)", desc: "ITR-1 through ITR-7 for salaried, business, capital gains, foreign income, and trust cases. We select the correct form and file error-free.", stat: "All 7", statLabel: "ITR Forms" },
        { icon: "🧭", title: "Year-Round Tax Planning", desc: "Proactive advisory to structure investments, salary components, and expenses to legally minimise your tax liability before the year ends.", stat: "30%", statLabel: "Tax Saved Avg." },
        { icon: "💸", title: "Refund Processing", desc: "We track your refund status and follow up with the CPC on your behalf. Most refunds are processed within 30–45 days of filing.", stat: "₹8Cr+", statLabel: "Refunds Claimed" },
        { icon: "📬", title: "Tax Notice Handling", desc: "We respond to all income tax notices — scrutiny assessments (143(2)), demands (156), and rectification requests — within 24 hours.", stat: "98%", statLabel: "Cases Resolved" },
        { icon: "📊", title: "Capital Gains Advisory", desc: "Precise calculation and tax optimisation for equity, debt, real estate, and unlisted securities — including LTCG, STCG, and indexation benefits.", stat: "Precise", statLabel: "Calculations" },
        { icon: "🌐", title: "NRI Tax Filing", desc: "Complete NRI income tax compliance — Indian income, DTAA benefits, FEMA compliance, and repatriation advisory.", stat: "15+", statLabel: "Countries Served" },
      ]}
      process={[
        { icon: "📝", title: "Document Collection", desc: "We send you a simple checklist. You share Form 16, bank statements, and investment proofs — we handle the rest." },
        { icon: "🔍", title: "Review & Optimise", desc: "Our CA reviews all deductions, exemptions, and rebates to ensure maximum tax benefit before filing." },
        { icon: "✅", title: "Filing & Verification", desc: "Return filed on the portal, e-verified immediately. You receive an acknowledgement within the hour." },
        { icon: "📊", title: "Post-Filing Support", desc: "We track your refund, respond to any CPC queries, and keep records for 7 years." },
      ]}
      pricingPlans={[
        {
          name: "Individual",
          price: "₹999",
          period: "/year",
          features: ["ITR-1 / ITR-2 filing", "Salary + house property income", "Basic deduction planning", "E-verification support", "Email support"],
        },
        {
          name: "Business",
          price: "₹4,999",
          period: "/year",
          features: ["Everything in Individual", "ITR-3 / ITR-4 (business income)", "Capital gains computation", "Advance tax advisory", "Dedicated CA manager", "Notice handling"],
        },
        {
          name: "Corporate",
          price: "Custom",
          period: "pricing",
          features: ["ITR-6 / ITR-7 filing", "Transfer pricing compliance", "MAT computation", "Audit support", "Director DIN compliance", "Year-round planning"],
        },
      ]}
      faqs={[
        { q: "What is the ITR filing deadline for individuals?", a: "For most individuals, the deadline is July 31st. For those requiring audit, it's October 31st. We track these and send reminders 30 days in advance." },
        { q: "Can you file ITR for previous years?", a: "Yes, belated returns can be filed for the previous two assessment years. We also handle updated returns (ITR-U) for corrections up to 2 years from the assessment year." },
        { q: "Do I need to share my login credentials?", a: "Not necessarily. We can file using a Power of Attorney or your One-Time Password (OTP) during the filing session. Your credentials remain fully private." },
        { q: "What documents are required for ITR filing?", a: "Typically: Form 16 (salaried), bank statements, investment proof (80C, 80D), home loan certificate, and capital gains statements. We send you a personalised checklist." },
        { q: "What if I receive a notice after filing?", a: "All our plans include notice handling at no extra cost. Our CA responds within 24 hours and represents you through the full resolution process." },
      ]}
    />
  );
}