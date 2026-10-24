export const imovel = {
  name: 'imovel',
  title: 'Imóvel',
  type: 'document',
  fields: [
    {
      name: 'codigo',
      title: 'Código do Imóvel',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tipoNegocio',
      title: 'Tipo de Negócio',
      type: 'string',
      options: {
        list: [
          { title: 'Venda', value: 'venda' },
          { title: 'Locação', value: 'locacao' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tipoImovel',
      title: 'Tipo de Imóvel',
      type: 'string',
      options: {
        list: [
          { title: 'Casa', value: 'casa' },
          { title: 'Apartamento', value: 'apartamento' },
          { title: 'Terreno', value: 'terreno' },
          { title: 'Comercial', value: 'comercial' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'valor',
      title: 'Valor (R$)',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'condominio',
      title: 'Condomínio (R$)',
      type: 'number',
    },
    {
      name: 'iptu',
      title: 'IPTU (R$)',
      type: 'number',
    },
    {
      name: 'cidade',
      title: 'Cidade',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bairro',
      title: 'Bairro',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endereco',
      title: 'Endereço (Privado)',
      type: 'string',
    },
    {
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
    },
    {
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
    },
    {
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'quartos',
      title: 'Quartos',
      type: 'number',
    },
    {
      name: 'suites',
      title: 'Suítes',
      type: 'number',
    },
    {
      name: 'banheiros',
      title: 'Banheiros',
      type: 'number',
    },
    {
      name: 'vagas',
      title: 'Vagas',
      type: 'number',
    },
    {
      name: 'areaPrivativa',
      title: 'Área Privativa (m²)',
      type: 'number',
    },
    {
      name: 'areaTotal',
      title: 'Área Total (m²)',
      type: 'number',
    },
    {
      name: 'andar',
      title: 'Andar',
      type: 'number',
    },
    {
      name: 'anoConstrucao',
      title: 'Ano de Construção',
      type: 'number',
    },
    {
      name: 'caracteristicas',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'comodidades',
      title: 'Comodidades do Condomínio',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'fotos',
      title: 'Fotos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'destaque',
      title: 'Destaque na Home',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Ativo', value: 'ativo' },
          { title: 'Inativo', value: 'inativo' },
        ],
      },
      initialValue: 'ativo',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
