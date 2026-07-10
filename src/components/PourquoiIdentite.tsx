const REPERES = ["votre rôle,", "votre collectif,", "votre mission."];

const QUESTIONS = [
  "Qui suis-je sans mon uniforme ?",
  "Comment retrouver du sens ?",
  "Où trouver ma place ?",
  "Comment recréer un collectif ?",
];

const STATS = [
  { chiffre: "20 000", legende: "militaires quittent le service chaque année" },
  { chiffre: "60,3 %", legende: "trouvent un emploi en moins d'un an" },
  { chiffre: "37,4 %", legende: "le pérennisent après 3 ans" },
];

export default function PourquoiIdentite() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-20 sm:pb-28">
        <h2 className="font-display text-navy text-4xl sm:text-5xl tracking-wide mb-6">
          La reconversion ne se résume pas à trouver un emploi.
        </h2>

        <p className="text-navy/85 text-base sm:text-lg leading-relaxed mb-4 max-w-3xl text-justify">
          Pendant des années, votre identité s&apos;est construite autour de :
        </p>

        <ul className="mb-6 space-y-2">
          {REPERES.map((r) => (
            <li
              key={r}
              className="flex items-start gap-4 text-navy/85 text-base sm:text-lg leading-relaxed"
            >
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" />
              {r}
            </li>
          ))}
        </ul>

        <p className="text-navy/85 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl text-justify">
          Le jour où vous quittez l&apos;armée, ces trois repères changent
          simultanément et c&apos;est souvent là que commencent des questions que
          l&apos;emploi seul ne résout pas.
        </p>

        <ul className="mb-16 space-y-3">
          {QUESTIONS.map((q) => (
            <li
              key={q}
              className="flex items-start gap-4 text-navy/85 text-base sm:text-lg leading-relaxed"
            >
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" />
              {q}
            </li>
          ))}
        </ul>

        <div className="bg-[#E69419] rounded-2xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-cream/25 overflow-hidden">
          {STATS.map((s) => (
            <div
              key={s.legende}
              className="px-6 py-10 sm:py-12 text-center flex flex-col items-center"
            >
              <div className="font-display text-cream text-6xl sm:text-7xl tracking-wide leading-none mb-3">
                {s.chiffre}
              </div>
              <p className="text-cream text-sm sm:text-base leading-snug">
                {s.legende}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
