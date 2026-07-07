"use client";

import { useCallback, useRef, useState } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbziMfCni5NCQ7DDeQh4q3-RQaKTCNU7X0FX8JiVBIU0m63qvutT0FJVM9Fpek5Ia0gA/exec";

const QUESTIONS = [
  { text: "Avez-vous parfois du mal à dire qui vous êtes en dehors de votre grade, de votre fonction ou de votre parcours militaire ?", theme: "identite" },
  { text: "Avez-vous le sentiment que les codes du monde civil (communication, hiérarchie, prise de décision) sont différents de ceux que vous connaissez ou avez connus dans l'armée ?", theme: "choc" },
  { text: "Vous arrive-t-il de vous demander comment votre expérience militaire sera, ou est, perçue et valorisée dans le monde civil ?", theme: "legitimite" },
  { text: "Vous demandez-vous parfois ce qui donnera autant de sens à votre vie après l'armée, ou ce qui lui en donne aujourd'hui ?", theme: "sens" },
  { text: "Ressentez-vous une inquiétude à l'idée de perdre, ou le manque de l'esprit de corps et des liens créés au sein de votre unité ?", theme: "collectif" },
  { text: "Vous arrive-t-il de vous interroger sur les valeurs qui guideront vos choix en dehors de l'institution militaire ?", theme: "valeurs" },
  { text: "Avez-vous tendance à minimiser ou à garder pour vous vos inquiétudes concernant votre transition militaire-civile ?", theme: "peur" },
  { text: "Ressentez-vous, par moments, que cette transition représente bien plus qu'un simple changement de travail ?", theme: "deuil" },
  { text: "Avez-vous tendance à privilégier des secteurs ou des environnements qui ressemblent à ce que vous connaissez ou avez connu dans l'armée ?", theme: "evitement" },
] as const;

const OPTIONS = [
  { label: "Oui, souvent", value: 3 },
  { label: "Oui, parfois", value: 2 },
  { label: "Rarement", value: 1 },
  { label: "Jamais", value: 0 },
];

const DEFI_10 =
  "Un dixième défi, différent des neuf premiers, conditionne souvent leur dépassement : accepter d'être accompagné dans cette traversée.";

const RESULTS: Record<string, { label: string; text: string }> = {
  aucun: {
    label: "Aucun défi majeur identifié",
    text: "Vos réponses ne mettent en évidence aucun défi identitaire majeur actuellement. Cela ne veut pas dire que la transition militaire-civile sera sans aucune dimension à observer pour vous, mais simplement qu'à ce jour, ces défis ne semblent pas constituer une source de difficulté. Cette photographie peut évoluer avec le temps, c'est pourquoi il peut être utile d'y revenir périodiquement.",
  },
  identite: {
    label: "Perte d'identité",
    text: "Quitter l'armée, c'est aussi quitter un rôle qui a longtemps structuré une manière d'être, de parler, de se situer parmi les autres. Ce flottement n'est ni une faiblesse ni un retard : c'est un passage que traversent une grande majorité des militaires en reconversion.",
  },
  choc: {
    label: "Le choc culturel militaire-civil",
    text: "Dans l'armée, les façons de décider et de communiquer sont écrites et largement partagées. Dans le civil, ces mêmes fonctions s'expriment autrement, de façon plus implicite. Ce n'est pas un monde mieux organisé que l'autre : ce sont deux cultures différentes.",
  },
  legitimite: {
    label: "La légitimité à reconstruire",
    text: "Traduire une expérience militaire en mots compréhensibles pour un recruteur civil n'a rien d'évident. Ce n'est pas un manque de compétences : c'est un manque de mots pour les nommer dans un nouveau référentiel.",
  },
  sens: {
    label: "Perte de sens",
    text: "Dans l'institution, le sens de l'action était souvent donné par la mission et le collectif. Une fois cette structure disparue, trouver ce qui compte vraiment demande du temps et de l'exploration, pas une décision prise dans l'urgence.",
  },
  collectif: {
    label: "Perte du collectif",
    text: "L'esprit de corps n'était pas un supplément : c'était une part du quotidien. Ce manque n'est pas une fragilité personnelle, c'est l'absence d'une structure qu'il faut reconstruire, avec des liens choisis cette fois.",
  },
  valeurs: {
    label: "Vos valeurs, votre socle",
    text: "Dans l'institution, les valeurs étaient données : honneur, courage, discipline. Une fois ce cadre retiré, il faut nommer ses propres valeurs pour guider ses choix. Ce socle se construit progressivement.",
  },
  peur: {
    label: "Le déni de la peur",
    text: "L'institution apprend à ne pas montrer ses doutes. Dans le civil, la transition soulève pourtant des questions légitimes. Ce réflexe touche une part importante des militaires en reconversion : ce n'est pas une faiblesse.",
  },
  deuil: {
    label: "Le deuil de l'institution",
    text: "Quitter l'armée n'est pas seulement changer d'emploi. Pour beaucoup, c'est une rupture plus profonde, que le mot deuil décrit souvent mieux que celui de reconversion.",
  },
  evitement: {
    label: "Les comportements d'évitement",
    text: "Il est fréquent de se diriger vers des secteurs qui ressemblent à ce que l'on connaît déjà. Ce choix peut être pertinent, mais mérite d'être interrogé : réflexe ou décision réfléchie ?",
  },
};

