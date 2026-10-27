'use client';

import { useMemo, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Imovel } from '@/types/imovel';
import { MOCK_IMOVEIS } from '@/lib/mockData';

export interface FilterState {
  tipo: string;
  cidade: string;
  bairro: string;
  valorMin: string;
  valorMax: string;
  ordenacao: 'recente' | 'menor-preco' | 'maior-preco';
  pagina: number;
}

export function useFilters(tipoNegocio?: 'venda' | 'locacao') {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageSize = 8;

  // Extrair filtros da URL
  const filters: FilterState = useMemo(() => {
    return {
      tipo: searchParams.get('tipo') || '',
      cidade: searchParams.get('cidade') || '',
      bairro: searchParams.get('bairro') || '',
      valorMin: searchParams.get('valorMin') || '',
      valorMax: searchParams.get('valorMax') || '',
      ordenacao: (searchParams.get('ordenacao') as FilterState['ordenacao']) || 'recente',
      pagina: parseInt(searchParams.get('pagina') || '1', 10) || 1,
    };
  }, [searchParams]);

  // Atualizar URL params
  const setFilter = useCallback(
    (key: keyof FilterState, value: string | number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== '' && value !== '0') {
        params.set(key, String(value));
      } else {
        params.delete(key);
      }

      // Ao mudar qualquer filtro além da própria página, resetar para a página 1
      if (key !== 'pagina') {
        params.delete('pagina');
      }

      const queryString = params.toString();
      router.push(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const setMultipleFilters = useCallback(
    (updates: Partial<FilterState>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value !== undefined && value !== '' && value !== null) {
          params.set(key, String(value));
        } else {
          params.delete(key);
        }
      });

      if (!('pagina' in updates)) {
        params.delete('pagina');
      }

      const queryString = params.toString();
      router.push(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const resetFilters = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  // Filtragem e ordenação em memória
  const filteredProperties = useMemo(() => {
    let result = MOCK_IMOVEIS.filter((imovel) => {
      if (tipoNegocio && imovel.tipoNegocio !== tipoNegocio) {
        return false;
      }
      if (filters.tipo && imovel.tipoImovel.toLowerCase() !== filters.tipo.toLowerCase()) {
        return false;
      }
      if (
        filters.cidade &&
        !imovel.cidade.toLowerCase().includes(filters.cidade.toLowerCase().trim())
      ) {
        return false;
      }
      if (
        filters.bairro &&
        !imovel.bairro.toLowerCase().includes(filters.bairro.toLowerCase().trim())
      ) {
        return false;
      }
      if (filters.valorMin) {
        const min = parseFloat(filters.valorMin);
        if (!isNaN(min) && imovel.valor < min) return false;
      }
      if (filters.valorMax) {
        const max = parseFloat(filters.valorMax);
        if (!isNaN(max) && imovel.valor > max) return false;
      }
      return true;
    });

    // Ordenação
    result = [...result].sort((a, b) => {
      if (filters.ordenacao === 'menor-preco') {
        return a.valor - b.valor;
      }
      if (filters.ordenacao === 'maior-preco') {
        return b.valor - a.valor;
      }
      // Padrão: mais recentes / destaques
      if (a.destaque && !b.destaque) return -1;
      if (!a.destaque && b.destaque) return 1;
      return (b.anoConstrucao || 0) - (a.anoConstrucao || 0);
    });

    return result;
  }, [tipoNegocio, filters]);

  // Paginação
  const totalImoveis = filteredProperties.length;
  const totalPages = Math.ceil(totalImoveis / pageSize) || 1;
  const currentPage = Math.min(Math.max(1, filters.pagina), totalPages);

  const paginatedProperties = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProperties.slice(start, start + pageSize);
  }, [filteredProperties, currentPage, pageSize]);

  return {
    filters,
    setFilter,
    setMultipleFilters,
    resetFilters,
    imoveis: paginatedProperties,
    totalImoveis,
    currentPage,
    totalPages,
    pageSize,
  };
}
