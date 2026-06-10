# Yantra Negócios Imobiliários — CLAUDE.md

Projeto de landing page imobiliária premium para a **Yantra Negócios Imobiliários**, localizada em Campinas/SP. Identidade visual baseada em geometria sagrada (símbolo Yantra), posicionada no segmento de alto padrão.

**Slogan:** "Conectando pessoas ao lugar onde a vida floresce."

---

## Stack Tecnológica

```
Framework:    Next.js 14+ com App Router
Language:     TypeScript (strict mode)
Styling:      Tailwind CSS com tokens customizados
CMS:          Sanity v3
Icons:        Lucide React
Fonts:        Cormorant Garamond + DM Sans (Google Fonts)
Deploy:       Vercel
```

---

## Design System

### Cores (usar SEMPRE via classes Tailwind — nunca hex inline)

| Classe Tailwind         | Hex       | Uso                                      |
|-------------------------|-----------|------------------------------------------|
| `bg-verde-escuro`       | `#3F5B4B` | Seções de conteúdo, cards, ícones        |
| `bg-verde-profundo`     | `#2C3F35` | Header, Footer, Hero, banners CTA        |
| `bg-verde-salvia`       | `#8FA78D` | Elementos secundários, hover suave       |
| `bg-dourado`            | `#B08D57` | CTAs, destaques, palavras-chave, labels  |
| `bg-dourado-light`      | `#C9A96E` | Hover de botões dourados                 |
| `bg-bege`               | `#D8C7A6` | Fundos de seção alternativos             |
| `bg-off-white`          | `#F7F5F0` | Fundo base do site, seções claras        |
| `border-border-yantra`  | `#E2D9C8` | Bordas de cards e inputs                 |

### Tipografia

```
Headlines / Display:  font-serif  → "Cormorant Garamond", serif (weights: 300, 400, 600)
Body / UI / Botões:   font-sans   → "DM Sans", sans-serif (weights: 300, 400, 500, 600)

Escalas:
  Hero:    text-5xl lg:text-7xl — font-serif font-light
  H2:      text-3xl lg:text-4xl — font-serif font-normal
  H3:      text-2xl             — font-serif font-normal
  Label:   text-xs tracking-[0.2em] uppercase — font-sans font-medium text-dourado
  Body:    text-base leading-relaxed — font-sans font-light
  Small:   text-sm — font-sans
```

### Padrões Visuais Recorrentes

```
Hero sections:     Split layout — texto esquerda (verde-profundo) + imagem direita
Palavra-chave:     Última palavra ou frase do headline SEMPRE em text-dourado
Folhagem:          PNG decorativa posicionada absolute no canto esquerdo das hero sections
Padrão Yantra:     SVG geométrico com opacity-[0.06] como bg decorativo nos banners CTA escuros
Separador seção:   Linha dourada 2px, w-12, centralizada abaixo do label de seção
Bordas:            rounded-lg para cards | rounded-full para badges pill
Sombras:           shadow-sm repouso → shadow-md hover, transition-shadow 200ms
Transições:        duration-200 ease-in-out em TODOS os elementos interativos
```

---

## Estrutura de Pastas

