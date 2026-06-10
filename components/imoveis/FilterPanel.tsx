export default function FilterPanel() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <input type="text" placeholder="Cidade" className="border border-border p-2 rounded-md text-sm" />
        <input type="text" placeholder="Bairro" className="border border-border p-2 rounded-md text-sm" />
        <select className="border border-border p-2 rounded-md text-sm">
          <option>Tipo de Imóvel</option>
          <option>Casa</option>
          <option>Apartamento</option>
        </select>
        <select className="border border-border p-2 rounded-md text-sm">
          <option>Faixa de Valor</option>
          <option>Até R$ 500k</option>
          <option>R$ 500k - 1M</option>
        </select>
      </div>
      <div className="flex justify-end gap-4">
        <button className="px-4 py-2 text-sm text-verde-escuro hover:underline">LIMPAR FILTROS</button>
        <button className="px-6 py-2 bg-verde-escuro text-white text-sm font-semibold rounded-md hover:bg-verde-profundo">BUSCAR</button>
      </div>
    </div>
  );
}
