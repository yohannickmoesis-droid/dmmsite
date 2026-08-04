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
    <section className="bg-navy">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-20 sm:pb-28">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-6">
          La reconversion ne se résume pas à trouver un emploi.
        </h2>

        <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-4 max-w-3xl text-justify">
          Pendant des années, votre identité s&apos;est construite autour de :
        </p>

        <ul className="mb-6 space-y-2">
          {REPERES.map((r) => (
            <li
              key={r}
              className="flex items-start gap-4 text-cream/70 text-base sm:text-lg leading-relaxed"
            >
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cream/40 shrink-0" />
              {r}
            </li>
          ))}
        </ul>

        <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl text-justify">
          Le jour où vous quittez l&apos;armée, ces trois repères sont
          bouleversés simultanément. Et surgissent alors des questions
          qu&apos;un contrat de travail ne suffit pas à résoudre.
        </p>

        <ul className="mb-16 space-y-4">
          {QUESTIONS.map((q) => (
            <li
              key={q}
              className="flex items-start gap-4 text-cream font-semibold text-lg sm:text-xl leading-relaxed"
            >
              <span className="mt-2.5 w-2 h-2 rounded-full bg-gold shrink-0" />
              {q}
            </li>
          ))}
        </ul>

        <div
          className="rounded-2xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x overflow-hidden"
          style={{
            border: "1.5px solid #C4A35A",
            background: "rgba(30, 26, 100, 0.5)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 12px 32px rgba(196,163,90,0.18)",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.legende}
              className="px-6 py-10 sm:py-12 text-center flex flex-col items-center"
              style={{ borderColor: "rgba(196,163,90,0.25)" }}
            >
              <div className="font-display text-gold text-6xl sm:text-7xl tracking-wide leading-none mb-3">
                {s.chiffre}
              </div>
              <p className="text-cream/85 text-sm sm:text-base leading-snug">
                {s.legende}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
