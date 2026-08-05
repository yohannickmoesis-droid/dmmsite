import { Fingerprint, Compass, Target, Shield, type LucideIcon } from "lucide-react";

const ICON_GRADIENT_ID = "pourquoiIdentiteIconGradient";

const REPERES = ["votre rôle,", "votre collectif,", "votre mission."];

const QUESTIONS: { text: string; Icon: LucideIcon }[] = [
  { text: "Qui suis-je sans mon uniforme ?", Icon: Fingerprint },
  { text: "Comment retrouver du sens ?", Icon: Compass },
  { text: "Où trouver ma place ?", Icon: Target },
  { text: "Comment recréer un collectif ?", Icon: Shield },
];

const STATS = [
  { chiffre: "20 000", legende: "militaires quittent le service chaque année" },
  { chiffre: "60,3 %", legende: "trouvent un emploi en moins d'un an" },
  { chiffre: "37,4 %", legende: "le pérennisent après 3 ans" },
];

export default function PourquoiIdentite() {
  return (
    <section className="bg-navy">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-2 sm:pt-3 pb-20 sm:pb-28">
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

        <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl text-justify">
          Le jour où vous quittez l&apos;armée, ces trois repères sont
          bouleversés simultanément. Et surgissent alors des questions
          qu&apos;un contrat de travail ne suffit pas à résoudre.
        </p>

        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id={ICON_GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-2xl">
          {QUESTIONS.map((q) => (
            <div
              key={q.text}
              className="rounded-lg p-6 flex flex-col items-start gap-3"
              style={{
                background: "#161066",
                border: "1px solid rgba(196,163,90,0.5)",
              }}
            >
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  background: "rgba(196,163,90,0.15)",
                }}
              >
                <q.Icon size={20} strokeWidth={2} color={`url(#${ICON_GRADIENT_ID})`} />
              </div>
              <p className="text-cream font-semibold text-base sm:text-lg leading-snug">
                {q.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x overflow-hidden"
          style={{
            border: "1.5px solid #C4A35A",
            background: "#161066",
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

        <div className="h-[3px] w-full mt-16 bg-gradient-to-r from-transparent via-[#C4A35A]/70 to-transparent" />
      </div>
    </section>
  );
}
