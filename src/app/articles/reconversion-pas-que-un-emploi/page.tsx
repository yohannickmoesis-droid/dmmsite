import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pourquoi la reconversion militaire ne se résume pas à trouver un emploi",
  description:
    "60,3% des militaires en reconversion retrouvent un emploi dans l'année. Seuls 37,4% le conservent 3 ans après. Ce n'est pas un problème de compétences, c'est un problème d'identité.",
};

export default function ArticlePasQuunEmploiPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h1 className="font-display text-cream text-4xl sm:text-5xl lg:text-6xl tracking-wide max-w-4xl leading-tight">
            Pourquoi la reconversion militaire ne se résume pas à trouver un
            emploi
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-navy/85 text-base sm:text-lg leading-relaxed text-justify space-y-6">
            <p>
              La reconversion des militaires, on en parle souvent. On parle
              de CV, de lettres de motivation, de formations, de recherche
              d&apos;emploi. Et sur ça, soyons clairs&nbsp;: les dispositifs
              fonctionnent. Mais il y a un sujet dont on parle beaucoup
              moins. L&apos;identité sociale.
            </p>
            <p>
              Parce que quitter l&apos;armée, ce n&apos;est pas simplement
              un changement de métier. C&apos;est un changement de vie.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Ce que disent les chiffres
            </h2>
            <p>
              Une thèse sur la reconversion militaire (Dominique Lecerf,
              Université de Montpellier, 2020) montre que 60,3&nbsp;% des
              militaires qui quittent l&apos;institution retrouvent un
              emploi dans l&apos;année. Mais seuls 37,4&nbsp;% le maintiennent
              encore 3 ans après.
            </p>
            <p>
              Ce n&apos;est pas un problème de compétences. C&apos;est un
              problème d&apos;identité.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              «&nbsp;Bonjour monsieur&nbsp;»
            </h2>
            <p>
              Le 26 mars 2015, je quittais officiellement ma compagnie. Mon
              dernier jour en treillis, mon dernier jour sous les drapeaux.
              Le 26 avril, j&apos;étais rayé des contrôles. Et le
              lendemain, je décollais pour l&apos;étranger afin
              d&apos;occuper mes nouvelles fonctions de technicien réseaux
              et GSM.
            </p>
            <p>
              Entre les deux&nbsp;? Un mois de permissions. Un sas où
              l&apos;on ne réalise pas vraiment ce qui se joue. On a
              l&apos;impression d&apos;être simplement en congés.
            </p>
            <p>
              Puis vient le matin du 27 avril. Je suis à l&apos;aéroport
              pour partir travailler, en tenue civile, sans frère
              d&apos;armes. À l&apos;arrivée, je suis accueilli par un
              «&nbsp;Bonjour monsieur&nbsp;». Cette fois, je ne suis plus
              militaire. L&apos;adjudant-chef Moesis a laissé place à
              Monsieur, à Yohannick. Mais alors, qui suis-je au
              fond&nbsp;? En dehors de ma caserne, ma compagnie, sans mon
              treillis, mon béret, mes insignes et mes formations&nbsp;?
            </p>
            <p>
              C&apos;est souvent à cet instant précis que commence la
              véritable transition. Pas au moment où l&apos;on signe son
              départ, mais au moment où l&apos;on prend conscience que
              l&apos;identité professionnelle qu&apos;on a portée pendant
              deux décennies ne suffit plus à nous définir dans le monde
              civil.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Deux chemins, deux rythmes différents
            </h2>
            <p>
              Un emploi, un salaire, une vie qui semble avoir retrouvé son
              équilibre&nbsp;: et pourtant, quelque chose continue parfois
              à chercher sa place. Ce sont simplement deux chemins qui
              n&apos;avancent pas toujours au même rythme&nbsp;: celui de
              l&apos;emploi, et celui de la place qu&apos;on y trouve
              vraiment.
            </p>
            <p>
              On prépare les militaires à refaire leur CV, à traduire leurs
              compétences techniques, à réussir leurs entretiens. Mais on
              oublie trop souvent de les préparer au vertige identitaire
              qui les attend au saut du lit, le premier jour de leur
              nouvelle vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-4">
            Je ne vous aide pas à trouver un emploi.
          </h2>
          <p className="text-cream/80 text-base leading-relaxed mb-8 max-w-2xl">
            Je vous aide à trouver votre place. Découvrez les dix mécanismes
            identitaires qui traversent la transition militaire-civile, ou
            échangeons directement sur votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/les-10-mecanismes"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
            >
              Découvrir les 10 mécanismes
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
