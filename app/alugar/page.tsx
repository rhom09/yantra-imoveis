import type { Metadata } from 'next';
import AlugarPageContent from '@/components/imoveis/AlugarPageContent';

export const metadata: Metadata = {
  title: 'Alugar Imóveis',
  description: 'Imóveis exclusivos para locação de alto padrão em Campinas e região.',
};

export default function AlugarPage() {
  return <AlugarPageContent />;
}
