# Yantra — Progresso do Desenvolvimento

> **Atualizar este arquivo ao final de cada sessão de trabalho.**
> É ele que garante continuidade após /compact ou nova sessão.

---

## 🟢 Status Atual

**Fase em andamento:** Fase 4 — Detalhe do Imóvel
**Última atualização:** 2026-06-10
**Próxima ação:** Implementar o restante dos detalhes da página, como a descrição com collapse, Google Maps e comodidades do condomínio.

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
- [x] app/imoveis/[slug]/page.tsx (integração inicial)

### Fase 5 — Institucional
- [ ] PillarCard.tsx
- [ ] StatsBar.tsx
- [ ] TeamCard.tsx
- [ ] app/sobre-nos/page.tsx
- [ ] app/contato/page.tsx
- [ ] app/api/contato/route.ts

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
| Alias @/ no tsconfig para importações | Organização e limpeza do código | 2026-06-10 |
| Uso de next/image com remotePatterns para Unsplash | Resolver erro de host não configurado | 2026-06-10 |

---

## 🐛 Problemas Conhecidos

- A descrição do imóvel na página de detalhe ainda não possui a funcionalidade de "ver mais/ver menos" (collapse).
- Integração com Google Maps (iframe) ainda pendente na página de detalhe.
- Comodidades do condomínio ainda não implementadas na página de detalhe.

---

## 📝 Notas da Sessão Atual

- Configurado ambiente completo (Next.js + Tailwind).
- Implementada home completa e listagens de comprar/alugar.
- Resolvido erro de resolução de imagem (next/image + remotePatterns).
- Criada página inicial de detalhe do imóvel com galeria e especificações.
- Preparada estrutura para conclusão da fase de detalhes.
