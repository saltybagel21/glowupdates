import Header from "../components/glow/Header.jsx";
import HeroSection from "../components/glow/HeroSection.jsx";
import PhilosophySection from "../components/glow/PhilosophySection.jsx";
import TreatmentsSection from "../components/glow/TreatmentsSection.jsx";
import WhyGlowSection from "../components/glow/WhyGlowSection.jsx";
import AboutSection from "../components/glow/AboutSection.jsx";
import InstagramGrid from "../components/glow/InstagramGrid.jsx";
import LocationsSection from "../components/glow/LocationsSection.jsx";
import TestimonialsSection from "../components/glow/TestimonialsSection.jsx";
import FaqSection from "../components/glow/FaqSection.jsx";
import CtaSection from "../components/glow/CtaSection.jsx";
import Footer from "../components/glow/Footer.jsx";
import WhatsAppFloat from "../components/glow/WhatsAppFloat.jsx";

const FRESHA_URL =
  "https://www.fresha.com/a/nuskinnovation-cape-town-cape-town-nuskinnovation-cape-town-kuk7j2hm";

export default function Home() {
  const openBooking = () => {
    window.open(FRESHA_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EADBC4" }}>
      <Header onBookNow={openBooking} />

      <main>
        <HeroSection onBookNow={openBooking} />
        <PhilosophySection />
        <TreatmentsSection onBookNow={openBooking} />
        <WhyGlowSection />
        <AboutSection />
        <TestimonialsSection />
        <InstagramGrid />
        <LocationsSection />
        <FaqSection />
        <CtaSection onBookNow={openBooking} />
      </main>

      <Footer />

      <WhatsAppFloat />
    </div>
  );
}
