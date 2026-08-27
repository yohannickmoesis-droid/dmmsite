import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmmsite.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Reconversion Militaire : Transition & Identité | DMM",
    template: "%s | DMM",
  },
  description:
    "Accompagnement dédié aux militaires pour réussir le passage au civil. Retrouvez votre place, votre sens et vos repères au-delà de l'uniforme. Contactez DMM.",
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
    siteName: "DMM",
    title: "Reconversion Militaire : Transition & Identité | DMM",
    description:
      "Accompagnement dédié aux militaires pour réussir le passage au civil. Retrouvez votre place, votre sens et vos repères au-delà de l'uniforme. Contactez DMM.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMM",
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
    <html
      lang="fr"
      className={`h-full antialiased ${bebasNeue.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