const THEME_KEYS = ["identite", "choc", "legitimite", "sens", "collectif", "valeurs", "peur", "deuil", "evitement"];
const TIE_EPSILON = 0.001;

type ResultInfo =
  | { mode: "aucun"; maxAvg: number }
  | { mode: "single"; theme: string; maxAvg: number }
  | { mode: "few"; themes: string[]; maxAvg: number }
  | { mode: "many"; maxAvg: number };

function computeDominantTheme(answers: number[]): ResultInfo {
  const sums: Record<string, number> = {};
  const counts: Record<string, number> = {};
  THEME_KEYS.forEach((t) => {
    sums[t] = 0;
    counts[t] = 0;
  });
  QUESTIONS.forEach((q, i) => {
    sums[q.theme] += answers[i] ?? 0;
    counts[q.theme] += 1;
  });
  const averages: Record<string, number> = {};
  THEME_KEYS.forEach((t) => {
    averages[t] = sums[t] / counts[t];
  });
  const maxAvg = Math.max(...THEME_KEYS.map((t) => averages[t]));
  if (maxAvg <= 0) return { mode: "aucun", maxAvg };
  const candidates = THEME_KEYS.filter((t) => Math.abs(averages[t] - maxAvg) < TIE_EPSILON);
  if (candidates.length === 1) return { mode: "single", theme: candidates[0], maxAvg };
  if (candidates.length <= 3) return { mode: "few", themes: candidates, maxAvg };
  return { mode: "many", maxAvg };
}

const cardCls =
  "bg-navy/95 border border-gold/25 rounded-xl p-6 sm:p-7 shadow-[3px_3px_10px_rgba(26,26,26,0.18)]";
const buttonCls =
  "w-full rounded-lg py-3.5 font-semibold text-sm bg-gold text-navy hover:bg-gold-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream";
const inputCls =
  "w-full rounded-lg border border-cream/25 bg-cream/[0.06] px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";
const optionCls =
  "w-full text-left rounded-lg border border-cream/20 bg-cream/[0.06] px-4 py-3 text-sm text-cream hover:border-gold hover:bg-gold/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";

type Stage = "intro" | "question" | "form" | "result";

