import Image from 'next/image';
import { Linkedin } from 'lucide-react';

interface TeamCardProps {
  nome: string;
  cargo: string;
  fotoUrl: string;
  linkedinUrl: string;
}

export default function TeamCard({ nome, cargo, fotoUrl, linkedinUrl }: TeamCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-border-yantra text-center group">
      <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
        <Image src={fotoUrl} alt={nome} fill className="object-cover" />
      </div>
      <h3 className="font-serif text-xl text-verde-escuro mb-1">{nome}</h3>
      <p className="text-verde-salvia text-sm font-sans mb-4">{cargo}</p>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-dourado hover:text-dourado-light transition-colors"
      >
        <Linkedin size={18} />
        <span className="text-sm font-sans">LinkedIn</span>
      </a>
    </div>
  );
}
