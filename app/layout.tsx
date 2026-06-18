import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofía & Alejandro — 14 Febrero 2026",
  description: "Estás invitado a celebrar con nosotros el día más especial de nuestras vidas.",
  openGraph: {
    title: "Sofía & Alejandro — 14 Febrero 2026",
    description: "¡Nos casamos! Te esperamos para celebrar este momento único.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
