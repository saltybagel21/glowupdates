import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "Do I need a consultation first?", a: "A consultation is recommended so your treatment plan can be tailored to your skin, goals and suitability." },
  { q: "Which treatment is right for me?", a: "The best treatment depends on your concerns, skin health and desired result. Your practitioner will guide you toward the most suitable option." },
  { q: "Are the results natural-looking?", a: "The focus is on subtle, considered treatments that refresh and enhance rather than change your appearance dramatically." },
  { q: "How do I book?", a: "Click Book Now and choose the location most convenient for you." },
  { q: "Where are you located?", a: "Glow Health & Aesthetics offers bookings through NuSkinnovation Cape Town (Wed–Fri) and Wax On Wax Off Cape Town (Mon–Tue)." },
  { q: "Is there downtime?", a: "Downtime depends on the treatment. This will be discussed during your appointment or consultation." },
];

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "0.5px solid #D8C3A5" }}>
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left focus-glow rounded-sm"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display text-xl text-deep-olive leading-snug">{faq.q}</span>
        <span className="flex-shrink-0 mt-1 text-soft-gold">
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
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
            <p className="font-body text-sm text-warm-brown leading-relaxed pb-5 max-w-xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-20 md:py-32 bg-cream" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div ref={ref} className="text-center mb-12">
          <motion.p
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Common questions, <em className="not-italic text-warm-brown">answered.</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ borderTop: "0.5px solid #D8C3A5" }}
        >
          {FAQS.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}