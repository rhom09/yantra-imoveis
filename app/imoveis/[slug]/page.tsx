import PropertyGallery from '@/components/imoveis/PropertyGallery';
import PropertySpecs from '@/components/imoveis/PropertySpecs';
import PropertyDescription from '@/components/imoveis/PropertyDescription';
import PropertyMap from '@/components/imoveis/PropertyMap';
import CondominiumAmenities from '@/components/imoveis/CondominiumAmenities';
import { formatarMoeda } from '@/lib/formatters';
import { notFound } from 'next/navigation';
import { fetchPropertyBySlug } from '@/lib/sanityService';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const imovel = await fetchPropertyBySlug(params.slug);
  if (!imovel) {
    return {
      title: 'Imóvel não encontrado',
      description: 'O imóvel solicitado não foi encontrado ou está indisponível.',
    };
  }

  const titulo = `${imovel.titulo} - ${imovel.bairro}, ${imovel.cidade}`;
  const descricao = imovel.descricao.slice(0, 160);
  const imagem = imovel.fotos?.[0]?.asset?.url || '';

  return {
    title: titulo,
    description: descricao,
    openGraph: {
      title: `${titulo} | Yantra Negócios Imobiliários`,
      description: descricao,
      images: imagem ? [{ url: imagem, width: 1200, height: 630, alt: imovel.titulo }] : [],
    },
  };
}

export default async function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const imovel = await fetchPropertyBySlug(params.slug);

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
            <p className="text-verde-salvia">
              {imovel.cidade} - {imovel.bairro}
              {imovel.endereco && <span className="block text-sm mt-1">{imovel.endereco}</span>}
            </p>
            <p className="text-3xl font-serif text-verde-escuro font-semibold">{formatarMoeda(imovel.valor)}</p>

            <WhatsAppButton
              variant="verde"
              mensagem={`Olá! Tenho interesse no imóvel ${imovel.titulo} (${process.env.NEXT_PUBLIC_SITE_URL || 'https://yantraimoveis.com.br'}/imoveis/${imovel.slug.current}).`}
            >
              FALAR NO WHATSAPP
            </WhatsAppButton>

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
