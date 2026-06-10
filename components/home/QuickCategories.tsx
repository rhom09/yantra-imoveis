import { Home, Key, Star, Building2, DollarSign, MessageCircle } from 'lucide-react';

const categories = [
  { name: "COMPRAR", icon: Home },
  { name: "ALUGAR", icon: Key },
  { name: "DESTAQUES", icon: Star },
  { name: "COMERCIAIS", icon: Building2 },
  { name: "AVALIAR", icon: DollarSign },
  { name: "WHATSAPP", icon: MessageCircle },
];

export default function QuickCategories() {
  return (
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-verde-escuro flex items-center justify-center text-white group-hover:bg-dourado group-hover:scale-110 transition-all duration-300 shadow-sm">
                <cat.icon size={28} />
              </div>
              <span className="text-xs font-semibold tracking-widest text-verde-escuro uppercase">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
