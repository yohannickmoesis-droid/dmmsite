export default function FaqBookingSection() {
  return (
    <section id="faq" className="grid md:grid-cols-2">
      <div className="bg-cream py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-xl md:ml-auto md:mr-10 lg:mr-16">
          <h2 className="font-display text-navy text-4xl sm:text-5xl tracking-wide mb-4">
            Une question&nbsp;?
          </h2>
          <p className="text-navy/75 text-base leading-relaxed mb-8">
            Vous vous demandez si cet accompagnement est fait pour vous&nbsp;? Consultez les
            questions les plus fréquemment posées.
          </p>
          <div className="text-center">
            <a
              href="/questions-frequentes"
              className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream hover:bg-navy/85 transition-colors"
            >
              Voir les questions
            </a>
          </div>
        </div>
      </div>

      <div id="reserver" className="bg-navy py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-xl md:mr-auto md:ml-10 lg:ml-16">
          <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-4">
            Prêt à mettre des mots sur ce que vous traversez&nbsp;?
          </h2>
          <p className="text-cream/80 text-base leading-relaxed mb-8">
            Chaque transition est unique. Si vous sentez que l&rsquo;emploi ne suffit pas à
            retrouver votre place, commençons par un échange simple pour clarifier votre
            situation.
          </p>
          <div className="text-center">
            <a
              href="mailto:yohannick.moesis@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
            >
              Réserver un échange
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
