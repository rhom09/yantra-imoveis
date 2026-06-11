interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "+1200", label: "Imóveis Conectados" },
  { value: "+850", label: "Clientes Satisfeitos" },
  { value: "+15", label: "Anos de Experiência" },
  { value: "100%", label: "Comprometimento" },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-verde-profundo text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-serif text-dourado mb-2">{stat.value}</p>
              <p className="text-sm font-sans uppercase tracking-wider opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
