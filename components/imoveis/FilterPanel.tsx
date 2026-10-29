'use client';

import { useState, useEffect, useMemo } from 'react';
import { FilterState } from '@/hooks/useFilters';
import { Search, RotateCcw, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { Imovel } from '@/types/imovel';
import { formatarMoeda } from '@/lib/formatters';

interface FilterPanelProps {
  filters: FilterState;
  setFilter: (key: keyof FilterState, value: string | number) => void;
  setMultipleFilters: (updates: Partial<FilterState>) => void;
  resetFilters: () => void;
  tipoNegocio?: 'venda' | 'locacao';
  allProperties: Imovel[];
}

export default function FilterPanel({
  filters,
  setFilter,
  setMultipleFilters,
  resetFilters,
  tipoNegocio,
  allProperties,
}: FilterPanelProps) {
  const [localCidade, setLocalCidade] = useState(filters.cidade);
  const [localBairro, setLocalBairro] = useState(filters.bairro);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  // Calcula faixas de preço dinâmicas
  const valorRanges = useMemo(() => {
    const precos = allProperties
      .filter((i) => i.tipoNegocio === tipoNegocio && i.status === 'ativo')
      .map((i) => i.valor)
      .sort((a, b) => a - b);

    if (precos.length === 0) return [];

    const min = precos[0];
    const max = precos[precos.length - 1];

    // Define faixas inteligentes baseadas nos extremos
    const step = (max - min) / 3;
    const ranges = [
      { label: `Até ${formatarMoeda(min + step)}`, value: `max-${Math.round(min + step)}` },
      { label: `${formatarMoeda(min + step)} a ${formatarMoeda(max - step)}`, value: `${Math.round(min + step)}-${Math.round(max - step)}` },
      { label: `Acima de ${formatarMoeda(max - step)}`, value: `min-${Math.round(max - step)}` },
    ];

    return ranges;
  }, [allProperties, tipoNegocio]);

  useEffect(() => {
    setLocalCidade(filters.cidade);
  }, [filters.cidade]);

  useEffect(() => {
    setLocalBairro(filters.bairro);
  }, [filters.bairro]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMultipleFilters({
      cidade: localCidade,
      bairro: localBairro,
    });
    setIsMobileExpanded(false);
  };

  const handleReset = () => {
    setLocalCidade('');
    setLocalBairro('');
    resetFilters();
    setIsMobileExpanded(false);
  };

  const isLocacao = tipoNegocio === 'locacao';

  const getValorFaixa = () => {
    if (!filters.valorMin && !filters.valorMax) return '';
    if (!filters.valorMin && filters.valorMax) return `max-${filters.valorMax}`;
    if (filters.valorMin && !filters.valorMax) return `min-${filters.valorMin}`;
    return `${filters.valorMin}-${filters.valorMax}`;
  };

  const handleValorChange = (val: string) => {
    if (!val) {
      setMultipleFilters({ valorMin: '', valorMax: '' });
      return;
    }
    if (val.startsWith('max-')) {
      setMultipleFilters({ valorMin: '', valorMax: val.replace('max-', '') });
    } else if (val.startsWith('min-')) {
      setMultipleFilters({ valorMin: val.replace('min-', ''), valorMax: '' });
    } else {
      const [min, max] = val.split('-');
      setMultipleFilters({ valorMin: min, valorMax: max });
    }
  };

  const hasActiveFilters = Boolean(
    filters.cidade || filters.bairro || filters.tipo || filters.valorMin || filters.valorMax
  );

  return (
    <div className="bg-white rounded-2xl shadow-md border border-border-yantra transition-all overflow-hidden">
      {/* Botão de Toggle Mobile */}
      <div className="md:hidden p-4 flex items-center justify-between bg-white border-b border-border-yantra/40">
        <button
          type="button"
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="flex items-center gap-2 text-xs font-sans font-semibold text-verde-escuro uppercase tracking-wider min-h-[44px] flex-1 px-2 focus:outline-none focus:ring-2 focus:ring-dourado rounded-lg"
          aria-expanded={isMobileExpanded}
        >
          <SlidersHorizontal size={18} className="text-dourado" />
          <span>Filtros de Busca</span>
          {hasActiveFilters && (
            <span className="ml-2 px-2 py-0.5 bg-dourado text-white text-[10px] rounded-full">
              Ativos
            </span>
          )}
          <span className="ml-auto">
            {isMobileExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>
      </div>

      {/* Conteúdo do Formulário (Sempre visível no desktop, colapsável no mobile) */}
      <form
        onSubmit={handleSearchSubmit}
        className={`p-6 ${
          isMobileExpanded ? 'block' : 'hidden md:block'
        } transition-all`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Cidade */}
          <div>
            <label className="block text-xs font-sans font-medium text-verde-escuro uppercase tracking-wider mb-1.5">
              Cidade
            </label>
            <input
              type="text"
              placeholder="Ex: Campinas ou São Paulo"
              value={localCidade}
              onChange={(e) => setLocalCidade(e.target.value)}
              className="w-full px-3 py-3 border border-border-yantra rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-dourado bg-off-white/50 text-verde-profundo min-h-[44px]"
            />
          </div>

          {/* Bairro */}
          <div>
            <label className="block text-xs font-sans font-medium text-verde-escuro uppercase tracking-wider mb-1.5">
              Bairro
            </label>
            <input
              type="text"
              placeholder="Ex: Cambuí, Taquaral..."
              value={localBairro}
              onChange={(e) => setLocalBairro(e.target.value)}
              className="w-full px-3 py-3 border border-border-yantra rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-dourado bg-off-white/50 text-verde-profundo min-h-[44px]"
            />
          </div>

          {/* Tipo de Imóvel */}
          <div>
            <label className="block text-xs font-sans font-medium text-verde-escuro uppercase tracking-wider mb-1.5">
              Tipo de Imóvel
            </label>
            <select
              value={filters.tipo}
              onChange={(e) => setFilter('tipo', e.target.value)}
              className="w-full px-3 py-3 border border-border-yantra rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-dourado bg-off-white/50 text-verde-profundo min-h-[44px]"
            >
              <option value="">Todos os tipos</option>
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
              <option value="terreno">Terreno</option>
              <option value="comercial">Comercial</option>
            </select>
          </div>

          {/* Faixa de Valor */}
          <div>
            <label className="block text-xs font-sans font-medium text-verde-escuro uppercase tracking-wider mb-1.5">
              Faixa de Valor
            </label>
            <select
              value={getValorFaixa()}
              onChange={(e) => handleValorChange(e.target.value)}
              className="w-full px-3 py-3 border border-border-yantra rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-dourado bg-off-white/50 text-verde-profundo min-h-[44px]"
            >
              <option value="">Qualquer valor</option>
              {valorRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-center gap-3 pt-4 border-t border-border-yantra/60">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-3 text-xs font-sans font-medium text-verde-escuro hover:text-verde-profundo transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-dourado rounded-lg min-h-[44px]"
          >
            <RotateCcw size={16} />
            LIMPAR FILTROS
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-verde-escuro text-white text-xs font-sans font-semibold rounded-lg hover:bg-verde-profundo transition-all duration-200 flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-dourado tracking-wider min-h-[44px]"
          >
            <Search size={16} />
            BUSCAR
          </button>
        </div>
      </form>
    </div>
  );
}
