import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function EditorialSection({ onBookNow }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
        {/* Image */}
        <div className="relative min-h-[320px] md:min-h-auto overflow-hidden">
          <img
            src="/glow-images/glowtime.jpg"
            alt="Warm Glow Health & Aesthetics treatment room interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Copy */}
        <motion.div
          ref={ref}
          className="bg-cream flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 md:px-14 lg:px-20 py-14 md:py-0"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-5">
            Your Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-deep-olive leading-[1.05] mb-6">
            This is your sign{" "}
            <em className="not-italic text-warm-brown">to refresh.</em>
          </h2>
          <p className="font-body text-sm text-soft-black leading-[1.8] mb-8 max-w-sm">
            Whether you are starting your skin journey or maintaining your glow, Glow Health & Aesthetics offers a calm, personalised experience from consultation to treatment.
          </p>
          <button
            onClick={onBookNow}
            className="font-body text-xs tracking-[0.15em] uppercase bg-deep-olive text-cream px-8 py-4 rounded-lg hover:bg-warm-brown transition-all duration-300 focus-glow"
          >
            Start Your Glow Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
