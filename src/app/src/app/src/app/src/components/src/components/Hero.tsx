"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-navy"
    >
      {/* Background photo — drop a real photo at public/images/hero.jpg to replace this gradient */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,8,87,0.55) 0%, rgba(14,8,87,0.75) 55%, rgba(14,8,87,0.96) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24 pt-32">
        <p className="text-gold font-semibold tracking-[0.15em] text-sm sm:text-base uppercase mb-4">
          Votre transition. Votre identité. Votre avenir.
        </p>
        <h1 className="font-display text-cream text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-wide mb-8 max-w-4xl">
          De Militaire <span className="text-gold">à Monsieur</span>
        </h1>
        <p className="text-cream/90 text-lg sm:text-xl max-w-2xl italic leading-relaxed mb-3">
          La reconversion ne se résume pas à trouver un emploi.
        </p>
        <p className="text-cream/90 text-lg sm:text-xl max-w-2xl italic leading-relaxed mb-10">
          Elle consiste aussi à retrouver une{" "}
          <span className="text-gold not-italic font-semibold">identité</span>
          , un <span className="text-gold not-italic font-semibold">sens</span>{" "}
          et une{" "}
          <span className="text-gold not-italic font-semibold">place</span>{" "}
          dans le monde civil.
        </p>

        <p className="text-cream/70 text-sm sm:text-base uppercase tracking-wide mb-8">
          Un accompagnement dédié à votre transition militaire-civile
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-2xl border-t border-cream/15 pt-8">
          {[
            { label: "Identité", sub: "Qui suis-je ?" },
            { label: "Sens", sub: "Ma mission" },
            { label: "Collectif", sub: "Mon réseau" },
            { label: "Avenir", sub: "Mes choix" },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-display text-gold text-2xl sm:text-3xl tracking-wide leading-none mb-1">
                {item.label}
              </div>
              <div className="text-cream/60 text-xs sm:text-sm uppercase tracking-wide">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
