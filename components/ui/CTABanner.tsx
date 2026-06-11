import Link from 'next/link';
import { YantraPattern } from './YantraPattern';

export default function CTABanner() {
  return (
    <section className="relative py-20 bg-verde-profundo text-white overflow-hidden">
      {/* Padrão geométrico decorativo */}
      <div className="absolute inset-0 opacity-[0.06]">
        <YantraPattern />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h3 className="text-3xl font-serif mb-8">Pronto para encontrar o seu próximo imóvel?</h3>
        <Link
          href="/contato"
          className="inline-block px-8 py-4 bg-dourado text-white rounded-full font-sans font-medium hover:bg-dourado-light transition duration-200"
        >
          FALAR COM UM ESPECIALISTA
        </Link>
      </div>
    </section>
  );
}
