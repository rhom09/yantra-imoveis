export interface Imovel {
  _id: string;
  codigo: string;
  titulo: string;
  slug: { current: string };
  tipoNegocio: "venda" | "locacao";
  tipoImovel: "casa" | "apartamento" | "terreno" | "comercial";
  valor: number;
  cidade: string;
  bairro: string;
  quartos: number;
  suites?: number;
  banheiros: number;
  vagas: number;
  areaPrivativa: number;
  fotos: { asset: { url: string } }[];
  destaque: boolean;
  status: "ativo" | "inativo";
}
