const INDIVIDUEL = {
  title: "Trouver sa place",
  text:
    "8 semaines pour retrouver votre place dans le civil. 4 séances individuelles d'1h30 toutes les 2 semaines. Présentiel (Nouvelle-Aquitaine) ou visioconférence (France entière).",
  steps: [
    "Séance 1 — Diagnostic : attentes, situation, blocages.",
    "Séance 2 — Identifier les freins identitaires.",
    "Séance 3 — Clarifier votre identité civile.",
    "Séance 4 — Plan d'action concret.",
  ],
};

const COLLECTIVES = [
  {
    title: "Sensibilisation 1h30",
    text: "Sensibilisation aux défis identitaires de la transition. Public : 8 à 15 militaires.",
  },
  {
    title: "Atelier demi-journée (3h)",
    text: "Travail identitaire approfondi avec workbook. Public : 8 à 15 militaires.",
  },
  {
    title: "Programme complet — 2 demi-journées",
    text: "Accompagnement collectif structuré. Public : 8 à 15 militaires.",
  },
];

export default function CommentJePeuxAider() {
  return (
    <section id="aide" className="bg-navy py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide text-center mb-14 sm:mb-16">
          Comment je peux vous aider&nbsp;?
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <h3 className="text-gold text-xs font-semibold uppercase tracking-wide mb-5">
              Accompagnement individuel
            </h3>
            <div className="bg-cream/[0.05] border border-cream/10 rounded-xl p-6 sm:p-7">
              <p className="font-display text-cream text-2xl tracking-wide mb-3">
                {INDIVIDUEL.title}
              </p>
              <p className="text-cream/80 text-sm leading-relaxed mb-5">
                {INDIVIDUEL.text}
              </p>
              <ul className="space-y-2">
                {INDIVIDUEL.steps.map((s) => (
                  <li key={s} className="text-cream/70 text-sm leading-relaxed">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-gold text-xs font-semibold uppercase tracking-wide mb-5">
              Interventions collectives à destination des partenaires
            </h3>
            <div className="grid sm:grid-cols-1 gap-4">
              {COLLECTIVES.map((c) => (
                <div
                  key={c.title}
                  className="bg-cream border border-gold/20 rounded-xl p-5 sm:p-6"
                >
                  <p className="text-gold-dark font-semibold text-sm mb-1.5">
                    {c.title}
                  </p>
                  <p className="text-navy/80 text-sm leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
