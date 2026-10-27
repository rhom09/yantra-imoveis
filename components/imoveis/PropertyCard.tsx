import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Car, Maximize2, MapPin } from 'lucide-react';
import { Imovel } from '@/types/imovel';
import { formatarMoeda } from '@/lib/formatters';

interface PropertyCardProps {
  imovel: Imovel;
}

export default function PropertyCard({ imovel }: PropertyCardProps) {
  const fotoPrincipal = imovel.fotos[0]?.asset?.url || 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800';

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out overflow-hidden group border border-border-yantra/60 flex flex-col justify-between">
      <div>
        <div className="relative aspect-[4/3] overflow-hidden bg-verde-profundo/5">
          <Image
            src={fotoPrincipal}
            alt={imovel.titulo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`px-3 py-1 text-xs font-sans font-semibold uppercase text-white rounded-full shadow-sm ${
                imovel.tipoNegocio === 'venda' ? 'bg-verde-escuro' : 'bg-dourado'
              }`}
            >
              {imovel.tipoNegocio === 'venda' ? 'Venda' : 'Locação'}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-serif text-lg text-verde-escuro mb-2 line-clamp-1 group-hover:text-verde-profundo transition-colors">
            {imovel.titulo}
          </h3>
          <div className="flex items-center text-sm text-verde-salvia mb-4">
            <MapPin size={14} className="mr-1 flex-shrink-0" />
            <span className="truncate">{imovel.cidade} - {imovel.bairro}</span>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4 text-xs font-sans text-verde-escuro">
            <div className="flex items-center" title={`${imovel.quartos} Quartos`}>
              <Bed size={14} className="mr-1 flex-shrink-0" /> {imovel.quartos}
            </div>
            <div className="flex items-center" title={`${imovel.banheiros} Banheiros`}>
              <Bath size={14} className="mr-1 flex-shrink-0" /> {imovel.banheiros}
            </div>
            <div className="flex items-center" title={`${imovel.vagas} Vagas`}>
              <Car size={14} className="mr-1 flex-shrink-0" /> {imovel.vagas}
            </div>
            <div className="flex items-center" title={`${imovel.areaPrivativa}m² Área Privativa`}>
              <Maximize2 size={14} className="mr-1 flex-shrink-0" /> {imovel.areaPrivativa}m²
            </div>
          </div>

          <p className="font-serif text-xl text-verde-escuro font-semibold mb-4 lining-nums">
            {formatarMoeda(imovel.valor)}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <Link
          href={`/imoveis/${imovel.slug.current}`}
          className="flex items-center justify-center w-full min-h-[44px] bg-verde-escuro text-white rounded-lg text-xs font-sans font-semibold hover:bg-verde-profundo transition-all duration-200 tracking-wider shadow-sm focus:outline-none focus:ring-2 focus:ring-dourado"
        >
          VER DETALHES
        </Link>
      </div>
    </div>
  );
}