```
yantra-imoveis/
├── app/
│   ├── layout.tsx                  # Layout raiz — Header + Footer + WhatsAppButton flutuante
│   ├── page.tsx                    # Home
│   ├── comprar/page.tsx            # Listagem de imóveis para venda
│   ├── alugar/page.tsx             # Listagem de imóveis para locação
│   ├── imoveis-comerciais/page.tsx # Listagem de imóveis comerciais
│   ├── imoveis/[slug]/page.tsx     # Detalhe do imóvel
│   ├── sobre-nos/page.tsx          # Sobre Nós
│   ├── contato/page.tsx            # Contato
│   └── api/
│       └── contato/route.ts        # API route para envio do formulário de contato
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Navbar sticky — logo + links + botão WhatsApp
│   │   └── Footer.tsx              # Rodapé 4 colunas
│   │
│   ├── home/
│   │   ├── HeroSlider.tsx          # Carrossel hero 3 slides com autoplay
│   │   ├── SearchBar.tsx           # Barra de busca com 5 filtros + botão BUSCAR
│   │   ├── QuickCategories.tsx     # 6 atalhos de categoria (ícones em círculos)
│   │   └── FeaturedProperties.tsx  # Carrossel de imóveis em destaque
│   │
│   ├── imoveis/
│   │   ├── PropertyCard.tsx        # Card de imóvel (listagens)
│   │   ├── PropertyGrid.tsx        # Grid responsivo de cards
│   │   ├── FilterPanel.tsx         # Painel de filtros (1 linha home / 2 linhas listagem)
│   │   ├── PropertyGallery.tsx     # Galeria de fotos com thumbnails + modal fullscreen
│   │   ├── PropertySpecs.tsx       # Row de specs com ícones (quartos, banheiros, área...)
│   │   └── Pagination.tsx          # Paginação numérica
│   │
│   ├── sobre/
│   │   ├── PillarCard.tsx          # Card de Missão / Visão / Valores
│   │   ├── StatsBar.tsx            # Barra de estatísticas (+1200 imóveis, +850 clientes...)
│   │   └── TeamCard.tsx            # Card do corretor com foto + cargo + LinkedIn
│   │
│   └── ui/
│       ├── WhatsAppButton.tsx      # Botão flutuante fixo canto direito
│       ├── CTABanner.tsx           # Faixa verde-profundo com CTA e padrão Yantra decorativo
│       ├── SectionHeader.tsx       # Label dourado + título serifado + separador
│       ├── Badge.tsx               # Badge VENDA / LOCAÇÃO / DESTAQUE
│       └── YantraPattern.tsx       # SVG do símbolo geométrico Yantra (uso decorativo)
│
├── lib/
│   ├── sanity.ts                   # Cliente Sanity configurado
│   ├── queries.ts                  # GROQ queries reutilizáveis
│   ├── whatsapp.ts                 # ÚNICO lugar com o número — gerarLinkWhatsApp()
│   ├── formatters.ts               # formatarMoeda(), formatarArea()
│   └── mockData.ts                 # Dados mock para desenvolvimento (remover após Sanity)
│
├── sanity/
│   ├── schemaTypes/
│   │   ├── imovel.ts               # Schema completo do imóvel
│   │   └── configuracoes.ts        # Schema de configs da empresa (telefone, endereço...)
│   └── sanity.config.ts
│
├── types/
│   └── imovel.ts                   # TypeScript types e interfaces
│
└── public/
    ├── logo-light.png              # Logo para fundos claros
    ├── logo-dark.png               # Logo para fundos escuros (header, footer)
    └── yantra-symbol.svg           # Apenas o símbolo geométrico dourado
```

---

## Convenções de Código

### Nomenclatura
```
Componentes:      PascalCase           → PropertyCard.tsx, HeroSlider.tsx
Hooks:            camelCase com "use"  → useFilters.ts, useProperties.ts
Funções/variáveis: camelCase           → formatarMoeda(), tipoNegocio
Pastas:           kebab-case           → sobre-nos/, imoveis-comerciais/
Constantes:       UPPER_SNAKE_CASE     → NUMERO_WHATSAPP, MAX_DESTAQUES
```

### Linguagem no Código
```
Textos / Labels UI:    Português  → "Falar no WhatsApp", "Ver Detalhes"
Variáveis / Funções:   Português  → tipoNegocio, areaPrivativa, gerarLinkWhatsApp()
Props de componentes:  Inglês     → className, onClick, children, isLoading
```

### Componentes
```tsx
// SEMPRE tipagem explícita nas props
interface PropertyCardProps {
  imovel: Imovel;
  showContactButton?: boolean;
}

// SEMPRE next/image — nunca <img> diretamente
import Image from "next/image";

// SEMPRE next/link — nunca <a> para navegação interna
import Link from "next/link";
```

---

## Regras Críticas do Projeto

### ❌ NUNCA fazer
```
- Usar hex diretamente no className → use classes Tailwind customizadas
- Hardcodar número WhatsApp no JSX → sempre via lib/whatsapp.ts
- Usar <img> diretamente → sempre next/image com width/height ou fill
- Usar <a> para links internos → sempre next/link
- Criar cores fora do tailwind.config.ts
- Usar font-family diretamente → sempre font-serif ou font-sans
- Commitar .env.local
```

### ✅ SEMPRE fazer
```
- Animações com duration-200 e ease-in-out
- Focus ring visível em elementos interativos (outline-dourado)
- Alt text descritivo em todas as imagens
- Loading="lazy" em imagens, exceto hero (priority)
- Componentes com responsividade mobile-first
- Estado de loading nos botões de ação
- Tratamento de erro nos fetches do Sanity
```

---

## WhatsApp — Integração

**Arquivo único de controle:** `lib/whatsapp.ts`

```typescript
const NUMERO_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;

export function gerarLinkWhatsApp(codigoImovel?: string): string {
  const mensagem = codigoImovel
    ? `Olá, tenho interesse no imóvel código ${codigoImovel} e gostaria de mais informações.`
    : `Olá! Gostaria de falar com um especialista da Yantra Negócios Imobiliários.`;
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
```

---

## Variáveis de Ambiente (.env.local)

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=5519999999999

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_KEY=

