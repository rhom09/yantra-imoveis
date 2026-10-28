import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { imovel } from './schemaTypes/imovel';
import { configuracoes } from './schemaTypes/configuracoes';

export default defineConfig({
  name: 'default',
  title: 'Yantra Negócios Imobiliários',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool()],
  schema: {
    types: [imovel, configuracoes],
  },
});
