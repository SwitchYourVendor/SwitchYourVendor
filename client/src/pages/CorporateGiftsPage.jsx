import ServicePageTemplate from "./ServicePageTemplate";

export default function CorporateGiftsPage() {
  return (
    <ServicePageTemplate
      accent="#ec4899"
      emoji="🎁"
      title="Corporate Gifts"
      tagline="Curated Gifting · Premium Packaging · Pan-India Delivery"
      heroDesc="Make every occasion memorable. From onboarding kits to festive hampers and client appreciation boxes — all customised with your brand and delivered pan-India."
      trustBadges={[
        { icon: "🎨", label: "Custom Logo Branding" },
        { icon: "📦", label: "Premium Packaging" },
        { icon: "🚀", label: "Bulk Discounts" },
        { icon: "🌍", label: "Pan-India Delivery" },
      ]}
      stats={[
        { value: "1L+", label: "Gifts Delivered" },
        { value: "500+", label: "Brands Served" },
        { value: "2 days", label: "Express Option" },
        { value: "4.9★", label: "Recipient Rating" },
      ]}
      services={[
        { icon: "🎒", title: "Onboarding Kits", desc: "First-day welcome kits that make new hires feel valued — branded notebooks, pens, mugs, tech accessories, and a welcome note in your brand voice.", stat: "Day 1", statLabel: "Ready" },
        { icon: "🪔", title: "Festive Hampers", desc: "Diwali, Eid, Christmas, and New Year hampers curated for corporate gifting — sweets, dry fruits, premium chocolates, and artisanal products.", stat: "All Festivals", statLabel: "Covered" },
        { icon: "🏆", title: "Employee Recognition Gifts", desc: "Work anniversary awards, performance trophies, and milestone celebration boxes — personalised with the employee's name and achievement.", stat: "Personalised", statLabel: "Each Gift" },
        { icon: "💼", title: "Client Appreciation Boxes", desc: "Premium thank-you boxes for your top clients — curated with luxury items, your branded insert card, and elegant outer packaging.", stat: "Premium", statLabel: "Curation" },
        { icon: "🎨", title: "Custom Merchandise", desc: "Branded power banks, Bluetooth speakers, drinkware, and tech gadgets — useful gifts that keep your brand visible every day.", stat: "100+", statLabel: "Products" },
        { icon: "📦", title: "Bulk Gifting", desc: "Orders above 50 units receive special pricing and a dedicated gift manager who handles sourcing, packing, and individual delivery.", stat: "30%", statLabel: "Bulk Savings" },
      ]}
      process={[
        { icon: "🎯", title: "Gift Brief", desc: "Share the occasion, recipient profile, budget per gift, and branding requirements. We handle the rest." },
        { icon: "🎁", title: "Curation & Mockup", desc: "We present 2–3 curated gift options with visual mockups. You approve the design and contents." },
        { icon: "🏭", title: "Production & Packing", desc: "Gifts assembled, branded, and packed with premium materials. Individual name cards printed for personalised gifts." },
        { icon: "🚚", title: "Delivery", desc: "Delivered to your office or directly to recipients across India. Real-time tracking shared for each shipment." },
      ]}
      pricingPlans={[
        {
          name: "Standard",
          price: "₹499",
          period: "/gift",
          features: ["Minimum 10 gifts", "Standard product selection", "Logo-printed packaging", "Basic insert card", "7-day delivery"],
        },
        {
          name: "Premium",
          price: "₹1,499",
          period: "/gift",
          features: ["Minimum 25 gifts", "Premium product curation", "Custom branded box", "Personalised note card", "Dedicated gift manager", "3-day delivery"],
        },
        {
          name: "Luxury",
          price: "Custom",
          period: "pricing",
          features: ["No minimum order", "Luxury product sourcing", "Rigid branded box", "Handwritten cards", "Individual delivery pan-India", "Same-day express option"],
        },
      ]}
      faqs={[
        { q: "Can gifts be delivered directly to employee or client addresses?", a: "Yes. We handle individual address shipping across India. Share an Excel sheet with names and addresses — we dispatch and share tracking for every shipment." },
        { q: "How early should I place a Diwali gifting order?", a: "We recommend placing Diwali orders at least 3 weeks in advance. During peak season (October), our slots fill up quickly. Early orders get priority and better pricing." },
        { q: "Can I mix different gift types in a single order?", a: "Absolutely. You can have different gift tiers for different recipient groups — clients, employees, and management — all under one PO with individual delivery." },
        { q: "Do you handle international deliveries?", a: "We currently deliver pan-India. For international deliveries, we can prepare the gift packages and hand them to your preferred international courier." },
        { q: "What is the return policy for corporate gifts?", a: "Customised gifts are non-refundable once produced. However, we replace any damaged gifts free of charge. We share photos before dispatch for your approval." },
      ]}
    />
  );
}
