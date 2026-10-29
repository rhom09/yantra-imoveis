import type { Metadata } from 'next';
import AlugarPageContent from '@/components/imoveis/AlugarPageContent';
import { fetchAllProperties } from '@/lib/sanityService';

export const metadata: Metadata = {
  title: 'Alugar Imóveis',
  description: 'Imóveis exclusivos para locação de alto padrão em Campinas e região.',
};

export default async function AlugarPage() {
  const allProperties = await fetchAllProperties();
  return <AlugarPageContent allProperties={allProperties} />;
}
