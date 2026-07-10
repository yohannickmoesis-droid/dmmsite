import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | De Militaire à Monsieur",
  description:
    "Une question, un projet de transition ou un besoin d'accompagnement ? Contactez Yohannick Moesis, fondateur de De Militaire à Monsieur.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <h1 className="font-display text-cream text-5xl sm:text-6xl tracking-wide">
            Contact
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <p className="text-navy/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto text-center mb-12">
            Je suis à votre disposition pour répondre à vos interrogations et
            échanger sur votre situation, votre projet de transition ou vos
            besoins d&apos;accompagnement, à titre individuel ou au sein de
            votre structure.
          </p>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
