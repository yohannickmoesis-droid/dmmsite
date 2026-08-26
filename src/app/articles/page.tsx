import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ressources | Comprendre la transition militaire-civile",
  description:
    "Articles sur la reconversion militaire, l'identité, la légitimité et les compétences transférables vers le monde civil.",
};

const ARTICLES = [
  {
    href: "/articles/reconversion-pas-que-un-emploi",
    title: "Pourquoi la reconversion militaire ne se résume pas à trouver un emploi",
    excerpt:
      "60,3% des militaires en reconversion retrouvent un emploi dans l'année. Seuls 37,4% le conservent 3 ans après. Ce n'est pas un problème de compétences, c'est un problème d'identité.",
  },
  {
    href: "/articles/competences-militaires-cv",
    title: "Ancien militaire : pourquoi vos compétences ne se voient pas sur un CV classique",
    excerpt:
      "Traduire ses galons en équivalences civiles ne suffit pas. Un CV civil ne résoudra jamais une crise d'identité militaire.",
  },
];

export default function ArticlesIndexPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h1 className="font-display text-cream text-5xl sm:text-6xl tracking-wide mb-4">
            Ressources
          </h1>
          <p className="text-cream/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            Des articles pour mieux comprendre les mécanismes de la
            transition militaire-civile.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-10">
          {ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="block rounded-xl p-6 sm:p-8 transition-colors hover:bg-navy/5"
              style={{ border: "1.5px solid #C4A35A" }}
            >
              <h2 className="font-display text-navy text-2xl sm:text-3xl tracking-wide mb-3">
                {article.title}
              </h2>
              <p className="text-navy/75 text-base leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-block mt-4 text-gold-dark font-semibold text-sm">
                Lire l&apos;article →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
