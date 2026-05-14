import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";

const LOCATIONS = [
  {
    name: "NuSkinnovation Cape Town",
    description: "A refined aesthetic studio in the heart of Cape Town.",
    link: "https://www.fresha.com/a/nuskinnovation-cape-town-cape-town-nuskinnovation-cape-town-kuk7j2hm",
    label: "Book at NuSkinnovation",
    ariaLabel: "Select NuSkinnovation location to book via Fresha",
  },
];

export default function BookingModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-soft-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            className="relative z-10 w-full max-w-2xl bg-cream rounded-2xl shadow-2xl overflow-hidden"
            style={{ border: "0.5px solid #D8C3A5" }}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-warm-brown hover:text-deep-olive transition-colors focus-glow"
              aria-label="Close booking modal"
            >
              <X size={18} />
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8 text-center">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-soft-gold mb-3">
                  Book an Appointment
                </p>
                <h2
                  id="booking-modal-title"
                  className="font-display text-3xl md:text-4xl text-deep-olive mb-3"
                >
                  Choose Your Location
                </h2>
                <p className="font-body text-sm text-warm-brown leading-relaxed max-w-sm mx-auto">
                  Book your Glow appointment at the location most convenient for you.
                </p>
              </div>

              {/* Location Cards */}
              <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.name}
                    className="bg-ivory rounded-xl p-6 flex flex-col gap-4 group transition-all duration-300 hover:shadow-md"
                    style={{ border: "0.5px solid #D8C3A5" }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-7 h-7 rounded-full bg-champagne/40 flex items-center justify-center flex-shrink-0">
                        <MapPin size={13} className="text-soft-gold" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-deep-olive leading-tight">
                          {loc.name}
                        </h3>
                        <p className="font-body text-xs text-warm-brown mt-1 leading-relaxed">
                          {loc.description}
                        </p>
                      </div>
                    </div>
                    <a
                      href={loc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={loc.ariaLabel}
                      className="w-full mt-auto bg-deep-olive text-cream font-body text-xs tracking-[0.12em] uppercase py-3 px-5 rounded-lg text-center transition-all duration-300 hover:bg-warm-brown focus-glow block"
                    >
                      {loc.label}
                    </a>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <p className="font-body text-xs text-warm-brown/60 text-center mt-6">
                Bookings are managed through Fresha. You will be redirected to our booking partner.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}