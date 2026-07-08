"use client";

import Image from "next/image";

function IconIdentite() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 sm:w-11 sm:h-11">
      <path
        d="M24 8c-8 0-13 5.5-13 13 0 5 1.5 9 3.5 13M24 8c8 0 13 5.5 13 13 0 3-.5 6-1.5 9M24 14c-5.5 0-9 4-9 9 0 5 1.5 9 3.5 13M24 14c5.5 0 9 4 9 9 0 3-.5 6-1.5 9M24 20c-3 0-5 2.2-5 6 0 4 1.5 8 4 12M24 20c3 0 5 2.2 5 6 0 2-.3 4-1 6M24 26c-1 0-1.5.8-1.5 2.3 0 3 1 6 3 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSens() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 sm:w-11 sm:h-11">
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M29 19l-3 7-7 3 3-7 7-3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="6" r="1.4" fill="currentColor" />
    </svg>
  );
}

function IconCollectif() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 sm:w-11 sm:h-11">
      <circle cx="24" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="16" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="36" cy="16" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M24 18c-5 0-9 3.5-9 9v6M24 18c5 0 9 3.5 9 9v6M12 21c-3.6 0-6.5 2.6-6.5 6.6V32M36 21c3.6 0 6.5 2.6 6.5 6.6V32"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAvenir() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 sm:w-11 sm:h-11">
      <path
        d="M4 34l11-14 7 8 8-11 14 17H4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M30 17V7M30 7l7 4-7 3" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

const REPERES = [
  { label: "Identité", sub: "Qui suis-je ?", Icon: IconIdentite },
  { label: "Sens", sub: "Ma mission", Icon: IconSens },
  { label: "Collectif", sub: "Mon réseau", Icon: IconCollectif },
  { label: "Avenir", sub: "Mes choix", Icon: IconAvenir },
];

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

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24 pt-32">
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
          {REPERES.map((item) => (
            <div key={item.label}>
              <div className="text-cream/80 mb-3">
                <item.Icon />
              </div>
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
