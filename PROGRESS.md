# Yantra — Progresso do Desenvolvimento

> **Atualizar este arquivo ao final de cada sessão de trabalho.**
> É ele que garante continuidade após /compact ou nova sessão.

---

## 🟢 Status Atual

**Fase em andamento:** Fase 6 — Sanity CMS
**Última atualização:** 2026-06-10
**Próxima ação:** Configurar Sanity v3 e definir schemas para imovel e configuracoes.

---

## ✅ Concluído

### Fase 1 — Fundação
- [x] Setup Next.js 14 + TypeScript + Tailwind
- [x] tailwind.config.ts com tokens de design Yantra
- [x] Fontes Google configuradas (Cormorant Garamond + DM Sans)
- [x] layout.tsx raiz criado
- [x] Header.tsx — navbar sticky com logo, links e botão WhatsApp
- [x] Footer.tsx — 4 colunas
- [x] lib/whatsapp.ts — helper de links WhatsApp
- [x] lib/formatters.ts — formatarMoeda, formatarArea

### Fase 2 — Home
- [x] HeroSlider.tsx — 3 slides, autoplay 5s (imagem HeroYantra.png integrada)
- [x] SearchBar.tsx — 5 filtros + botão BUSCAR
- [x] QuickCategories.tsx — 6 atalhos
- [x] FeaturedProperties.tsx — carrossel de destaque
- [x] app/page.tsx — Home completa

### Fase 3 — Listagens
- [x] PropertyCard.tsx (corrigido link para detalhe)
- [x] PropertyGrid.tsx
- [x] FilterPanel.tsx — 1 linha e 2 linhas
- [x] app/comprar/page.tsx
- [x] app/alugar/page.tsx

### Fase 4 — Detalhe do Imóvel
- [x] PropertyGallery.tsx — thumbnails + galeria
- [x] PropertySpecs.tsx
- [x] app/imoveis/[slug]/page.tsx
- [x] PropertyDescription.tsx (com collapse)
- [x] PropertyMap.tsx (iframe Maps)
- [x] CondominiumAmenities.tsx (grid com ícones)

### Fase 5 — Institucional
- [x] PillarCard.tsx
- [x] StatsBar.tsx
- [x] TeamCard.tsx
- [x] app/sobre-nos/page.tsx
- [x] app/contato/page.tsx
- [x] app/api/contato/route.ts
- [x] CTABanner.tsx
- [x] YantraPattern.tsx

### Fase 6 — Sanity CMS
- [ ] Setup Sanity v3
- [ ] sanity/schemaTypes/imovel.ts
- [ ] sanity/schemaTypes/configuracoes.ts
- [ ] lib/sanity.ts — cliente configurado
- [ ] lib/queries.ts — GROQ queries
- [ ] Substituir mockData por queries reais

### Fase 7 — Deploy
- [ ] SEO: metadata dinâmica por página
- [ ] Animações de scroll (Intersection Observer)
- [ ] Otimização de imagens
- [ ] Deploy Vercel configurado
- [ ] Sanity deploy

---

## ⚠️ Decisões Tomadas

| Decisão | Motivo | Data |
|---------|--------|------|
| Dados mock em lib/mockData.ts antes do Sanity | Desenvolver UI independente do CMS | 2026-06-10 |
| Número WhatsApp via .env — nunca hardcodado | Facilitar troca sem mexer no código | 2026-06-10 |
| Uso de next/image com remotePatterns | Resolver erro de host não configurado | 2026-06-10 |
| Centralização de mocks em lib/mockData.ts | Fonte única de verdade para testes | 2026-06-10 |

---

## 🐛 Problemas Conhecidos

- Nenhum.

---

## 📝 Notas da Sessão Atual

- Concluída a Fase 4 (Detalhe) com integração completa dos novos componentes e correções nos dados mock.
- Concluída a Fase 5 (Institucional) com a criação das páginas Sobre Nós e Contato, e integração da API de e-mail (Resend).
- Componentes de UI padronizados criados e utilizados com sucesso.
