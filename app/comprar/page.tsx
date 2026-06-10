import FilterPanel from '@/components/imoveis/FilterPanel';
import PropertyGrid from '@/components/imoveis/PropertyGrid';

export default function ComprarPage() {
  return (
    <main className="bg-off-white min-h-screen">
      {/* Hero Banner simplificado */}
      <section className="h-[40vh] bg-gradient-verde flex items-center justify-center text-center text-white p-6">
        <h1 className="text-4xl md:text-5xl font-serif">Imóveis para <span className="text-dourado">Comprar</span></h1>
      </section>

      {/* Filter Panel */}
      <div className="container mx-auto px-6 -mt-12 relative z-10">
        <FilterPanel />
      </div>

      <div className="container mx-auto px-6 py-12">
        <h2 className="text-xl font-medium text-verde-escuro mb-8">Resultados da busca</h2>
        <PropertyGrid />
      </div>
    </main>
  );
}
