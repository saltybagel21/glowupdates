import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRICING_PDF = "/glow-pricing.pdf";

const TREATMENTS = [
  {
    number: "01", label: "Refresh", title: "Anti-Wrinkle Treatments",
    description: "Soften the appearance of fine lines while preserving natural expression.",
    img: "/glow-images/botox-injections.jpg",
  },
  {
    number: "02", label: "Balance", title: "Dermal Fillers",
    description: "Restore volume, balance facial proportions and enhance natural contours.",
    img: "/glow-images/facefiller.jpg",
  },
  {
    number: "03", label: "Glow", title: "Skin Boosters",
    description: "Improve hydration, radiance and overall skin quality from within.",
    img: "/glow-images/skinglow.jpg",
  },
  {
    number: "04", label: "Restore", title: "Exosomes",
    description: "Advanced regenerative skin support for a refreshed, healthier-looking complexion.",
    img: "/glow-images/microneedling.jpg",
  },
  {
    number: "05", label: "Wellness", title: "IV Skin Drips",
    description: "Wellness-focused support designed to complement your glow journey.",
    img: "/glow-images/drips.jpg",
  },
  {
    number: "06", label: "Skin Health", title: "Medical-Grade Skincare",
    description: "Personalised skincare guidance to support long-term skin health.",
    img: "/glow-images/inclusive-skin.jpg",
  },
];

function TreatmentCard({ treatment, onBookNow }) {
  return (
    <div
      className="group relative rounded-xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl"
      style={{ backgroundColor: "#FBF4E8", border: "1px solid rgba(111,89,72,0.18)" }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={treatment.img}
          alt={treatment.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className="absolute top-3 left-3 font-body text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "rgba(251,244,232,0.92)", color: "#6F5948", border: "0.5px solid #6F5948" }}
        >
          {treatment.label}
        </span>
      </div>

      {/* Info area */}
      <div className="relative flex flex-col gap-3 flex-1 p-6 text-center">
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold">
          {treatment.number}
        </span>
        <h3 className="font-display text-xl md:text-2xl text-silk-brown leading-tight">
          {treatment.title}
        </h3>
        <p className="font-body text-sm text-warm-brown leading-relaxed flex-1">
          {treatment.description}
        </p>

        {/* Pill buttons */}
        <div className="flex flex-col gap-2.5 pt-3 mt-auto">
          <button
            onClick={onBookNow}
            className="w-full inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.14em] uppercase rounded-full px-6 py-3 transition-all duration-300 focus-glow"
            style={{ backgroundColor: "#6F5948", color: "#FBF4E8" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A4838")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6F5948")}
          >
            Book Now <span aria-hidden="true">&rarr;</span>
          </button>
          <a
            href={PRICING_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.14em] uppercase rounded-full px-6 py-3 transition-all duration-300 focus-glow"
            style={{ backgroundColor: "transparent", color: "#6F5948", border: "1px solid #6F5948" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#6F5948"; e.currentTarget.style.color = "#FBF4E8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#6F5948"; }}
          >
            View Pricing <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TreatmentsSection({ onBookNow }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="treatments" className="py-20 md:py-32 bg-ivory" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Centred header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Treatments
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1] mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Treatments designed around your natural glow.
          </motion.h2>
          <motion.p
            className="font-body text-sm text-warm-brown leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Considered aesthetic treatments focused on refreshment, balance, skin quality and confidence.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {TREATMENTS.map((t) => (
            <TreatmentCard
              key={t.number}
              treatment={t}
              onBookNow={onBookNow}
            />
          ))}
        </motion.div>

        {/* View full pricing PDF link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <a
            href={PRICING_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-warm-brown hover:text-silk-brown transition-colors duration-200 focus-glow rounded-sm"
          >
            View Full Pricing PDF
            <span className="text-soft-gold" aria-hidden="true">&darr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
