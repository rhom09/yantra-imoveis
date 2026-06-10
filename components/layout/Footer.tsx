export default function Footer() {
  return (
    <footer className="bg-verde-profundo text-bege py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-dourado text-lg font-serif mb-4">Yantra</h3>
          <p className="text-sm opacity-70">Conectando pessoas ao lugar onde a vida floresce.</p>
        </div>
        <div>
          <h4 className="text-dourado text-sm uppercase tracking-widest font-medium mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Home</li>
            <li>Comprar</li>
            <li>Alugar</li>
          </ul>
        </div>
        <div>
          <h4 className="text-dourado text-sm uppercase tracking-widest font-medium mb-4">Institucional</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Quem Somos</li>
            <li>Trabalhe Conosco</li>
          </ul>
        </div>
        <div>
          <h4 className="text-dourado text-sm uppercase tracking-widest font-medium mb-4">Contato</h4>
          <p className="text-sm opacity-70">contato@yantraimoveis.com.br</p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-sm opacity-50">
        © 2025 Yantra Negócios Imobiliários. Todos os direitos reservados.
      </div>
    </footer>
  );
}
