import "./globals.css";

export const metadata = {
  title: "Michał Kędzia",
  description: "Video Editor & Producent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="min-h-screen text-black antialiased">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
