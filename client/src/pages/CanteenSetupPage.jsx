import ServicePageTemplate from "./ServicePageTemplate";

export default function CanteenSetupPage() {
  return (
    <ServicePageTemplate
      accent="#14b8a6"
      emoji="🥗"
      title="Organic Canteen Setup"
      tagline="Organic Menus · Certified Nutritionists · Full Operations"
      heroDesc="We set up and manage your entire office canteen — from equipment to daily operations. Balanced organic menus, hygiene audits, and zero management headache for you."
      trustBadges={[
        { icon: "🌿", label: "Certified Organic Ingredients" },
        { icon: "👨‍⚕️", label: "FSSAI Licensed" },
        { icon: "🧹", label: "Weekly Hygiene Audits" },
        { icon: "📊", label: "Monthly Wellness Reports" },
      ]}
      stats={[
        { value: "80+", label: "Canteens Running" },
        { value: "FSSAI", label: "Licensed & Audited" },
        { value: "30 days", label: "Setup Time" },
        { value: "4.8★", label: "Employee Rating" },
      ]}
      services={[
        { icon: "🍽️", title: "Organic Menu Design", desc: "Certified nutritionists design balanced weekly menus using organic and locally sourced ingredients — covering breakfast, lunch, and snack stations.", stat: "FSSAI", statLabel: "Certified" },
        { icon: "🏗️", title: "Full Canteen Setup", desc: "End-to-end setup including kitchen equipment, serving counters, dining furniture, ventilation, and food safety infrastructure.", stat: "30 days", statLabel: "Setup" },
        { icon: "👨‍🍳", title: "Staffing & Operations", desc: "We hire, train, and manage all canteen staff — head cook, helpers, and service staff. HR, payroll, and training fully handled by us.", stat: "Full", statLabel: "Staffing" },
        { icon: "🛒", title: "Organic Procurement", desc: "Daily sourcing from certified organic farms and FSSAI-approved suppliers. Cold-chain maintained for all perishables. Zero compromise on quality.", stat: "Daily", statLabel: "Fresh Stock" },
        { icon: "🧹", title: "Hygiene & Safety", desc: "Weekly third-party hygiene audits, daily temperature logs, pest control, and FSSAI compliance documentation — all maintained by our operations team.", stat: "Weekly", statLabel: "Audits" },
        { icon: "📊", title: "Wellness Analytics", desc: "Monthly canteen performance report covering meal counts, nutrition scores, cost per meal, waste metrics, and employee satisfaction ratings.", stat: "Monthly", statLabel: "Reports" },
      ]}
      process={[
        { icon: "🏢", title: "Site Assessment", desc: "Our team visits your office to assess kitchen space, electrical load, ventilation, and headcount to design the right setup." },
        { icon: "🍽️", title: "Menu & Design", desc: "Nutritionist designs your opening menu. Equipment layout and interior plan presented for your approval within a week." },
        { icon: "🏗️", title: "Setup & Installation", desc: "Equipment installed, staff onboarded and trained, trial runs conducted. Your canteen is ready within 30 days of agreement." },
        { icon: "📊", title: "Ongoing Operations", desc: "We manage everything daily. You receive a monthly performance dashboard and our ops manager is always reachable." },
      ]}
      pricingPlans={[
        {
          name: "Small Canteen",
          price: "₹49,999",
          period: "/month",
          features: ["Up to 100 employees", "Breakfast + lunch service", "Organic menu design", "Canteen staff managed", "Weekly hygiene audit", "Monthly report"],
        },
        {
          name: "Mid-Size",
          price: "₹99,999",
          period: "/month",
          features: ["Up to 300 employees", "All-day service", "Snack station included", "Custom menu flexibility", "Full procurement managed", "Dedicated ops manager"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "pricing",
          features: ["300+ employees", "Multiple food stations", "Cafeteria-style layout", "Event catering included", "Digital meal tracking", "Multi-floor operations"],
        },
      ]}
      faqs={[
        { q: "How long does it take to set up a canteen from scratch?", a: "Typically 25–30 days from signing the agreement — covering site preparation, equipment installation, staff hiring, menu finalisation, and trial runs. We've done express setups in 15 days for urgent cases." },
        { q: "Do you handle the canteen staff's employment and payroll?", a: "Yes. All canteen staff are on our payroll. We handle hiring, training, leaves, replacements, and compliance. You have no HR responsibility for canteen staff." },
        { q: "Are the ingredients actually certified organic?", a: "We source from NPOP-certified farms and FSSAI-approved organic suppliers. Certificates are shared during onboarding and updated annually. Not all items are organic — we clearly label what is." },
        { q: "Can employees pay individually or is it subsidised?", a: "Both models work. We can set up a UPI/RFID card payment system for employees, or your company can fully or partially subsidise meals. We bill your company monthly." },
        { q: "What if we want to shut down the canteen?", a: "Our canteen management contracts have a 30-day exit notice. We'll handle staff transition and equipment removal. Equipment supplied by us is taken back; client-purchased equipment stays." },
      ]}
    />
  );
}
