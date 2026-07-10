"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/mon-parcours", label: "Mon parcours" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a
          href="/"
          className="font-display text-cream text-2xl tracking-wide leading-none"
        >
          De Militaire <span className="text-gold">à Monsieur</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-cream/85 hover:text-gold text-sm font-medium tracking-wide transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
        >
          Réserver un échange
        </a>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-cream p-2 -mr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy/98 backdrop-blur border-t border-cream/10">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-cream/90 text-base font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
              >
                Réserver un échange
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
