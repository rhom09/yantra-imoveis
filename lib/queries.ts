import { groq } from 'next-sanity';

export const FEATURED_QUERY = groq`
  *[_type == "imovel" && status == "ativo" && destaque == true]
  | order(_createdAt desc)[0...6]
`;

export const LISTING_QUERY = groq`
  *[_type == "imovel" && status == "ativo"
    && tipoNegocio == $tipo
    && ($cidade == "" || cidade == $cidade)
    && ($bairro == "" || bairro == $bairro)
    && valor >= $valorMin && valor <= $valorMax
  ] | order(destaque desc, _createdAt desc)[$offset...$offset+$pageSize]
`;

export const DETAIL_QUERY = groq`
  *[_type == "imovel" && slug.current == $slug && status == "ativo"][0]
`;

export const CONFIG_QUERY = groq`
  *[_type == "configuracoes"][0]
`;
