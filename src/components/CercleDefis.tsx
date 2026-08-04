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

function FlipCard({ defi, accent }: { defi: Defi; accent: string }) {
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
        className="relative w-full min-h-[100px] sm:min-h-[110px] transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 rounded-lg p-5 flex items-center"
          style={{
            backfaceVisibility: "hidden",
            borderLeft: `3px solid ${accent}`,
            background: "rgba(239,231,221,0.08)",
          }}
        >
          <span
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: CREAM }}
            className="text-lg sm:text-xl font-semibold uppercase leading-tight block"
          >
            {defi.titre}
          </span>
        </div>

        <div
          className="absolute inset-0 rounded-lg p-5 flex items-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderLeft: `3px solid ${accent}`,
            background: "rgba(196,163,90,0.18)",
          }}
        >
          <span
            style={{ color: "rgba(239,231,221,0.92)" }}
            className="text-sm sm:text-base leading-relaxed block"
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
            {MILITARITE.map((d) => (
              <FlipCard key={d.titre} defi={d} accent="#C4A35A" />
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
            {POLARISATION.map((d) => (
              <FlipCard key={d.titre} defi={d} accent="#D39318" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
