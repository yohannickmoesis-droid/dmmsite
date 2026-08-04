export default function MonParcours() {
  return (
    <section id="parcours" className="bg-navy py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative">
        <span
          aria-hidden="true"
          className="absolute -top-20 sm:-top-28 left-1/2 -translate-x-1/2 select-none pointer-events-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "8rem",
            lineHeight: 1,
            color: "#C4A35A",
            opacity: 0.3,
          }}
        >
          &ldquo;
        </span>

        <p className="relative font-display text-cream text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide mb-6">
          Je ne vous aide pas à trouver un emploi.
          <br />
          Je vous aide à trouver votre place.
        </p>

        <p className="relative text-cream/60 text-sm sm:text-base uppercase tracking-wide mb-10">
          Yohannick Moesis
          <br />
          Ancien sous-officier parachutiste,
          <br />
          aujourd&apos;hui accompagnant de transitions
        </p>

        <a
          href="/mon-parcours"
          className="relative inline-flex items-center gap-2 text-cream font-semibold text-sm sm:text-base border-b-2 border-gold pb-1 hover:text-gold transition-colors"
        >
          Découvrir mon parcours
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
