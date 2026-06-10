export default function SearchBar() {
  return (
    <section className="bg-off-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-verde-escuro mb-2">ENCONTRE SEU IMÓVEL IDEAL</h2>
          <p className="text-verde-salvia text-sm font-sans">Use os filtros abaixo para refinar sua busca</p>
        </div>

        <form className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">Negócio</label>
            <select className="border border-border p-2 rounded-md text-sm">
              <option>Comprar ou Alugar</option>
              <option>Comprar</option>
              <option>Alugar</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">Tipo</label>
            <select className="border border-border p-2 rounded-md text-sm">
              <option>Selecione</option>
              <option>Casa</option>
              <option>Apartamento</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">Cidade</label>
            <input type="text" className="border border-border p-2 rounded-md text-sm" placeholder="São Paulo" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">Bairro</label>
            <input type="text" className="border border-border p-2 rounded-md text-sm" placeholder="Qualquer" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-verde-escuro uppercase tracking-wider">Valor</label>
            <select className="border border-border p-2 rounded-md text-sm">
              <option>Qualquer valor</option>
              <option>Até R$ 300K</option>
            </select>
          </div>
          <button className="bg-verde-escuro text-white p-2 rounded-md hover:bg-verde-profundo transition-colors font-semibold uppercase text-xs tracking-wider">
            BUSCAR
          </button>
        </form>
      </div>
    </section>
  );
}
