import { Bed, Bath, Car, Maximize2, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Imovel } from '@/types/imovel';
import { formatarMoeda } from '@/lib/formatters';

export default function PropertyCard({ imovel }: { imovel: Imovel }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imovel.fotos[0]?.asset.url}
          alt={imovel.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-semibold uppercase text-white rounded-full ${imovel.tipoNegocio === 'venda' ? 'bg-verde-escuro' : 'bg-dourado'}`}>
            {imovel.tipoNegocio === 'venda' ? 'Venda' : 'Locação'}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg text-verde-escuro mb-2">{imovel.titulo}</h3>
        <div className="flex items-center text-sm text-verde-salvia mb-4">
          <MapPin size={14} className="mr-1" />
          {imovel.cidade} - {imovel.bairro}
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4 text-xs text-verde-escuro">
          <div className="flex items-center"><Bed size={14} className="mr-1" /> {imovel.quartos}</div>
          <div className="flex items-center"><Bath size={14} className="mr-1" /> {imovel.banheiros}</div>
          <div className="flex items-center"><Car size={14} className="mr-1" /> {imovel.vagas}</div>
          <div className="flex items-center"><Maximize2 size={14} className="mr-1" /> {imovel.areaPrivativa}m²</div>
        </div>

        <p className="font-serif text-xl text-verde-escuro font-semibold mb-4">
          {formatarMoeda(imovel.valor)}
        </p>

        <Link
          href={`/imoveis/${imovel.slug.current}`}
          className="block text-center w-full py-2 bg-verde-escuro text-white rounded-md text-sm font-semibold hover:bg-verde-profundo transition-colors"
        >
          VER DETALHES
        </Link>
      </div>
    </div>
  );
}
