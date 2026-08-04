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

const GROUPS = [
  { label: "La militarité", items: MILITARITE, offset: 0, accent: "#C4A35A" },
  { label: "La polarisation", items: POLARISATION, offset: 5, accent: "#D39318" },
];

export default function CercleDefis() {
  const [actif, setActif] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: CREAM }}
          className="text-5xl sm:text-6xl uppercase tracking-wide"
        >
          Mon identité
        </div>
      </div>

      {GROUPS.map((group) => (
        <div key={group.label} className="mb-8">
          <div
            className="text-xs uppercase tracking-wide font-bold mb-3"
            style={{ color: group.accent }}
          >
            {group.label}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 items-start">
            {group.items.map((d, idx) => {
              const globalIndex = group.offset + idx;
              const isActive = actif === globalIndex;
              return (
                <button
                  key={d.titre}
                  type="button"
                  onClick={() => setActif(isActive ? null : globalIndex)}
                  className={`text-left rounded-lg p-4 transition-all duration-200 ${
                    isActive ? "col-span-2 sm:col-span-2" : "col-span-1"
                  }`}
                  style={{
                    borderLeft: `3px solid ${group.accent}`,
                    background: isActive
                      ? "rgba(196,163,90,0.18)"
                      : "rgba(239,231,221,0.08)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      color: CREAM,
                    }}
                    className="text-base sm:text-lg font-semibold uppercase leading-tight block"
                  >
                    {d.titre}
                  </span>
                  {isActive && (
                    <span
                      style={{ color: "rgba(239,231,221,0.9)" }}
                      className="block text-sm sm:text-base leading-relaxed mt-3 normal-case"
                    >
                      {d.desc}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
