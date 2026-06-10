'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PropertyDescriptionProps {
  descricao: string;
}

export default function PropertyDescription({ descricao }: PropertyDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-t border-border-yantra pt-8">
      <h3 className="text-xl font-serif text-verde-escuro mb-4">Sobre o imóvel</h3>
      <div className={`text-verde-salvia leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
        {descricao}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-dourado font-sans text-sm mt-4 hover:text-dourado-light transition-colors"
      >
        {isExpanded ? (
          <>Ver menos <ChevronUp size={16} /></>
        ) : (
          <>Ver mais <ChevronDown size={16} /></>
        )}
      </button>
    </div>
  );
}
