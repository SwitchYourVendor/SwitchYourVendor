import { useRef } from "react";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import HeroSection from "./components/sections/HeroSection";
import InfiniteSlider from "./components/sections/InfiniteSlider";
import ServicesSection from "./components/sections/ServicesSection";
import WhySwitchSection from "./components/sections/WhySwitchSection";
import Roadmap from "./components/sections/Roadmap";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";

// Chatbot
import Chatbot from "./components/chatbot/Chatbot";

export default function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const howRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div
      style={{
        fontFamily: "'Nunito',system-ui,sans-serif",
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

      <Navbar
        heroRef={heroRef}
        servicesRef={servicesRef}
        whyRef={whyRef}
        howRef={howRef}
        contactRef={contactRef}
      />

      <HeroSection
        heroRef={heroRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />

      <InfiniteSlider />

      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      <WhySwitchSection whyRef={whyRef} />

      <Roadmap howRef={howRef} />

      <TestimonialsSection />

      <ContactSection contactRef={contactRef} />

      <Chatbot />

      <Footer contactRef={contactRef} />
    </div>
  );
}