import type { Metadata } from 'next';
import ComprarPageContent from '@/components/imoveis/ComprarPageContent';
import { fetchAllProperties } from '@/lib/sanityService';

export const metadata: Metadata = {
  title: 'Comprar Imóveis',
  description: 'Encontre casas, apartamentos e terrenos de alto padrão para compra em Campinas e região.',
};

export default async function ComprarPage() {
  const allProperties = await fetchAllProperties();
  return <ComprarPageContent allProperties={allProperties} />;
}
