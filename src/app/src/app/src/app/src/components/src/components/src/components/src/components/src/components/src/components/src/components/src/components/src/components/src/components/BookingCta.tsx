export default function BookingCta() {
  return (
    <section id="reserver" className="bg-navy py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-4">
          Prêt à mettre des mots sur ce que vous traversez&nbsp;?
        </h2>
        <p className="text-cream/80 text-base leading-relaxed mb-8">
          Chaque transition est unique. Si vous sentez que l&rsquo;emploi ne suffit pas à
          retrouver votre place, commençons par un échange simple pour clarifier votre
          situation.
        </p>
        
          href="mailto:yohannick.moesis@gmail.com"
          className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
        >
          Réserver un échange
        </a>
      </div>
    </section>
  );
}
