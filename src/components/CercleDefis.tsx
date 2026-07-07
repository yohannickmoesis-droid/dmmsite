"use client";

import { useState } from "react";

type Defi = {
  titre: string;
  lignes: [string, string];
  desc: string;
};

const DEFIS: Defi[] = [
  {
    titre: "Perte d'identité",
    lignes: ["Perte", "d'identité"],
    desc: "Qui suis-je sans mon uniforme, mon grade ou mon statut ?",
  },
  {
    titre: "Choc culturel militaire / civil",
    lignes: ["Choc culturel", "militaire / civil"],
    desc: "Quand les codes appris dans l'institution ne fonctionnent plus dans le monde civil.",
  },
  {
    titre: "La légitimité à reconstruire",
    lignes: ["La légitimité à", "reconstruire"],
    desc: "Sur quoi repose ma valeur lorsque l'institution n'est plus là ?",
  },
  {
    titre: "Perte de sens",
    lignes: ["Perte", "de sens"],
    desc: "Comment retrouver une mission qui donne envie de se lever le matin ?",
  },
  {
    titre: "Perte du collectif",
    lignes: ["Perte du", "collectif"],
    desc: "Recréer du lien après avoir quitté l'esprit de corps.",
  },
  {
    titre: "Vos valeurs, votre socle",
    lignes: ["Vos valeurs,", "votre socle"],
    desc: "Définir ce qui compte vraiment lorsque les valeurs ne sont plus imposées par l'institution.",
  },
  {
    titre: "Le déni de la peur",
    lignes: ["Le déni", "de la peur"],
    desc: "Reconnaître les inquiétudes liées au changement et à l'incertitude.",
  },
  {
    titre: "Le deuil de l'institution",
    lignes: ["Le deuil de", "l'institution"],
    desc: "Accepter la fin d'un chapitre qui a structuré une partie de sa vie.",
  },
  {
    titre: "Les comportements d'évitement",
    lignes: ["Les comportements", "d'évitement"],
    desc: "Quand on cherche inconsciemment à recréer l'univers militaire ailleurs.",
  },
  {
    titre: "Accepter d'être accompagné",
    lignes: ["Accepter d'être", "accompagné"],
    desc: "Sortir du réflexe d'autonomie absolue pour avancer autrement.",
  },
];

const SIZE = 1000;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 320;
const GAP = 100; // même écart pour tous les défis, aucun n'est plus loin ou plus proche du cercle
const ARROW_ANGLES = [60, 180, 300];
const ARROW_SIZE = 22;

function getArrow(aDeg: number) {
  const aMath = ((90 - aDeg) * Math.PI) / 180;
  const px = CX + R * Math.cos(aMath);
  const py = CY - R * Math.sin(aMath);
  const tMath = aMath - Math.PI / 2;
  const tx = Math.cos(tMath);
  const ty = -Math.sin(tMath);
  const tipX = px + tx * ARROW_SIZE;
  const tipY = py + ty * ARROW_SIZE;
  const p1x = tipX - tx * ARROW_SIZE * 1.8 - -ty * ARROW_SIZE * 0.8;
  const p1y = tipY - ty * ARROW_SIZE * 1.8 - tx * ARROW_SIZE * 0.8;
  const p2x = tipX - tx * ARROW_SIZE * 1.8 + -ty * ARROW_SIZE * 0.8;
  const p2y = tipY - ty * ARROW_SIZE * 1.8 + tx * ARROW_SIZE * 0.8;
  return `${tipX},${tipY} ${p1x},${p1y} ${p2x},${p2y}`;
}

export default function CercleDefis() {
  const [actif, setActif] = useState<number | null>(null);

  return (
    <div
      className="relative w-full max-w-[600px] mx-auto aspect-square"
      style={{ containerType: "inline-size" }}
    >
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="cercleDefisGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4A35A" />
            <stop offset="50%" stopColor="#F0C75D" />
            <stop offset="100%" stopColor="#D39318" />
          </linearGradient>
        </defs>
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="url(#cercleDefisGold)"
          strokeWidth={6}
        />
        {ARROW_ANGLES.map((a, i) => (
          <polygon key={i} points={getArrow(a)} fill="#D39318" />
        ))}
      </svg>

      {DEFIS.map((d, i) => {
        const angle = (i / 10) * 2 * Math.PI - Math.PI / 2;
        const px = CX + R * Math.cos(angle);
        const py = CY + R * Math.sin(angle);
        const nx = Math.cos(angle);
        const ny = Math.sin(angle);
        const ax = px + nx * GAP;
        const ay = py + ny * GAP;
        const leftPct = (ax / SIZE) * 100;
        const topPct = (ay / SIZE) * 100;

        const isActif = actif === i;
        const color = isActif ? "#C4A35A" : i % 2 === 0 ? "#EFE7DD" : "#C4A35A";

        return (
          <div
            key={i}
            onMouseEnter={() => setActif(i)}
            onMouseLeave={() => setActif(null)}
            onClick={() => setActif(isActif ? null : i)}
            className="absolute text-center cursor-pointer"
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              transform: "translate(-50%, -50%)",
              width: "24cqw",
              maxWidth: 220,
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "3.5cqw",
                textTransform: "uppercase",
                color,
                transition: "color 0.2s",
                lineHeight: 1.2,
              }}
            >
              {d.lignes[0]}
              <br />
              {d.lignes[1]}
            </div>
          </div>
        );
      })}

      <div
        className="absolute left-1/2 top-1/2 text-center pointer-events-none px-6"
        style={{
          transform: "translate(-50%, -50%)",
          width: actif === null ? "52cqw" : "42cqw",
        }}
      >
        {actif === null ? (
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "11cqw",
              textTransform: "uppercase",
              color: "#EFE7DD",
              whiteSpace: "nowrap",
              lineHeight: 0.95,
            }}
          >
            Mon identité
          </div>
        ) : (
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "2.6cqw",
              color: "#EFE7DD",
              lineHeight: 1.5,
            }}
          >
            {DEFIS[actif].desc}
          </div>
        )}
      </div>
    </div>
  );
}
