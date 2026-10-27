'use client';

import PropertyCard from './PropertyCard';
import { Imovel } from '@/types/imovel';
import { Home, RotateCcw } from 'lucide-react';

interface PropertyGridProps {
  imoveis: Imovel[];
  onResetFilters?: () => void;
}

export default function PropertyGrid({ imoveis, onResetFilters }: PropertyGridProps) {
  if (imoveis.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-border-yantra p-12 text-center max-w-xl mx-auto my-8 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-verde-salvia/20 text-verde-escuro flex items-center justify-center mx-auto mb-4">
          <Home size={32} />
        </div>
        <h3 className="font-serif text-2xl text-verde-profundo mb-2">
          Nenhum imóvel encontrado
        </h3>
        <p className="font-sans text-sm text-verde-escuro/80 mb-6">
          Não encontramos nenhum imóvel correspondente aos filtros selecionados. Experimente ajustar ou limpar os critérios de busca.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-dourado text-white rounded-full text-xs font-sans font-semibold hover:bg-dourado-light transition-colors shadow-sm"
          >
            <RotateCcw size={14} />
            LIMPAR TODOS OS FILTROS
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {imoveis.map((imovel) => (
        <PropertyCard key={imovel._id} imovel={imovel} />
      ))}
    </div>
  );
}
