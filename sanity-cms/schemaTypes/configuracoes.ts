export const configuracoes = {
  name: 'configuracoes',
  title: 'Configurações',
  type: 'document',
  fields: [
    {
      name: 'whatsapp',
      title: 'Número WhatsApp',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'telefone',
      title: 'Telefone Fixo',
      type: 'string',
    },
    {
      name: 'email',
      title: 'E-mail de Contato',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endereco',
      title: 'Endereço da Sede',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
    },
  ],
};
