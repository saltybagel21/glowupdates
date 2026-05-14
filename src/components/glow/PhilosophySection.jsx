import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 bg-cream" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <Reveal delay={0}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src="/glow-images/wellness-consult.jpg"
                alt="Glow Health & Aesthetics wellness consultation in Cape Town"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div className="text-center md:text-left">
            <Reveal delay={0.1}>
              <p className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-4">
                Our Philosophy
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="font-display text-3xl md:text-4xl text-deep-olive leading-[1.15] mb-5">
                An aesthetic approach that feels considered,{" "}
                <em className="not-italic text-warm-brown">not overdone.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-sm md:text-base text-soft-black leading-[1.75] max-w-md mx-auto md:mx-0">
                Glow Health & Aesthetics focuses on subtle, personalised treatments for skin confidence and natural-looking results. Every appointment is guided by care, precision and respect for your individual features.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
