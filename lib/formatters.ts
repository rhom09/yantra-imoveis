export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(valor);
}

export function formatarArea(valor: number): string {
  return `${valor}m²`;
}

export function formatarTelefone(telefone: string): string {
  // Assume input like "5519999999999"
  const cleaned = telefone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return telefone;
}
