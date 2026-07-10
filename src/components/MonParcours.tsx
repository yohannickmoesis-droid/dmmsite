export default function MonParcours() {
  return (
    <section id="parcours" className="bg-cream py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <p className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide mb-6">
          Je ne vous aide pas à trouver un emploi.
          <br />
          Je vous aide à retrouver votre place.
        </p>

        <p className="text-navy/60 text-sm sm:text-base uppercase tracking-wide mb-10">
          Yohannick Moesis — Ancien sous-officier parachutiste, aujourd&apos;hui
          accompagnant de transitions
        </p>

        <a
          href="/mon-parcours"
          className="inline-flex items-center gap-2 text-navy font-semibold text-sm sm:text-base border-b-2 border-gold-dark pb-1 hover:text-gold-dark transition-colors"
        >
          Découvrir mon parcours
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