export default function DiagnosticQuiz() {
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [sending, setSending] = useState(false);
  const [emailSent, setEmailSent] = useState(true);
  const [resultInfo, setResultInfo] = useState<ResultInfo | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const handleStart = useCallback(() => {
    setStep(0);
    setAnswers([]);
    setStage("question");
  }, []);

  const handleAnswer = useCallback(
    (value: number) => {
      const next = answers.slice();
      next[step] = value;
      setAnswers(next);
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        setStage("form");
      }
    },
    [answers, step]
  );

  const handleBackQuestion = useCallback(() => {
    setStep((s) => Math.max(0, s - 1));
  }, []);

  const handleSubmitForm = useCallback(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!firstname.trim() || !emailOk) {
      setFormError("Merci de renseigner votre prénom et une adresse e-mail valide.");
      return;
    }
    setFormError("");
    setSending(true);
    const result = computeDominantTheme(answers);
    setResultInfo(result);

    let themeForPayload = "aucun";
    let labelForPayload = RESULTS.aucun.label;
    if (result.mode === "single") {
      themeForPayload = result.theme;
      labelForPayload = RESULTS[result.theme].label;
    } else if (result.mode === "few") {
      themeForPayload = "plusieurs";
      labelForPayload = `Plusieurs défis (${result.themes.map((t) => RESULTS[t].label).join(", ")})`;
    } else if (result.mode === "many") {
      themeForPayload = "reparti";
      labelForPayload = "Profil réparti sur plusieurs défis";
    }

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        firstname: firstname.trim(),
        email: email.trim(),
        theme: themeForPayload,
        themeLabel: labelForPayload,
      }),
    })
      .then(() => {
        setEmailSent(true);
        setSending(false);
        setStage("result");
      })
      .catch(() => {
        setEmailSent(false);
        setSending(false);
        setStage("result");
      });
  }, [answers, email, firstname]);

  const handleBackHome = useCallback(() => {
    setStage("intro");
    setStep(0);
    setAnswers([]);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div ref={topRef} className="w-full max-w-[440px] mx-auto">
      <div className={cardCls}>
        {stage === "intro" && (
          <div>
            <h3 className="text-cream text-lg font-semibold leading-snug mb-1.5">
              Quel défi est le plus présent dans votre transition aujourd&rsquo;hui&nbsp;?
            </h3>
            <p className="text-cream/70 text-[13.5px] leading-relaxed mb-5">
              Répondez à 9 questions rapides pour identifier le défi qui mérite peut-être
              votre attention en ce moment.
            </p>
            <button type="button" className={buttonCls} onClick={handleStart}>
              Commencer (moins de 3 minutes)
            </button>
          </div>
        )}

        {stage === "question" && (
          <div>
            <div className="flex gap-1 mb-5" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={QUESTIONS.length}>
              {QUESTIONS.map((_, i) => (
                <span
                  key={i}
                  className="flex-1 h-[3.5px] rounded-full"
                  style={{ background: i < step ? "#C4A35A" : "rgba(239,231,221,0.18)" }}
                />
              ))}
            </div>
            <p className="text-cream text-[15px] font-medium leading-snug mb-4">
              {step + 1}. {QUESTIONS[step].text}
            </p>
            <div className="flex flex-col gap-2.5">
              {OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  className={optionCls}
                  onClick={() => handleAnswer(o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                type="button"
                onClick={handleBackQuestion}
                className="mt-4 text-cream/55 text-xs hover:text-cream/80 transition-colors"
              >
                ← Question précédente
              </button>
            )}
          </div>
        )}

        {stage === "form" && (
          <div>
            <h3 className="text-cream text-lg font-semibold mb-4">Presque terminé</h3>
            <div className="mb-3">
              <label className="block text-cream/70 text-xs mb-1.5" htmlFor="quiz-firstname">
                Prénom
              </label>
              <input
                id="quiz-firstname"
                type="text"
                placeholder="Votre prénom"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className={inputCls}
              />
            </div>
            <div className="mb-3">
              <label className="block text-cream/70 text-xs mb-1.5" htmlFor="quiz-email">
                Adresse e-mail
              </label>
              <input
                id="quiz-email"
                type="email"
                placeholder="vous@exemple.fr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
              />
            </div>
            <p className="text-cream/55 text-[11.5px] leading-relaxed my-3">
              Indiquez votre prénom et votre e-mail pour recevoir votre résultat. Aucune
              autre information ne vous sera demandée.
            </p>
            <button
              type="button"
              disabled={sending}
              onClick={handleSubmitForm}
              className={`${buttonCls} ${sending ? "opacity-50 cursor-default" : ""}`}
            >
              {sending ? "Envoi en cours..." : "Voir mon résultat"}
            </button>
            {formError && (
              <p className="text-red-300 text-xs mt-2.5">{formError}</p>
            )}
          </div>
        )}

        {stage === "result" && resultInfo && (
          <ResultBlock
            info={resultInfo}
            emailSent={emailSent}
            onBackHome={handleBackHome}
          />
        )}
      </div>
    </div>
  );
}

function ResultBlock({
  info,
  emailSent,
  onBackHome,
}: {
  info: ResultInfo;
  emailSent: boolean;
  onBackHome: () => void;
}) {
  let badge = "Résultat";
  let title = "";
  let disclaimer =
    "Ce résultat ne constitue pas un diagnostic. Il reflète les thèmes qui ressortent le plus de vos réponses à un instant donné, sans hiérarchie stricte entre eux.";
  let showDefi10 = false;
  let body: React.ReactNode = null;

  if (info.mode === "aucun") {
    title = RESULTS.aucun.label;
    disclaimer =
      "Ce résultat ne constitue pas un diagnostic. Il reflète vos réponses à un instant donné ; d'autres dimensions de votre transition peuvent évoluer dans le temps.";
    body = <p className="text-cream text-sm leading-relaxed mb-4">{RESULTS.aucun.text}</p>;
  } else if (info.mode === "single") {
    badge = "Défi identifié";
    title = RESULTS[info.theme].label;
    disclaimer =
      "Ce résultat ne constitue pas un diagnostic. Il met simplement en lumière un défi qui semble actuellement plus présent dans votre transition. D'autres mécanismes peuvent également être à l'œuvre.";
    showDefi10 = true;
    body = <p className="text-cream text-sm leading-relaxed mb-4">{RESULTS[info.theme].text}</p>;
  } else if (info.mode === "few") {
    title = "Plusieurs défis semblent vous concerner";
    const labels = info.themes.map((t) => RESULTS[t].label).join(" · ");
    body = (
      <div>
        <p className="text-gold text-xs font-semibold mb-2 leading-relaxed">
          Thèmes les plus présents pour vous&nbsp;: {labels}
        </p>
        <p className="text-cream text-sm leading-relaxed mb-4">
          Vos réponses ne font pas clairement apparaître un défi qui se détache des autres :
          plusieurs semblent vous concerner à un niveau comparable aujourd&rsquo;hui. C&rsquo;est
          une situation fréquente, notamment en début de transition, car ces défis sont souvent
          liés entre eux.
        </p>
      </div>
    );
  } else {
    title = "Une transition qui se travaille dans son ensemble";
    body = (
      <p className="text-cream text-sm leading-relaxed mb-4">
        Vos réponses font apparaître une préoccupation assez répartie entre plusieurs dimensions
        de votre transition, sans qu&rsquo;un défi précis ne se détache nettement. Un
        accompagnement structuré, qui prend les défis dans leur ensemble, a souvent plus de sens
        qu&rsquo;un travail isolé sur un seul point.
      </p>
    );
  }

  return (
    <div>
      <span className="inline-block bg-gold-light text-navy text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
        {badge}
      </span>
      <h3 className="text-cream text-lg font-semibold leading-snug mb-1.5">{title}</h3>
      {body}
      {showDefi10 && (
        <p className="text-cream/85 text-sm leading-relaxed mb-4">{DEFI_10}</p>
      )}
      <p className="text-cream/65 text-xs italic leading-relaxed mb-5 border-l-2 border-gold pl-3">
        {disclaimer}
      </p>
      <div className="flex flex-col gap-2.5">
        <button type="button" className={buttonCls} onClick={onBackHome}>
          Retour à l&rsquo;accueil
        </button>
        
          href="mailto:yohannick.moesis@gmail.com"
          className="block w-full text-center rounded-lg py-3 text-sm font-semibold text-cream border border-cream/40 hover:bg-cream/10 transition-colors"
        >
          Échangeons sur votre transition
        </a>
      </div>
      <p className="text-cream/50 text-xs text-center mt-3.5">
        {emailSent
          ? "Votre résultat vient également de vous être envoyé par e-mail."
          : "Votre résultat est affiché ci-dessus. L'envoi par e-mail n'a pas pu être confirmé, vérifiez vos spams dans quelques minutes."}
      </p>
    </div>
  );
}
