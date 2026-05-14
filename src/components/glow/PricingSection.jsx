import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CATEGORIES = [
  {
    id: "injectables",
    label: "Injectables",
    items: [
      {
        name: "Botulinum Toxin (Anti-Wrinkle)",
        note: "Consultation R750 (R350 deducted if treatment done)",
        lines: [
          { label: "Face unit", price: "R90 / unit" },
          { label: "Body unit", price: "R75 / unit" },
          { label: "Forehead + Frown (est. 30–40 units)", price: "from R2,700" },
          { label: "Crow's Feet (est. 12–20 units)", price: "from R1,080" },
          { label: "Masseter / TMJ (est. 40–80 units)", price: "from R3,600" },
          { label: "Lip Flip / Gummy Smile", price: "from R540" },
          { label: "Nefertiti Lift / Shoulders", price: "from R3,600" },
          { label: "Excessive Sweating", price: "from R7,500" },
        ],
      },
      {
        name: "Dermal Fillers",
        lines: [
          { label: "Face Filler (per ml)", price: "R4,600" },
          { label: "Lip Filler 0.5ml", price: "R2,800" },
          { label: "Lip Filler 1ml", price: "R5,300" },
          { label: "Lip Filler 2ml", price: "R10,200" },
        ],
      },
      {
        name: "Skin Boosters",
        note: "Micro-injections that hydrate and rejuvenate from within.",
        lines: [
          { label: "Profhilo — Full Face or Neck", price: "R5,200" },
          { label: "Profhilo — Full Face & Neck", price: "R9,800" },
          { label: "Swiss Hyavital", price: "R4,900" },
          { label: "Swiss SuperHydra", price: "R6,000" },
        ],
      },
      {
        name: "Biostimulators",
        note: "Stimulate natural collagen for gradual firmness and structure.",
        lines: [
          { label: "PLLA — 1 vial", price: "R7,500" },
          { label: "PLLA — 2 vials", price: "R14,500" },
          { label: "CaHA (HarmoniCa)", price: "R5,500" },
        ],
      },
    ],
  },
  {
    id: "regenerative",
    label: "Regenerative",
    items: [
      {
        name: "Exosomes Mesotherapy",
        note: "Advanced regenerative messengers for skin renewal.",
        lines: [
          { label: "Under Eyes only", price: "R2,000" },
          { label: "Full Face", price: "R3,000" },
          { label: "Neck", price: "R3,000" },
          { label: "Face & Neck", price: "R5,000" },
        ],
      },
      {
        name: "Polynucleotides (PDRN)",
        note: "DNA-fragment injectables for deep skin repair and hydration.",
        lines: [
          { label: "Eye Mesotherapy", price: "R5,500" },
          { label: "Face Mesotherapy", price: "R5,500" },
          { label: "Neck Mesotherapy", price: "R5,500" },
          { label: "Face & Neck", price: "R10,000" },
        ],
      },
      {
        name: "Medical Microneedling",
        lines: [
          { label: "HydraGlow", price: "R2,000" },
          { label: "Salmon DNA (PDRN)", price: "R3,500" },
          { label: "Exosomes", price: "R2,000" },
          { label: "Melaclear (Pigmentation)", price: "R2,000" },
          { label: "Microtox (Botox)", price: "R3,500" },
          { label: "Hair Regeneration", price: "R1,500" },
        ],
      },
    ],
  },
  {
    id: "wellness",
    label: "Wellness & IV",
    items: [
      {
        name: "IV Vitamin Drips",
        note: "All sessions R1,500. Call-out fee R500.",
        lines: [
          { label: "IV Boost", price: "R1,500" },
          { label: "IV Skin Glow", price: "R1,500" },
          { label: "IV Hangover", price: "R1,500" },
          { label: "IV Detox", price: "R1,500" },
          { label: "IV Immune Boost", price: "R1,500" },
          { label: "IV Recovery", price: "R1,500" },
          { label: "IV Mental Fatigue", price: "R1,500" },
          { label: "IV Pregnancy", price: "R1,500" },
        ],
      },
      {
        name: "NAD⁺ Therapy",
        note: "Biohacking for mitochondrial health, energy and longevity.",
        lines: [
          { label: "Subcutaneous Pens (per pen)", price: "R1,600" },
          { label: "IV NAD⁺ 1 Drip", price: "R3,000" },
          { label: "Starter Protocol (4 drips)", price: "R11,000" },
        ],
      },
      {
        name: "Fat Burning Injections",
        note: "Lipolytic & Lymphatic — targeted contouring.",
        lines: [
          { label: "Per vial", price: "R800" },
        ],
      },
    ],
  },
  {
    id: "other",
    label: "Other",
    items: [
      {
        name: "Weight-Loss Program (GLP-1)",
        note: "Doctor-guided. Initial consult and blood tests mandatory.",
        lines: [
          { label: "Initial Consultation", price: "R750" },
          { label: "Follow-up Consultation", price: "R450" },
          { label: "Treatment plan & pricing", price: "Discussed individually" },
        ],
      },
      {
        name: "Keloid Steroid Injections",
        note: "Prior consult required to assess activity.",
        lines: [
          { label: "Per keloid", price: "R1,000" },
        ],
      },
    ],
  },
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function TreatmentAccordion({ item, open, onToggle }) {
  return (
    <div data-pricing-item={slugify(item.name)} style={{ borderBottom: "0.5px solid #D8C3A5" }}>
      <button
        className="w-full flex items-center justify-between py-4 text-left focus-glow rounded-sm"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="font-display text-lg text-deep-olive">{item.name}</span>
        <ChevronDown
          size={15}
          className="text-soft-gold flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              {item.note && (
                <p className="font-body text-xs text-warm-brown/70 mb-3 leading-relaxed italic">
                  {item.note}
                </p>
              )}
              <div className="flex flex-col gap-0">
                {item.lines.map((line, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between py-2.5"
                    style={{ borderBottom: i < item.lines.length - 1 ? "0.5px solid #ECE6DC" : "none" }}
                  >
                    <span className="font-body text-sm text-soft-black pr-4">{line.label}</span>
                    <span className="font-body text-sm text-deep-olive font-medium flex-shrink-0">
                      {line.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingSection({ onBookNow, pricingRequest }) {
  const [activeTab, setActiveTab] = useState("injectables");
  const [openItemName, setOpenItemName] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const activeCategory = CATEGORIES.find((c) => c.id === activeTab);

  useEffect(() => {
    if (!pricingRequest) return;

    setActiveTab(pricingRequest.categoryId);
    setOpenItemName(pricingRequest.itemName);

    window.setTimeout(() => {
      const item = document.querySelector(`[data-pricing-item="${slugify(pricingRequest.itemName)}"]`);
      const target = item || document.querySelector("#pricing");
      target?.scrollIntoView({ behavior: "smooth", block: item ? "center" : "start" });
    }, 120);
  }, [pricingRequest]);

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 bg-cream"
      style={{ borderTop: "0.5px solid #D8C3A5" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-12">
          <motion.p
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Price List 2026
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1] mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Wellness & Aesthetic Menu
          </motion.h2>
          <motion.p
            className="font-body text-sm text-warm-brown leading-relaxed max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Premium clinical-grade treatments tailored to your unique wellness goals.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setOpenItemName(null);
              }}
              className="font-body text-xs tracking-[0.12em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 focus-glow"
              style={
                activeTab === cat.id
                  ? { backgroundColor: "#30382B", color: "#FFFDF8" }
                  : { backgroundColor: "#F7F1E8", color: "#6F5948", border: "0.5px solid #D8C3A5" }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-ivory rounded-2xl px-5 md:px-8 py-2"
            style={{ border: "0.5px solid #D8C3A5" }}
          >
            {activeCategory?.items.map((item, i) => (
              <TreatmentAccordion
                key={item.name}
                item={item}
                open={openItemName === item.name}
                onToggle={() => setOpenItemName(openItemName === item.name ? null : item.name)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer + CTA */}
        <div className="mt-8 text-center">
          <p className="font-body text-xs text-warm-brown/60 leading-relaxed mb-6">
            Prices are indicative. A consultation ensures the most suitable treatment plan for your goals.
          </p>
          <button
            onClick={onBookNow}
            className="font-body text-xs tracking-[0.15em] uppercase bg-deep-olive text-cream px-8 py-3.5 rounded-lg hover:bg-warm-brown transition-all duration-300 focus-glow"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
