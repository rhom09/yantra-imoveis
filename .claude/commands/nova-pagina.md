---
description: Cria uma nova página Next.js seguindo o layout padrão da Yantra
argument-hint: "Nome e rota da página. Ex: sobre-nos - página institucional da empresa"
---

Crie uma nova página Next.js (App Router) para o projeto Yantra Negócios Imobiliários.

**Página solicitada:** $ARGUMENTS

## Estrutura obrigatória de toda página Yantra

```
app/[rota]/page.tsx
```

Toda página deve seguir este esqueleto base:

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Título da Página] | Yantra Negócios Imobiliários",
  description: "[Descrição SEO relevante]",
};

export default function NomeDaPagina() {
  return (
    <main>
      {/* Seções da página */}
    </main>
  );
}
```

## Padrões de seções por tipo de página

### Página Institucional (Sobre, Contato)
1. Hero split: `h-[50vh]` — texto esquerda (verde-profundo + folhagem) / imagem direita
2. Conteúdo principal com fundo `bg-off-white` ou `bg-white`
3. `<CTABanner />` ao final com botão WhatsApp

### Página de Listagem (Comprar, Alugar, Comerciais)
1. Hero banner: `h-[50vh]` split com headline em dourado
2. `<FilterPanel />` flutuando com `-mt-12 relative z-10`
3. Contador de resultados + ordenação
4. `<PropertyGrid />` com `<Pagination />`
5. `<CTABanner />` "Não encontrou o imóvel ideal?"

### Página de Detalhe
1. Breadcrumb
2. Grid 60/40: galeria esquerda / painel de info direita
3. Dados, descrição, mapa
4. `<CTABanner />` com código do imóvel na mensagem WhatsApp

## Regras obrigatórias

- Importar e usar `<SectionHeader />` para títulos de seção
- Palavra-chave do headline SEMPRE com `text-dourado`
- Responsividade mobile-first em todas as seções
- Metadata `title` e `description` únicas por página
- Dados mock com tipagem TypeScript antes de conectar ao Sanity

## Entrega

1. Arquivo da página completo (`app/[rota]/page.tsx`)
2. Lista dos novos componentes criados especificamente para esta página
3. Qualquer componente novo que for criado deve seguir o padrão `/novo-componente`
