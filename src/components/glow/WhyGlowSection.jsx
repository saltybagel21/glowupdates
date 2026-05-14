import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Stethoscope, Sparkles, ClipboardList, Award, Leaf, MapPin } from "lucide-react";

const POINTS = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Doctor-led approach",
    description: "Every treatment is guided by medical expertise, precision and professional care.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Natural-looking results",
    description: "Subtle enhancements that refresh and restore, never dramatic or overdone.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Personalised treatment planning",
    description: "Each plan is tailored to your skin, goals and individual features.",
  },
  {
    number: "04",
    icon: Award,
    title: "Premium techniques and products",
    description: "Only trusted, high-quality treatment methods and formulations are used.",
  },
  {
    number: "05",
    icon: Leaf,
    title: "Calm, discreet client experience",
    description: "A relaxed, private atmosphere where your comfort is the priority.",
  },
  {
    number: "06",
    icon: MapPin,
    title: "Convenient Cape Town location",
    description: "A welcoming, accessible space in the heart of Cape Town.",
  },
];

export default function WhyGlowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #EADBC4 0%, #E2D2B8 100%)",
        borderTop: "0.5px solid #D8C3A5",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,155,114,0.18), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(111,89,72,0.18), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Centred header */}
        <div ref={ref} className="text-center mb-14">
          <motion.p
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Why Choose Glow
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Quiet confidence.{" "}
            <em className="not-italic text-warm-brown">Considered care.</em>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {POINTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.number}
                className="relative rounded-2xl p-7 flex flex-col items-center text-center overflow-hidden group"
                style={{
                  backgroundColor: "#FBF4E8",
                  border: "1px solid rgba(184,155,114,0.4)",
                  boxShadow: "0 8px 24px -16px rgba(61,46,34,0.18)",
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                {/* Number watermark */}
                <span
                  className="absolute top-3 right-4 font-display text-5xl leading-none pointer-events-none select-none"
                  style={{ color: "rgba(111,89,72,0.28)" }}
                  aria-hidden="true"
                >
                  {p.number}
                </span>

                {/* Icon disk */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #6F5948 0%, #B89B72 100%)",
                    boxShadow: "0 6px 18px -8px rgba(111,89,72,0.55)",
                  }}
                >
                  <Icon size={22} className="text-cream" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-xl text-silk-brown leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-warm-brown leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
