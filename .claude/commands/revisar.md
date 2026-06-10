---
description: Revisa um componente ou página verificando conformidade com o design system da Yantra
argument-hint: "Caminho do arquivo para revisar. Ex: components/imoveis/PropertyCard.tsx"
---

Revise o arquivo informado verificando conformidade total com o design system da Yantra Negócios Imobiliários.

**Arquivo para revisar:** $ARGUMENTS

Leia o arquivo e faça uma auditoria completa nos seguintes pontos:

## Checklist de Revisão

### 🎨 Design System
- [ ] Cores usando classes Tailwind customizadas (`text-dourado`, `bg-verde-escuro`, etc.) — nenhum hex inline
- [ ] Tipografia: `font-serif` em títulos, `font-sans` em body/UI
- [ ] Transições: `duration-200 ease-in-out` em elementos interativos
- [ ] Sombras: `shadow-sm` padrão, `shadow-md` no hover

### ⚙️ Código
- [ ] Props com TypeScript interface explícita
- [ ] `next/image` usado para todas as imagens
- [ ] `next/link` usado para links internos (sem `<a>` solto)
- [ ] Número WhatsApp nunca hardcodado — vindo de `lib/whatsapp.ts`

### 📱 Responsividade
- [ ] Mobile-first: estilos base para mobile, `md:` e `lg:` para desktop
- [ ] Nenhum elemento com largura fixa em px que quebre o layout
- [ ] Touch targets com mínimo 44×44px

### ♿ Acessibilidade
- [ ] `alt` descritivo em todas as imagens
- [ ] `aria-label` em botões sem texto visível
- [ ] Focus ring visível nos elementos interativos

### 🇧🇷 Conteúdo
- [ ] Textos e labels em português
- [ ] Props e variáveis em inglês ou português técnico (sem mistura aleatória)

## Entrega

1. **Resultado:** Aprovado ✅ ou Reprovado ❌ com score (ex: 9/12 itens OK)
2. **Problemas encontrados:** lista com localização exata (linha ou trecho)
3. **Código corrigido:** versão final do arquivo com todos os problemas resolvidos
