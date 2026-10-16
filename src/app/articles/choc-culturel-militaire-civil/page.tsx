import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reconversion militaire : quand les codes de l'armée ne s'appliquent plus dans le civil",
  description:
    "Reconversion militaire : horaires, compte rendu, décisions partagées. Trois scènes vécues pour comprendre ce qui change en arrivant dans la vie civile.",
  alternates: {
    canonical: "/articles/choc-culturel-militaire-civil",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    siteName: "DMM",
    url: "/articles/choc-culturel-militaire-civil",
    title: "Reconversion militaire : quand les codes de l'armée ne s'appliquent plus dans le civil",
    description:
      "Reconversion militaire : horaires, compte rendu, décisions partagées. Trois scènes vécues pour comprendre ce qui change en arrivant dans la vie civile.",
    authors: ["Yohannick Moesis"],
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reconversion militaire : quand les codes de l'armée ne s'appliquent plus dans le civil",
    description:
      "Reconversion militaire : horaires, compte rendu, décisions partagées. Trois scènes vécues pour comprendre ce qui change en arrivant dans la vie civile.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ArticleChocCulturelPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h1 className="font-display text-cream text-4xl sm:text-5xl lg:text-6xl tracking-wide max-w-4xl leading-tight">
            Reconversion militaire&nbsp;: quand les codes de l&apos;armée ne
            s&apos;appliquent plus dans le civil
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-navy/85 text-base sm:text-lg leading-relaxed text-justify space-y-6">
            <p>
              Dans une reconversion militaire, on s&apos;attend à changer de
              métier. On s&apos;attend moins à changer de codes. C&apos;est
              pourtant là que les premiers mois se compliquent
              souvent&nbsp;: dans des situations ordinaires, où ce qui
              allait de soi pendant des années ne va plus de soi du tout.
            </p>
            <p>
              Voici trois scènes que j&apos;ai vécues dans mes premières
              années dans le civil.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Le premier vendredi
            </h2>
            <p>
              C&apos;était mon premier vendredi dans le civil. Un chef de
              service m&apos;a demandé de quitter les locaux. Je
              n&apos;avais pas terminé ce que je faisais, j&apos;ai demandé
              à rester pour finir. Il m&apos;a répondu que non&nbsp;: la
              journée était finie, les horaires étaient les horaires.
            </p>
            <p>
              Dans l&apos;armée, on ne part pas tant que la mission
              n&apos;est pas accomplie. Ce soir-là, on me demandait
              l&apos;inverse, et je ne comprenais pas.
            </p>
            <p>
              J&apos;ai mis du temps à saisir ce qui se jouait. Dans
              l&apos;institution, la règle se vit comme une mission&nbsp;:
              on l&apos;applique, on la tient, on va au bout. Dans le
              civil, elle est souvent aussi un cadre qui protège celui qui
              l&apos;applique. Mes horaires étaient une limite qu&apos;on
              me demandait de respecter, pour moi autant que pour la
              structure.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Rendre compte, un réflexe qui ne se partage pas
            </h2>
            <p>
              Dans l&apos;armée, rendre compte est un acte réflexe. Une
              mission terminée, un imprévu, un retard&nbsp;: on rend
              compte, de préférence avant que l&apos;échéance tombe.
              L&apos;information permet au chef de décider au bon moment.
            </p>
            <p>
              Dans le civil, j&apos;ai gardé ce réflexe envers ma
              hiérarchie. Et plus d&apos;une fois, en tant que cadre,
              j&apos;ai découvert par moi-même une situation que mes
              équipes ne m&apos;avaient pas remontée. Personne ne cachait
              rien. L&apos;information circulait autrement&nbsp;: entre
              collègues, au fil des échanges, selon ce qui paraissait
              important à chacun. Faire remonter systématiquement
              l&apos;information vers le chef n&apos;était simplement pas
              un code partagé.
            </p>
            <p>
              J&apos;ai appris à dire ce qui, pour moi, allait de
              soi&nbsp;: pourquoi j&apos;avais besoin de savoir, et quand.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Des décisions qui se discutent
            </h2>
            <p>
              En 2017, deux ans après mon départ, j&apos;ai intégré une
              structure éducative d&apos;inspiration militaire. Le cadre me
              parlait, je pensais m&apos;y retrouver vite. Très tôt,
              quelque chose m&apos;a dérouté&nbsp;: les décisions
              hiérarchiques étaient discutées, partagées, parfois
              négociées avec les équipes.
            </p>
            <p>
              J&apos;avais appris qu&apos;une décision se prend,
              s&apos;annonce, puis s&apos;exécute. Là, j&apos;avais le
              sentiment qu&apos;on perdait un temps fou à chercher le
              consensus. J&apos;avais quitté l&apos;armée depuis deux ans,
              mais dans ma tête, j&apos;y étais encore.
            </p>
            <p>
              Plus tard, devenu chef de service, j&apos;ai dû apprendre à
              manager plutôt qu&apos;à commander&nbsp;: partager une idée
              avant d&apos;en faire une décision, écouter les désaccords,
              construire le chemin avec l&apos;équipe. Sans être moins
              rigoureux, ni moins engagé.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Le mode réplication
            </h2>
            <p>
              Ces trois scènes ont un point commun. Dans chacune,
              j&apos;appliquais des codes qui avaient fait leurs preuves
              pendant des années, dans un environnement qui fonctionnait
              sur une autre logique.
            </p>
            <p>
              La thèse de Dominique Lecerf (
              <em>Reconversion militaire et polarisation identitaire</em>,
              Université de Montpellier, 2020) donne un nom à ce
              phénomène&nbsp;: le mode réplication. 77&nbsp;% des
              militaires en reconversion l&apos;adoptent, au moins un
              temps. Il consiste à reproduire ses repères militaires dans
              le civil sans les ajuster, par habitude plutôt que par
              entêtement, parce que c&apos;est ce qui a fonctionné pendant
              10, 15 ou 20 ans.
            </p>
            <p>
              Le risque est de vivre l&apos;écart comme un manque chez les
              autres, un manque de rigueur ou de sens du devoir, alors
              qu&apos;il s&apos;agit d&apos;une autre façon de
              fonctionner. Aucun des deux mondes n&apos;a tort. Ils ne
              fonctionnent pas selon les mêmes codes.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Réapprendre à lire les règles
            </h2>
            <p>
              Au printemps, j&apos;ai interrogé 82 militaires en
              transition. Le choc culturel est le sujet qu&apos;ils ont le
              plus cité. Une réponse m&apos;est restée&nbsp;:
              «&nbsp;Apprends-moi à réapprendre.&nbsp;»
            </p>
            <p>
              Celui qui l&apos;a écrite ne demandait pas qu&apos;on lui
              apprenne un métier. Il savait travailler. Il demandait à
              comprendre un nouveau monde.
            </p>
            <p>
              Trouver un emploi ne règle pas cette question. Il faut aussi
              apprendre à lire les règles d&apos;un environnement dont on
              ne connaît pas encore la langue, et repérer, parmi ses
              réflexes, ceux qui méritent d&apos;être gardés et ceux qui
              demandent à être ajustés. C&apos;est ce travail de décryptage
              que je mène aujourd&apos;hui avec les anciens militaires, et
              avec les structures qui les accueillent.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-4">
            Parlons de votre transition.
          </h2>
          <p className="text-cream/80 text-base leading-relaxed mb-8 max-w-2xl">
            Le choc culturel est l&apos;un des dix mécanismes qui traversent
            la transition militaire-civile. Si vous vous reconnaissez dans
            ces situations, commençons par en parler.
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
