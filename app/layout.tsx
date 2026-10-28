import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://yantraimoveis.com.br'),
  title: {
    default: "Yantra Negócios Imobiliários — Imóveis de Alto Padrão em Campinas",
    template: "%s | Yantra Negócios Imobiliários",
  },
  description: "Conectando pessoas ao lugar onde a vida floresce. Imóveis residenciais e comerciais de alto padrão em Campinas e região.",
  keywords: ["imóveis alto padrão", "campinas", "cambuí", "imobiliária campinas", "comprar imóvel", "alugar imóvel", "yantra"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://yantraimoveis.com.br",
    siteName: "Yantra Negócios Imobiliários",
    title: "Yantra Negócios Imobiliários — Imóveis de Alto Padrão em Campinas",
    description: "Conectando pessoas ao lugar onde a vida floresce.",
    images: [
      {
        url: "/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "Yantra Negócios Imobiliários",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yantra Negócios Imobiliários",
    description: "Conectando pessoas ao lugar onde a vida floresce.",
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
