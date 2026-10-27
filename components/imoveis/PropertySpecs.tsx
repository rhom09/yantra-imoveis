import { Bed, Bath, Car, Maximize2, LucideIcon } from 'lucide-react';
import { Imovel } from '@/types/imovel';
import { getSpecs } from '@/lib/imoveis';

const iconMap: Record<string, LucideIcon> = {
  Bed,
  Bath,
  Car,
  Maximize2,
};

export default function PropertySpecs({ imovel }: { imovel: Imovel }) {
  const specs = getSpecs(imovel);

  if (specs.length === 0) return null;

  return (
    <div className={`grid grid-cols-2 ${specs.length <= 2 ? 'md:grid-cols-2' : 'md:grid-cols-4'} gap-6 py-8 border-y border-border`}>
      {specs.map((spec, index) => {
        const Icon = iconMap[spec.icon];
        return (
          <div key={index} className="flex items-center gap-3">
            {Icon && <Icon className="text-dourado" />}
            <div>
              <p className="text-xs text-verde-salvia uppercase">{spec.label}</p>
              <p className="font-semibold">{spec.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
