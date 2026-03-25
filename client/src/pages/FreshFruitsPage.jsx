import ServicePageTemplate from "./ServicePageTemplate";

export default function FreshFruitsPage() {
  return (
    <ServicePageTemplate
      accent="#ef4444"
      emoji="🍎"
      title="Fresh Fruits Supply"
      tagline="Farm-Fresh · Organic Options · Monday Delivery"
      heroDesc="Boost employee wellness with farm-to-office fresh fruits delivered weekly. Seasonal varieties, organic options, and custom gift baskets — all handled for you."
      trustBadges={[
        { icon: "🌿", label: "Certified Organic Farms" },
        { icon: "🚚", label: "Next-Day Fresh Delivery" },
        { icon: "🧺", label: "Custom Gift Baskets" },
        { icon: "❄️", label: "Cold-Chain Logistics" },
      ]}
      stats={[
        { value: "150+", label: "Office Clients" },
        { value: "Organic", label: "Certified Sources" },
        { value: "Weekly", label: "Delivery Cycle" },
        { value: "4.9★", label: "Client Rating" },
      ]}
      services={[
        { icon: "🍎", title: "Weekly Fruit Box", desc: "Curated seasonal fruit boxes delivered every Monday morning. Choose from Standard (5 varieties) or Premium (8+ varieties) boxes.", stat: "8+", statLabel: "Varieties" },
        { icon: "🌿", title: "Organic Options", desc: "Certified organic fruits sourced directly from partnered farms in Maharashtra, Himachal Pradesh, and Karnataka — traceable to source.", stat: "100%", statLabel: "Traceable" },
        { icon: "🧺", title: "Custom Gift Baskets", desc: "Branded fruit hampers for client gifting, Diwali, onboarding, and special occasions. Logo packaging and handwritten cards available.", stat: "2 days", statLabel: "Lead Time" },
        { icon: "🥭", title: "Exotic & Seasonal Fruits", desc: "Mangoes, strawberries, cherries, dragon fruit, avocados — seasonal varieties rotated monthly for maximum freshness and variety.", stat: "Seasonal", statLabel: "Rotation" },
        { icon: "📅", title: "Daily Delivery Option", desc: "For larger offices needing daily replenishment — we deliver 6 days a week with cold-chain logistics maintaining freshness.", stat: "6 days", statLabel: "Per Week" },
        { icon: "📊", title: "Wellness Reporting", desc: "Monthly fruit consumption and wellness report — great for HR teams running employee wellness programmes.", stat: "Monthly", statLabel: "Reports" },
      ]}
      process={[
        { icon: "🍎", title: "Preference Setup", desc: "Tell us your team size, fruit preferences, any allergies, and whether you want organic-only. Takes 5 minutes." },
        { icon: "🌿", title: "Farm Sourcing", desc: "We source your order from the best available farms that week — prioritising locally grown and certified produce." },
        { icon: "🚚", title: "Monday Delivery", desc: "Fresh fruits arrive at your office every Monday before 9 AM. Cold-chain maintained throughout transit." },
        { icon: "🔄", title: "Feedback & Adjust", desc: "Rate each delivery via WhatsApp. We adjust varieties, quantities, and timing based on your feedback each cycle." },
      ]}
      pricingPlans={[
        {
          name: "Small Office",
          price: "₹1,499",
          period: "/week",
          features: ["Up to 20 employees", "5 fruit varieties", "Standard box", "Weekly Monday delivery", "WhatsApp support"],
        },
        {
          name: "Growing Team",
          price: "₹3,499",
          period: "/week",
          features: ["Up to 60 employees", "8+ fruit varieties", "Premium + exotic options", "Organic available", "Dedicated produce manager", "Gift basket discounts"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "pricing",
          features: ["Unlimited team size", "Daily delivery option", "Fully organic sourcing", "Branded gift hampers", "Multi-location delivery", "Wellness analytics"],
        },
      ]}
      faqs={[
        { q: "How fresh are the fruits at the time of delivery?", a: "All fruits are sourced 1–2 days before delivery from farms or wholesale markets and transported in cold-chain vehicles. We guarantee a minimum 5-day shelf life on delivery." },
        { q: "Can you accommodate fruit allergies or dislikes?", a: "Yes. During onboarding, note any fruits to exclude. We maintain a permanent exclusion list for your account and never include those items." },
        { q: "Do you offer gift hampers for Diwali or corporate events?", a: "Absolutely. We offer branded hampers with premium fruits, dry fruits, and accompaniments. Minimum order is 10 baskets, customised with your logo and a handwritten note." },
        { q: "What if delivery quality is unsatisfactory?", a: "Raise a complaint via WhatsApp within 4 hours of delivery. We'll either replace the items next day or credit your account. We haven't had a complaint rate above 0.5%." },
        { q: "Is organic certification verifiable?", a: "Yes. All our organic fruit suppliers hold NPOP or PGS-India certification. We share the farm certificate with your first organic order." },
      ]}
    />
  );
}
