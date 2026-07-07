import CercleDefis from "./CercleDefis";
import DiagnosticQuiz from "./DiagnosticQuiz";

export default function TenDefis() {
  return (
    <section id="defis" className="bg-navy py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-5">
          Les 10 défis invisibles de la reconversion
        </h2>
        <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-14">
          La transition militaire-civile s&rsquo;accompagne souvent de défis que l&rsquo;on
          n&rsquo;avait pas anticipés. Certains apparaissent dès la préparation du départ,
          d&rsquo;autres se révèlent une fois dans le monde civil. Les reconnaître est une
          première étape pour mieux comprendre ce que l&rsquo;on traverse.
        </p>

        <div className="mb-14">
          <CercleDefis />
        </div>

        <DiagnosticQuiz />
      </div>
    </section>
  );
}
