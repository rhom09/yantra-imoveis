'use client';

import Link from 'next/link';
import { gerarLinkWhatsApp } from '@/lib/whatsapp';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-verde-profundo border-b border-border text-white">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-dourado rounded">
          <span className="text-2xl font-serif text-dourado">Yantra</span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="/" className="hover:text-dourado transition-colors">HOME</Link>
          <Link href="/comprar" className="hover:text-dourado transition-colors">COMPRAR</Link>
          <Link href="/alugar" className="hover:text-dourado transition-colors">ALUGAR</Link>
          <Link href="/sobre-nos" className="hover:text-dourado transition-colors">SOBRE NÓS</Link>
          <Link href="/contato" className="hover:text-dourado transition-colors">CONTATO</Link>
        </nav>

        <Link
          href={gerarLinkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-dourado text-dourado hover:bg-dourado hover:text-white transition-all rounded-full text-xs md:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-dourado"
        >
          WHATSAPP
        </Link>
      </div>
    </header>
  );
}
