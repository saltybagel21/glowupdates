import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";

// Official Glow imagery, arranged as a quiet editorial strip.
const IMAGES = [
  { src: "/glow-images/hero-patient.jpg", alt: "Doctor-led treatment moment at Glow Health & Aesthetics" },
  { src: "/glow-images/dr-claudia.jpg", alt: "Dr. Claudia at Glow Health & Aesthetics" },
  { src: "/glow-images/glowtime.jpg", alt: "Warm treatment room with Glow visual detail" },
  { src: "/glow-images/drips.jpg", alt: "IV skin drip treatment detail" },
  { src: "/glow-images/skinglow.jpg", alt: "Glow skin treatment detail" },
  { src: "/glow-images/lipfiller.jpg", alt: "Lip filler treatment detail" },
  { src: "/glow-images/microneedling.jpg", alt: "Microneedling treatment detail" },
  { src: "/glow-images/nad.jpg", alt: "NAD wellness treatment detail" },
  { src: "/glow-images/inclusive-skin.jpg", alt: "Natural skin glow editorial visual" },
  { src: "/glow-images/trees.jpg", alt: "Soft greenery detail from Glow brand imagery" },
];

// Duplicate for seamless infinite loop
const TRACK = [...IMAGES, ...IMAGES];

export default function InstagramGrid() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // CSS animation only keeps the section gentle and lightweight.
  return (
    <section className="py-20 md:py-28 bg-ivory overflow-hidden" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      {/* Header */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-10">
        <motion.p
          className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          @glowhealthandaesthetics
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1] mb-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Glow, <em className="not-italic text-warm-brown">naturally.</em>
        </motion.h2>
        <motion.a
          href="https://www.instagram.com/glowhealthandaesthetics/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-xs tracking-[0.12em] uppercase text-warm-brown hover:text-deep-olive transition-colors focus-glow rounded-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Instagram size={13} />
          Follow on Instagram
        </motion.a>
      </div>

      {/* Scrolling strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #F7F1E8, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #F7F1E8, transparent)" }} />

          {/* Scrolling track */}
          <div
            ref={trackRef}
            className="flex gap-4 animate-marquee"
            style={{ width: "max-content" }}
          >
            {TRACK.map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-2xl group"
                style={{ border: "0.5px solid #D8C3A5" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Inject keyframe via style tag */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 38s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
