import "./globals.css";

export const metadata = {
  title: "Michał Kędzia",
  description: "Video Editor & Producent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="bg-white text-black antialiased max-w-5xl mx-auto">
        {children}
      </body>
    </html>
  );
}
