import PropertyGallery from '@/components/imoveis/PropertyGallery';
import PropertySpecs from '@/components/imoveis/PropertySpecs';
import { formatarMoeda } from '@/lib/formatters';
import { notFound } from 'next/navigation';

// Mock data para a visualização
const mockImovel = {
  _id: "1", codigo: "YAN-0458", titulo: "Apartamento no Jardim América", slug: { current: "apartamento-jardim-america" },
  tipoNegocio: "venda", tipoImovel: "apartamento", valor: 850000, cidade: "São Paulo", bairro: "Jardim América",
  quartos: 3, banheiros: 2, vagas: 2, areaPrivativa: 120, destaque: true, status: "ativo",
  descricao: "Apartamento moderno e sofisticado no coração do Jardim América, ideal para quem busca conforto e elegância.",
  fotos: [{ asset: { url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800" }}, { asset: { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800" }}]
};

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  // Simulação de busca pelo slug
  const imovel = mockImovel;

  if (!imovel) notFound();

  return (
    <main className="bg-off-white min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <PropertyGallery photos={imovel.fotos} />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-3xl font-serif text-verde-escuro">{imovel.titulo}</h1>
            <p className="text-verde-salvia">{imovel.cidade} - {imovel.bairro}</p>
            <p className="text-3xl font-serif text-verde-escuro font-semibold">{formatarMoeda(imovel.valor)}</p>

            <button className="w-full py-4 bg-verde-escuro text-white rounded-lg font-semibold hover:bg-verde-profundo transition">
              FALAR NO WHATSAPP
            </button>

            <PropertySpecs imovel={imovel as any} />

            <div className="prose max-w-none text-verde-salvia">
              <h3 className="text-verde-escuro font-serif text-xl mb-2">Sobre o imóvel</h3>
              <p>{imovel.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
