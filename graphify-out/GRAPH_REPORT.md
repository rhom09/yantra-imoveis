# Graph Report - yantra-imoveis  (2026-10-27)

## Corpus Check
- 55 files · ~15,245 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 1, .example 1)

## Summary
- 310 nodes · 447 edges · 25 communities (21 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `140cd1fc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code
- [slug]/page.tsx
- 1. HOME (app/page.tsx)
- Yantra Negócios Imobiliários — CLAUDE.md
- sobre-nos/page.tsx
- compilerOptions
- ✅ Concluído
- dependencies
- app/page.tsx
- nova-pagina.md
- Checklist de Revisão
- lucide-react
- checkpoint.md
- novo-componente.md
- retomar.md
- next.config.js
- dependencies
- sanity.config.ts
- contato/page.tsx
- sanity.ts
- scripts
- route.ts
- tailwindcss

## God Nodes (most connected - your core abstractions)
1. `lucide-react` - 17 edges
2. `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` - 16 edges
3. `compilerOptions` - 16 edges
4. `next` - 13 edges
5. `Yantra Negócios Imobiliários — CLAUDE.md` - 13 edges
6. `react` - 12 edges
7. `Imovel` - 8 edges
8. `ORDEM DE IMPLEMENTAÇÃO` - 8 edges
9. `✅ Concluído` - 8 edges
10. `PropertyDetailPage()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `AlugarPage()` --calls--> `CTABanner()`  [EXTRACTED]
  app/alugar/page.tsx → components/ui/CTABanner.tsx
- `ComprarPage()` --calls--> `CTABanner()`  [EXTRACTED]
  app/comprar/page.tsx → components/ui/CTABanner.tsx
- `PropertyCardProps` --references--> `Imovel`  [EXTRACTED]
  components/imoveis/PropertyCard.tsx → types/imovel.ts
- `PropertyGridProps` --references--> `Imovel`  [EXTRACTED]
  components/imoveis/PropertyGrid.tsx → types/imovel.ts
- `SobreNosPage()` --calls--> `CTABanner()`  [EXTRACTED]
  app/sobre-nos/page.tsx → components/ui/CTABanner.tsx

## Import Cycles
- None detected.

## Communities (25 total, 4 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.16
Nodes (16): devDependencies, autoprefixer@^10.4.19, postcss@^8.4.38, @types/node@^20.12.7, @types/react@^18.2.79, @types/react-dom@^18.2.25, typescript@^5.4.5, name (+8 more)

### Community 1 - "YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code"
Cohesion: 0.06
Nodes (35): ACESSIBILIDADE E SEO, BOTÃO WHATSAPP FLUTUANTE, COMPONENTES PRINCIPAIS, CONFIGURAÇÃO TAILWIND, CONTEXTO DO PROJETO, CTABanner.tsx, DADOS MOCK (para desenvolvimento inicial), DESIGN SYSTEM (+27 more)

### Community 2 - "[slug]/page.tsx"
Cohesion: 0.15
Nodes (16): PropertyDetailPage(), CondominiumAmenities(), CondominiumAmenitiesProps, PropertyCard(), PropertyCardProps, PropertyDescription(), PropertyDescriptionProps, PropertyGallery() (+8 more)

### Community 3 - "1. HOME (app/page.tsx)"
Cohesion: 0.07
Nodes (28): 1. HOME (app/page.tsx), 2. COMPRAR (app/comprar/page.tsx), 3. DETALHE DO IMÓVEL (app/imoveis/[slug]/page.tsx), 4. SOBRE NÓS (app/sobre-nos/page.tsx), 5. CONTATO (app/contato/page.tsx), Barra de Estatísticas, Breadcrumb, Conteúdo Principal (grid 2 colunas) (+20 more)

### Community 4 - "Yantra Negócios Imobiliários — CLAUDE.md"
Cohesion: 0.07
Nodes (27): Componentes, Comprar / Alugar / Imóveis Comerciais, Contato, Convenções de Código, Cores (usar SEMPRE via classes Tailwind — nunca hex inline), Design System, Detalhe do Imóvel, Estrutura de Pastas (+19 more)

### Community 5 - "sobre-nos/page.tsx"
Cohesion: 0.26
Nodes (8): SobreNosPage(), PillarCard(), PillarCardProps, StatItem, stats, StatsBar(), TeamCard(), TeamCardProps

### Community 6 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+10 more)

### Community 7 - "✅ Concluído"
Cohesion: 0.14
Nodes (13): ✅ Concluído, ⚠️ Decisões Tomadas, Fase 1 — Fundação, Fase 2 — Home, Fase 3 — Listagens, Fase 4 — Detalhe do Imóvel, Fase 5 — Institucional, Fase 6 — Sanity CMS (+5 more)

### Community 8 - "dependencies"
Cohesion: 0.25
Nodes (8): dependencies, lucide-react@^0.379.0, next@14.2.4, @playwright/test@^1.64.1, react@^18.3.1, react-dom@^18.3.1, @playwright/test, react-dom

### Community 9 - "app/page.tsx"
Cohesion: 0.31
Nodes (7): Home(), FeaturedProperties(), HeroSlider(), slides, categories, QuickCategories(), SearchBar()

### Community 10 - "nova-pagina.md"
Cohesion: 0.25
Nodes (7): Entrega, Estrutura obrigatória de toda página Yantra, Padrões de seções por tipo de página, Página de Detalhe, Página de Listagem (Comprar, Alugar, Comerciais), Página Institucional (Sobre, Contato), Regras obrigatórias

### Community 11 - "Checklist de Revisão"
Cohesion: 0.25
Nodes (7): ♿ Acessibilidade, Checklist de Revisão, 🇧🇷 Conteúdo, ⚙️ Código, 🎨 Design System, Entrega, 📱 Responsividade

### Community 12 - "lucide-react"
Cohesion: 0.25
Nodes (12): AlugarContent(), AlugarPage(), ComprarContent(), ComprarPage(), FilterPanel(), FilterPanelProps, Pagination(), PaginationProps (+4 more)

### Community 13 - "checkpoint.md"
Cohesion: 0.40
Nodes (4): 1. Levante o que foi feito nesta sessão, 2. Atualize o PROGRESS.md, 3. Verifique inconsistências, 4. Confirme ao usuário

### Community 14 - "novo-componente.md"
Cohesion: 0.40
Nodes (4): Design System a aplicar, Entrega, Estrutura obrigatória, Regras de código

### Community 15 - "retomar.md"
Cohesion: 0.50
Nodes (3): 1. Leia os arquivos de contexto, 2. Faça um diagnóstico rápido, 3. Pergunte como prosseguir

### Community 18 - "dependencies"
Cohesion: 0.29
Nodes (6): CONFIG_QUERY, DETAIL_QUERY, FEATURED_QUERY, LISTING_QUERY, next-sanity@^8.0.0, next-sanity

### Community 20 - "contato/page.tsx"
Cohesion: 0.17
Nodes (14): ContatoPage(), metadata, RootLayout(), ContactChannelCard(), ContactChannelCardProps, Footer(), Header(), CTABanner() (+6 more)

### Community 21 - "sanity.ts"
Cohesion: 0.33
Nodes (4): builder, client, @sanity/image-url@^1.0.2, @sanity/image-url

### Community 22 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 24 - "tailwindcss"
Cohesion: 0.50
Nodes (3): tailwindcss@^3.4.3, tailwindcss, config

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `lucide-react` connect `[slug]/page.tsx` to `package.json`, `sobre-nos/page.tsx`, `dependencies`, `app/page.tsx`, `lucide-react`, `contato/page.tsx`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Should `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Why does `next` connect `contato/page.tsx` to `package.json`, `[slug]/page.tsx`, `sobre-nos/page.tsx`, `dependencies`, `app/page.tsx`, `lucide-react`, `route.ts`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `[slug]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1477832512315271 - nodes in this community are weakly interconnected._
- **Why does `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` connect `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` to `1. HOME (app/page.tsx)`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Should `1. HOME (app/page.tsx)` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `Yantra Negócios Imobiliários — CLAUDE.md` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._