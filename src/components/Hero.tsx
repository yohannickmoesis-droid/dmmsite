"use client";

import Image from "next/image";

function IconIdentite() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-12 sm:h-12"
    >
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  );
}

function IconSens() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-12 sm:h-12"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function IconCollectif() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-12 sm:h-12"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconAvenir() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 sm:w-12 sm:h-12"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <path d="M8 3v6" />
      <path d="M8 3l5 2-5 2" />
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

        <div className="grid grid-cols-2 sm:grid-cols-4 max-w-2xl sm:divide-x sm:divide-cream/20 gap-y-8">
          {REPERES.map((item) => (
            <div key={item.label} className="text-center px-3 sm:px-6">
              <div className="text-cream/85 mb-3 flex justify-center">
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
