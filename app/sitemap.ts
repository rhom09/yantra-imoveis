import { MetadataRoute } from 'next';
import { MOCK_IMOVEIS } from '@/lib/mockData';
import { client } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yantra-imoveis.vercel.app';

  const routes = ['', '/comprar', '/alugar', '/sobre-nos', '/contato'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  let propertyItems = MOCK_IMOVEIS.map(i => ({ slug: i.slug.current, updatedAt: new Date() }));

  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    if (projectId && projectId !== 'dummy-project-id' && projectId !== '') {
      const sanityProps = await client.fetch<any[]>(`*[_type == "imovel" && status == "ativo"]{ "slug": slug.current, _updatedAt }`);
      if (sanityProps && sanityProps.length > 0) {
        propertyItems = sanityProps.map(p => ({
          slug: p.slug,
          updatedAt: p._updatedAt ? new Date(p._updatedAt) : new Date(),
        }));
      }
    }
  } catch (error) {
    console.error('Erro ao gerar sitemap com dados do Sanity:', error);
  }

  const propertyRoutes = propertyItems.map((item) => ({
    url: `${baseUrl}/imoveis/${item.slug}`,
    lastModified: item.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...propertyRoutes];
}
