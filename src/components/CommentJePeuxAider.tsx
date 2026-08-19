const INDIVIDUEL = {
  title: "Trouver sa place",
  text:
    "3 mois pour retrouver votre place dans le civil. 6 séances individuelles d'1h15 toutes les 2 semaines, un point d'étape et un bilan de suivi inclus.",
  steps: [
    "Séance 1 : Comprendre où j'en suis (diagnostic identitaire).",
    "Séance 2 : Ce que l'armée a construit (distinguer l'institution de la personne).",
    "Séance 3 : Traverser la rupture (deuil, peur, colère).",
    "Point d'étape gratuit, 30 min, après la séance 3.",
    "Séance 4 : Construire la nouvelle identité (valeurs, mission).",
    "Séance 5 : Mettre en cohérence (feuille de route).",
    "Séance 6 : Devenir autonome (bilan complet).",
    "Bilan de suivi, 30 min, un mois après la fin.",
  ],
};

const COLLECTIVES = [
  {
    title: "Sensibilisation",
    duree: "1h30",
    text: "Sensibilisation aux mécanismes identitaires de la transition.",
  },
  {
    title: "Atelier thématique",
    duree: "3h",
    text: "Travail identitaire approfondi avec workbook, centré sur 5 des 10 mécanismes identitaires.",
  },
  {
    title: "Programme complet",
    duree: "2 demi-journées",
    text: "Accompagnement collectif structuré, parcours complet des 10 mécanismes identitaires.",
  },
];

const CARD_BASE = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(196,163,90,0.3)",
} as const;

export default function CommentJePeuxAider() {
  return (
    <section id="aide" className="bg-navy pt-2 sm:pt-3 pb-20 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-14 sm:mb-16">
          Comment je peux vous aider&nbsp;?
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Colonne individuelle — parcours phare */}
          <div
            className="rounded-xl p-6 sm:p-8 flex flex-col"
            style={{
              ...CARD_BASE,
              border: "2px solid #C4A35A",
            }}
          >
            <h3 className="text-cream text-xs font-semibold uppercase tracking-wide mb-1">
              Accompagnement individuel
            </h3>
            <p className="text-gold font-semibold text-lg mb-2">
              {INDIVIDUEL.title}
            </p>
            <p className="text-cream text-sm leading-relaxed mb-5 text-justify">
              {INDIVIDUEL.text}
            </p>

            <details className="group mb-6">
              <summary className="cursor-pointer list-none flex items-center justify-between text-gold font-semibold text-sm py-2.5 border-t border-gold/20">
                <span>Voir le déroulé des 6 séances</span>
                <span className="transition-transform duration-200 group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <ul className="space-y-2 pt-3">
                {INDIVIDUEL.steps.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-cream text-sm leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </details>

            <a
              href="/contact"
              className="mt-auto inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
            >
              Me contacter
            </a>
          </div>

          {/* Colonne collective */}
          <div
            className="rounded-xl p-6 sm:p-8 flex flex-col"
            style={{
              ...CARD_BASE,
              border: "2px solid #C4A35A",
            }}
          >
            <h3 className="text-cream text-xs font-semibold uppercase tracking-wide mb-5">
              Interventions collectives à destination des partenaires
            </h3>

            <div className="flex flex-col gap-4 flex-1">
              {COLLECTIVES.map((c) => (
                <div
                  key={c.title}
                  className="rounded-lg p-5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(196,163,90,0.2)",
                  }}
                >
                  <div className="flex items-baseline justify-between gap-3 mb-1.5">
                    <p className="text-cream font-semibold text-sm">
                      {c.title}
                    </p>
                    <span className="text-gold text-xs font-semibold uppercase tracking-wide shrink-0">
                      {c.duree}
                    </span>
                  </div>
                  <p className="text-cream text-sm leading-relaxed">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
            >
              Échanger sur mes interventions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
