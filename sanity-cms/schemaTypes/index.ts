import { type SchemaTypeDefinition } from 'sanity'
import { imovel } from './imovel'
import { configuracoes } from './configuracoes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [imovel, configuracoes],
}
