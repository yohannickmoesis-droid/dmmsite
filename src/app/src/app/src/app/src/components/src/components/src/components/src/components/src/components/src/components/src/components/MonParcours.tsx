"use client";

import Image from "next/image";

export default function MonParcours() {
  return (
    <section id="parcours" className="bg-cream py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display text-navy text-4xl sm:text-5xl tracking-wide mb-3">
          Mon parcours
        </h2>
        <p className="text-navy/70 text-sm sm:text-base uppercase tracking-wide mb-10">
          20 ans au sein de l&rsquo;Armée de Terre.
          <br className="sm:hidden" /> 10 ans d&rsquo;accompagnement dans le civil.
        </p>

        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-10 rounded-full overflow-hidden border-4 border-gold/40">
          <Image
            src="/images/portrait.jpg"
            alt="Yohannick Moesis"
            fill
            sizes="192px"
            className="object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <div className="text-navy/85 text-[15px] sm:text-base leading-relaxed text-justify space-y-4 mb-10">
          <p>
            J&rsquo;ai vécu ce que vivent aujourd&rsquo;hui de nombreux militaires en transition.
          </p>
          <p>
            Comme beaucoup, j&rsquo;ai trouvé un emploi après l&rsquo;armée. Mais j&rsquo;ai
            découvert que trouver un emploi et réussir sa reconversion étaient deux choses
            différentes.
          </p>
          <p>
            Quitter l&rsquo;institution, c&rsquo;est aussi devoir redéfinir son identité,
            retrouver du sens, reconstruire des repères et trouver une nouvelle place dans le
            monde civil.
          </p>
          <p>
            Depuis plus de dix ans, j&rsquo;accompagne des jeunes et des adultes confrontés à
            des parcours de vie complexes, à des périodes de transition et à la nécessité de se
            reconstruire ou de se réinventer.
          </p>
          <p>
            Aujourd&rsquo;hui, je mets cette double expérience, militaire et civile, au service
            des militaires confrontés aux défis identitaires de la reconversion, ainsi
            qu&rsquo;auprès des structures qui souhaitent mieux préparer et accompagner leurs
            personnels dans cette étape de vie.
          </p>
          <p className="font-semibold text-navy">
            Je ne vous aide pas à trouver un emploi.
            <br />
            Je vous aide à retrouver votre place.
          </p>
        </div>

        
          href="#aide"
          className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream hover:bg-navy/85 transition-colors"
        >
          En savoir plus
        </a>
      </div>
    </section>
  );
}
