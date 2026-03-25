import ServicePageTemplate from "./ServicePageTemplate";

export default function GSTFilingPage() {
  return (
    <ServicePageTemplate
      accent="#10b981"
      emoji="📄"
      title="GST Filing Services"
      tagline="GSTIN Registered · Deadline Guaranteed · Expert CAs"
      heroDesc="Never miss a GST deadline again. Our dedicated specialists handle registration, monthly returns, ITC reconciliation, and full compliance audits — proactively."
      trustBadges={[
        { icon: "✅", label: "GST Certified Practitioners" },
        { icon: "⚡", label: "Zero Late Filings" },
        { icon: "🔒", label: "NDA Protected" },
        { icon: "🌍", label: "Pan-India Coverage" },
      ]}
      stats={[
        { value: "2000+", label: "Returns Filed" },
        { value: "₹50Cr+", label: "ITC Claimed" },
        { value: "100%", label: "On-Time Rate" },
        { value: "4.9★", label: "Client Rating" },
      ]}
      services={[
        { icon: "🏷️", title: "GST Registration", desc: "New GSTIN registration for businesses including composition dealers, e-commerce operators, and voluntary registrations — completed within 3 working days.", stat: "3 days", statLabel: "Turnaround" },
        { icon: "📋", title: "Monthly / Quarterly Returns", desc: "GSTR-1, GSTR-3B, GSTR-9 — filed accurately and on time every cycle. Automated reconciliation with your sales and purchase data.", stat: "100%", statLabel: "On-Time" },
        { icon: "💰", title: "Input Tax Credit (ITC)", desc: "Systematic ITC matching and optimisation to ensure you claim every rupee of eligible credit and reduce your effective tax outgo.", stat: "₹50Cr+", statLabel: "ITC Recovered" },
        { icon: "🔍", title: "Compliance Audit", desc: "Periodic health checks on your GST compliance — identifying gaps, excess tax paid, and exposure to notice risk before the authorities do.", stat: "Zero", statLabel: "Notices" },
        { icon: "📬", title: "Notice & Litigation Support", desc: "Expert representation for GST notices, assessments, and appeals. Our practitioners respond within 24 hours of receipt.", stat: "95%", statLabel: "Resolutions" },
        { icon: "🔄", title: "E-Way Bill Management", desc: "End-to-end e-way bill generation, extension, and tracking for inter-state and intra-state movement of goods above ₹50,000.", stat: "Same Day", statLabel: "Generation" },
      ]}
      process={[
        { icon: "📞", title: "Discovery Call", desc: "We understand your business type, turnover, and current GST setup in a free 20-min consultation." },
        { icon: "🔄", title: "Data Setup", desc: "We integrate with your accounting software or receive sales/purchase data in your preferred format." },
        { icon: "📊", title: "Monthly Filing", desc: "Returns filed by the 10th of every month. ITC reconciliation report shared with every filing." },
        { icon: "📬", title: "Compliance Reports", desc: "Monthly GST health report covering liability, ITC balance, and upcoming deadlines delivered to your inbox." },
      ]}
      pricingPlans={[
        {
          name: "Startup",
          price: "₹2,999",
          period: "/month",
          features: ["GSTR-1 & GSTR-3B filing", "Up to ₹1Cr annual turnover", "ITC reconciliation", "Email support", "Compliance reminders"],
        },
        {
          name: "Growth",
          price: "₹6,999",
          period: "/month",
          features: ["Everything in Startup", "GSTR-9 annual return", "Up to ₹5Cr turnover", "Dedicated GST manager", "Notice handling", "Priority support"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "pricing",
          features: ["Everything in Growth", "Unlimited turnover", "Multi-state GST", "Litigation support", "CFO-level reporting", "White-glove service"],
        },
      ]}
      faqs={[
        { q: "When is the GSTR-3B due every month?", a: "GSTR-3B is due on the 20th of every month for taxpayers with turnover above ₹5Cr, and the 22nd or 24th for others depending on the state. We track these automatically for you." },
        { q: "What if I have multiple GSTINs across states?", a: "We handle multi-state GST compliance under a single engagement. Each GSTIN is managed separately with consolidated reporting for your finance team." },
        { q: "Can you handle GST notices received from authorities?", a: "Yes. Our GST practitioners respond to all notices, including scrutiny assessments and demands, within 24 hours of you sharing the notice with us." },
        { q: "Do I need to share my accounting software access?", a: "It depends on your preference. We can work with read-only access to Tally/Zoho/QuickBooks, or you can share monthly data exports — whichever you're comfortable with." },
        { q: "What happens if a return is filed with an error?", a: "We file amendments (GSTR-1A, etc.) in the next cycle. Our double-check process reduces errors to near zero, but if it happens, we fix it at no additional cost." },
      ]}
    />
  );
}