# Email (Resend)
RESEND_API_KEY=
RESEND_FROM_EMAIL=contato@yantraimoveis.com.br
RESEND_TO_EMAIL=contato@yantraimoveis.com.br
```

---

## Sanity — Schema do Imóvel

Campos principais do documento `imovel`:

```
codigo          string    (gerado automaticamente — prefixo YAN-)
titulo          string    (obrigatório)
slug            slug      (gerado do título)
tipoNegocio     string    ["venda", "locacao"]
tipoImovel      string    ["casa", "apartamento", "terreno", "comercial"]
valor           number    (obrigatório)
condominio      number
iptu            number
cidade          string    (obrigatório)
bairro          string    (obrigatório)
endereco        string    (privado — exibir apenas bairro no site)
latitude        number
longitude       number
descricao       text      (obrigatório)
quartos         number
suites          number
banheiros       number
vagas           number
areaPrivativa   number    (m²)
areaTotal       number    (m²)
andar           number
anoConstrucao   number
caracteristicas array     [string]
comodidades     array     [string]  (condomínio)
fotos           array     [image]   (mínimo 1 obrigatório)
destaque        boolean   (máximo 6 ativos simultaneamente)
status          string    ["ativo", "inativo"]
```

### GROQ Queries Principais (lib/queries.ts)

```groq
// Home — destaques
FEATURED_QUERY:
*[_type == "imovel" && status == "ativo" && destaque == true]
| order(_createdAt desc)[0...6]

// Listagem com filtros
LISTING_QUERY:
*[_type == "imovel" && status == "ativo"
  && tipoNegocio == $tipo
  && ($cidade == "" || cidade == $cidade)
  && ($bairro == "" || bairro == $bairro)
  && valor >= $valorMin && valor <= $valorMax
] | order(destaque desc, _createdAt desc)[$offset...$offset+$pageSize]

// Detalhe por slug
DETAIL_QUERY:
*[_type == "imovel" && slug.current == $slug && status == "ativo"][0]
```

---

## Páginas e Seções

### Home
1. HeroSlider (3 slides, autoplay 5s, fundo verde-profundo split)
2. SearchBar (5 filtros: Tipo Negócio, Tipo Imóvel, Cidade, Bairro, Faixa de Valor)
3. QuickCategories (6 atalhos: Comprar, Alugar, Destaques, Comerciais, Avaliar, WhatsApp)
4. FeaturedProperties (carrossel 4 cards, dados do Sanity filtro destaque==true)

### Comprar / Alugar / Imóveis Comerciais
1. Hero banner split (h-[50vh])
2. FilterPanel flutuante sobrepondo o hero (-mt-12)
3. Contador de resultados + ordenação
4. PropertyGrid (4 col desktop / 2 tablet / 1 mobile)
5. Pagination
6. CTABanner final

### Detalhe do Imóvel
1. Breadcrumb (Home > Imóveis > Título)
2. Layout 60/40: PropertyGallery | Painel (preço + código + botões WhatsApp/Compartilhar)
3. PropertySpecs (6 ícones: quartos, banheiros, vagas, área, andar, ano)
4. Descrição com collapse + Localização (iframe Maps) — grid 2 col
5. Comodidades do condomínio
6. CTABanner final com código do imóvel na mensagem WhatsApp

### Sobre Nós
1. Hero split (texto + foto escritório)
2. Nossos Pilares (3 cards: Missão, Visão, Valores)
3. StatsBar verde-profundo (+1200, +850, +15, 100%)
4. Nossa Equipe (texto intro + 4 TeamCards)
5. CTABanner com overlay sobre foto de imóvel

### Contato
1. Hero split
2. Grid 2 col: Canais de Atendimento | Formulário (nome, email, tel, assunto, mensagem)
3. Grid 2 col: Iframe Google Maps | Visite Nossa Sede + 3 diferenciais
4. Footer

---

## Fases de Implementação

```
Fase 1 — Fundação:      Setup, Tailwind config, Header, Footer, componentes UI base, mock data
Fase 2 — Home:          HeroSlider, SearchBar, QuickCategories, FeaturedProperties
Fase 3 — Listagens:     PropertyCard, FilterPanel, páginas Comprar/Alugar, Pagination
Fase 4 — Detalhe:       PropertyGallery, modal fullscreen, specs, mapa, página de detalhe
Fase 5 — Institucional: Sobre Nós completo, Contato com formulário + mapa
Fase 6 — Sanity CMS:    Setup, schemas, substituir mocks por GROQ queries reais
Fase 7 — Deploy:        SEO metadata, animações scroll, otimização, Vercel + Sanity deploy
```

---

## Informações da Empresa (Placeholder — atualizar antes do deploy)

```
Empresa:   Yantra Negócios Imobiliários
WhatsApp:  (19) 99999-9999
Telefone:  (19) 99999-9999
Email:     contato@yantraimoveis.com.br
Endereço:  Rua das Flores, 123 — Cambui, Campinas/SP — CEP 13024-000
Instagram: @yantraimoveis
Facebook:  /yantraimoveis
LinkedIn:  /company/yantraimoveis
CNPJ:      (a definir)
```

---

*Documento de referência do projeto — manter atualizado a cada nova fase concluída.*
*Versão 1.0 — Junho/2026*
