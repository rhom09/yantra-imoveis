interface PillarCardProps {
  titulo: string;
  descricao: string;
}

export default function PillarCard({ titulo, descricao }: PillarCardProps) {
  return (
    <div className="p-8 border border-border-yantra rounded-lg text-center hover:shadow-md transition-shadow duration-200">
      <h3 className="font-serif text-2xl text-verde-escuro mb-4">{titulo}</h3>
      <p className="text-verde-salvia font-sans font-light leading-relaxed">{descricao}</p>
    </div>
  );
}
