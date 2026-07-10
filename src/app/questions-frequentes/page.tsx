import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions fréquentes | De Militaire à Monsieur",
  description:
    "Les réponses aux questions les plus fréquemment posées sur l'accompagnement identitaire proposé par De Militaire à Monsieur.",
};

const QUESTIONS = [
  {
    q: "Je ne suis pas encore en reconversion. Cet accompagnement est-il fait pour moi\u00a0?",
    r: "Oui. La transition commence souvent bien avant le départ de l'institution. Anticiper les défis identitaires permet de mieux préparer cette étape et d'éviter certaines difficultés une fois dans le civil.",
  },
  {
    q: "J'ai quitté l'armée depuis plusieurs années. Est-il trop tard\u00a0?",
    r: "Non. Certaines questions liées à l'identité, au sens ou à la place que l'on occupe peuvent apparaître plusieurs mois, voire plusieurs années après le départ. Il n'est jamais trop tard pour les explorer.",
  },
  {
    q: "En quoi votre accompagnement est-il différent de Défense Mobilité\u00a0?",
    r: "Défense Mobilité accompagne les militaires sur les aspects techniques de la reconversion : projet professionnel, formation, CV, recherche d'emploi. Mon accompagnement est complémentaire. Il porte sur les enjeux identitaires de la transition : identité, sens, légitimité, collectif, adaptation au monde civil.",
  },
  {
    q: "Est-ce un coaching ou une thérapie\u00a0?",
    r: "Ni l'un ni l'autre. Il s'agit d'un accompagnement centré sur la compréhension des défis identitaires liés à la transition militaire-civil et sur la mise en action de pistes concrètes pour avancer.",
  },
  {
    q: "Intervenez-vous uniquement auprès des militaires\u00a0?",
    r: "Non, j'interviens également auprès des régiments, structures d'accompagnement, associations et organismes qui souhaitent mieux préparer ou accompagner les militaires dans leur transition.",
  },
  {
    q: "Les accompagnements se déroulent-ils uniquement en présentiel\u00a0?",
    r: "Les interventions collectives sont réalisées principalement en présentiel. Les accompagnements individuels peuvent être proposés en présentiel ou à distance selon la situation et la localisation.",
  },
  {
    q: "Comment savoir si cet accompagnement peut me convenir\u00a0?",
    r: "Le plus simple est d'échanger. Un premier contact permet de faire le point sur votre situation, vos attentes et de voir si mon accompagnement correspond à vos besoins.",
  },
];

export default function QuestionsFrequentesPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h1 className="font-display text-cream text-5xl sm:text-6xl tracking-wide">
            Questions fréquentes
          </h1>
        </div>
      </section>

      <section className="bg-cream pt-16 sm:pt-20 pb-20 sm:pb-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-10">
            {QUESTIONS.map((item) => (
              <div key={item.q}>
                <p className="text-gold-dark font-semibold text-base sm:text-lg leading-snug mb-2">
                  {item.q}
                </p>
                <p className="text-navy/85 text-[15px] sm:text-base leading-relaxed text-justify">
                  {item.r}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h2 className="font-display text-cream text-4xl sm:text-5xl tracking-wide mb-4">
            Prêt à mettre des mots sur ce que vous traversez&nbsp;?
          </h2>
          <p className="text-cream/80 text-base leading-relaxed mb-8 max-w-2xl">
            Chaque transition est unique. Si vous sentez que l&rsquo;emploi ne
            suffit pas à retrouver votre place, commençons par un échange
            simple pour clarifier votre situation.
          </p>
          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy hover:bg-gold-light transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
