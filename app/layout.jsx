import "./globals.css";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

const SITE_URL = "https://michalkedzia.xyz";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Michał Kędzia — Video Editor & Producent Wideo",
    template: "%s | Michał Kędzia",
  },
  description:
    "Producent wideo i montażysta z doświadczeniem w dziennikarstwie radiowym. Specjalizuję się w wywiadach, podcastach, formach dokumentalnych, transmisjach live i rolkach. Adobe Premiere Pro, After Effects.",
  keywords: [
    "video editor",
    "montażysta",
    "producent wideo",
    "montaż filmów",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "podcasty",
    "wywiady",
    "transmisje live",
    "Instagram Reels",
    "TikTok",
    "YouTube",
    "Michał Kędzia",
    "freelance video editor",
    "Polska",
  ],
  authors: [{ name: "Michał Kędzia" }],
  creator: "Michał Kędzia",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "Michał Kędzia — Portfolio",
    title: "Michał Kędzia — Video Editor & Producent Wideo",
    description:
      "Producent wideo i montażysta. Wywiady, podcasty, formy dokumentalne, transmisje live, rolki. Dostępny do współpracy projektowej.",
    images: [
      {
        url: "/michaleek.png",
        width: 800,
        height: 800,
        alt: "Michał Kędzia — Video Editor & Producent Wideo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michał Kędzia — Video Editor & Producent Wideo",
    description:
      "Producent wideo i montażysta. Wywiady, podcasty, formy dokumentalne, transmisje live, rolki.",
    images: ["/michaleek.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={leagueSpartan.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                mainEntity: {
                  "@type": "Person",
                  "@id": `${SITE_URL}/#person`,
                  name: "Michał Kędzia",
                  url: SITE_URL,
                  image: `${SITE_URL}/michaleek.png`,
                  jobTitle: "Video Editor & Producent Wideo",
                  description:
                    "Producent wideo i montażysta z doświadczeniem w dziennikarstwie radiowym. Specjalizuję się w wywiadach, podcastach, formach dokumentalnych, transmisjach live i rolkach.",
                  email: "michal.kedzia@icloud.com",
                  telephone: "+48514198824",
                  knowsAbout: [
                    "Adobe Premiere Pro",
                    "Adobe After Effects",
                    "Video Editing",
                    "Color Grading",
                    "Motion Graphics",
                    "Sound Design",
                    "Sound Processing",
                    "Podcast Production",
                    "Instagram Reels",
                    "TikTok Editing",
                    "YouTube Publishing",
                    "SEO",
                  ],
                  makesOffer: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Montaż wideo",
                        description: "Profesjonalny montaż wywiadów, podcastów, form dokumentalnych i video esejów.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Produkcja podcastów",
                        description: "Pełna obsługa podcastów — nagrywanie, edycja audio i wideo, publikacja.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Transmisje live",
                        description: "Realizacja transmisji na żywo — konfiguracja, realizacja obrazu, postprodukcja.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Rolki Instagram & TikTok",
                        description: "Tworzenie angażujących rolek na Instagram Reels i TikTok z optymalizacją pod algorytmy.",
                      },
                    },
                  ],
                  sameAs: [
                    "https://www.youtube.com/@michalkedzia",
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Kim jest Michał Kędzia?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Michał Kędzia to producent wideo i montażysta z Polski z doświadczeniem w dziennikarstwie radiowym. Specjalizuje się w wywiadach, podcastach, formach dokumentalnych, transmisjach live i rolkach na Instagram i TikTok.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jakie usługi oferuje Michał Kędzia?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Michał oferuje montaż wideo, produkcję podcastów, realizację transmisji live, tworzenie rolek na Instagram i TikTok, color grading, motion graphics oraz sound design. Pracuje w Adobe Premiere Pro i After Effects.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Jak skontaktować się z Michałem Kędzią?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Email: michal.kedzia@icloud.com, telefon: +48 514 198 824, strona: michalkedzia.xyz. Dostępny do współpracy projektowej.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy Michał Kędzia pracuje zdalnie?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tak, większość projektów montażowych realizowana jest zdalnie. Transmisje live wymagają obecności na miejscu.",
                    },
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "Portfolio wideo — Michał Kędzia",
                itemListElement: [
                  {
                    "@type": "VideoObject",
                    position: 1,
                    name: "BASS FROM SPACE: TBH — wywiad & DJ set @ Śluza",
                    url: "https://youtu.be/_OqjFwIZNeA",
                    thumbnailUrl: "https://img.youtube.com/vi/_OqjFwIZNeA/hqdefault.jpg",
                    author: { "@id": `${SITE_URL}/#person` },
                  },
                  {
                    "@type": "VideoObject",
                    position: 2,
                    name: "CZY PATRYK JAKI TO POLSKI CHARLIE KIRK?",
                    url: "https://youtu.be/A37f11EqX0U",
                    thumbnailUrl: "https://img.youtube.com/vi/A37f11EqX0U/hqdefault.jpg",
                    author: { "@id": `${SITE_URL}/#person` },
                  },
                  {
                    "@type": "VideoObject",
                    position: 3,
                    name: "Wieczór Wyborczy z ORB — transmisja live",
                    url: "https://www.youtube.com/live/1Q_8zNhHg0k",
                    thumbnailUrl: "https://img.youtube.com/vi/1Q_8zNhHg0k/hqdefault.jpg",
                    author: { "@id": `${SITE_URL}/#person` },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-screen text-black antialiased font-[family-name:var(--font-league-spartan)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
