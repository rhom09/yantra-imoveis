'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();

  const [negocio, setNegocio] = useState<'comprar' | 'alugar'>('comprar');
  const [tipo, setTipo] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [faixaValor, setFaixaValor] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const targetRoute = negocio === 'alugar' ? '/alugar' : '/comprar';
    const params = new URLSearchParams();

    if (tipo) params.set('tipo', tipo);
    if (cidade.trim()) params.set('cidade', cidade.trim());
    if (bairro.trim()) params.set('bairro', bairro.trim());

    if (faixaValor) {
      if (faixaValor.startsWith('max-')) {
        params.set('valorMax', faixaValor.replace('max-', ''));
      } else if (faixaValor.startsWith('min-')) {
        params.set('valorMin', faixaValor.replace('min-', ''));
      } else {
        const [min, max] = faixaValor.split('-');
        if (min) params.set('valorMin', min);
        if (max) params.set('valorMax', max);
      }
    }

    const query = params.toString();
    router.push(query ? `${targetRoute}?${query}` : targetRoute);
  };

  return (
    <section className="bg-off-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="block text-xs font-sans font-medium tracking-[0.2em] uppercase text-dourado mb-2">
            BUSCA PERSONALIZADA
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-verde-escuro mb-2">
            Encontre seu imóvel ideal
          </h2>
          <div className="w-12 h-0.5 bg-dourado mx-auto mb-3" />
          <p className="text-verde-salvia text-sm font-sans font-light">
            Use os filtros abaixo para refinar sua busca com exclusividade
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-border-yantra grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end"
        >
          {/* Negócio */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">
              Negócio
            </label>
            <select
              value={negocio}
              onChange={(e) => setNegocio(e.target.value as 'comprar' | 'alugar')}
              className="border border-border-yantra p-2.5 rounded-lg text-sm bg-off-white/50 text-verde-profundo focus:outline-none focus:ring-2 focus:ring-dourado"
            >
              <option value="comprar">Comprar</option>
              <option value="alugar">Alugar</option>
            </select>
          </div>

          {/* Tipo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">
              Tipo
            </label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="border border-border-yantra p-2.5 rounded-lg text-sm bg-off-white/50 text-verde-profundo focus:outline-none focus:ring-2 focus:ring-dourado"
            >
              <option value="">Todos</option>
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
              <option value="terreno">Terreno</option>
              <option value="comercial">Comercial</option>
            </select>
          </div>

          {/* Cidade */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">
              Cidade
            </label>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="border border-border-yantra p-2.5 rounded-lg text-sm bg-off-white/50 text-verde-profundo focus:outline-none focus:ring-2 focus:ring-dourado"
              placeholder="Ex: Campinas"
            />
          </div>

          {/* Bairro */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">
              Bairro
            </label>
            <input
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              className="border border-border-yantra p-2.5 rounded-lg text-sm bg-off-white/50 text-verde-profundo focus:outline-none focus:ring-2 focus:ring-dourado"
              placeholder="Ex: Cambuí"
            />
          </div>

          {/* Valor */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">
              Valor
            </label>
            <select
              value={faixaValor}
              onChange={(e) => setFaixaValor(e.target.value)}
              className="border border-border-yantra p-2.5 rounded-lg text-sm bg-off-white/50 text-verde-profundo focus:outline-none focus:ring-2 focus:ring-dourado"
            >
              <option value="">Qualquer valor</option>
              {negocio === 'comprar' ? (
                <>
                  <option value="max-1000000">Até R$ 1.000.000</option>
                  <option value="1000000-2000000">R$ 1.000.000 a R$ 2.000.000</option>
                  <option value="min-2000000">Acima de R$ 2.000.000</option>
                </>
              ) : (
                <>
                  <option value="max-4000">Até R$ 4.000 / mês</option>
                  <option value="4000-6000">R$ 4.000 a R$ 6.000 / mês</option>
                  <option value="min-6000">Acima de R$ 6.000 / mês</option>
                </>
              )}
            </select>
          </div>

          {/* Botão Buscar */}
          <button
            type="submit"
            className="bg-verde-escuro text-white p-2.5 rounded-lg hover:bg-verde-profundo transition-all duration-200 font-semibold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-dourado"
          >
            <Search size={14} />
            BUSCAR
          </button>
        </form>
      </div>
    </section>
  );
}
