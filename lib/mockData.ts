import { Imovel } from '@/types/imovel';

export const MOCK_IMOVEIS: Imovel[] = [
  {
    _id: "1",
    codigo: "YAN-0458",
    titulo: "Apartamento no Jardim América",
    slug: { current: "apartamento-jardim-america" },
    tipoNegocio: "venda",
    tipoImovel: "apartamento",
    valor: 850000,
    cidade: "São Paulo",
    bairro: "Jardim América",
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    areaPrivativa: 120,
    descricao: "Apartamento moderno e sofisticado no coração do Jardim América, ideal para quem busca conforto e elegância. Com amplos espaços, acabamentos de alto padrão e uma localização privilegiada perto de tudo o que você precisa. O prédio oferece segurança 24h e lazer completo.",
    comodidades: ["Piscina", "Academia", "Churrasqueira", "Salão de festas", "Portaria 24h"],
    latitude: -23.5615,
    longitude: -46.6668,
    fotos: [{ asset: { url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800" } }, { asset: { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800" } }],
    destaque: true,
    status: "ativo"
  }
];
