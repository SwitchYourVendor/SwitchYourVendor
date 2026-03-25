import ServicePageTemplate from "./ServicePageTemplate";

export default function OfficeSuppliesPage() {
  return (
    <ServicePageTemplate
      accent="#0ea5e9"
      emoji="📦"
      title="Office Supplies"
      tagline="Same-Day Dispatch · Bulk Savings · Dedicated Account Manager"
      heroDesc="From pens to ergonomic chairs — everything your office needs, delivered on time every time. One order, one invoice, zero hassle."
      trustBadges={[
        { icon: "🚀", label: "Same-Day Dispatch" },
        { icon: "💰", label: "Up to 35% Bulk Savings" },
        { icon: "📦", label: "10,000+ SKUs" },
        { icon: "🌍", label: "Pan-India Delivery" },
      ]}
      stats={[
        { value: "10K+", label: "Products Available" },
        { value: "35%", label: "Bulk Savings" },
        { value: "24h", label: "Avg Delivery" },
        { value: "500+", label: "Office Clients" },
      ]}
      services={[
        { icon: "✏️", title: "Stationery & Paper", desc: "Complete range of pens, notebooks, files, folders, paper reams, envelopes, and desk organisers — all branded or plain as required.", stat: "2000+", statLabel: "SKUs" },
        { icon: "💻", title: "Tech Accessories", desc: "Keyboards, mice, USB hubs, cables, headsets, webcams, monitor stands, and laptop accessories from leading brands.", stat: "500+", statLabel: "Tech Items" },
        { icon: "🪑", title: "Furniture Solutions", desc: "Ergonomic chairs, standing desks, storage cabinets, meeting room furniture — supplied and assembled at your location.", stat: "Same Week", statLabel: "Assembly" },
        { icon: "🗂️", title: "Printing Supplies", desc: "Toner cartridges, printer paper, lamination pouches, binding supplies — compatible with all major printer brands.", stat: "All Brands", statLabel: "Compatible" },
        { icon: "📦", title: "Bulk Orders", desc: "Special pricing for orders above ₹25,000. Dedicated purchase manager assigns bulk-rate catalogues and priority fulfilment.", stat: "35%", statLabel: "Discount" },
        { icon: "🔁", title: "Auto-Replenishment", desc: "Set monthly par levels for your essentials. We auto-replenish when stock runs low — your office never runs out.", stat: "Zero", statLabel: "Stockouts" },
      ]}
      process={[
        { icon: "📋", title: "Catalogue Onboarding", desc: "We map your office requirements, assign a dedicated catalogue with your pricing, and set up your account portal." },
        { icon: "🛒", title: "Order Placement", desc: "Order via our portal, WhatsApp, or email. Bulk orders get a dedicated purchase manager." },
        { icon: "🚚", title: "Dispatch & Delivery", desc: "In-stock items dispatched same day. Delivery within 24–48 hours across metros, 3–5 days pan-India." },
        { icon: "📊", title: "Monthly Reporting", desc: "Spend analytics report every month — by category, department, or cost centre — for easy budget tracking." },
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "₹0",
          period: "setup fee",
          features: ["Access to full catalogue", "Standard pricing", "Email ordering", "7-day delivery", "Monthly invoice"],
        },
        {
          name: "Business",
          price: "₹499",
          period: "/month",
          features: ["Everything in Starter", "Bulk pricing (up to 20% off)", "Dedicated account manager", "48-hour delivery SLA", "Purchase portal access", "Spend reports"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "pricing",
          features: ["Everything in Business", "Up to 35% bulk discount", "Same-day dispatch", "Auto-replenishment", "ERP integration", "Multi-location delivery"],
        },
      ]}
      faqs={[
        { q: "What is the minimum order value?", a: "There is no minimum order value for registered clients. However, orders below ₹500 attract a ₹75 shipping fee. Orders above ₹1,500 ship free." },
        { q: "Can I order products not in your catalogue?", a: "Yes. Our procurement team can source any office product within 5–7 business days. Just send us the specification and we'll provide a quote." },
        { q: "Do you offer branded stationery with our company logo?", a: "Absolutely. We offer custom-branded notebooks, pens, folders, and packaging with a minimum order of 50 units. Design support is included." },
        { q: "How do returns work for damaged items?", a: "Report damaged deliveries within 48 hours with photos. We dispatch replacements within 24 hours at no cost. No questions asked." },
        { q: "Can we get a consolidated monthly invoice for multiple locations?", a: "Yes. Enterprise clients receive a single consolidated invoice covering all branches, with a breakdown by location for easy accounting." },
      ]}
    />
  );
}