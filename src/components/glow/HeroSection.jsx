const TRUST_ITEMS = [
  "Doctor-led care",
  "Natural-looking results",
  "Personalised plans",
  "Cape Town",
];

export default function HeroSection({ onBookNow }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1E1B18" }}
    >
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet="/glow-images/dripplant-bg.jpg" />
          <img
            src="/glow-images/hero-patient.jpg"
            alt="Glow Health & Aesthetics treatment imagery in warm light"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(30,27,24,0.28) 0%, rgba(30,27,24,0.56) 48%, rgba(30,27,24,0.88) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 md:px-10 pt-24 pb-20 flex flex-col items-center text-center">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-champagne mb-5">
          Doctor-led &middot; Cape Town
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-cream leading-[1.05] mb-5">
          Subtle Treatments.{" "}
          <em className="not-italic" style={{ color: "#D8C3A5" }}>
            Natural Glow.
          </em>
        </h1>

        <p className="font-body text-sm sm:text-base text-cream/75 leading-relaxed mb-8 max-w-sm">
          Doctor-led aesthetic treatments designed to refresh, restore and enhance your natural beauty.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            onClick={onBookNow}
            className="font-body text-xs tracking-[0.15em] uppercase bg-cream text-deep-olive px-8 py-4 rounded-lg hover:bg-champagne transition-all duration-300 focus-glow w-full sm:w-auto"
          >
            Book Now
          </button>
          <a
            href="#treatments"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#treatments")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-body text-xs tracking-[0.15em] uppercase text-cream px-8 py-4 rounded-lg transition-all duration-300 hover:bg-cream/10 focus-glow text-center w-full sm:w-auto"
            style={{ border: "0.5px solid rgba(255,253,248,0.4)" }}
          >
            View Treatments
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-10">
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full flex-shrink-0 bg-champagne" />
              <span className="font-body text-[11px] text-cream/60">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
