import type { Metadata } from 'next';
import Image from 'next/image';
import ContactChannelCard from '@/components/contato/ContactChannelCard';
import { NUMERO_WHATSAPP, EMAIL_CONTATO, gerarLinkWhatsApp } from '@/lib/whatsapp';
import { formatarTelefone } from '@/lib/formatters';
import CTABanner from '@/components/ui/CTABanner';
import { YantraPattern } from '@/components/ui/YantraPattern';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Yantra Negócios Imobiliários. Atendimento exclusivo via WhatsApp, e-mail e em nossa sede no Cambuí, Campinas/SP.',
};

export default function ContatoPage() {
  const whatsappFormatado = formatarTelefone(NUMERO_WHATSAPP);

  return (
    <main className="bg-off-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center bg-verde-profundo text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-serif font-light mb-6">Fale Conosco</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna Esquerda: Logo da Empresa */}
          <div className="relative flex flex-col items-center justify-center p-8 lg:p-12 min-h-[300px] lg:min-h-[420px] rounded-2xl bg-white border border-border-yantra shadow-sm overflow-hidden">
            {/* Padrão Yantra sutil ao fundo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] text-verde-escuro pointer-events-none scale-125">
              <YantraPattern />
            </div>

            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] aspect-[4/3] flex items-center justify-center">
              <Image
                src="/logo_light.jpeg"
                alt="Yantra Negócios Imobiliários"
                width={360}
                height={270}
                className="object-contain w-full h-auto drop-shadow-sm"
                priority
              />
            </div>
            <p className="relative z-10 mt-6 text-center font-serif text-xl text-verde-profundo italic tracking-wide">
              &ldquo;Conectando pessoas ao lugar onde a vida floresce.&rdquo;
            </p>
          </div>

          {/* Coluna Direita: Canais de Atendimento */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-verde-escuro mb-8">Canais de Atendimento</h2>

            <ContactChannelCard
              icon={MessageCircle}
              label="RESPOSTA IMEDIATA"
              value={whatsappFormatado}
              subtitle="Chamar no WhatsApp"
              actionLabel="CONVERSAR NO WHATSAPP"
              href={gerarLinkWhatsApp()}
              isExternal
            />

            <ContactChannelCard
              icon={Mail}
              label="E-MAIL CORPORATIVO"
              value={EMAIL_CONTATO}
              subtitle="Enviar mensagem por e-mail"
              actionLabel="ENVIAR E-MAIL"
              href={`mailto:${EMAIL_CONTATO}`}
            />

            <ContactChannelCard
              icon={Phone}
              label="LIGAÇÃO DIRETA"
              value="+55 (19) 99999-9999"
              subtitle="Falar diretamente com um corretor"
              actionLabel="LIGAR AGORA"
              href="tel:19999999999"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
