# Graph Report - yantra-imoveis  (2026-10-29)

## Corpus Check
- 72 files · ~17,078 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 1, .example 1)

## Summary
- 366 nodes · 552 edges · 20 communities (17 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b05ac1e4`
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
- sanity.ts
- nova-pagina.md
- Checklist de Revisão
- lucide-react
- sanity.config.ts
- novo-componente.md
- retomar.md
- next.config.js
- postcss.config.js
- .eslintrc.json

## God Nodes (most connected - your core abstractions)
1. `next` - 21 edges
2. `lucide-react` - 18 edges
3. `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` - 16 edges
4. `compilerOptions` - 16 edges
5. `react` - 13 edges
6. `Yantra Negócios Imobiliários — CLAUDE.md` - 13 edges
7. `Imovel` - 10 edges
8. `PropertyDetailPage()` - 9 edges
9. `gerarLinkWhatsApp()` - 8 edges
10. `ORDEM DE IMPLEMENTAÇÃO` - 8 edges

## Surprising Connections (you probably didn't know these)
- `PropertyCardProps` --references--> `Imovel`  [EXTRACTED]
  components/imoveis/PropertyCard.tsx → types/imovel.ts
- `PropertyGridProps` --references--> `Imovel`  [EXTRACTED]
  components/imoveis/PropertyGrid.tsx → types/imovel.ts
- `Home()` --calls--> `FeaturedProperties()`  [EXTRACTED]
  app/page.tsx → components/home/FeaturedProperties.tsx
- `PropertyDetailPage()` --calls--> `WhatsAppButton()`  [EXTRACTED]
  app/imoveis/[slug]/page.tsx → components/ui/WhatsAppButton.tsx
- `ContatoPage()` --calls--> `gerarLinkWhatsApp()`  [EXTRACTED]
  app/contato/page.tsx → lib/whatsapp.ts

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.06
Nodes (39): dependencies, lucide-react@^0.379.0, next@14.2.4, @playwright/test@^1.64.1, react@^18.3.1, react-dom@^18.3.1, resend@^6.34.1, sanity@^3.99.0 (+31 more)

### Community 1 - "YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code"
Cohesion: 0.06
Nodes (35): ACESSIBILIDADE E SEO, BOTÃO WHATSAPP FLUTUANTE, COMPONENTES PRINCIPAIS, CONFIGURAÇÃO TAILWIND, CONTEXTO DO PROJETO, CTABanner.tsx, DADOS MOCK (para desenvolvimento inicial), DESIGN SYSTEM (+27 more)

### Community 2 - "QuickCategories.tsx"
Cohesion: 0.10
Nodes (18): metadata, RootLayout(), Home(), ComerciaisMenu(), HeroSlider(), slides, categories, CategoryItem (+10 more)

### Community 3 - "1. HOME (app/page.tsx)"
Cohesion: 0.09
Nodes (29): generateMetadata(), PropertyDetailPage(), FeaturedProperties(), CondominiumAmenities(), CondominiumAmenitiesProps, PropertyCard(), PropertyCardProps, PropertyDescription() (+21 more)

### Community 4 - "Yantra Negócios Imobiliários — CLAUDE.md"
Cohesion: 0.07
Nodes (27): Componentes, Comprar / Alugar, Contato, Convenções de Código, Cores (usar SEMPRE via classes Tailwind — nunca hex inline), Design System, Detalhe do Imóvel, Estrutura de Pastas (+19 more)

### Community 5 - "sobre-nos/page.tsx"
Cohesion: 0.07
Nodes (28): 1. HOME (app/page.tsx), 2. COMPRAR (app/comprar/page.tsx), 3. DETALHE DO IMÓVEL (app/imoveis/[slug]/page.tsx), 4. SOBRE NÓS (app/sobre-nos/page.tsx), 5. CONTATO (app/contato/page.tsx), Barra de Estatísticas, Breadcrumb, Conteúdo Principal (grid 2 colunas) (+20 more)

### Community 6 - "compilerOptions"
Cohesion: 0.17
Nodes (15): AlugarPage(), metadata, ComprarPage(), metadata, AlugarContent(), AlugarPageContent(), ComprarContent(), ComprarPageContent() (+7 more)

### Community 7 - "✅ Concluído"
Cohesion: 0.13
Nodes (16): ContatoPage(), metadata, metadata, SobreNosPage(), ContactChannelCard(), ContactChannelCardProps, PillarCard(), PillarCardProps (+8 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+10 more)

### Community 9 - "sanity.ts"
Cohesion: 0.29
Nodes (4): builder, client, @sanity/image-url@^1.2.0, @sanity/image-url

### Community 10 - "nova-pagina.md"
Cohesion: 0.14
Nodes (13): ✅ Concluído, ⚠️ Decisões Tomadas, Fase 1 — Fundação, Fase 2 — Home, Fase 3 — Listagens, Fase 4 — Detalhe do Imóvel, Fase 5 — Institucional, Fase 6 — Sanity CMS (+5 more)

### Community 11 - "Checklist de Revisão"
Cohesion: 0.25
Nodes (7): Entrega, Estrutura obrigatória de toda página Yantra, Padrões de seções por tipo de página, Página de Detalhe, Página de Listagem (Comprar, Alugar, Comerciais), Página Institucional (Sobre, Contato), Regras obrigatórias

### Community 12 - "lucide-react"
Cohesion: 0.25
Nodes (7): ♿ Acessibilidade, Checklist de Revisão, 🇧🇷 Conteúdo, ⚙️ Código, 🎨 Design System, Entrega, 📱 Responsividade

### Community 13 - "sanity.config.ts"
Cohesion: 0.13
Nodes (13): dynamic, next-sanity@^9.12.3, next-sanity, sanity, apiVersion, dataset, projectId, client (+5 more)

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
- **1 isolated node(s):** `next/core-web-vitals`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 178 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `QuickCategories.tsx` to `package.json`, `1. HOME (app/page.tsx)`, `compilerOptions`, `✅ Concluído`, `sanity.ts`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **What connects `next/core-web-vitals` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.059800664451827246 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `QuickCategories.tsx` to `package.json`, `1. HOME (app/page.tsx)`, `compilerOptions`, `✅ Concluído`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Should `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Why does `sanity` connect `sanity.config.ts` to `package.json`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Should `QuickCategories.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10158730158730159 - nodes in this community are weakly interconnected._