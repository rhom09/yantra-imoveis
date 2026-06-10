import PropertyGallery from '@/components/imoveis/PropertyGallery';
import PropertySpecs from '@/components/imoveis/PropertySpecs';
import PropertyDescription from '@/components/imoveis/PropertyDescription';
import PropertyMap from '@/components/imoveis/PropertyMap';
import CondominiumAmenities from '@/components/imoveis/CondominiumAmenities';
import { formatarMoeda } from '@/lib/formatters';
import { notFound } from 'next/navigation';
import { MOCK_IMOVEIS } from '@/lib/mockData';

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const imovel = MOCK_IMOVEIS.find(i => i.slug.current === params.slug);

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

            <button className="w-full py-4 bg-verde-escuro text-white rounded-lg font-semibold hover:bg-verde-profundo transition duration-200">
              FALAR NO WHATSAPP
            </button>

            <PropertySpecs imovel={imovel} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12">
          <PropertyDescription descricao={imovel.descricao} />

          {imovel.comodidades && imovel.comodidades.length > 0 && (
            <CondominiumAmenities comodidades={imovel.comodidades} />
          )}

          {imovel.latitude && imovel.longitude && (
            <PropertyMap latitude={imovel.latitude} longitude={imovel.longitude} />
          )}
        </div>
      </div>
    </main>
  );
}
