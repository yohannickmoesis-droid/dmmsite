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
    title: "Vous avez déjà quitté l'institution",
    time: "Le changement est derrière vous",
    text: "Vous avez du mal à trouver votre place, mais certaines questions restent ouvertes.",
  },
];

export default function TransitionTimeline() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-navy text-4xl sm:text-5xl tracking-wide text-center mb-14 sm:mb-16">
          Où en êtes-vous dans votre transition&nbsp;?
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {STAGES.map((stage) => (
            <div
              key={stage.title}
              className="bg-navy rounded-xl p-7 flex flex-col"
            >
              <h3 className="font-display text-gold text-2xl tracking-wide mb-1">
                {stage.title}
              </h3>
              <p className="text-cream/60 text-xs uppercase tracking-wide mb-5">
                {stage.time}
              </p>
              <p className="text-cream/90 text-sm leading-relaxed">
                {stage.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
