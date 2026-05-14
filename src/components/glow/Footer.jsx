import { Instagram, Facebook } from "lucide-react";

const NAV_LINKS = [
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/glowhealthandaesthetics/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
  },
];

function TikTokIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.5 3v2.4a4.7 4.7 0 0 0 4.5 4.5v2.6a7.3 7.3 0 0 1-4.5-1.6v6.4a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.8V3h2.7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const LOGO_SRC = "/glow-images/gha-logo-cropped.png";
const GLOW_TIME_IMG = "/glow-images/glowtime.jpg";

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* "It's Glow Time" hero band — image as full backdrop with text overlay */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#3E4A37" }}
      >
        <div className="relative h-[280px] md:h-[360px]">
          <img
            src={GLOW_TIME_IMG}
            alt="It's glow time — neon signage at the Glow Health treatment room"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          {/* Even, centered dark wash so text reads anywhere */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(30,27,24,0.55) 0%, rgba(30,27,24,0.70) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Centered text overlay */}
          <div className="relative h-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-center items-center text-center">
            <p
              className="font-body text-[10px] md:text-[11px] tracking-[0.28em] uppercase mb-3"
              style={{ color: "#D8C3A5" }}
            >
              Your Journey
            </p>
            <h3
              className="font-display text-4xl md:text-6xl leading-[1.05]"
              style={{ color: "#FBF4E8" }}
            >
              It's <em className="not-italic" style={{ color: "#D8C3A5" }}>glow time.</em>
            </h3>
            <p
              className="font-body text-sm md:text-base mt-4 max-w-md leading-relaxed"
              style={{ color: "rgba(251,244,232,0.85)" }}
            >
              Step into a calmer, more confident version of yourself.
            </p>
          </div>
        </div>
      </div>

      <footer
        id="contact"
        className="py-16 md:py-20"
        style={{ backgroundColor: "#3E4A37", color: "rgba(251,244,232,0.75)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Top: brand centred */}
          <div
            className="flex flex-col items-center text-center pb-12"
            style={{ borderTop: "0.5px solid rgba(216,195,165,0.25)", paddingTop: "3rem" }}
          >
            <img
              src={LOGO_SRC}
              alt="Glow Health & Aesthetics"
              className="h-16 w-auto mb-5"
              style={{ filter: "brightness(0) invert(1) opacity(0.92)" }}
            />
            <p className="font-body text-sm leading-relaxed max-w-sm" style={{ color: "rgba(251,244,232,0.7)" }}>
              Doctor-led aesthetic care for subtle, natural-looking results.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 focus-glow"
                  style={{ border: "1px solid rgba(216,195,165,0.45)", color: "#D8C3A5" }}
                  aria-label={`Follow Glow on ${label}`}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#D8C3A5"; e.currentTarget.style.backgroundColor = "rgba(216,195,165,0.12)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(216,195,165,0.45)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 focus-glow"
                style={{ border: "1px solid rgba(216,195,165,0.45)", color: "#D8C3A5" }}
                aria-label="Follow Glow on TikTok"
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#D8C3A5"; e.currentTarget.style.backgroundColor = "rgba(216,195,165,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(216,195,165,0.45)"; e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>

          {/* Middle: 3 columns */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-10 py-12"
            style={{ borderTop: "0.5px solid rgba(216,195,165,0.18)", borderBottom: "0.5px solid rgba(216,195,165,0.18)" }}
          >
            <div className="text-center md:text-left">
              <p className="font-body text-[9px] tracking-[0.22em] uppercase mb-4" style={{ color: "rgba(216,195,165,0.75)" }}>
                Navigation
              </p>
              <div className="flex flex-col gap-2.5">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-center md:text-left transition-colors focus-glow rounded-sm"
                    style={{ color: "rgba(251,244,232,0.78)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FBF4E8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,244,232,0.78)")}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="font-body text-[9px] tracking-[0.22em] uppercase mb-4" style={{ color: "rgba(216,195,165,0.75)" }}>
                Visit
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(251,244,232,0.78)" }}>
                NuSkinnovation Cape Town
                <br />
                V&amp;A Waterfront,
                <br />
                Portswood Ridge, Level P3
              </p>
            </div>

            <div className="text-center md:text-left col-span-2 md:col-span-1">
              <p className="font-body text-[9px] tracking-[0.22em] uppercase mb-4" style={{ color: "rgba(216,195,165,0.75)" }}>
                Contact
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://wa.me/27000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm transition-colors focus-glow rounded-sm"
                  style={{ color: "rgba(251,244,232,0.78)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FBF4E8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,244,232,0.78)")}
                >
                  WhatsApp Us
                </a>
                <a
                  href="mailto:hello@glowhealthandaesthetics.com"
                  className="font-body text-sm transition-colors focus-glow rounded-sm break-all"
                  style={{ color: "rgba(251,244,232,0.78)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FBF4E8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,244,232,0.78)")}
                >
                  hello@glowhealthandaesthetics.com
                </a>
                <a
                  href="https://www.fresha.com/a/nuskinnovation-cape-town-cape-town-nuskinnovation-cape-town-kuk7j2hm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm transition-colors focus-glow rounded-sm"
                  style={{ color: "rgba(251,244,232,0.78)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FBF4E8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(251,244,232,0.78)")}
                >
                  Book Online
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row md:items-start justify-between gap-5 text-center md:text-left">
            <p
              className="font-body text-xs leading-relaxed max-w-xl"
              style={{ color: "rgba(251,244,232,0.45)" }}
            >
              Information on this website is for general guidance only and does not replace a professional medical consultation. Treatment suitability and results vary from person to person.
            </p>
            <p
              className="font-body text-xs flex-shrink-0"
              style={{ color: "rgba(251,244,232,0.35)" }}
            >
              &copy; {new Date().getFullYear()} Glow Health & Aesthetics
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
