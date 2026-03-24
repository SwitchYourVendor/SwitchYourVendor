import { useState, useRef } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import InfiniteSlider from "./components/sections/InfiniteSlider";
import ServicesSection from "./components/sections/ServicesSection";
import WhySwitchSection from "./components/sections/WhySwitchSection";
import Roadmap from "./components/sections/Roadmap";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import Chatbot from "./components/chatbot/Chatbot";

import "./index.css";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const howRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.company ||
      !form.service
    ) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  return (
    <div
      style={{
        fontFamily: "'Nunito', system-ui, sans-serif",
        color: "#0f172a",
        background: "white",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input:focus, select:focus, textarea:focus {
          border-color: #dc2626 !important;
          background: white !important;
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <Navbar
        onLogoClick={() => scrollTo(heroRef)}
        onServicesClick={() => scrollTo(servicesRef)}
        onWhyClick={() => scrollTo(whyRef)}
        onHowClick={() => scrollTo(howRef)}
        onGetStartedClick={() => scrollTo(contactRef)}
      />

      {/* ── HERO ── */}
      <div ref={heroRef}>
        <HeroSection
          onQuoteClick={() => scrollTo(contactRef)}
          onExploreClick={() => scrollTo(servicesRef)}
        />
      </div>

      {/* ── INFINITE PARTNER SLIDER ── */}
      <InfiniteSlider />

      {/* ── SERVICES (tab toggle) ── */}
      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      {/* ── WHY SWITCH ── */}
      <div ref={whyRef}>
        <WhySwitchSection />
      </div>

      {/* ── HOW IT WORKS / ROADMAP ── */}
      <div ref={howRef}>
        <Roadmap />
      </div>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── CONTACT ── */}
      <div ref={contactRef}>
        <ContactSection
          form={form}
          setForm={setForm}
          submitted={submitted}
          setSubmitted={setSubmitted}
          onSubmit={handleSubmit}
        />
      </div>

      {/* ── AI CHATBOT (fixed FAB) ── */}
      <Chatbot />

      {/* ── FOOTER ── */}
      <Footer onContactClick={() => scrollTo(contactRef)} />
    </div>
  );
}