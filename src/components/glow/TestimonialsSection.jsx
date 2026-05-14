import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The NAD+ therapy has been life-changing. I feel younger and more energetic than I have in years.",
    name: "Chae",
    detail: "Glow Client",
    tag: "NAD+ Therapy",
  },
  {
    quote:
      "Subtle, considered, and absolutely natural-looking. Dr. Claudia listened carefully and the result is exactly what I hoped for.",
    name: "Sarah K.",
    detail: "Glow Client",
    tag: "Anti-Wrinkle",
  },
  {
    quote:
      "A calm, premium experience from start to finish. My skin has never looked better — friends keep asking what changed.",
    name: "Nadia P.",
    detail: "Glow Client",
    tag: "Skin Boosters",
  },
  {
    quote:
      "I love how unhurried every appointment feels. It's quiet, refined and the results speak for themselves.",
    name: "Amy R.",
    detail: "Glow Client",
    tag: "Dermal Fillers",
  },
];

const ROTATION_MS = 6000;

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  const goNext = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const goPrev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[index];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-14 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#3D2E22" }}
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Silk fabric photographic backdrop */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/glow-images/silk-brown.png')",
        }}
      />
      {/* Subtle vignette so the silk reads as the star */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, transparent 40%, rgba(42,31,22,0.40) 100%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        {/* Eyebrow pill */}
        <motion.div
          className="inline-block px-5 py-2 rounded-full mb-5"
          style={{ backgroundColor: "#4A5942" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-[0.16em]" style={{ color: "#FBF4E8" }}>
            Client Love
          </p>
        </motion.div>

        <motion.h2
          className="font-display text-3xl md:text-4xl leading-[1.15] mb-8"
          style={{ color: "#FBF4E8" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Stories of renewed vitality
        </motion.h2>

        {/* Carousel */}
        <div className="relative">
          {/* Prev */}
          <button
            onClick={goPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 items-center justify-center rounded-full transition-all duration-300 focus-glow z-10"
            style={{ backgroundColor: "rgba(251,244,232,0.10)", color: "#FBF4E8", border: "1px solid rgba(216,195,165,0.30)" }}
            aria-label="Previous testimonial"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(251,244,232,0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(251,244,232,0.10)")}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Card */}
          <div className="relative" style={{ minHeight: "260px" }}>
            <AnimatePresence mode="wait">
              <motion.article
                key={index}
                className="relative rounded-3xl p-6 md:p-8 text-left"
                style={{
                  backgroundColor: "#4A5942",
                  boxShadow: "0 30px 60px -30px rgba(0,0,0,0.55)",
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Top row: stars + pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                    {[0,1,2,3,4].map((i) => (
                      <Star key={i} size={16} fill="#E8C977" stroke="#E8C977" />
                    ))}
                  </div>
                  <span
                    className="font-body text-[11px] tracking-[0.12em] px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "#E8C977", color: "#3D2E22" }}
                  >
                    {t.tag}
                  </span>
                </div>

                {/* Quote */}
                <blockquote
                  className="font-display italic text-lg md:text-xl leading-[1.5] mb-5"
                  style={{ color: "#FBF4E8" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="h-px mb-5" style={{ backgroundColor: "rgba(251,244,232,0.18)" }} />

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <p className="font-body text-base" style={{ color: "#FBF4E8" }}>{t.name}</p>
                  <p className="font-body text-xs tracking-wide" style={{ color: "rgba(251,244,232,0.6)" }}>
                    {t.detail}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 items-center justify-center rounded-full transition-all duration-300 focus-glow z-10"
            style={{ backgroundColor: "rgba(251,244,232,0.10)", color: "#FBF4E8", border: "1px solid rgba(216,195,165,0.30)" }}
            aria-label="Next testimonial"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(251,244,232,0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(251,244,232,0.10)")}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={goPrev}
            className="w-10 h-10 flex items-center justify-center rounded-full focus-glow"
            style={{ backgroundColor: "rgba(251,244,232,0.10)", color: "#FBF4E8", border: "1px solid rgba(216,195,165,0.30)" }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            className="w-10 h-10 flex items-center justify-center rounded-full focus-glow"
            style={{ backgroundColor: "rgba(251,244,232,0.10)", color: "#FBF4E8", border: "1px solid rgba(216,195,165,0.30)" }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8" aria-hidden="true">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="block h-1.5 rounded-full transition-all duration-500 focus-glow"
              style={{
                width: i === index ? "26px" : "8px",
                backgroundColor: i === index ? "#E8C977" : "rgba(216,195,165,0.35)",
              }}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>

        <p className="font-body text-xs leading-relaxed mt-10 max-w-md mx-auto" style={{ color: "rgba(251,244,232,0.55)" }}>
          Discreet testimonials from clients who trust our considered care.
        </p>
      </div>
    </section>
  );
}
