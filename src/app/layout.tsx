import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmmsite.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "De Militaire à Monsieur | Votre transition. Votre identité. Votre avenir.",
    template: "%s | De Militaire à Monsieur",
  },
  description:
    "Militaire en reconversion ? Découvrez les défis invisibles de la transition et comment les traverser. Accompagnement identitaire pour militaires en transition vers le civil.",
  keywords: [
    "reconversion militaire",
    "transition militaire civile",
    "accompagnement militaire",
    "reconversion armée",
    "identité militaire",
  ],
  authors: [{ name: "Yohannick Moesis" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "De Militaire à Monsieur",
    title: "De Militaire à Monsieur | Votre transition. Votre identité. Votre avenir.",
    description:
      "Militaire en reconversion ? Découvrez les défis invisibles de la transition et comment les traverser.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "De Militaire à Monsieur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "De Militaire à Monsieur",
    description:
      "Militaire en reconversion ? Découvrez les défis invisibles de la transition et comment les traverser.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
