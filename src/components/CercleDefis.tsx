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
    lignes: ["Légitimité à", "reconstruire"],
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
    lignes: ["Comportements", "d'évitement"],
    desc: "Quand on cherche inconsciemment à recréer l'univers militaire ailleurs.",
  },
  {
    titre: "Accepter d'être accompagné",
    lignes: ["Accepter d'être", "accompagné"],
    desc: "Sortir du réflexe d'autonomie absolue pour avancer autrement.",
  },
];

const GAPS = [110, 95, 95, 65, 65, 55, 75, 90, 115, 95];
const ARROW_ANGLES = [60, 180, 300];

export default function CercleDefis() {
  const [actif, setActif] = useState<number | null>(null);

  const size = 1000;
  const cx = size / 2;
  const cy = size / 2;
  const r = 320;
  const arrowSize = 22;
  const lineH = 38;

  function getArrow(aDeg: number) {
    const aMath = ((90 - aDeg) * Math.PI) / 180;
    const px = cx + r * Math.cos(aMath);
    const py = cy - r * Math.sin(aMath);
    const tMath = aMath - Math.PI / 2;
    const tx = Math.cos(tMath);
    const ty = -Math.sin(tMath);
    const tipX = px + tx * arrowSize;
    const tipY = py + ty * arrowSize;
    const p1x = tipX - tx * arrowSize * 1.8 - -ty * arrowSize * 0.8;
    const p1y = tipY - ty * arrowSize * 1.8 - tx * arrowSize * 0.8;
    const p2x = tipX - tx * arrowSize * 1.8 + -ty * arrowSize * 0.8;
    const p2y = tipY - ty * arrowSize * 1.8 + tx * arrowSize * 0.8;
    return `${tipX},${tipY} ${p1x},${p1y} ${p2x},${p2y}`;
  }

  function getLabelPos(i: number) {
    const angle = (i / 10) * 2 * Math.PI - Math.PI / 2;
    const px = cx + r * Math.cos(angle);
    const py = cy + r * Math.sin(angle);
    const nx = Math.cos(angle);
    const ny = Math.sin(angle);
    const gap = GAPS[i];
    const anchor: "start" | "end" | "middle" =
      nx > 0.15 ? "start" : nx < -0.15 ? "end" : "middle";
    return { x: px + nx * gap, y: py + ny * gap, anchor };
  }

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        style={{ display: "block", overflow: "visible" }}
      >
        <defs>
          <linearGradient id="cercleDefisGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4A35A" />
            <stop offset="50%" stopColor="#F0C75D" />
            <stop offset="100%" stopColor="#D39318" />
          </linearGradient>
        </defs>

        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="url(#cercleDefisGold)"
          strokeWidth={6}
        />

        {ARROW_ANGLES.map((a, i) => (
          <polygon key={i} points={getArrow(a)} fill="#D39318" />
        ))}

        {DEFIS.map((d, i) => {
          const { x, y, anchor } = getLabelPos(i);
          const isActif = actif === i;
          const color = isActif ? "#C4A35A" : "#0E0857";
          const totalH = d.lignes.length * lineH;
          const startY = y - totalH / 2 + lineH / 2;
          const hitX =
            anchor === "start" ? x - 12 : anchor === "end" ? x - 208 : x - 110;

          return (
            <g
              key={i}
              onClick={() => setActif(isActif ? null : i)}
              style={{ cursor: "pointer" }}
            >
              <rect
                x={hitX}
                y={startY - totalH / 2 - 18}
                width={220}
                height={totalH + 36}
                fill="transparent"
              />
              {d.lignes.map((ligne, j) => (
                <text
                  key={j}
                  x={x}
                  y={startY + j * lineH}
                  textAnchor={anchor}
                  fontFamily="Montserrat, sans-serif"
                  fontSize={30}
                  fontWeight={600}
                  fill={color}
                  style={{ transition: "fill 0.2s" }}
                >
                  {ligne}
                </text>
              ))}
            </g>
          );
        })}

        {actif === null ? (
          <text
            x={cx}
            y={cy + 14}
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontSize={44}
            fontWeight={700}
            fill="#0E0857"
          >
            Mon identité
          </text>
        ) : (
          <text
            x={cx}
            y={cy + 6}
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontSize={20}
            fontWeight={700}
            fill="#C4A35A"
          >
            {`Défi ${actif + 1}/10`}
          </text>
        )}
      </svg>

      <div
        className="min-h-[110px] mt-6 mx-4 px-5 py-4 rounded-xl transition-colors"
        style={{ background: actif !== null ? "#0E0857" : "transparent" }}
      >
        {actif !== null ? (
          <>
            <div className="text-gold text-sm font-bold mb-2 leading-snug">
              {DEFIS[actif].titre}
            </div>
            <div className="text-cream text-sm leading-relaxed">
              {DEFIS[actif].desc}
            </div>
          </>
        ) : (
          <div className="text-navy/50 text-xs text-center pt-4">
            Touchez un défi pour en savoir plus
          </div>
        )}
      </div>
    </div>
  );
}
