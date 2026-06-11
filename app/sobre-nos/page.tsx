import CTABanner from '@/components/ui/CTABanner';
import PillarCard from '@/components/sobre/PillarCard';
import StatsBar from '@/components/sobre/StatsBar';
import TeamCard from '@/components/sobre/TeamCard';

export default function SobreNosPage() {
  const equipe = [
    { nome: "Ana Silva", cargo: "Corretora Sênior", fotoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", linkedinUrl: "#" },
    { nome: "Bruno Costa", cargo: "Consultor Imobiliário", fotoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c31e6?w=400", linkedinUrl: "#" },
  ];

  return (
    <main className="bg-off-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-verde-profundo text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-serif font-light mb-6">Sobre a <span className="text-dourado">Yantra</span></h1>
          <p className="max-w-2xl text-lg font-sans font-light opacity-90">
            Conectamos pessoas ao lugar onde a vida floresce, com excelência, transparência e o compromisso de encontrar o imóvel perfeito para o seu momento.
          </p>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-serif text-verde-escuro text-center mb-16">Nossos Pilares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PillarCard titulo="Missão" descricao="Conectar clientes ao seu lugar ideal com transparência e ética." />
          <PillarCard titulo="Visão" descricao="Ser referência imobiliária de alto padrão em Campinas." />
          <PillarCard titulo="Valores" descricao="Respeito, agilidade e excelência no atendimento." />
        </div>
      </section>

      <StatsBar />

      {/* Equipe */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-serif text-verde-escuro text-center mb-16">Nossa Equipe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {equipe.map((membro, index) => (
            <TeamCard key={index} {...membro} />
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
