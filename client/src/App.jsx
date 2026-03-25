import { useRef } from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Home sections
import HeroSection from "./components/sections/HeroSection";
import InfiniteSlider from "./components/sections/InfiniteSlider";
import ServicesSection from "./components/sections/ServicesSection";
import WhySwitchSection from "./components/sections/WhySwitchSection";
import Roadmap from "./components/sections/Roadmap";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import Chatbot from "./components/chatbot/Chatbot";

// ── Compliance service pages ──
import AccountingPage     from "./pages/AccountingPage";
import GSTFilingPage      from "./pages/GSTFilingPage";
import IncomeTaxPage      from "./pages/IncomeTaxPage";
import MCACompliancePage  from "./pages/MCACompliancePage";

// ── Supply service pages ──
import OfficeSuppliesPage   from "./pages/OfficeSuppliesPage";
import KitchenSuppliesPage  from "./pages/KitchenSuppliesPage";
import FreshFruitsPage      from "./pages/FreshFruitsPage";
import BrandedApparelPage   from "./pages/BrandedApparelPage";
import CorporateGiftsPage   from "./pages/CorporateGiftsPage";
import CanteenSetupPage     from "./pages/CanteenSetupPage";

// ── Resource pages ──
import AboutPage    from "./pages/AboutPage";
import ContactPage  from "./pages/ContactPage";
import PartnerPage  from "./pages/PartnerPage";
import { PrivacyPolicyPage, TermsOfServicePage, RefundPolicyPage } from "./pages/PolicyPages";

/* ── Home page ── */
function HomePage() {
  const heroRef     = useRef(null);
  const servicesRef = useRef(null);
  const whyRef      = useRef(null);
  const howRef      = useRef(null);
  const contactRef  = useRef(null);

  return (
    <div style={{ fontFamily:"'Nunito',system-ui,sans-serif", color:"#0f172a", background:"#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        input:focus,select:focus,textarea:focus{border-color:#dc2626!important;background:white!important}
        @keyframes fadeSlideIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
      `}</style>

      <Navbar heroRef={heroRef} servicesRef={servicesRef} whyRef={whyRef} howRef={howRef} contactRef={contactRef} />
      <HeroSection heroRef={heroRef} servicesRef={servicesRef} contactRef={contactRef} />
      <InfiniteSlider />
      <div ref={servicesRef}><ServicesSection /></div>
      <WhySwitchSection whyRef={whyRef} />
      <Roadmap howRef={howRef} />
      <TestimonialsSection />
      <ContactSection contactRef={contactRef} />
      <Chatbot />
      <Footer contactRef={contactRef} servicesRef={servicesRef} />
    </div>
  );
}

/* ── Root router ── */
export default function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Compliance service pages */}
      <Route path="/services/accounting"    element={<AccountingPage />} />
      <Route path="/services/gst-filing"    element={<GSTFilingPage />} />
      <Route path="/services/income-tax"    element={<IncomeTaxPage />} />
      <Route path="/services/mca-compliance" element={<MCACompliancePage />} />

      {/* Supply service pages */}
      <Route path="/services/office-supplies"  element={<OfficeSuppliesPage />} />
      <Route path="/services/kitchen-supplies" element={<KitchenSuppliesPage />} />
      <Route path="/services/fresh-fruits"     element={<FreshFruitsPage />} />
      <Route path="/services/branded-apparel"  element={<BrandedApparelPage />} />
      <Route path="/services/corporate-gifts"  element={<CorporateGiftsPage />} />
      <Route path="/services/canteen-setup"    element={<CanteenSetupPage />} />

      {/* Resource pages */}
      <Route path="/about"           element={<AboutPage />} />
      <Route path="/contact"         element={<ContactPage />} />
      <Route path="/partner"         element={<PartnerPage />} />
      <Route path="/privacy-policy"  element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/refund-policy"   element={<RefundPolicyPage />} />
    </Routes>
  );
}
