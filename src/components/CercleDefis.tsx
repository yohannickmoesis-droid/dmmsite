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

function FlipCard({
  defi,
  accent,
  numero,
}: {
  defi: Defi;
  accent: string;
  numero: string;
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
          className="absolute inset-0 rounded-lg p-5 flex flex-col items-center justify-center text-center"
          style={{
            backfaceVisibility: "hidden",
            border: `1px solid ${accent}`,
            background: CARD_BG,
          }}
        >
          <span
            className="absolute top-3 left-4 text-xs sm:text-sm font-bold"
            style={{ color: accent }}
          >
            {numero}
          </span>
          <span
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: CREAM }}
            className="text-xl sm:text-2xl font-bold uppercase leading-tight block"
          >
            {defi.titre}
          </span>
        </div>

        <div
          className="absolute inset-0 rounded-lg p-5 flex items-center justify-center text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: `1px solid ${accent}`,
            background: GOLD_SOFT,
          }}
        >
          <span
            style={{ color: NAVY }}
            className="text-sm sm:text-base font-medium leading-relaxed block"
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
