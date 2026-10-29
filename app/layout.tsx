import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://yantra-imoveis.vercel.app'),
  title: {
    default: "Yantra Negócios Imobiliários — Imóveis de Alto Padrão em Campinas",
    template: "%s | Yantra Negócios Imobiliários",
  },
  description: "Conectando pessoas ao lugar onde a vida floresce. Imóveis residenciais e comerciais de alto padrão em Campinas e região.",
  keywords: ["imóveis alto padrão", "campinas", "cambuí", "imobiliária campinas", "comprar imóvel", "alugar imóvel", "yantra"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://yantra-imoveis.vercel.app",
    siteName: "Yantra Negócios Imobiliários",
    title: "Yantra Negócios Imobiliários — Imóveis de Alto Padrão em Campinas",
    description: "Conectando pessoas ao lugar onde a vida floresce.",
    images: [
      {
        url: "/logo_dark.jpeg",
        width: 600,
        height: 600,
        alt: "Yantra Negócios Imobiliários",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yantra Negócios Imobiliários",
    description: "Conectando pessoas ao lugar onde a vida floresce.",
  },
  verification: {
    google: "RkxV16SMOAGFK2cxrfGeMMxrl68ZUeCIZM6TuXlt5jI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
