import { Bed, Bath, Car, Maximize2 } from 'lucide-react';
import { Imovel } from '@/types/imovel';

export default function PropertySpecs({ imovel }: { imovel: Imovel }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
      <div className="flex items-center gap-3">
        <Bed className="text-dourado" />
        <div>
          <p className="text-xs text-verde-salvia uppercase">Quartos</p>
          <p className="font-semibold">{imovel.quartos}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Bath className="text-dourado" />
        <div>
          <p className="text-xs text-verde-salvia uppercase">Banheiros</p>
          <p className="font-semibold">{imovel.banheiros}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Car className="text-dourado" />
        <div>
          <p className="text-xs text-verde-salvia uppercase">Vagas</p>
          <p className="font-semibold">{imovel.vagas}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Maximize2 className="text-dourado" />
        <div>
          <p className="text-xs text-verde-salvia uppercase">Área</p>
          <p className="font-semibold">{imovel.areaPrivativa}m²</p>
        </div>
      </div>
    </div>
  );
}
