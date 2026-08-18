import CercleDefis from "./CercleDefis";
import DiagnosticQuiz from "./DiagnosticQuiz";

export default function TenDefis() {
  return (
    <section id="defis" className="bg-navy pt-2 sm:pt-3 pb-20 sm:pb-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-5">
          Les 10 mécanismes invisibles de la reconversion
        </h2>
        <p className="text-cream text-base sm:text-lg leading-relaxed mb-14 max-w-3xl text-justify">
          La transition militaire-civile met en jeu des mécanismes que l&apos;on
          n&apos;avait pas anticipés. Certains apparaissent dès la préparation du
          départ, d&apos;autres se révèlent une fois dans le monde civil. Les
          reconnaître est une première étape pour mieux comprendre ce que l&apos;on
          traverse.
        </p>

        <div className="mb-14 text-center">
          <CercleDefis />
        </div>

        <div className="text-center">
          <DiagnosticQuiz />
        </div>
      </div>
    </section>
  );
}
