"use client";

import { useState } from "react";

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
const CARD_BG = "#171057";
const GOLD_SOFT = "#F0C75D";
const NAVY = "#0E0857";

const ICON_PROPS = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconIdentite() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="7" r="3.5" strokeDasharray="2 2" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" strokeDasharray="2 2" />
    </svg>
  );
}
function IconChocCulturel() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 8h7M10 8l-3-3M10 8l-3 3" />
      <path d="M21 16h-7M14 16l3-3M14 16l3 3" />
    </svg>
  );
}
function IconLegitimite() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M12 9.5c1 0 1.6.6 1.6 1.3 0 1.2-1.6 1.2-1.6 2.5" />
      <circle cx="12" cy="15.5" r="0.15" fill="currentColor" />
    </svg>
  );
}
function IconPerteSens() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="8" />
      <path d="M14.5 8.5l-2 5-4 2.5 2-5 4-2.5z" />
    </svg>
  );
}
function IconPerteCollectif() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3" y="10" width="6" height="4" rx="2" />
      <rect x="15" y="4" width="6" height="4" rx="2" transform="rotate(20 18 6)" />
      <path d="M9 12h3" strokeDasharray="1.5 2" />
    </svg>
  );
}
function IconValeurs() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="6" r="2" />
      <path d="M12 8v8M8 12h8M9 20h6M12 16v4" />
    </svg>
  );
}
function IconPeur() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M12 3v18M9 9l3 2 3-2" />
    </svg>
  );
}
function IconDeuilInstitution() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M6 3v18" />
      <path d="M6 4l6 2-6 2v-4z" opacity="0.5" />
      <path d="M6 9l7 2.5-7 2.5V9z" />
    </svg>
  );
}
function IconEvitement() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 6h6v6H3zM15 6h6v6h-6zM9 9h6M18 12v3a3 3 0 0 1-3 3H9" />
      <path d="M11 16l-2 2 2 2" />
    </svg>
  );
}
function IconAccompagne() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 13l4-1 3 1.5" />
      <path d="M21 13l-4-1-3 1.5" />
      <path d="M10 13.5l1 1.2c.6.7 1.8.7 2.4 0l1-1.2" />
      <path d="M7 12l3 1.5M17 12l-3 1.5" />
    </svg>
  );
}

const ICONS_MILITARITE = [
  IconIdentite,
  IconChocCulturel,
  IconLegitimite,
  IconPerteSens,
  IconPerteCollectif,
];
const ICONS_POLARISATION = [
  IconValeurs,
  IconPeur,
  IconDeuilInstitution,
  IconEvitement,
  IconAccompagne,
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
  Icon: () => React.JSX.Element;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
      className="cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full min-h-[130px] sm:min-h-[150px] transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 rounded-lg p-5 flex flex-col justify-center"
          style={{
            backfaceVisibility: "hidden",
            border: `2px solid ${accent}`,
            background: CARD_BG,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs sm:text-sm font-bold" style={{ color: accent }}>
              {numero}
            </span>
            <span style={{ color: accent }}>
              <Icon />
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              color: CREAM,
              lineHeight: 1.35,
            }}
            className="text-2xl sm:text-3xl font-bold uppercase block pr-6"
          >
            {defi.titre}
          </span>
          <span
            className="absolute bottom-3 right-4 text-lg font-bold leading-none"
            style={{ color: accent }}
          >
            +
          </span>
        </div>

        <div
          className="absolute inset-0 rounded-lg p-5 flex items-center justify-start text-left"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: `2px solid ${accent}`,
            background: GOLD_SOFT,
          }}
        >
          <span
            style={{ color: NAVY, lineHeight: 1.6 }}
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
    <div className="w-full max-w-5xl mx-auto">
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
            className="text-base sm:text-lg uppercase tracking-wide font-bold mb-4"
            style={{ color: "#C4A35A" }}
          >
            La militarité
          </div>
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
            className="text-base sm:text-lg uppercase tracking-wide font-bold mb-4"
            style={{ color: "#D39318" }}
          >
            La polarisation
          </div>
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
  );
}
