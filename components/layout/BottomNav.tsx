'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, KeyRound, Home as House, Users, MessageCircle } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  // Não renderizar o BottomNav se estiver na rota do Sanity Studio
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  const isHome = pathname === '/';
  const isComprar = pathname?.startsWith('/comprar') || pathname?.startsWith('/imoveis');
  const isAlugar = pathname?.startsWith('/alugar');
  const isSobre = pathname?.startsWith('/sobre-nos');
  const isContato = pathname?.startsWith('/contato');

  return (
    <nav
      aria-label="Navegação principal"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-verde-profundo border-t border-border-yantra/20 shadow-lg pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-5 h-16 items-center px-2 relative">
        {/* Comprar */}
        <Link
          href="/comprar"
          aria-current={isComprar ? 'page' : undefined}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors ${
            isComprar ? 'text-dourado font-semibold' : 'text-off-white/70 hover:text-white'
          }`}
        >
          <Building2 size={20} />
          <span className="text-[10px] tracking-wider mt-1">Comprar</span>
        </Link>

        {/* Alugar */}
        <Link
          href="/alugar"
          aria-current={isAlugar ? 'page' : undefined}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors ${
            isAlugar ? 'text-dourado font-semibold' : 'text-off-white/70 hover:text-white'
          }`}
        >
          <KeyRound size={20} />
          <span className="text-[10px] tracking-wider mt-1">Alugar</span>
        </Link>

        {/* Home Central Elevada */}
        <div className="flex justify-center relative">
          <Link
            href="/"
            aria-current={isHome ? 'page' : undefined}
            aria-label="Home"
            className={`absolute -top-5 w-14 h-14 rounded-full bg-dourado flex items-center justify-center shadow-md hover:bg-dourado-light transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-white text-white ${
              isHome ? 'ring-2 ring-white' : ''
            }`}
          >
            <House size={24} />
          </Link>
          <span className="text-[10px] tracking-wider text-off-white/70 mt-6 select-none">Home</span>
        </div>

        {/* Sobre Nós */}
        <Link
          href="/sobre-nos"
          aria-current={isSobre ? 'page' : undefined}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors ${
            isSobre ? 'text-dourado font-semibold' : 'text-off-white/70 hover:text-white'
          }`}
        >
          <Users size={20} />
          <span className="text-[10px] tracking-wider mt-1">Sobre</span>
        </Link>

        {/* Contato */}
        <Link
          href="/contato"
          aria-current={isContato ? 'page' : undefined}
          className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors ${
            isContato ? 'text-dourado font-semibold' : 'text-off-white/70 hover:text-white'
          }`}
        >
          <MessageCircle size={20} />
          <span className="text-[10px] tracking-wider mt-1">Contato</span>
        </Link>
      </div>
    </nav>
  );
}
