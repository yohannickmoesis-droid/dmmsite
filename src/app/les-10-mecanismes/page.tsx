import type { Metadata } from "next";
import { Suspense } from "react";
import CercleDefis from "@/components/CercleDefis";
import MecanismesQuiz from "@/components/MecanismesQuiz";
export const metadata: Metadata = {
  title: "Les 10 mécanismes invisibles de la reconversion | De Militaire à Monsieur",
  description:
    "Découvrez les 10 mécanismes identitaires qui traversent la transition militaire-civile, et les défis associés à chacun.",
};
export default function LesDixMecanismesPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h1 className="font-display text-cream text-5xl sm:text-6xl tracking-wide mb-4">
            Les 10 mécanismes invisibles de la reconversion
          </h1>
          <p className="text-cream/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            La transition militaire-civile met en jeu des mécanismes
            qu&apos;on anticipe rarement. Certains apparaissent dès la
            préparation du départ, d&apos;autres se révèlent une fois dans le
            monde civil. Les reconnaître est une première étape pour mieux
            comprendre ce que l&apos;on traverse.
          </p>
        </div>
      </section>
      <section className="bg-navy pb-14 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 text-center">
          <CercleDefis />
        </div>
      </section>
      <section className="bg-navy pt-0 pb-20 sm:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-8">
            Quel mécanisme est le plus présent pour vous&nbsp;?
          </h2>
          <Suspense fallback={null}>
            <MecanismesQuiz />
          </Suspense>
        </div>
      </section>
    </>
  );
}
