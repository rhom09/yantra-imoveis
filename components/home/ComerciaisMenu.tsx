'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Building2 } from 'lucide-react';

export default function ComerciaisMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Opções para imóveis comerciais"
        className="flex flex-col items-center gap-4 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-dourado rounded-xl p-1"
      >
        <div className="w-16 h-16 rounded-full bg-verde-escuro flex items-center justify-center text-white group-hover:bg-dourado group-hover:scale-110 transition-all duration-300 shadow-sm">
          <Building2 size={28} />
        </div>
        <span className="text-xs font-semibold tracking-widest text-verde-escuro uppercase">
          COMERCIAIS
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white border border-border-yantra rounded-xl shadow-lg py-2 z-50 flex flex-col">
          <Link
            href="/comprar?tipo=comercial"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 text-xs font-sans font-medium text-verde-escuro hover:bg-off-white hover:text-dourado transition-colors text-center focus:outline-none focus:bg-off-white focus:text-dourado"
          >
            Para comprar
          </Link>
          <Link
            href="/alugar?tipo=comercial"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 text-xs font-sans font-medium text-verde-escuro hover:bg-off-white hover:text-dourado transition-colors text-center focus:outline-none focus:bg-off-white focus:text-dourado border-t border-border-yantra/40"
          >
            Para alugar
          </Link>
        </div>
      )}
    </div>
  );
}
