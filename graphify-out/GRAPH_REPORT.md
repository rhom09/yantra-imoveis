# Graph Report - yantra-imoveis  (2026-10-28)

## Corpus Check
- 63 files · ~16,672 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 1, .example 1)

## Summary
- 339 nodes · 502 edges · 19 communities (16 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `180e99aa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code
- QuickCategories.tsx
- 1. HOME (app/page.tsx)
- Yantra Negócios Imobiliários — CLAUDE.md
- sobre-nos/page.tsx
- compilerOptions
- ✅ Concluído
- compilerOptions
- [slug]/page.tsx
- nova-pagina.md
- Checklist de Revisão
- lucide-react
- checkpoint.md
- novo-componente.md
- retomar.md
- next.config.js
- postcss.config.js

## God Nodes (most connected - your core abstractions)
1. `next` - 21 edges
2. `lucide-react` - 18 edges
3. `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` - 16 edges
4. `compilerOptions` - 16 edges
5. `Yantra Negócios Imobiliários — CLAUDE.md` - 13 edges
6. `react` - 13 edges
7. `Imovel` - 10 edges
8. `PropertyDetailPage()` - 9 edges
9. `✅ Concluído` - 8 edges
10. `gerarLinkWhatsApp()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `AlugarPage()` --calls--> `AlugarPageContent()`  [EXTRACTED]
  app/alugar/page.tsx → components/imoveis/AlugarPageContent.tsx
- `ComprarPage()` --calls--> `ComprarPageContent()`  [EXTRACTED]
  app/comprar/page.tsx → components/imoveis/ComprarPageContent.tsx
- `ContatoPage()` --calls--> `ContactChannelCard()`  [EXTRACTED]
  app/contato/page.tsx → components/contato/ContactChannelCard.tsx
- `ContatoPage()` --calls--> `gerarLinkWhatsApp()`  [EXTRACTED]
  app/contato/page.tsx → lib/whatsapp.ts
- `generateMetadata()` --calls--> `fetchPropertyBySlug()`  [EXTRACTED]
  app/imoveis/[slug]/page.tsx → lib/sanityService.ts

## Import Cycles
- None detected.

## Communities (19 total, 3 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.05
Nodes (40): builder, client, dependencies, lucide-react@^0.379.0, next@14.2.4, next-sanity@^8.0.0, @playwright/test@^1.64.1, react@^18.3.1 (+32 more)

### Community 1 - "YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code"
Cohesion: 0.06
Nodes (35): ACESSIBILIDADE E SEO, BOTÃO WHATSAPP FLUTUANTE, COMPONENTES PRINCIPAIS, CONFIGURAÇÃO TAILWIND, CONTEXTO DO PROJETO, CTABanner.tsx, DADOS MOCK (para desenvolvimento inicial), DESIGN SYSTEM (+27 more)

### Community 2 - "QuickCategories.tsx"
Cohesion: 0.10
Nodes (19): metadata, RootLayout(), Home(), ComerciaisMenu(), HeroSlider(), slides, categories, CategoryItem (+11 more)

### Community 3 - "1. HOME (app/page.tsx)"
Cohesion: 0.15
Nodes (17): FeaturedProperties(), PropertyCard(), PropertyCardProps, PropertyGridProps, iconMap, PropertySpecs(), getSpecs(), Spec (+9 more)

### Community 4 - "Yantra Negócios Imobiliários — CLAUDE.md"
Cohesion: 0.07
Nodes (27): Componentes, Comprar / Alugar, Contato, Convenções de Código, Cores (usar SEMPRE via classes Tailwind — nunca hex inline), Design System, Detalhe do Imóvel, Estrutura de Pastas (+19 more)

### Community 5 - "sobre-nos/page.tsx"
Cohesion: 0.07
Nodes (28): 1. HOME (app/page.tsx), 2. COMPRAR (app/comprar/page.tsx), 3. DETALHE DO IMÓVEL (app/imoveis/[slug]/page.tsx), 4. SOBRE NÓS (app/sobre-nos/page.tsx), 5. CONTATO (app/contato/page.tsx), Barra de Estatísticas, Breadcrumb, Conteúdo Principal (grid 2 colunas) (+20 more)

### Community 6 - "compilerOptions"
Cohesion: 0.14
Nodes (17): AlugarPage(), metadata, ComprarPage(), metadata, AlugarContent(), AlugarPageContent(), ComprarContent(), ComprarPageContent() (+9 more)

### Community 7 - "✅ Concluído"
Cohesion: 0.13
Nodes (14): ContatoPage(), metadata, metadata, SobreNosPage(), ContactChannelCard(), ContactChannelCardProps, PillarCard(), PillarCardProps (+6 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+10 more)

### Community 9 - "[slug]/page.tsx"
Cohesion: 0.18
Nodes (11): generateMetadata(), PropertyDetailPage(), CondominiumAmenities(), CondominiumAmenitiesProps, PropertyDescription(), PropertyDescriptionProps, PropertyGallery(), PropertyMap() (+3 more)

### Community 10 - "nova-pagina.md"
Cohesion: 0.14
Nodes (13): ✅ Concluído, ⚠️ Decisões Tomadas, Fase 1 — Fundação, Fase 2 — Home, Fase 3 — Listagens, Fase 4 — Detalhe do Imóvel, Fase 5 — Institucional, Fase 6 — Sanity CMS (+5 more)

### Community 11 - "Checklist de Revisão"
Cohesion: 0.25
Nodes (7): Entrega, Estrutura obrigatória de toda página Yantra, Padrões de seções por tipo de página, Página de Detalhe, Página de Listagem (Comprar, Alugar, Comerciais), Página Institucional (Sobre, Contato), Regras obrigatórias

### Community 12 - "lucide-react"
Cohesion: 0.25
Nodes (7): ♿ Acessibilidade, Checklist de Revisão, 🇧🇷 Conteúdo, ⚙️ Código, 🎨 Design System, Entrega, 📱 Responsividade

### Community 14 - "novo-componente.md"
Cohesion: 0.40
Nodes (4): 1. Levante o que foi feito nesta sessão, 2. Atualize o PROGRESS.md, 3. Verifique inconsistências, 4. Confirme ao usuário

### Community 15 - "retomar.md"
Cohesion: 0.40
Nodes (4): Design System a aplicar, Entrega, Estrutura obrigatória, Regras de código

### Community 16 - "next.config.js"
Cohesion: 0.50
Nodes (3): 1. Leia os arquivos de contexto, 2. Faça um diagnóstico rápido, 3. Pergunte como prosseguir

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `QuickCategories.tsx` to `package.json`, `1. HOME (app/page.tsx)`, `compilerOptions`, `✅ Concluído`, `[slug]/page.tsx`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.054078014184397165 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `QuickCategories.tsx` to `package.json`, `1. HOME (app/page.tsx)`, `compilerOptions`, `✅ Concluído`, `[slug]/page.tsx`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Should `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Why does `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` connect `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` to `sobre-nos/page.tsx`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Should `QuickCategories.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10084033613445378 - nodes in this community are weakly interconnected._
- **Should `Yantra Negócios Imobiliários — CLAUDE.md` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._