export default function FaqCta() {
  return (
    <section id="faq" className="bg-cream py-8">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <p className="text-navy/70 text-sm sm:text-base text-center">
          Vous vous demandez si cet accompagnement est fait pour vous&nbsp;?{" "}
          <a
            href="/questions-frequentes"
            className="text-navy font-semibold underline underline-offset-2 hover:text-gold-dark transition-colors"
          >
            Consultez les questions fréquemment posées
          </a>
          .
        </p>
      </div>
    </section>
  );
}
