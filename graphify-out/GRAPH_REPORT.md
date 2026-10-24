# Graph Report - yantra-imoveis  (2026-10-23)

## Corpus Check
- Corpus is ~10,901 words - fits in a single context window. You may not need a graph.

## Summary
- 274 nodes · 351 edges · 18 communities (16 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` - 16 edges
3. `Yantra Negócios Imobiliários — CLAUDE.md` - 12 edges
4. `next` - 10 edges
5. `lucide-react` - 8 edges
6. `✅ Concluído` - 8 edges
7. `ORDEM DE IMPLEMENTAÇÃO` - 8 edges
8. `PropertyDetailPage()` - 7 edges
9. `PropertyCard()` - 6 edges
10. `PropertyGrid()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `AlugarPage()` --calls--> `FilterPanel()`  [EXTRACTED]
  app/alugar/page.tsx → components/imoveis/FilterPanel.tsx
- `AlugarPage()` --calls--> `PropertyGrid()`  [EXTRACTED]
  app/alugar/page.tsx → components/imoveis/PropertyGrid.tsx
- `ComprarPage()` --calls--> `FilterPanel()`  [EXTRACTED]
  app/comprar/page.tsx → components/imoveis/FilterPanel.tsx
- `ComprarPage()` --calls--> `PropertyGrid()`  [EXTRACTED]
  app/comprar/page.tsx → components/imoveis/PropertyGrid.tsx
- `ContatoPage()` --calls--> `ContactForm()`  [EXTRACTED]
  app/contato/page.tsx → components/contato/ContactForm.tsx

## Import Cycles
- None detected.

## Communities (18 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (34): dependencies, lucide-react@^0.379.0, next@14.2.4, next-sanity@^8.0.0, react@^18.3.1, react-dom@^18.3.1, @sanity/image-url@^1.0.2, devDependencies (+26 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (35): ACESSIBILIDADE E SEO, BOTÃO WHATSAPP FLUTUANTE, COMPONENTES PRINCIPAIS, CONFIGURAÇÃO TAILWIND, CONTEXTO DO PROJETO, CTABanner.tsx, DADOS MOCK (para desenvolvimento inicial), DESIGN SYSTEM (+27 more)

### Community 2 - "Community 2"
Cohesion: 0.14
Nodes (16): PropertyDetailPage(), mockImoveis, CondominiumAmenities(), CondominiumAmenitiesProps, PropertyCard(), PropertyDescription(), PropertyDescriptionProps, PropertyGallery() (+8 more)

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (28): 1. HOME (app/page.tsx), 2. COMPRAR (app/comprar/page.tsx), 3. DETALHE DO IMÓVEL (app/imoveis/[slug]/page.tsx), 4. SOBRE NÓS (app/sobre-nos/page.tsx), 5. CONTATO (app/contato/page.tsx), Barra de Estatísticas, Breadcrumb, Conteúdo Principal (grid 2 colunas) (+20 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (26): Componentes, Comprar / Alugar / Imóveis Comerciais, Contato, Convenções de Código, Cores (usar SEMPRE via classes Tailwind — nunca hex inline), Design System, Detalhe do Imóvel, Estrutura de Pastas (+18 more)

### Community 5 - "Community 5"
Cohesion: 0.17
Nodes (12): ContatoPage(), SobreNosPage(), ContactForm(), PillarCard(), PillarCardProps, StatItem, stats, StatsBar() (+4 more)

### Community 6 - "Community 6"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+10 more)

### Community 7 - "Community 7"
Cohesion: 0.14
Nodes (13): ✅ Concluído, ⚠️ Decisões Tomadas, Fase 1 — Fundação, Fase 2 — Home, Fase 3 — Listagens, Fase 4 — Detalhe do Imóvel, Fase 5 — Institucional, Fase 6 — Sanity CMS (+5 more)

### Community 8 - "Community 8"
Cohesion: 0.22
Nodes (6): resend, metadata, RootLayout(), Footer(), Header(), next

### Community 9 - "Community 9"
Cohesion: 0.31
Nodes (7): Home(), FeaturedProperties(), HeroSlider(), slides, categories, QuickCategories(), SearchBar()

### Community 10 - "Community 10"
Cohesion: 0.25
Nodes (7): Entrega, Estrutura obrigatória de toda página Yantra, Padrões de seções por tipo de página, Página de Detalhe, Página de Listagem (Comprar, Alugar, Comerciais), Página Institucional (Sobre, Contato), Regras obrigatórias

### Community 11 - "Community 11"
Cohesion: 0.25
Nodes (7): ♿ Acessibilidade, Checklist de Revisão, 🇧🇷 Conteúdo, ⚙️ Código, 🎨 Design System, Entrega, 📱 Responsividade

### Community 12 - "Community 12"
Cohesion: 0.62
Nodes (4): AlugarPage(), ComprarPage(), FilterPanel(), PropertyGrid()

### Community 13 - "Community 13"
Cohesion: 0.40
Nodes (4): 1. Levante o que foi feito nesta sessão, 2. Atualize o PROGRESS.md, 3. Verifique inconsistências, 4. Confirme ao usuário

### Community 14 - "Community 14"
Cohesion: 0.40
Nodes (4): Design System a aplicar, Entrega, Estrutura obrigatória, Regras de código

### Community 15 - "Community 15"
Cohesion: 0.50
Nodes (3): 1. Leia os arquivos de contexto, 2. Faça um diagnóstico rápido, 3. Pergunte como prosseguir

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Community 8` to `Community 0`, `Community 2`, `Community 5`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Why does `YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code` connect `Community 1` to `Community 3`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `Community 2` to `Community 0`, `Community 9`, `Community 5`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._