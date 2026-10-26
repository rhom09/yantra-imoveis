import ContactChannelCard from '@/components/contato/ContactChannelCard';
import ContactForm from '@/components/contato/ContactForm';
import { NUMERO_WHATSAPP, EMAIL_CONTATO, gerarLinkWhatsApp } from '@/lib/whatsapp';
import CTABanner from '@/components/ui/CTABanner';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function ContatoPage() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <div>
            <h2 className="text-3xl font-serif text-verde-escuro mb-8">Envie uma mensagem</h2>
            <ContactForm />
          </div>

          {/* Canais de Atendimento */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-verde-escuro mb-8">Canais de Atendimento</h2>

            <ContactChannelCard
              icon={MessageCircle}
              label="RESPOSTA IMEDIATA"
              value={NUMERO_WHATSAPP}
              subtitle="Chamar no WhatsApp"
              actionLabel="ENVIAR MENSAGEM"
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
              value="(19) 99999-9999"
              subtitle="Falar com especialista"
              actionLabel="LIGAR AGORA"
              href={`tel:19999999999`}
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
