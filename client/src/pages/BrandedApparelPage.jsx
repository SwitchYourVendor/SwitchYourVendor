import ServicePageTemplate from "./ServicePageTemplate";

export default function BrandedApparelPage() {
  return (
    <ServicePageTemplate
      accent="#6366f1"
      emoji="👕"
      title="Branded Apparel"
      tagline="Custom Branding · 7-Day Delivery · MOQ 25 Pieces"
      heroDesc="Elevate your brand identity with high-quality corporate apparel. Our in-house design team creates uniforms, event wear, and merchandise employees are proud to wear."
      trustBadges={[
        { icon: "🎨", label: "In-House Design Team" },
        { icon: "⚡", label: "7-Day Turnaround" },
        { icon: "👕", label: "MOQ Just 25 Pieces" },
        { icon: "🏭", label: "Premium Fabrics" },
      ]}
      stats={[
        { value: "50K+", label: "Pieces Delivered" },
        { value: "7 days", label: "Avg Turnaround" },
        { value: "98%", label: "Quality Approval" },
        { value: "300+", label: "Brand Clients" },
      ]}
      services={[
        { icon: "👔", title: "Corporate Uniforms", desc: "Formal shirts, trousers, blazers, and complete uniform sets for your team. Fabric selection, fit options, and logo embroidery included.", stat: "All Fits", statLabel: "Available" },
        { icon: "👕", title: "Event & Promo T-Shirts", desc: "Custom-printed tees for team events, conferences, product launches, and brand activations. Soft cotton, moisture-wicking, or premium piqué options.", stat: "5 days", statLabel: "Turnaround" },
        { icon: "🧢", title: "Caps & Accessories", desc: "Embroidered caps, scarves, jackets, tote bags, and lanyards — complete your brand merchandise line-up.", stat: "20+", statLabel: "Products" },
        { icon: "🎨", title: "Design Support", desc: "Our in-house designers help create or adapt your logo for embroidery or print. Mockup shared within 24 hours for approval before production.", stat: "24h", statLabel: "Mockup" },
        { icon: "📦", title: "Bulk Orders", desc: "Orders above 500 units receive special factory-direct pricing — savings of 25–40% over standard rates with dedicated production manager.", stat: "40%", statLabel: "Bulk Savings" },
        { icon: "🏷️", title: "Custom Packaging", desc: "Branded boxes, tissue paper, hang tags, and polybags for retail-quality presentation of your corporate merchandise.", stat: "Retail", statLabel: "Quality" },
      ]}
      process={[
        { icon: "🎨", title: "Design Brief", desc: "Share your logo, preferred colours, fabric preference, and sizing requirements. Our designer starts the mockup immediately." },
        { icon: "✅", title: "Mockup Approval", desc: "Digital mockup delivered within 24 hours. We refine until you're 100% happy — unlimited revisions at no cost." },
        { icon: "🏭", title: "Production", desc: "Approved designs go into production at our partner factories. Real-time updates sent at each production milestone." },
        { icon: "📦", title: "QC & Delivery", desc: "100% quality inspection before dispatch. Delivered in 7–10 days with tracking. Replacement for any defective pieces." },
      ]}
      pricingPlans={[
        {
          name: "Starter",
          price: "₹299",
          period: "/piece",
          features: ["MOQ 25 pieces", "1 logo placement", "Standard cotton fabric", "Basic colour options", "10-day delivery"],
        },
        {
          name: "Business",
          price: "₹199",
          period: "/piece",
          features: ["MOQ 100 pieces", "2 logo placements", "Premium fabric options", "Full colour range", "Design support included", "7-day delivery"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "pricing",
          features: ["MOQ 500+ pieces", "Factory-direct pricing", "All fabric grades", "Custom packaging", "Dedicated production manager", "5-day express option"],
        },
      ]}
      faqs={[
        { q: "What is the minimum order quantity (MOQ)?", a: "Our MOQ is 25 pieces per design and colour. For orders below 25 pieces, we can accommodate at a slightly higher per-unit cost — contact us to discuss." },
        { q: "Can you match our exact Pantone brand colours?", a: "Yes. We work with Pantone-matched thread for embroidery and CMYK-matched inks for printing. Share your brand guideline and we'll match precisely." },
        { q: "How do I provide sizes for a large team?", a: "We send you a simple size measurement form. You collect sizes from your team and share the size breakdown. We produce accordingly with a 5% buffer for re-orders." },
        { q: "What happens if I receive a defective piece?", a: "We replace any defective piece at no cost within our 30-day quality guarantee period. Just share a photo and we'll dispatch the replacement within 48 hours." },
        { q: "Can you ship directly to employee home addresses?", a: "Yes, for orders above 100 pieces. We can ship individually packed pieces to multiple addresses — ideal for remote teams. Additional shipping charges apply." },
      ]}
    />
  );
}
