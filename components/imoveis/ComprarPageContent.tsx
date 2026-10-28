'use client';

import { Suspense } from 'react';
import FilterPanel from '@/components/imoveis/FilterPanel';
import PropertyGrid from '@/components/imoveis/PropertyGrid';
import Pagination from '@/components/imoveis/Pagination';
import CTABanner from '@/components/ui/CTABanner';
import { useFilters } from '@/hooks/useFilters';
import { ArrowUpDown } from 'lucide-react';

function ComprarContent() {
  const {
    filters,
    setFilter,
    setMultipleFilters,
    resetFilters,
    imoveis,
    totalImoveis,
    currentPage,
    totalPages,
  } = useFilters('venda');

  return (
    <>
      {/* Filter Panel Flutuante */}
      <div className="container mx-auto px-6 -mt-12 relative z-10">
        <FilterPanel
          filters={filters}
          setFilter={setFilter}
          setMultipleFilters={setMultipleFilters}
          resetFilters={resetFilters}
          tipoNegocio="venda"
        />
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Barra de Status / Ordenação */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-border-yantra">
          <div>
            <h2 className="text-xl font-serif text-verde-profundo">
              {totalImoveis === 1 ? '1 imóvel encontrado' : `${totalImoveis} imóveis encontrados`}
            </h2>
            <p className="text-xs font-sans text-verde-salvia">
              Exibindo imóveis disponíveis para venda em Campinas e região
            </p>
          </div>

          <div className="flex items-center gap-2">
            <ArrowUpDown size={16} className="text-verde-escuro" />
            <label className="text-xs font-sans font-medium text-verde-escuro uppercase tracking-wider">
              Ordenar:
            </label>
            <select
              value={filters.ordenacao}
              onChange={(e) => setFilter('ordenacao', e.target.value)}
              className="px-3 py-1.5 border border-border-yantra rounded-lg text-xs font-sans text-verde-profundo bg-white focus:outline-none focus:ring-2 focus:ring-dourado"
            >
              <option value="recente">Mais recentes / Destaques</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>
        </div>

        {/* Grid de Imóveis */}
        <PropertyGrid imoveis={imoveis} onResetFilters={resetFilters} />

        {/* Paginação */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setFilter('pagina', page)}
        />
      </div>
    </>
  );
}

export default function ComprarPageContent() {
  return (
    <main className="bg-off-white min-h-screen">
      {/* Hero Banner split/escuro */}
      <section className="h-[40vh] bg-verde-profundo flex items-center justify-center text-center text-white p-6 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="block text-xs font-sans font-medium tracking-[0.2em] text-dourado uppercase mb-2">
            PORTFÓLIO EXCLUSIVO
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light">
            Imóveis para <span className="text-dourado font-normal">Comprar</span>
          </h1>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="container mx-auto px-6 py-20 text-center font-sans text-sm text-verde-escuro">
            Carregando imóveis...
          </div>
        }
      >
        <ComprarContent />
      </Suspense>

      <CTABanner />
    </main>
  );
}
