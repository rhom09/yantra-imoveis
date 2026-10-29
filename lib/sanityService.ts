import { client } from './sanity';
import { FEATURED_QUERY, LISTING_QUERY, DETAIL_QUERY } from './queries';
import { MOCK_IMOVEIS } from './mockData';
import { Imovel } from '@/types/imovel';

// Helper para verificar se o Sanity está configurado (Project ID válido)
const isSanityConfigured = () => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return Boolean(projectId && projectId !== 'dummy-project-id' && projectId !== '');
};

export async function fetchFeaturedProperties(): Promise<Imovel[]> {
  if (!isSanityConfigured()) {
    // Fallback para mock data em desenvolvimento sem Sanity
    return MOCK_IMOVEIS.filter(i => i.destaque && i.status === 'ativo').slice(0, 6);
  }

  try {
    const data = await client.fetch<Imovel[]>(FEATURED_QUERY);
    return data && data.length > 0 ? data : MOCK_IMOVEIS.filter(i => i.destaque);
  } catch (error) {
    console.error('Erro ao buscar imóveis em destaque do Sanity:', error);
    return MOCK_IMOVEIS.filter(i => i.destaque);
  }
}

interface ListingParams {
  tipo: 'venda' | 'locacao';
  cidade?: string;
  bairro?: string;
  tipoImovel?: string;
  valorMin?: number;
  valorMax?: number;
  offset?: number;
  pageSize?: number;
}

export async function fetchListings(params: ListingParams): Promise<Imovel[]> {
  if (!isSanityConfigured()) {
    // Filtragem em memória sobre o mockData
    return MOCK_IMOVEIS.filter(imovel => {
      if (imovel.tipoNegocio !== params.tipo) return false;
      if (imovel.status !== 'ativo') return false;
      if (params.cidade && !imovel.cidade.toLowerCase().includes(params.cidade.toLowerCase().trim())) return false;
      if (params.bairro && !imovel.bairro.toLowerCase().includes(params.bairro.toLowerCase().trim())) return false;
      if (params.tipoImovel && imovel.tipoImovel.toLowerCase() !== params.tipoImovel.toLowerCase()) return false;
      if (params.valorMin && imovel.valor < params.valorMin) return false;
      if (params.valorMax && imovel.valor > params.valorMax) return false;
      return true;
    });
  }

  try {
    const queryParams = {
      tipo: params.tipo,
      cidade: params.cidade || '',
      bairro: params.bairro || '',
      valorMin: params.valorMin || 0,
      valorMax: params.valorMax || 999999999,
      offset: params.offset || 0,
      pageSize: params.pageSize || 8,
    };

    const data = await client.fetch<Imovel[]>(LISTING_QUERY, queryParams);
    return data;
  } catch (error) {
    console.error('Erro ao buscar listagem do Sanity:', error);
    return MOCK_IMOVEIS.filter(i => i.tipoNegocio === params.tipo);
  }
}

export async function fetchAllProperties(): Promise<Imovel[]> {
  if (!isSanityConfigured()) {
    return MOCK_IMOVEIS.filter((i) => i.status === 'ativo');
  }

  try {
    const data = await client.fetch<Imovel[]>(`*[_type == "imovel" && status == "ativo"]`);
    return data && data.length > 0 ? data : MOCK_IMOVEIS.filter((i) => i.status === 'ativo');
  } catch (error) {
    console.error('Erro ao buscar todos os imóveis do Sanity:', error);
    return MOCK_IMOVEIS.filter((i) => i.status === 'ativo');
  }
}

export async function fetchPropertyBySlug(slug: string): Promise<Imovel | null> {
  if (!isSanityConfigured()) {
    return MOCK_IMOVEIS.find(i => i.slug.current === slug && i.status === 'ativo') || null;
  }

  try {
    const data = await client.fetch<Imovel | null>(DETAIL_QUERY, { slug });
    return data || MOCK_IMOVEIS.find(i => i.slug.current === slug) || null;
  } catch (error) {
    console.error(`Erro ao buscar imóvel por slug (${slug}) do Sanity:`, error);
    return MOCK_IMOVEIS.find(i => i.slug.current === slug) || null;
  }
}
