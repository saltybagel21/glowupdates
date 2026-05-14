import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const LOCATION = {
  name: "NuSkinnovation Cape Town",
  address: "V&A Waterfront, Portswood Ridge, Level P3",
  hours: "Wednesday – Friday",
  link: "https://www.fresha.com/a/nuskinnovation-cape-town-cape-town-nuskinnovation-cape-town-kuk7j2hm",
  ariaLabel: "Book NuSkinnovation Cape Town on Fresha",
};

const CONTACT = {
  whatsappLabel: "WhatsApp available",
  whatsappHref: "https://wa.me/27000000000",
  email: "hello@glowhealthandaesthetics.com",
};

function InfoBlock({ icon: Icon, label, children }) {
  return (
    <div
      className="rounded-3xl p-8 md:p-10 flex flex-col items-center text-center"
      style={{
        backgroundColor: "#B79775",
        boxShadow: "0 14px 32px -16px rgba(61,46,34,0.35)",
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
        style={{ backgroundColor: "#FBF4E8" }}
      >
        <Icon size={20} className="text-silk-brown" strokeWidth={1.75} />
      </div>
      <p className="font-display text-xl mb-3" style={{ color: "#FBF4E8" }}>
        {label}
      </p>
      <div className="font-body text-sm leading-relaxed" style={{ color: "rgba(251,244,232,0.92)" }}>
        {children}
      </div>
    </div>
  );
}

export default function LocationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="locations" className="py-20 md:py-28 bg-ivory" style={{ borderTop: "0.5px solid #D8C3A5" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref} className="text-center max-w-xl mx-auto mb-12">
          <motion.p
            className="font-body text-[10px] tracking-[0.25em] uppercase text-soft-gold mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            Get in Touch
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl text-deep-olive leading-[1.1] mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A calm Cape Town space for{" "}
            <em className="not-italic text-warm-brown">considered care.</em>
          </motion.h2>
          <motion.p
            className="font-body text-sm text-warm-brown leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Connect with our team for consultations, bookings, or any wellness inquiries.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InfoBlock icon={MapPin} label="Visit Us">
            <p className="mb-1" style={{ color: "#FBF4E8" }}>{LOCATION.name}</p>
            <p>{LOCATION.address}</p>
          </InfoBlock>

          <InfoBlock icon={Phone} label="Contact">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-cream transition-colors focus-glow rounded-sm mb-1"
              style={{ color: "#FBF4E8" }}
            >
              {CONTACT.whatsappLabel}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center gap-1.5 hover:text-cream transition-colors focus-glow rounded-sm break-all"
            >
              <Mail size={12} className="flex-shrink-0" />
              {CONTACT.email}
            </a>
          </InfoBlock>

          <InfoBlock icon={Clock} label="Hours">
            <p className="mb-1" style={{ color: "#FBF4E8" }}>{LOCATION.hours}</p>
            <p>By appointment only</p>
          </InfoBlock>
        </motion.div>

      </div>
    </section>
  );
}
