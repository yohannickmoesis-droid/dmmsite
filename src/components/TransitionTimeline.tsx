const STAGES = [
  {
    title: "Vous préparez votre départ",
    time: "6 mois à 2 ans avant la sortie",
    text: "Vous commencez à envisager une vie sans uniforme et à vous interroger sur votre avenir.",
  },
  {
    title: "Vous êtes en transition",
    time: "Formation, recherche d'emploi ou premiers mois dans le civil",
    text: "Vous construisez de nouveaux repères sans avoir encore trouvé votre équilibre.",
  },
  {
    title: "Vous avez quitté l'institution",
    time: "Le changement est derrière vous",
    text: "Vous avez du mal à trouver votre place, mais certaines questions restent ouvertes.",
  },
];

export default function TransitionTimeline() {
  return (
    <section className="bg-cream pt-20 sm:pt-28 pb-10 sm:pb-14">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-navy text-4xl sm:text-5xl tracking-wide mb-14 sm:mb-16">
          Où en êtes-vous dans votre transition&nbsp;?
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {STAGES.map((stage) => (
            <div
              key={stage.title}
              className="bg-navy rounded-xl p-8 sm:p-10 flex flex-col text-center min-h-[280px] sm:min-h-[320px]"
            >
              <h3 className="font-display text-gold text-3xl sm:text-[2rem] tracking-wide mb-1">
                {stage.title}
              </h3>
              <p className="text-cream/70 text-xs tracking-wide mb-5 min-h-[2rem] flex items-center justify-center">
                {stage.time}
              </p>
              <p className="text-gold text-sm font-semibold leading-relaxed flex-1 flex items-center justify-center">
                {stage.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/#aide"
            className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream hover:bg-navy/85 transition-colors"
          >
            Voir mes offres
          </a>
        </div>
      </div>
    </section>
  );
}
