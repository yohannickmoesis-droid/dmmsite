export default function FaqCta() {
  return (
    <section id="faq" className="bg-navy py-10 sm:py-14">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div
          className="max-w-2xl mx-auto rounded-xl px-6 py-6 sm:px-8 sm:py-7 text-center"
          style={{
            border: "1.5px solid #C4A35A",
            background: "rgba(30, 26, 100, 0.5)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 12px 32px rgba(196,163,90,0.18)",
          }}
        >
          <p className="text-cream text-sm sm:text-base">
            Vous vous demandez si cet accompagnement est fait pour vous&nbsp;?{" "}
            <a
              href="/questions-frequentes"
              className="text-gold font-semibold underline underline-offset-2 hover:text-gold-light transition-colors"
            >
              Consultez les questions fréquemment posées
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
