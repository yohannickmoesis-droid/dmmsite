import { CalendarClock, RefreshCw, DoorOpen, type LucideIcon } from "lucide-react";

const ICON_GRADIENT_ID = "transitionIconGradient";

const STAGES: { title: string; time: string; text: string; Icon: LucideIcon }[] = [
  {
    title: "Vous préparez votre départ",
    time: "6 mois à 2 ans avant la sortie",
    text: "Vous commencez à envisager la vie sans uniforme et à anticiper le choc culturel.",
    Icon: CalendarClock,
  },
  {
    title: "Vous êtes en||pleine transition",
    time: "Formation, recherche d'emploi, premiers mois",
    text: "Vous construisez vos nouveaux repères mais cherchez encore votre équilibre identitaire.",
    Icon: RefreshCw,
  },
  {
    title: "Vous avez quitté l'institution",
    time: "Le changement est là",
    text: "Vous ressentez un décalage, un manque de sens ou de collectif dans le civil.",
    Icon: DoorOpen,
  },
];

export default function TransitionTimeline() {
  return (
    <section className="bg-navy pt-2 sm:pt-3 pb-20 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-14 sm:mb-16">
          Où en êtes-vous dans votre transition&nbsp;?
        </h2>

        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id={ICON_GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>

        <div className="grid sm:grid-cols-3 gap-6">
          {STAGES.map((stage) => (
            <div
              key={stage.title}
              className="relative rounded-xl p-8 sm:p-10 flex flex-col items-center text-center min-h-[240px] sm:min-h-[270px] overflow-hidden"
              style={{
                border: "1.5px solid #C4A35A",
                background: "#161066",
                boxShadow: "0 12px 32px rgba(196,163,90,0.18)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background:
                    "linear-gradient(90deg, #C4A35A, #F0C75D, #D39318)",
                }}
              />
              <div
                className="rounded-full flex items-center justify-center mb-4"
                style={{
                  width: 52,
                  height: 52,
                  background: "rgba(196,163,90,0.15)",
                }}
              >
                <stage.Icon
                  size={26}
                  strokeWidth={2}
                  color={`url(#${ICON_GRADIENT_ID})`}
                />
              </div>
              <h3 className="font-display text-gold text-3xl sm:text-[2rem] tracking-wide mb-1">
                {stage.title.split("||").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p className="text-cream text-sm tracking-wide mb-6 min-h-[2.5rem] flex items-start justify-center">
                {stage.time}
              </p>
              <p className="text-gold text-sm font-semibold leading-relaxed">
                {stage.text}
              </p>
            </div>
          ))}
        </div>

        <div className="h-[3px] w-full mt-10 sm:mt-12 bg-gradient-to-r from-transparent via-[#C4A35A]/70 to-transparent" />
      </div>
    </section>
  );
}
