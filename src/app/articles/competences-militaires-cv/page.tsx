import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ancien militaire : pourquoi vos compétences ne se voient pas sur un CV classique",
  description:
    "Traduire ses galons en équivalences civiles ne suffit pas. Un CV civil ne résoudra jamais une crise d'identité militaire. Comprendre pourquoi, et le piège de la sur-performance.",
};

export default function ArticleCompetencesCvPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h1 className="font-display text-cream text-4xl sm:text-5xl lg:text-6xl tracking-wide max-w-4xl leading-tight">
            Ancien militaire&nbsp;: pourquoi vos compétences ne se voient
            pas sur un CV classique
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-navy/85 text-base sm:text-lg leading-relaxed text-justify space-y-6">
            <p>
              Quand un militaire quitte l&apos;institution, le réflexe
              classique est toujours le même&nbsp;: traduire ses galons en
              équivalences civiles, formater un CV avec les bons
              mots-clés, enchaîner les entretiens d&apos;embauche.
            </p>
            <p>
              Très souvent, ça marche. Le recrutement se fait, le contrat
              est signé. C&apos;est quelques mois plus tard que le malaise
              peut arriver.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Ce qui se voit, ce qui ne se voit pas
            </h2>
            <p>
              Le problème, c&apos;est que les compétences se voient sur un
              CV. La perte de repères, elle, ne se voit pas. Dans
              l&apos;armée, la fonction et l&apos;identité ne font
              qu&apos;un. Une fois l&apos;uniforme rangé, cette fusion ne
              disparaît pas d&apos;elle-même&nbsp;: elle continue de jouer,
              en silence, bien après la signature du contrat.
            </p>
            <p>
              Un CV civil ne résoudra jamais une crise d&apos;identité
              militaire. En traitant uniquement la reconversion comme un
              simple problème de CV, on prend le risque de fabriquer des
              professionnels efficaces dans leur nouveau poste, mais en
              décalage dans leur nouvelle vie.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Une légitimité qui se méritait, à coups de preuves
            </h2>
            <p>
              Pendant des années, nous avons appris qu&apos;il fallait
              mériter notre place. Chaque qualification, chaque brevet,
              chaque examen, chaque montée en grade, chaque responsabilité.
              Tout s&apos;obtenait en faisant ses preuves.
            </p>
            <p>
              Cette logique fonctionne dans l&apos;institution, et
              n&apos;est pas propre aux militaires. Mais chez nous, elle
              est particulièrement ancrée, parce que la légitimité s&apos;y
              gagnait de façon systématique et visible. Le problème,
              c&apos;est qu&apos;elle nous suit parfois longtemps après
              l&apos;avoir quittée.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Chaque poste comme un examen à repasser
            </h2>
            <p>
              Je l&apos;ai observé chez de nombreux anciens militaires, et
              je me suis reconnu dedans. On accepte davantage de charges
              que nécessaire. On travaille plus, on veut montrer que
              l&apos;on est capable, que l&apos;on mérite d&apos;être là,
              comme si chaque nouveau poste était un examen à repasser.
              Comme si quelqu&apos;un devait encore nous autoriser à avoir
              notre place. Pourtant, il arrive un moment où cette course
              devient épuisante.
            </p>

            <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide pt-4">
              Changer la question
            </h2>
            <p>
              La question n&apos;est plus&nbsp;: comment prouver ma
              valeur&nbsp;? Mais&nbsp;: pourquoi ai-je encore besoin de la
              prouver&nbsp;?
            </p>
            <p>
              Reconstruire sa légitimité ne se fait pas dans le
              sur-engagement opérationnel, mais dans le positionnement.
              C&apos;est souvent là que commence la véritable transition
              identitaire.
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
            Traduire ses compétences et reconstruire sa légitimité ne sont
            que deux des dix mécanismes qui traversent la transition
            militaire-civile. Si vous vous reconnaissez dans cette
            situation, commençons par en parler.
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
