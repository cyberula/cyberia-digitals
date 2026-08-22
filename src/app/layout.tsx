import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberia.com.ar"),
  title: "Cyberia Digitals – Servicios Digitales y Productora Multimedia",
  description: "Powerhouse de desarrollo y productora de contenido. Ahorra tiempo, dinero y dolores de cabeza con nuestros devs, diseñadores, redactores y soporte técnico 100% humano para todas las aristas de tu proyecto.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
  authors: [
    { name: "Cyberia Digitals" }
  ],
  keywords: ["servicios digitales", "desarrollo web", "multimedia", "cyberia"],
  openGraph: {
    title: "Cyberia Digitals – Servicios Digitales y Productora Multimedia",
    description: "Powerhouse de desarrollo y productora de contenido digital.",
    url: "https://cyberia.com.ar",
    siteName: "Cyberia Digitals",
    images: [
      {
        url: "/assets/3252361240.png",
        width: 800,
        height: 600,
        alt: "Cyberia Digitals Logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased">
        {children}
        <ClientBody />
      </body>
    </html>
  );
}
