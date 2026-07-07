const INDIVIDUEL = {
  title: "Trouver sa place",
  text:
    "8 semaines pour retrouver votre place dans le civil. 4 séances individuelles d'1h30 toutes les 2 semaines. Présentiel ou visioconférence.",
  steps: [
    "Séance 1 : Diagnostic (attentes, situation, blocages).",
    "Séance 2 : Identifier les freins identitaires.",
    "Séance 3 : Clarifier votre identité civile.",
    "Séance 4 : Plan d'action concret.",
  ],
};

const COLLECTIVES = [
  {
    title: "Sensibilisation 1h30",
    text: "Sensibilisation aux défis identitaires de la transition.",
  },
  {
    title: "Atelier demi-journée (3h)",
    text: "Travail identitaire approfondi avec workbook.",
  },
  {
    title: "Programme complet 2 demi-journées",
    text: "Accompagnement collectif structuré.",
  },
];

export default function CommentJePeuxAider() {
  return (
    <section id="aide" className="bg-navy py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-14 sm:mb-16">
          Comment je peux vous aider&nbsp;?
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <h3 className="text-gold text-xs font-semibold uppercase tracking-wide mb-5">
              Accompagnement individuel
            </h3>
            <div className="bg-cream border border-gold/20 rounded-xl p-6 sm:p-7">
              <p className="text-gold-dark font-semibold text-sm mb-1.5">
                {INDIVIDUEL.title}
              </p>
              <p className="text-navy/80 text-sm leading-relaxed mb-5">
                {INDIVIDUEL.text}
              </p>
              <ul className="space-y-2">
                {INDIVIDUEL.steps.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-navy/70 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-dark shrink-0" />
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
