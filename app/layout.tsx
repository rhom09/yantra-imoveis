import "./globals.css";
import type { Metadata } from "next";
import { Viewport } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BottomNav from "../components/layout/BottomNav"; // Importar BottomNav
import { headers } from "next/headers"; // Importar headers para verificar a rota

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

export const viewport: Viewport = {
  themeColor: '#3F5B4B',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';
  const isStudioRoute = pathname.startsWith('/studio');

  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        <main className={`flex-grow ${!isStudioRoute ? 'pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0' : ''}`}>
          {children}
        </main>
        <Footer />
        {!isStudioRoute && <BottomNav />}
      </body>
    </html>
  );
}
