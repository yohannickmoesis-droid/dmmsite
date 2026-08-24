import DiagnosticQuiz from "./DiagnosticQuiz";

export default function TenDefis() {
  return (
    <section id="defis" className="bg-navy pt-2 sm:pt-3 pb-20 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-5">
          Les mécanismes invisibles de la reconversion
        </h2>
        <p className="text-cream text-base sm:text-lg leading-relaxed mb-8 max-w-3xl text-justify">
          Dix mécanismes identitaires reviennent fréquemment lors du passage
          au civil (perte d&apos;identité, du collectif, de la légitimité...).
          Identifiez ce qui joue dans votre parcours actuel.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#quiz-diagnostic"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
          >
            Faire le test rapide (3 min)
          </a>
          <a
            href="/les-10-mecanismes"
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm sm:text-base border-b-2 border-gold pb-1 hover:text-gold-light transition-colors"
          >
            Découvrir les 10 mécanismes en détail
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div id="quiz-diagnostic" className="text-center scroll-mt-24">
          <DiagnosticQuiz />
        </div>

        <div className="h-[3px] w-full mt-16 bg-gradient-to-r from-transparent via-[#C4A35A]/70 to-transparent" />
      </div>
    </section>
  );
}
