import PropertyCard from '../imoveis/PropertyCard';
import { Imovel } from '@/types/imovel';

const mockImoveis: Imovel[] = [
  {
    _id: "1", codigo: "YAN-0458", titulo: "Apartamento no Jardim América", slug: { current: "apartamento-jardim-america" },
    tipoNegocio: "venda", tipoImovel: "apartamento", valor: 850000, cidade: "São Paulo", bairro: "Jardim América",
    quartos: 3, banheiros: 2, vagas: 2, areaPrivativa: 120, destaque: true, status: "ativo",
    fotos: [{ asset: { url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800" }}]
  },
  {
    _id: "2", codigo: "YAN-0992", titulo: "Cobertura na Vila Madalena", slug: { current: "cobertura-vila-madalena" },
    tipoNegocio: "locacao", tipoImovel: "apartamento", valor: 12000, cidade: "São Paulo", bairro: "Vila Madalena",
    quartos: 2, banheiros: 3, vagas: 2, areaPrivativa: 180, destaque: true, status: "ativo",
    fotos: [{ asset: { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800" }}]
  }
];

export default function FeaturedProperties() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-dourado uppercase tracking-[0.2em] text-xs font-semibold">Destaques</span>
            <h2 className="text-3xl font-serif text-verde-escuro mt-2">IMÓVEIS EM DESTAQUE</h2>
          </div>
          <a href="/comprar" className="text-verde-escuro font-medium hover:text-dourado transition-colors">VER TODOS &gt;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockImoveis.map(imovel => (
            <PropertyCard key={imovel._id} imovel={imovel} />
          ))}
        </div>
      </div>
    </section>
  );
}
