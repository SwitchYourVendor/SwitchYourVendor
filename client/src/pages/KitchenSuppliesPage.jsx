import ServicePageTemplate from "./ServicePageTemplate";

export default function KitchenSuppliesPage() {
  return (
    <ServicePageTemplate
      accent="#f97316"
      emoji="☕"
      title="Kitchen & Pantry Supplies"
      tagline="Premium Pantry · Scheduled Delivery · Zero Inventory Stress"
      heroDesc="From gourmet coffee to healthy snacks — we curate and deliver everything your office pantry needs on a schedule that works for your team."
      trustBadges={[
        { icon: "☕", label: "Premium Quality" },
        { icon: "📅", label: "Scheduled Delivery" },
        { icon: "🌿", label: "Healthy Options" },
        { icon: "💰", label: "Subscription Savings" },
      ]}
      stats={[
        { value: "200+", label: "Pantry Clients" },
        { value: "500+", label: "Products" },
        { value: "Weekly", label: "Delivery Cycle" },
        { value: "4.9★", label: "Client Rating" },
      ]}
      services={[
        { icon: "☕", title: "Beverages", desc: "Premium coffee beans, instant coffee, herbal teas, green teas, cold brew concentrates, juices, and flavoured water — for every taste.", stat: "50+", statLabel: "Varieties" },
        { icon: "🍪", title: "Snacks & Munchies", desc: "Healthy granola bars, nuts, seeds, dry fruits, biscuits, namkeen, and protein snacks. Options for all dietary preferences.", stat: "100+", statLabel: "Snack SKUs" },
        { icon: "🥣", title: "Breakfast Supplies", desc: "Oats, cereals, bread, spreads, milk, yoghurt, and fresh juices — stocked fresh every week for your early risers.", stat: "Fresh", statLabel: "Weekly" },
        { icon: "🧻", title: "Disposables", desc: "Paper cups, plates, napkins, tissue rolls, cling wrap, aluminium foil, and eco-friendly compostable options.", stat: "Eco", statLabel: "Options" },
        { icon: "🍳", title: "Kitchen Appliances", desc: "Coffee machines, kettles, microwaves, mini-fridges, water purifiers — supplied and maintained under a single contract.", stat: "AMC", statLabel: "Included" },
        { icon: "📦", title: "Monthly Subscription", desc: "Set your pantry basket once — we deliver the same (or updated) order every month. Best pricing and zero re-ordering effort.", stat: "15%", statLabel: "Sub Savings" },
      ]}
      process={[
        { icon: "☕", title: "Pantry Audit", desc: "We visit your office (or do a virtual walkthrough) to understand team size, preferences, and current pantry gaps." },
        { icon: "📋", title: "Curated Basket", desc: "We build a custom pantry basket matched to your team size, budget, and preferences — including healthy options." },
        { icon: "🚚", title: "Scheduled Delivery", desc: "Weekly or bi-weekly delivery on a fixed day. Everything organised and stocked in your pantry by our delivery team." },
        { icon: "🔄", title: "Replenishment", desc: "Your dedicated pantry manager tracks consumption and auto-adjusts quantities each cycle. Never run out." },
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "₹3,999",
          period: "/month",
          features: ["Up to 20 employees", "Weekly delivery", "Standard beverage range", "Basic snacks selection", "Monthly billing"],
        },
        {
          name: "Growth",
          price: "₹8,999",
          period: "/month",
          features: ["Up to 75 employees", "Bi-weekly delivery", "Premium beverage selection", "Healthy + indulgent snacks", "Appliance supply", "Dedicated pantry manager"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "pricing",
          features: ["Unlimited team size", "Custom delivery schedule", "Full pantry management", "Appliance maintenance", "Multi-floor / multi-office", "Spend analytics"],
        },
      ]}
      faqs={[
        { q: "Can we customise the pantry basket based on dietary preferences?", a: "Yes, fully. We offer vegan, gluten-free, diabetic-friendly, and Jain options. Just share your team's preferences during onboarding and we'll curate accordingly." },
        { q: "Do you supply and maintain coffee machines?", a: "Yes. We supply bean-to-cup, filter, and capsule coffee machines on a monthly rental or outright purchase basis. Annual maintenance contracts are included in enterprise plans." },
        { q: "How do you handle product expiry?", a: "All perishable items are supplied with a minimum 60-day shelf life from delivery. Our team does a quick pantry check with every delivery to remove near-expiry items." },
        { q: "Is there a minimum order value?", a: "Starter plans begin at ₹3,999/month. For ad-hoc orders outside the subscription, the minimum order value is ₹1,500 with free delivery." },
        { q: "Can we change our basket month-to-month?", a: "Absolutely. You can update your basket any time before the 20th of the month for the next cycle. We accommodate seasonal changes, new hires, and team preferences." },
      ]}
    />
  );
}