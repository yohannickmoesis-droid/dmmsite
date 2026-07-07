export default function FaqCta() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-navy text-4xl sm:text-5xl tracking-wide mb-4">
          Une question&nbsp;?
        </h2>
        <p className="text-navy/75 text-base leading-relaxed mb-8 max-w-2xl">
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
    </section>
  );
}
