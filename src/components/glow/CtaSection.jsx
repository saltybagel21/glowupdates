import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CtaSection({ onBookNow }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-24 md:py-40" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="absolute inset-0">
        <img
          src="/glow-images/dripplant-bg.jpg"
          alt="Warm skincare detail with soft golden light"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(247,241,232,0.88)" }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          Begin Your Journey
        </motion.p>
        <motion.h2
          className="font-display text-5xl md:text-7xl text-deep-olive leading-[1.05] mb-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ready for your glow?
        </motion.h2>
        <motion.p
          className="font-body text-sm text-warm-brown leading-relaxed mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Book a personalised appointment and take the first step toward refreshed, natural-looking confidence.
        </motion.p>
        <motion.button
          onClick={onBookNow}
          className="font-body text-xs tracking-[0.2em] uppercase bg-deep-olive text-cream px-10 py-4 rounded-lg hover:bg-warm-brown transition-all duration-300 focus-glow"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Book Now
        </motion.button>
      </div>
    </section>
  );
}
