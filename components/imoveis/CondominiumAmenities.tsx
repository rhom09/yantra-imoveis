import { Waves, Dumbbell, Flame, PartyPopper, Baby, Check } from 'lucide-react';

interface CondominiumAmenitiesProps {
  comodidades: string[];
}

export default function CondominiumAmenities({ comodidades }: CondominiumAmenitiesProps) {
  const getIcon = (comodidade: string) => {
    const name = comodidade.toLowerCase();
    if (name.includes('piscina')) return <Waves size={20} className="text-dourado" />;
    if (name.includes('academia')) return <Dumbbell size={20} className="text-dourado" />;
    if (name.includes('churrasqueira')) return <Flame size={20} className="text-dourado" />;
    if (name.includes('festa')) return <PartyPopper size={20} className="text-dourado" />;
    if (name.includes('playground')) return <Baby size={20} className="text-dourado" />;
    return <Check size={20} className="text-dourado" />;
  };

  return (
    <div className="mt-8 border-t border-border-yantra pt-8">
      <h3 className="text-xl font-serif text-verde-escuro mb-6">Comodidades do Condomínio</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {comodidades.map((item, index) => (
          <div key={index} className="flex items-center gap-3 bg-off-white p-3 rounded-lg border border-border-yantra">
            {getIcon(item)}
            <span className="text-verde-salvia text-sm font-sans">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
