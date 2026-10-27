'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { gerarLinkWhatsApp } from '@/lib/whatsapp';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Travar o scroll do body e gerenciar tecla ESC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          buttonRef.current?.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-verde-profundo border-b border-border text-white">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
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
          className="hidden md:inline-block px-6 py-2 border border-dourado text-dourado hover:bg-dourado hover:text-white transition-all rounded-full text-sm font-semibold"
        >
          WHATSAPP
        </Link>

        {/* Botão Hambúrguer Mobile */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 text-dourado hover:text-white focus:outline-none focus:ring-2 focus:ring-dourado rounded-lg transition-colors"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Painel / Drawer Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Overlay escuro */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => {
              setIsOpen(false);
              buttonRef.current?.focus();
            }}
          />

          {/* Drawer Lateral */}
          <div
            ref={menuRef}
            id="mobile-menu"
            className="relative ml-auto w-full max-w-xs h-full bg-verde-profundo border-l border-border-yantra/20 shadow-2xl flex flex-col p-6 z-10 transition-transform duration-200 ease-in-out motion-reduce:transition-none"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-yantra/20">
              <span className="text-xl font-serif text-dourado">Menu</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  buttonRef.current?.focus();
                }}
                aria-label="Fechar menu"
                className="p-2 text-dourado hover:text-white focus:outline-none focus:ring-2 focus:ring-dourado rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-base font-medium tracking-wide">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="hover:text-dourado transition-colors py-2 border-b border-white/5 focus:outline-none focus:ring-2 focus:ring-dourado rounded px-2"
              >
                HOME
              </Link>
              <Link
                href="/comprar"
                onClick={handleLinkClick}
                className="hover:text-dourado transition-colors py-2 border-b border-white/5 focus:outline-none focus:ring-2 focus:ring-dourado rounded px-2"
              >
                COMPRAR
              </Link>
              <Link
                href="/alugar"
                onClick={handleLinkClick}
                className="hover:text-dourado transition-colors py-2 border-b border-white/5 focus:outline-none focus:ring-2 focus:ring-dourado rounded px-2"
              >
                ALUGAR
              </Link>
              <Link
                href="/sobre-nos"
                onClick={handleLinkClick}
                className="hover:text-dourado transition-colors py-2 border-b border-white/5 focus:outline-none focus:ring-2 focus:ring-dourado rounded px-2"
              >
                SOBRE NÓS
              </Link>
              <Link
                href="/contato"
                onClick={handleLinkClick}
                className="hover:text-dourado transition-colors py-2 border-b border-white/5 focus:outline-none focus:ring-2 focus:ring-dourado rounded px-2"
              >
                CONTATO
              </Link>
            </nav>

            <div className="mt-auto pt-6 border-t border-border-yantra/20">
              <Link
                href={gerarLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="block text-center w-full py-3 bg-dourado text-white rounded-lg text-sm font-semibold tracking-wider hover:bg-dourado-light transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-white"
              >
                WHATSAPP
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
