import PropertyCard from './PropertyCard';
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

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {mockImoveis.map(imovel => (
        <PropertyCard key={imovel._id} imovel={imovel} />
      ))}
    </div>
  );
}
