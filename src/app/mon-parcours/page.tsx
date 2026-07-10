import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mon parcours | De Militaire à Monsieur",
  description:
    "20 ans au sein de l'Armée de Terre, 10 ans d'accompagnement dans le civil. Découvrez le parcours de Yohannick Moesis, fondateur de De Militaire à Monsieur.",
};

const PARCOURS_MILITAIRE = [
  "Sous-officier",
  "13e Régiment de Dragons Parachutistes",
  "Groupe Commando Parachutiste, 11e Brigade Parachutiste",
  "15 opérations extérieures (OPEX)",
];

const PARCOURS_CIVIL = [
  "10 ans d'accompagnement dans le civil",
  "EPIDE (Établissement pour l'Insertion dans l'Emploi)",
  "SAMiNA",
  "CER (Centre Éducatif Renforcé)",
  "Protection de l'enfance",
  "Jusqu'à responsable de service et directeur d'établissement",
];

export default function MonParcoursPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h1 className="font-display text-cream text-5xl sm:text-6xl tracking-wide mb-4">
            Mon parcours
          </h1>
          <p className="text-cream/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            Deux vies, une même mission : accompagner ceux qui traversent une
            transition profonde.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-stretch">
          <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[420px] rounded-lg overflow-hidden">
            <Image
              src="/images/portrait.jpg"
              alt="Yohannick Moesis"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="text-navy/85 text-[15px] sm:text-base leading-relaxed space-y-4">
            <p>
              J&apos;ai vécu ce que vivent aujourd&apos;hui de nombreux militaires en
              transition.
            </p>
            <p>
              Comme beaucoup, j&apos;ai trouvé un emploi après l&apos;armée. Mais
              j&apos;ai découvert que trouver un emploi et réussir sa
              reconversion étaient deux choses différentes.
            </p>
            <p>
              Quitter l&apos;institution, c&apos;est aussi devoir redéfinir son
              identité, retrouver du sens, reconstruire des repères et trouver
              une nouvelle place dans le monde civil.
            </p>
            <p>
              Depuis plus de dix ans, j&apos;accompagne des jeunes et des adultes
              confrontés à des parcours de vie complexes, à des périodes de
              transition et à la nécessité de se reconstruire ou de se
              réinventer.
            </p>
            <p>
              Aujourd&apos;hui, je mets cette double expérience, militaire et
              civile, au service des militaires confrontés aux défis
              identitaires de la reconversion, ainsi qu&apos;auprès des
              structures qui souhaitent mieux préparer et accompagner leurs
              personnels dans cette étape de vie.
            </p>
            <p className="font-semibold text-navy pt-2">
              Je ne vous aide pas à trouver un emploi.
              <br />
              Je vous aide à retrouver votre place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-stretch">
          <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[420px] rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="/images/militaire.jpg"
              alt="Yohannick Moesis en opération, Armée de Terre"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[center_25%]"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-display text-cream text-3xl sm:text-4xl tracking-wide mb-2">
              Le parcours militaire
            </h2>
            <p className="text-gold text-sm sm:text-base uppercase tracking-wide mb-8">
              Armée de Terre
            </p>

            <ul className="space-y-3 mb-8">
              {PARCOURS_MILITAIRE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-cream/85 text-base sm:text-lg leading-relaxed"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-cream/80 text-[15px] sm:text-base leading-relaxed">
              Militaire pendant 20 ans au sein de deux unités parachutistes de
              l&apos;Armée de Terre, j&apos;ai au cours de ma carrière effectué de
              nombreuses opérations extérieures, certaines plus marquantes que
              d&apos;autres. J&apos;ai servi, commandé, accompagné des hommes dans des
              contextes extrêmes. Engagé à 18 ans, l&apos;armée m&apos;a forgé, elle
              m&apos;a donné une identité, un cadre, un collectif, un sens. Pendant
              20 ans, je savais exactement qui j&apos;étais et pourquoi je me
              levais le matin.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h2 className="font-display text-navy text-3xl sm:text-4xl tracking-wide mb-8">
            Le parcours civil
          </h2>
          <ul className="space-y-3 max-w-2xl">
            {PARCOURS_CIVIL.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-navy/85 text-base sm:text-lg leading-relaxed"
              >
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-4">
            Prêt à mettre des mots sur ce que vous traversez&nbsp;?
          </h2>
          <p className="text-cream/80 text-base leading-relaxed mb-8 max-w-2xl">
            Chaque transition est unique. Si vous sentez que l&rsquo;emploi ne
            suffit pas à retrouver votre place, commençons par un échange
            simple pour clarifier votre situation.
          </p>
          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
            >
              Réserver un échange
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
