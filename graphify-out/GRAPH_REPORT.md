# Graph Report - yantra-imoveis  (2026-10-24)

## Corpus Check
- 51 files · ~11,730 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 1, .example 1)

## Summary
- 289 nodes · 370 edges · 20 communities (17 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `32bc6dab`
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
- next
- app/page.tsx
- nova-pagina.md
- Checklist de Revisão
- PropertyGrid
- checkpoint.md
- novo-componente.md
- retomar.md
- next.config.js
- dependencies
- sanity.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` - 16 edges
3. `Yantra Negócios Imobiliários — CLAUDE.md` - 13 edges
4. `next` - 10 edges
5. `lucide-react` - 8 edges
6. `✅ Concluído` - 8 edges
7. `ORDEM DE IMPLEMENTAÇÃO` - 8 edges
8. `PropertyDetailPage()` - 7 edges
9. `PropertyCard()` - 6 edges
10. `PropertyGrid()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `PropertyCard()` --calls--> `formatarMoeda()`  [EXTRACTED]
  components/imoveis/PropertyCard.tsx → lib/formatters.ts
- `AlugarPage()` --calls--> `FilterPanel()`  [EXTRACTED]
  app/alugar/page.tsx → components/imoveis/FilterPanel.tsx
- `AlugarPage()` --calls--> `PropertyGrid()`  [EXTRACTED]
  app/alugar/page.tsx → components/imoveis/PropertyGrid.tsx
- `ComprarPage()` --calls--> `FilterPanel()`  [EXTRACTED]
  app/comprar/page.tsx → components/imoveis/FilterPanel.tsx
- `ComprarPage()` --calls--> `PropertyGrid()`  [EXTRACTED]
  app/comprar/page.tsx → components/imoveis/PropertyGrid.tsx

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.10
Nodes (24): devDependencies, autoprefixer@^10.4.19, postcss@^8.4.38, tailwindcss@^3.4.3, @types/node@^20.12.7, @types/react@^18.2.79, @types/react-dom@^18.2.25, typescript@^5.4.5 (+16 more)

### Community 1 - "YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code"
Cohesion: 0.06
Nodes (35): ACESSIBILIDADE E SEO, BOTÃO WHATSAPP FLUTUANTE, COMPONENTES PRINCIPAIS, CONFIGURAÇÃO TAILWIND, CONTEXTO DO PROJETO, CTABanner.tsx, DADOS MOCK (para desenvolvimento inicial), DESIGN SYSTEM (+27 more)

### Community 2 - "[slug]/page.tsx"
Cohesion: 0.15
Nodes (14): PropertyDetailPage(), CondominiumAmenities(), CondominiumAmenitiesProps, PropertyDescription(), PropertyDescriptionProps, PropertyGallery(), PropertyMap(), PropertyMapProps (+6 more)

### Community 3 - "1. HOME (app/page.tsx)"
Cohesion: 0.07
Nodes (28): 1. HOME (app/page.tsx), 2. COMPRAR (app/comprar/page.tsx), 3. DETALHE DO IMÓVEL (app/imoveis/[slug]/page.tsx), 4. SOBRE NÓS (app/sobre-nos/page.tsx), 5. CONTATO (app/contato/page.tsx), Barra de Estatísticas, Breadcrumb, Conteúdo Principal (grid 2 colunas) (+20 more)

### Community 4 - "Yantra Negócios Imobiliários — CLAUDE.md"
Cohesion: 0.07
Nodes (27): Componentes, Comprar / Alugar / Imóveis Comerciais, Contato, Convenções de Código, Cores (usar SEMPRE via classes Tailwind — nunca hex inline), Design System, Detalhe do Imóvel, Estrutura de Pastas (+19 more)

### Community 5 - "sobre-nos/page.tsx"
Cohesion: 0.17
Nodes (12): ContatoPage(), SobreNosPage(), ContactForm(), PillarCard(), PillarCardProps, StatItem, stats, StatsBar() (+4 more)

### Community 6 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+10 more)

### Community 7 - "✅ Concluído"
Cohesion: 0.14
Nodes (13): ✅ Concluído, ⚠️ Decisões Tomadas, Fase 1 — Fundação, Fase 2 — Home, Fase 3 — Listagens, Fase 4 — Detalhe do Imóvel, Fase 5 — Institucional, Fase 6 — Sanity CMS (+5 more)

### Community 8 - "next"
Cohesion: 0.22
Nodes (7): metadata, RootLayout(), Footer(), Header(), resend@^6.34.1, next, resend

### Community 9 - "app/page.tsx"
Cohesion: 0.31
Nodes (7): Home(), FeaturedProperties(), HeroSlider(), slides, categories, QuickCategories(), SearchBar()

### Community 10 - "nova-pagina.md"
Cohesion: 0.25
Nodes (7): Entrega, Estrutura obrigatória de toda página Yantra, Padrões de seções por tipo de página, Página de Detalhe, Página de Listagem (Comprar, Alugar, Comerciais), Página Institucional (Sobre, Contato), Regras obrigatórias

### Community 11 - "Checklist de Revisão"
Cohesion: 0.25
Nodes (7): ♿ Acessibilidade, Checklist de Revisão, 🇧🇷 Conteúdo, ⚙️ Código, 🎨 Design System, Entrega, 📱 Responsividade

### Community 12 - "PropertyGrid"
Cohesion: 0.50
Nodes (5): AlugarPage(), ComprarPage(), FilterPanel(), PropertyCard(), PropertyGrid()

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
Cohesion: 0.11
Nodes (16): CONFIG_QUERY, DETAIL_QUERY, FEATURED_QUERY, LISTING_QUERY, builder, client, dependencies, lucide-react@^0.379.0 (+8 more)

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `package.json`, `[slug]/page.tsx`, `dependencies`, `sobre-nos/page.tsx`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09846153846153846 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `[slug]/page.tsx` to `package.json`, `app/page.tsx`, `dependencies`, `sobre-nos/page.tsx`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Should `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Why does `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` connect `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` to `1. HOME (app/page.tsx)`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Should `1. HOME (app/page.tsx)` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `Yantra Negócios Imobiliários — CLAUDE.md` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._