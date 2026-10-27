import PropertyCard from '../imoveis/PropertyCard';
import { MOCK_IMOVEIS } from '@/lib/mockData';

export default function FeaturedProperties() {
  const featured = MOCK_IMOVEIS.filter(i => i.destaque).slice(0, 4);

  return (
    <section id="destaques" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-dourado uppercase tracking-[0.2em] text-xs font-semibold">Destaques</span>
            <h2 className="text-3xl font-serif text-verde-escuro mt-2">IMÓVEIS EM DESTAQUE</h2>
          </div>
          <a href="/comprar" className="text-verde-escuro font-medium hover:text-dourado transition-colors">VER TODOS &gt;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(imovel => (
            <PropertyCard key={imovel._id} imovel={imovel} />
          ))}
        </div>
      </div>
    </section>
  );
}
