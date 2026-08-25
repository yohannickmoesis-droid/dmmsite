const STATS = [
  { chiffre: "20 000", legende: "militaires entament une reconversion chaque année" },
  { chiffre: "60,3 %", legende: "trouvent un emploi en moins d'un an" },
  { chiffre: "37,4 %", legende: "pérennisent leur emploi après 3 ans" },
];

export default function LaRealite() {
  return (
    <section className="bg-navy pt-0 pb-14 sm:pb-16">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-10 sm:mb-12">
          La réalité de la reconversion
        </h2>

        <div
          className="rounded-2xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x overflow-hidden mb-8"
          style={{
            border: "1.5px solid #C4A35A",
            background: "#161066",
            boxShadow: "0 12px 32px rgba(196,163,90,0.18)",
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.legende}
              className="px-6 py-10 sm:py-12 text-center flex flex-col items-center"
              style={{ borderColor: "rgba(196,163,90,0.25)" }}
            >
              <div className="font-display text-gold text-6xl sm:text-7xl tracking-wide leading-none mb-3">
                {s.chiffre}
              </div>
              <p className="text-cream text-sm sm:text-base leading-snug">
                {s.legende}
              </p>
            </div>
          ))}
        </div>

        <p className="text-cream font-medium text-base sm:text-lg leading-relaxed whitespace-nowrap">
          Trouver un emploi est une chose, s&apos;ancrer durablement dans sa
          nouvelle vie en est une autre.
        </p>

        <div className="h-[3px] w-full mt-10 sm:mt-12 bg-gradient-to-r from-transparent via-[#C4A35A]/70 to-transparent" />
      </div>
    </section>
  );
}
