import "./globals.css";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata = {
  title: "Michał Kędzia",
  description: "Video Editor & Producent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={leagueSpartan.variable}>
      <body className="min-h-screen text-black antialiased font-[family-name:var(--font-league-spartan)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
