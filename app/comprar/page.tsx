import type { Metadata } from 'next';
import ComprarPageContent from '@/components/imoveis/ComprarPageContent';

export const metadata: Metadata = {
  title: 'Comprar Imóveis',
  description: 'Encontre casas, apartamentos e terrenos de alto padrão para compra em Campinas e região.',
};

export default function ComprarPage() {
  return <ComprarPageContent />;
}
