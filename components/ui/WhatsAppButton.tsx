import Link from 'next/link';
import { gerarLinkWhatsApp } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  variant?: 'verde' | 'dourado';
  variante?: 'verde' | 'dourado';
  mensagem?: string;
  codigoImovel?: string;
  className?: string;
  children: React.ReactNode;
}

export function WhatsAppButton({
  variant,
  variante,
  mensagem,
  codigoImovel,
  className = '',
  children
}: WhatsAppButtonProps) {
  const activeVariant = variant || variante || 'verde';

  const baseHref = gerarLinkWhatsApp(codigoImovel);
  const href = mensagem ? `https://wa.me/${baseHref.split('//wa.me/')[1].split('?')[0]}?text=${encodeURIComponent(mensagem)}` : baseHref;

  const baseStyles = "inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dourado";

  const variants = {
    verde: "w-full py-4 bg-verde-escuro text-white rounded-lg font-semibold hover:bg-verde-profundo",
    dourado: "px-8 py-4 bg-dourado hover:bg-dourado-light text-verde-profundo font-semibold rounded-full"
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[activeVariant]} ${className}`}
      aria-label="Falar no WhatsApp"
    >
      {children}
    </Link>
  );
}

export default WhatsAppButton;
