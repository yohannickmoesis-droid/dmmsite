export default function BookingCta() {
  return (
    <section id="reserver" className="bg-navy py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-4">
          Prêt à mettre des mots sur ce que vous traversez&nbsp;?
        </h2>
        <p className="text-cream/80 text-base leading-relaxed mb-8 max-w-2xl text-justify">
          Chaque transition est unique. Si vous sentez que l&rsquo;emploi ne
          suffit pas à retrouver votre place, commençons par un échange
          simple.
        </p>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
          >
            Prendre rendez-vous
          </a>
          <p className="mt-5 text-cream/70 text-sm">
            Vous avez des questions&nbsp;?{" "}
            <a
              href="/questions-frequentes"
              className="text-gold font-semibold underline underline-offset-2 hover:text-gold-light transition-colors"
            >
              Consultez la FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
