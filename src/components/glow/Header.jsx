import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Treatments", href: "#treatments" },
  { label: "Pricing", href: "/glow-pricing.pdf", external: true },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
];

const INSTAGRAM_URL = "https://www.instagram.com/glowhealthandaesthetics/";
const LOGO_SRC = "/glow-images/gha-logo-cropped.png";

export default function Header({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    const delta = y - lastY.current;
    if (y < 80) {
      setHidden(false);
    } else if (delta > 6) {
      setHidden(true);
    } else if (delta < -6) {
      setHidden(false);
    }
    lastY.current = y;
  });

  useEffect(() => {
    if (mobileOpen) setHidden(false);
  }, [mobileOpen]);

  const handleNavClick = (link) => {
    setMobileOpen(false);
    if (link.external) {
      window.open(link.href, "_blank", "noopener,noreferrer");
      return;
    }
    const el = document.querySelector(link.href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 safe-top"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundColor: scrolled ? "rgba(251, 244, 232, 0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "0.5px solid #D8C3A5" : "none",
          transition: "background-color 400ms ease, backdrop-filter 400ms ease, border-color 400ms ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
          <a href="#home" className="flex items-center focus-glow rounded-sm" aria-label="Glow Health & Aesthetics home">
            <img
              src={LOGO_SRC}
              alt="Glow Health & Aesthetics"
              className="h-12 md:h-16 w-auto transition-all duration-300"
              style={{
                filter: scrolled
                  ? "brightness(0) saturate(100%) invert(28%) sepia(16%) saturate(680%) hue-rotate(20deg) brightness(92%) contrast(88%)"
                  : "drop-shadow(0 8px 18px rgba(30,27,24,0.22))",
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`font-body text-xs tracking-[0.1em] uppercase transition-colors duration-300 focus-glow rounded-sm ${
                  scrolled ? "text-warm-brown hover:text-deep-olive" : "text-cream/85 hover:text-cream"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 focus-glow ${
                scrolled
                  ? "text-warm-brown border border-champagne hover:text-deep-olive hover:border-soft-gold"
                  : "text-cream/80 border border-cream/35 hover:text-cream hover:bg-cream/10 backdrop-blur-sm"
              }`}
              aria-label="Follow Glow Health & Aesthetics on Instagram"
            >
              <Instagram size={15} />
            </a>
            <button
              onClick={onBookNow}
              className={`font-body text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg transition-all duration-300 focus-glow ${
                scrolled
                  ? "bg-deep-olive text-cream hover:bg-warm-brown"
                  : "bg-cream/15 text-cream border border-cream/40 hover:bg-cream/25 backdrop-blur-sm"
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden w-11 h-11 flex items-center justify-center focus-glow rounded-sm transition-colors duration-300 ${
              scrolled ? "text-deep-olive" : "text-cream"
            }`}
            aria-label="Open menu"
          >
            <Menu size={30} strokeWidth={1.75} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-ivory flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 h-20 flex items-center justify-between" style={{ borderBottom: "0.5px solid #D8C3A5" }}>
              <img
                src={LOGO_SRC}
                alt="Glow Health & Aesthetics"
                className="h-12 w-auto"
                style={{
                  filter: "brightness(0) saturate(100%) invert(28%) sepia(16%) saturate(680%) hue-rotate(20deg) brightness(92%) contrast(88%)",
                }}
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-deep-olive focus-glow rounded-sm"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1.75} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="font-display text-4xl text-deep-olive text-left py-3 hover:text-warm-brown transition-colors focus-glow rounded-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-warm-brown border border-champagne px-6 py-3 rounded-lg text-center w-full focus-glow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                aria-label="Follow Glow Health & Aesthetics on Instagram"
              >
                <Instagram size={15} />
                Instagram
              </motion.a>
              <motion.button
                onClick={() => { setMobileOpen(false); onBookNow(); }}
                className="mt-8 font-body text-xs tracking-[0.15em] uppercase bg-deep-olive text-cream px-6 py-3.5 rounded-lg text-center w-full focus-glow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                Book Now
              </motion.button>
            </nav>

            <div className="px-8 pb-10">
              <p className="font-body text-xs text-warm-brown/50 tracking-wide">
                Doctor-led aesthetic care &middot; Cape Town
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
