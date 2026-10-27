import { Home, Key, Star, DollarSign, MessageCircle, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { gerarLinkWhatsApp } from '@/lib/whatsapp';
import ComerciaisMenu from './ComerciaisMenu';

interface CategoryItem {
  name: string;
  icon?: LucideIcon;
  href?: string;
  isCustom?: boolean;
}

const categories: CategoryItem[] = [
  { name: "COMPRAR", icon: Home, href: "/comprar" },
  { name: "ALUGAR", icon: Key, href: "/alugar" },
  { name: "COMERCIAIS", isCustom: true },
  { name: "DESTAQUES", icon: Star, href: "/#destaques" },
  { name: "AVALIAR", icon: DollarSign, href: "/contato" },
  { name: "WHATSAPP", icon: MessageCircle, href: gerarLinkWhatsApp() },
];

export default function QuickCategories() {
  return (
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-start">
          {categories.map((cat) => {
            if (cat.isCustom && cat.name === "COMERCIAIS") {
              return <ComerciaisMenu key={cat.name} />;
            }

            const Icon = cat.icon!;
            return (
              <Link
                key={cat.name}
                href={cat.href!}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-verde-escuro flex items-center justify-center text-white group-hover:bg-dourado group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Icon size={28} />
                </div>
                <span className="text-xs font-semibold tracking-widest text-verde-escuro uppercase">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
