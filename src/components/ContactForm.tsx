"use client";

import { useState } from "react";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbziMfCni5NCQ7DDeQh4q3-RQaKTCNU7X0FX8JiVBIU0m63qvutT0FJVM9Fpek5Ia0gA/exec";

const CALENDLY_LINK = "https://calendly.com/yohannick-moesis/30min";

const LINKEDIN_URL = "https://www.linkedin.com/in/yohannick-moesis-784b2980";

type Stage = "form" | "sent" | "error";

export default function ContactForm() {
  const [stage, setStage] = useState<Stage>("form");
  const [sending, setSending] = useState(false);
  const [souhaiteRappel, setSouhaiteRappel] = useState(false);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nom.trim() || !prenom.trim() || !email.trim() || !message.trim()) {
      return;
    }
    setSending(true);

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        type: "contact",
        nom: nom.trim(),
        prenom: prenom.trim(),
        email: email.trim(),
        telephone: telephone.trim(),
        message: message.trim(),
        souhaiteRappel,
      }),
    })
      .then(() => {
        setStage("sent");
        setSending(false);
      })
      .catch(() => {
        setStage("error");
        setSending(false);
      });
  }

  if (stage === "sent") {
    return (
      <div className="text-center py-10">
        <p className="font-display text-navy text-3xl tracking-wide mb-3">
          Message envoyé
        </p>
        <p className="text-navy/75 text-base leading-relaxed max-w-md mx-auto">
          Merci, votre message a bien été transmis. Je reviens vers vous dès
          que possible.
        </p>
        {souhaiteRappel && (
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream hover:bg-navy/85 transition-colors mt-6"
          >
            Réserver un échange
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div>
        <label className="block text-navy text-sm font-medium mb-1.5">
          Nom
        </label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
          className="w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-navy text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-dark"
        />
      </div>

      <div>
        <label className="block text-navy text-sm font-medium mb-1.5">
          Prénom
        </label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
          className="w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-navy text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-dark"
        />
      </div>

      <div>
        <label className="block text-navy text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-navy text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-dark"
        />
      </div>

      <div>
        <label className="block text-navy text-sm font-medium mb-1.5">
          Téléphone (optionnel)
        </label>
        <input
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-navy text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-dark"
        />
      </div>

      <div>
        <label className="block text-navy text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="w-full rounded-lg border border-navy/20 bg-white px-4 py-2.5 text-navy text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-dark resize-y"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={souhaiteRappel}
          onChange={(e) => setSouhaiteRappel(e.target.checked)}
          className="mt-1 w-4 h-4 accent-navy"
        />
        <span className="text-navy text-sm leading-relaxed">
          Je souhaite un échange, par téléphone ou en visio, à un créneau
          qui me convient.
        </span>
      </label>

      {souhaiteRappel && (
        <div className="bg-navy/5 border border-navy/15 rounded-lg p-4">
          <p className="text-navy/80 text-sm leading-relaxed mb-3 text-justify">
            Choisissez un créneau qui vous convient, il sera automatiquement
            réservé.
          </p>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-cream hover:bg-navy/85 transition-colors"
          >
            Réserver un échange
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-cream hover:bg-navy/85 transition-colors disabled:opacity-60"
      >
        {sending ? "Envoi en cours…" : "Envoyer"}
      </button>

      {stage === "error" && (
        <p className="text-center text-sm text-red-700">
          Une erreur est survenue. Vous pouvez aussi écrire directement à{" "}
          <a href="mailto:yohannick.moesis@gmail.com" className="underline">
            yohannick.moesis@gmail.com
          </a>
          .
        </p>
      )}

      <div className="border-t border-navy/15 pt-6 text-center">
        <p className="text-navy/70 text-sm mb-3">
          Retrouvez-moi aussi sur LinkedIn
        </p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn de Yohannick Moesis"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#0A66C2] hover:bg-[#004182] transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white"
          >
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
        </a>
      </div>
    </form>
  );
}
