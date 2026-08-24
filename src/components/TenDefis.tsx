import DiagnosticQuiz from "./DiagnosticQuiz";

const MECANISMES = [
  "La perte d'identité",
  "Le choc culturel militaire-civil",
  "La légitimité à reconstruire",
  "La perte de sens",
  "La perte du collectif",
  "La perte du socle de valeurs",
  "Le déni de la peur",
  "Le deuil de l'institution",
  "Les comportements d'évitement",
  "Accepter d'être accompagné(e)",
];

export default function TenDefis() {
  return (
    <section id="defis" className="bg-navy pt-2 sm:pt-3 pb-20 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-5">
          Les 10 mécanismes invisibles de la reconversion
        </h2>
        <p className="text-cream text-base sm:text-lg leading-relaxed mb-10 max-w-3xl text-justify">
          Dix mécanismes identitaires reviennent le plus souvent dans les
          parcours de reconversion. Voici un aperçu&nbsp;: le détail de chacun
          se trouve sur la page dédiée.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-4xl mx-auto">
          {MECANISMES.map((m, i) => (
            <div
              key={m}
              className="flex items-center gap-3 rounded-lg px-4 py-3"
              style={{
                background: "#161066",
                border: "1px solid rgba(196,163,90,0.35)",
              }}
            >
              <span
                className="text-xs font-bold shrink-0"
                style={{ color: "#C4A35A" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-cream text-sm sm:text-base font-medium text-left">
                {m}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mb-14">
          <a
            href="/les-10-mecanismes"
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm sm:text-base border-b-2 border-gold pb-1 hover:text-gold-light transition-colors"
          >
            Découvrir les 10 mécanismes en détail
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="text-center">
          <DiagnosticQuiz />
        </div>
      </div>
    </section>
  );
}
