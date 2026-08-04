"use client";

import { useState } from "react";
import {
  UserX,
  ArrowLeftRight,
  Award,
  Compass,
  Unlink,
  Anchor,
  ShieldAlert,
  Flag,
  Route,
  Handshake,
  type LucideIcon,
} from "lucide-react";

type Defi = {
  titre: string;
  desc: string;
};

const MILITARITE: Defi[] = [
  {
    titre: "Perte d'identité",
    desc: "Qui suis-je sans mon uniforme, mon grade ou mon statut ?",
  },
  {
    titre: "Choc culturel militaire / civil",
    desc: "Quand les codes appris dans l'institution ne fonctionnent plus dans le monde civil.",
  },
  {
    titre: "La légitimité à reconstruire",
    desc: "Sur quoi repose ma valeur lorsque l'institution n'est plus là ?",
  },
  {
    titre: "Perte de sens",
    desc: "Comment retrouver une mission qui donne envie de se lever le matin ?",
  },
  {
    titre: "Perte du collectif",
    desc: "Recréer du lien après avoir quitté l'esprit de corps.",
  },
];

const POLARISATION: Defi[] = [
  {
    titre: "Vos valeurs, votre socle",
    desc: "Définir ce qui compte vraiment lorsque les valeurs ne sont plus imposées par l'institution.",
  },
  {
    titre: "Le déni de la peur",
    desc: "Reconnaître les inquiétudes liées au changement et à l'incertitude.",
  },
  {
    titre: "Le deuil de l'institution",
    desc: "Accepter la fin d'un chapitre qui a structuré une partie de sa vie.",
  },
  {
    titre: "Les comportements d'évitement",
    desc: "Quand on cherche inconsciemment à recréer l'univers militaire ailleurs.",
  },
  {
    titre: "Accepter d'être accompagné",
    desc: "Sortir du réflexe d'autonomie absolue pour avancer autrement.",
  },
];

const CREAM = "#EFE7DD";
const GOLD_SOFT = "#F0C75D";
const NAVY = "#0E0857";
const ICON_GRADIENT_ID = "cercleDefisIconGradient";

const ICONS_MILITARITE: LucideIcon[] = [
  UserX,
  ArrowLeftRight,
  Award,
  Compass,
  Unlink,
];
const ICONS_POLARISATION: LucideIcon[] = [
  Anchor,
  ShieldAlert,
  Flag,
  Route,
  Handshake,
];

function FlipCard({
  defi,
  accent,
  numero,
  Icon,
}: {
  defi: Defi;
  accent: string;
  numero: string;
  Icon: LucideIcon;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
      className="cursor-pointer group"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full min-h-[92px] sm:min-h-[100px] transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 rounded-lg px-5 py-4 flex items-center gap-4 overflow-hidden transition-shadow duration-300"
          style={{
            backfaceVisibility: "hidden",
            border: `1.5px solid ${accent}`,
            background: "rgba(30, 26, 100, 0.5)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 12px 32px rgba(196,163,90,0.18)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, #C4A35A, #F0C75D, #D39318)`,
            }}
          />
          <span
            className="text-xs sm:text-sm font-bold shrink-0"
            style={{ color: accent }}
          >
            {numero}
          </span>
          <div
            className="rounded-full flex items-center justify-center shrink-0"
            style={{
              width: 44,
              height: 44,
              background: `${accent}26`,
            }}
          >
            <Icon
              size={24}
              strokeWidth={2.25}
              color={`url(#${ICON_GRADIENT_ID})`}
            />
          </div>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              color: CREAM,
              lineHeight: 1.2,
            }}
            className="text-lg sm:text-xl font-bold uppercase tracking-wide flex-1 text-left"
          >
            {defi.titre}
          </span>
          <span
            className="text-lg font-bold shrink-0 transition-transform duration-500"
            style={{
              color: accent,
              transform: flipped ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            +
          </span>
        </div>

        <div
          className="absolute inset-0 rounded-lg px-5 py-4 flex items-center justify-start text-left"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: `1.5px solid ${accent}`,
            background: GOLD_SOFT,
            boxShadow: "0 12px 32px rgba(196,163,90,0.18)",
          }}
        >
          <span
            style={{ color: NAVY, lineHeight: 1.5 }}
            className="text-sm sm:text-base font-medium block"
          >
            {defi.desc}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CercleDefis() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Définition du dégradé utilisé par le trait des icônes */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id={ICON_GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
      </svg>

      {/* Texture de fond subtile : grille pointillée + halo radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(239,231,221,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.06,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 25%, rgba(212,175,110,0.16), transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 60%, transparent 40%, rgba(6,4,40,0.45) 100%)",
        }}
      />

      <div className="relative">
        <div className="text-center mb-10">
          <div
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: CREAM }}
            className="text-5xl sm:text-6xl uppercase tracking-wide"
          >
            Mon identité
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          <div>
            <div
              className="text-base sm:text-lg uppercase tracking-wide font-bold mb-1 text-center"
              style={{ color: "#C4A35A" }}
            >
              La militarité
            </div>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-4 text-center"
              style={{ color: "rgba(239,231,221,0.85)" }}
            >
              Ce que l&apos;armée a construit en vous&nbsp;: votre identité,
              vos repères, votre façon de voir le monde.
            </p>
            <div className="flex flex-col gap-4">
              {MILITARITE.map((d, i) => (
                <FlipCard
                  key={d.titre}
                  defi={d}
                  accent="#C4A35A"
                  numero={String(i + 1).padStart(2, "0")}
                  Icon={ICONS_MILITARITE[i]}
                />
              ))}
            </div>
          </div>

          <div>
            <div
              className="text-base sm:text-lg uppercase tracking-wide font-bold mb-1 text-center"
              style={{ color: "#D39318" }}
            >
              La polarisation
            </div>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-4 text-center"
              style={{ color: "rgba(239,231,221,0.85)" }}
            >
              Le tiraillement entre ce que vous étiez dans l&apos;armée et ce
              que vous devez devenir dans le civil.
            </p>
            <div className="flex flex-col gap-4">
              {POLARISATION.map((d, i) => (
                <FlipCard
                  key={d.titre}
                  defi={d}
                  accent="#D39318"
                  numero={String(i + 6).padStart(2, "0")}
                  Icon={ICONS_POLARISATION[i]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
