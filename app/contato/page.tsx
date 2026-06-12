import CTABanner from '@/components/ui/CTABanner';
import ContactForm from '@/components/contato/ContactForm';

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

          {/* Sede e Mapa */}
          <div>
            <h2 className="text-3xl font-serif text-verde-escuro mb-8">Nossa Sede</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border-yantra">
              <p className="text-verde-salvia leading-relaxed">
                Rua das Flores, 123 — Cambui<br />
                Campinas/SP — CEP 13024-000
              </p>
              <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden border border-border-yantra">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2974360341517!2d-47.05267252473432!3d-22.89868727930438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf4d6215324b%3A0x6b406e2a9b343a9b!2sRua%20das%20Flores%2C%20123%20-%20Cambui%2C%20Campinas%20-%20SP!5e0!3m2!1sen!2sbr!4v1684351234567!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Localização da Yantra Imóveis"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
