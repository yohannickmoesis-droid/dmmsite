export default function MonParcours() {
  return (
    <section id="parcours" className="bg-navy pt-0 pb-24 sm:pb-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative">
        <span
          aria-hidden="true"
          className="absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 select-none pointer-events-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "8rem",
            lineHeight: 1,
            color: "#C4A35A",
            opacity: 0.6,
          }}
        >
          &ldquo;
        </span>

        <div className="mb-10">
          <p className="relative font-display text-cream text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide">
            Je ne vous aide pas à trouver un emploi.
            <br />
            Je vous aide à trouver votre place.
          </p>

          <div
            aria-hidden="true"
            className="select-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "8rem",
              lineHeight: 0.4,
              color: "#C4A35A",
              opacity: 0.6,
              marginTop: "2.5rem",
            }}
          >
            &rdquo;
          </div>
        </div>

        <p className="relative text-sm sm:text-base tracking-wide mb-10">
          <span className="text-gold font-bold normal-case">
            Yohannick MOESIS
          </span>
          <br />
          <span className="text-cream uppercase">Ancien sous-officier parachutiste,</span>
          <br />
          <span className="text-cream uppercase">aujourd&apos;hui accompagnant de transitions</span>
        </p>

        <a
          href="/mon-parcours"
          className="relative inline-flex items-center gap-2 text-cream font-semibold text-sm sm:text-base border-b-2 border-gold pb-1 hover:text-gold transition-colors"
        >
          Découvrir mon parcours
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="h-[3px] w-full mt-6 sm:mt-8 bg-gradient-to-r from-transparent via-[#C4A35A]/70 to-transparent" />
      </div>
    </section>
  );
}
