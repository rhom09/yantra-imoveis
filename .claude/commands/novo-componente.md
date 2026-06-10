---
description: Cria um novo componente React seguindo o padrão de design da Yantra
argument-hint: "Nome e descrição do componente. Ex: PropertyCard - card de imóvel para listagem"
---

Crie um novo componente React para o projeto Yantra Negócios Imobiliários.

**Componente solicitado:** $ARGUMENTS

Siga rigorosamente estas regras do projeto (detalhadas no CLAUDE.md):

## Estrutura obrigatória

1. Arquivo TypeScript (.tsx) com interface de props explícita
2. Localizar na pasta correta dentro de `components/`:
   - `layout/` → Header, Footer
   - `home/` → componentes exclusivos da Home
   - `imoveis/` → componentes de listagem e detalhe
   - `sobre/` → componentes da página Sobre Nós
   - `ui/` → componentes reutilizáveis globais

## Design System a aplicar

- **Cores:** usar SEMPRE classes Tailwind customizadas (`bg-verde-escuro`, `text-dourado`, `bg-off-white`, etc.) — NUNCA hex inline
- **Tipografia:** `font-serif` para títulos (Cormorant Garamond) e `font-sans` para body/UI (DM Sans)
- **Animações:** `transition-all duration-200 ease-in-out` em elementos interativos
- **Bordas:** `rounded-lg` para cards, `rounded-full` para badges
- **Sombras:** `shadow-sm` padrão → `shadow-md` no hover

## Regras de código

- `next/image` para todas as imagens (com `fill` ou `width`/`height` explícitos)
- `next/link` para todos os links internos
- Props em inglês, textos/labels em português
- Estado de loading em botões de ação
- Responsividade mobile-first com breakpoints `md:` e `lg:`

## Entrega

Após criar o arquivo do componente:
1. Mostre o código completo
2. Explique as decisões de design tomadas
3. Mostre um exemplo de uso do componente com props de exemplo
