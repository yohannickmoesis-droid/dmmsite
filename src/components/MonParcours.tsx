"use client";

import Image from "next/image";

export default function MonParcours() {
  return (
    <section id="parcours" className="bg-cream py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-stretch">
        <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[420px] rounded-lg overflow-hidden">
          <Image
            src="/images/portrait.jpg"
            alt="Yohannick Moesis"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <div>
          <h2 className="font-display text-navy text-4xl sm:text-5xl tracking-wide text-center mb-3">
            Mon parcours
          </h2>
          <p className="text-navy/70 text-sm sm:text-base uppercase tracking-wide text-center mb-10">
            20 ans au sein de l&apos;Armée de Terre.
            <br /> 10 ans d&apos;accompagnement dans le civil.
          </p>

          <div className="text-navy/85 text-[15px] sm:text-base leading-relaxed space-y-4 mb-10">
            <p>
              J&apos;ai vécu ce que vivent aujourd&apos;hui de nombreux militaires en transition.
            </p>
            <p>
              Comme beaucoup, j&apos;ai trouvé un emploi après l&apos;armée. Mais j&apos;ai
              découvert que trouver un emploi et réussir sa reconversion étaient deux choses
              différentes.
            </p>
            <p>
              Quitter l&apos;institution, c&apos;est aussi devoir redéfinir son identité,
              retrouver du sens, reconstruire des repères et trouver une nouvelle place dans le
              monde civil.
            </p>
            <p>
              Depuis plus de dix ans, j&apos;accompagne des jeunes et des adultes confrontés à
              des parcours de vie complexes, à des périodes de transition et à la nécessité de se
              reconstruire ou de se réinventer.
            </p>
            <p>
              Aujourd&apos;hui, je mets cette double expérience, militaire et civile, au service
              des militaires confrontés aux défis identitaires de la reconversion, ainsi
              qu&apos;auprès des structures qui souhaitent mieux préparer et accompagner leurs
              personnels dans cette étape de vie.
            </p>
            <p className="font-semibold text-navy">
              Je ne vous aide pas à trouver un emploi.
              <br />
              Je vous aide à retrouver votre place.
            </p>
          </div>

          <div className="text-center">
            <a
              href="#aide"
              className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream hover:bg-navy/85 transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
