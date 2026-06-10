# YANTRA NEGÓCIOS IMOBILIÁRIOS — Prompt Master para Claude Code

## CONTEXTO DO PROJETO

Você irá construir a landing page completa da **Yantra Negócios Imobiliários**, uma imobiliária premium localizada em São Paulo/SP. A marca possui identidade visual sofisticada com conceito de geometria sagrada (símbolo Yantra), posicionada no segmento de alto padrão com foco em pertencimento, propósito e confiança.

**Slogan:** "Conectando pessoas ao lugar onde a vida floresce."
**Tagline:** "Mais do que imóveis. Entregamos direção, pertencimento e novos começos."

---

## STACK TECNOLÓGICA

```
Framework:    Next.js 14+ (App Router)
Language:     TypeScript
Styling:      Tailwind CSS
CMS:          Sanity v3 (área administrativa)
Icons:        Lucide React
Fonts:        Google Fonts — Cormorant Garamond (headlines serifada) + DM Sans (corpo)
Deploy:       Vercel
```

---

## DESIGN SYSTEM

### Paleta de Cores

```css
/* Cores Principais */
--color-verde-escuro:   #3F5B4B;   /* Verde floresta — confiança, estabilidade */
--color-verde-salvia:   #8FA78D;   /* Verde sálvia — equilíbrio, prosperidade */
--color-bege:           #D8C7A6;   /* Bege/creme — lar, acolhimento */
--color-dourado:        #B08D57;   /* Dourado — exclusividade, realização */
--color-off-white:      #F7F5F0;   /* Off-white — base, clareza */

/* Variações */
--color-verde-profundo: #2C3F35;   /* Mais escuro que verde-escuro — hero bg, footer */
--color-dourado-light:  #C9A96E;   /* Dourado mais claro — hover states */
--color-text-primary:   #1A2E23;   /* Texto principal escuro */
--color-text-muted:     #6B7C72;   /* Texto secundário */
--color-border:         #E2D9C8;   /* Bordas suaves */
```

### Tipografia

```
Display/Headlines: "Cormorant Garamond", serif — weight: 300, 400, 600
  Uso: títulos de seções, nome da imobiliária, headlines heroicas
  
Body/UI: "DM Sans", sans-serif — weight: 300, 400, 500, 600
  Uso: parágrafos, labels, botões, navegação, metadados de imóveis

Escala tipográfica:
  Hero:     clamp(2.5rem, 5vw, 4rem) — Cormorant 300/400
  H2:       clamp(1.75rem, 3vw, 2.5rem) — Cormorant 400
  H3:       1.5rem — Cormorant 400
  Body:     1rem — DM Sans 300/400
  Small:    0.875rem — DM Sans 400
  Label:    0.75rem tracking-[0.15em] uppercase — DM Sans 500
```

### Padrões Visuais

```
Bordas:        rounded-lg (8px) cards / rounded-full botões pill
Sombras:       shadow-sm para cards em repouso, shadow-md em hover
Transições:    150-300ms ease-in-out em todos os elementos interativos
Espaçamento:   base 8px grid — use múltiplos de 4 e 8
Decorativo:    Padrão geométrico Yantra (SVG sutil, opacity 0.05-0.08) nas seções CTA escuras
Folhagens:     Imagem PNG com galhos/folhas, posicionada no canto esquerdo das seções hero
```

---

## ESTRUTURA DO PROJETO

```
yantra-imoveis/
├── app/
│   ├── layout.tsx              # Layout raiz com Header e Footer
│   ├── page.tsx                # Home
│   ├── comprar/
│   │   └── page.tsx            # Listagem — imóveis para venda
│   ├── alugar/
│   │   └── page.tsx            # Listagem — imóveis para locação
│   ├── imoveis-comerciais/
│   │   └── page.tsx            # Listagem — comerciais
│   ├── imoveis/
│   │   └── [slug]/
│   │       └── page.tsx        # Detalhe do imóvel
│   ├── sobre-nos/
│   │   └── page.tsx            # Sobre Nós
│   └── contato/
│       └── page.tsx            # Contato
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navbar com logo, links e botão WhatsApp
│   │   └── Footer.tsx          # Rodapé 4 colunas
│   │
│   ├── home/
│   │   ├── HeroSlider.tsx      # Carrossel hero com 3 slides
│   │   ├── SearchBar.tsx       # Barra de busca rápida com 5 filtros
│   │   ├── QuickCategories.tsx # 6 atalhos de categoria (ícones circulares)
│   │   └── FeaturedProperties.tsx # Carrossel de imóveis em destaque
│   │
│   ├── imoveis/
│   │   ├── PropertyCard.tsx    # Card de imóvel (usado em listagens)
│   │   ├── PropertyGrid.tsx    # Grid responsivo de cards
│   │   ├── FilterPanel.tsx     # Painel de filtros (1 ou 2 linhas)
│   │   ├── PropertyGallery.tsx # Galeria de fotos do detalhe
│   │   ├── PropertySpecs.tsx   # Ícones de specs (quartos, banheiros, área)
│   │   └── Pagination.tsx      # Paginação numérica
│   │
│   ├── sobre/
│   │   ├── PillarCard.tsx      # Card de Missão/Visão/Valores
│   │   ├── StatsBar.tsx        # Barra de números (1200 imóveis, 850 clientes...)
│   │   └── TeamCard.tsx        # Card do corretor com LinkedIn
│   │
│   └── ui/
│       ├── WhatsAppButton.tsx  # Botão flutuante WhatsApp
│       ├── CTABanner.tsx       # Faixa verde escura com CTA
│       ├── SectionHeader.tsx   # Label + título + linha decorativa dourada
│       ├── Badge.tsx           # Badge VENDA / LOCAÇÃO / DESTAQUE
│       └── YantraPattern.tsx   # SVG do padrão geométrico Yantra decorativo
│
├── lib/
│   ├── sanity.ts               # Cliente Sanity configurado
│   ├── queries.ts              # GROQ queries para imóveis
│   ├── whatsapp.ts             # Helper para gerar links WhatsApp
│   └── formatters.ts           # Formatação de moeda, área, etc.
│
├── sanity/
│   ├── schemaTypes/
│   │   ├── imovel.ts           # Schema principal do imóvel
│   │   └── configuracoes.ts    # Schema de configurações da empresa
│   └── sanity.config.ts
│
├── types/
│   └── imovel.ts               # TypeScript types
│
├── public/
│   ├── logo-light.png          # Logo fundo branco/claro
│   ├── logo-dark.png           # Logo fundo verde escuro
│   └── yantra-symbol.svg       # Apenas o símbolo geométrico
│
└── tailwind.config.ts          # Configuração com cores e fontes customizadas
```

---

## CONFIGURAÇÃO TAILWIND

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        verde: {
          escuro:   "#3F5B4B",
          profundo: "#2C3F35",
          salvia:   "#8FA78D",
        },
        dourado: {
          DEFAULT: "#B08D57",
          light:   "#C9A96E",
          dark:    "#8B6D3F",
        },
        bege:       "#D8C7A6",
        "off-white": "#F7F5F0",
        border:     "#E2D9C8",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans:  ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-verde": "linear-gradient(135deg, #2C3F35 0%, #3F5B4B 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## COMPONENTES PRINCIPAIS

### Header.tsx

```
Estrutura:
- Fundo: verde-profundo (#2C3F35), sticky top-0, z-50
- Logo: imagem logo-dark.png à esquerda (h-12)
- Nav central: HOME | COMPRAR | ALUGAR | IMÓVEIS COMERCIAIS | SOBRE NÓS | CONTATO
  - Links: texto branco, hover: texto dourado, transição 200ms
  - Active: sublinhado dourado 2px abaixo do link
- Botão WhatsApp à direita: borda dourada, texto dourado, ícone WhatsApp (Lucide), hover: bg dourado texto branco
- Mobile: hamburger menu com drawer lateral
```

### Footer.tsx

```
Estrutura:
- Fundo: verde-profundo (#2C3F35)
- 4 colunas:
  1. Brand: logo-dark (h-10) + slogan + ícones sociais (Instagram, Facebook, LinkedIn)
  2. NAVEGAÇÃO: links Home, Comprar, Alugar, Imóveis Comerciais, Sobre Nós, Contato
  3. INSTITUCIONAL: Quem Somos, Missão Visão e Valores, Política de Privacidade, Trabalhe Conosco
  4. FALE CONOSCO: ícone+telefone, ícone+whatsapp, ícone+email, ícone+endereço
- Linha divisória + copyright: "© 2025 Yantra Negócios Imobiliários. Todos os direitos reservados."
- Títulos das colunas: dourado, tracking-widest, uppercase, DM Sans 500
- Links: text-bege/70, hover: text-dourado
```

### PropertyCard.tsx

```
Props: imovel (título, cidade, bairro, valor, tipoNegocio, quartos, banheiros, vagas, area, fotos[], slug, destaque)

Layout:
- Container: rounded-lg, overflow-hidden, bg-white, shadow-sm, hover:shadow-md, transition
- Imagem: aspect-[4/3], object-cover, w-full
  - Badge absoluto top-left: VENDA (verde-escuro) / LOCAÇÃO (dourado)
  - Ícone coração top-right (favoritar, funcionalidade futura)
- Corpo padding 16px:
  - Título: font-serif, text-lg, text-verde-escuro, font-medium, 2 linhas max
  - Localização: ícone MapPin (12px), text-sm, text-muted, "Cidade - SP | Bairro"
  - Specs row: ícones (Bed, Bath, Car, Maximize2) + valores, text-sm, gap-3
  - Preço: font-serif, text-xl, text-verde-escuro, font-semibold
    - Locação: append "/mês"
  - Botões: VER DETALHES (bg-verde-escuro text-white) + ENTRAR EM CONTATO (border-verde-escuro text-verde-escuro)
  - Ambos: w-full, rounded-md, py-2.5, text-sm, DM Sans 500
```

### CTABanner.tsx

```
Props: titulo, subtitulo, textoBotao, numeroWhatsApp, codigoImovel?

Estilo:
- Fundo: verde-profundo com padrão Yantra geométrico SVG (opacity 0.06) no background
- Pode ter imagem de imóvel como overlay com gradient escurecendo
- Padding: py-16 px-8
- Texto branco, título em font-serif
- Botão: bg-dourado, hover:bg-dourado-light, text-verde-profundo, font-semibold
- Ícone WhatsApp antes do texto
```

### SectionHeader.tsx

```
Props: label?, titulo, subtitulo?

Layout:
- label: text-dourado uppercase tracking-[0.2em] text-sm DM Sans 500 + linha dourada 2px antes/depois (decorativa)
- titulo: font-serif, tamanho configurável
- subtitulo: text-muted, DM Sans
- Alinhamento: center ou left (prop)
```

---

## PÁGINAS

### 1. HOME (app/page.tsx)

#### Seção Hero (HeroSlider)
```
- Altura: h-[90vh] min-h-[600px]
- Fundo: verde-profundo gradient
- Layout split: col esquerda (texto) / col direita (imagem imóvel com overlay sutil)
- Folhagem PNG decorativa canto esquerdo inferior (position absolute)
- Slide 1:
  - Label: "YANTRA NEGÓCIOS IMOBILIÁRIOS" (dourado, uppercase, small)
  - H1: "Conectando pessoas ao lugar onde a vida floresce." 
    - "vida floresce." em text-dourado
  - Subtexto: "Mais do que imóveis. Entregamos direção, pertencimento e novos começos."
  - CTA: botão "FALAR NO WHATSAPP" com ícone
- Dots de paginação embaixo (3 pontos, dourado = ativo)
- Autoplay 5s com pausa no hover
```

#### Seção Busca Rápida
```
- Fundo: off-white (#F7F5F0)
- Título centralizado: "ENCONTRE SEU IMÓVEL IDEAL" + subtítulo
- Linha de filtros (flex, gap, wrap):
  1. Tipo de Negócio: select ["Comprar ou Alugar", "Comprar", "Alugar"]
  2. Tipo de Imóvel: select ["Selecione", "Casa", "Apartamento", "Terreno", "Comercial"]
  3. Cidade: select dinâmico do Sanity
  4. Bairro: select dinâmico filtrado por cidade
  5. Faixa de Valor: select ["Qualquer valor", "Até R$ 300K", "R$ 300K–600K", "R$ 600K–1M", "Acima de R$ 1M"]
  6. Botão BUSCAR: bg-verde-escuro, texto branco, ícone Search
- Selects: bg-white, border-border, rounded-md, DM Sans
```

#### Seção Categorias Rápidas
```
- Fundo: bege claro (#F7F5F0)
- 6 cards horizontais centralizados:
  1. COMPRAR — ícone Home
  2. ALUGAR — ícone Key
  3. DESTAQUES — ícone Star
  4. IMÓVEIS COMERCIAIS — ícone Building2
  5. AVALIAR MEU IMÓVEL — ícone DollarSign
  6. WHATSAPP — ícone MessageCircle
- Cada card: ícone em círculo verde-escuro (48px) + label uppercase abaixo + subtexto pequeño
- Hover: círculo fica dourado, lift suave
```

#### Seção Imóveis em Destaque
```
- Fundo: branco
- SectionHeader: label "—" + "IMÓVEIS EM DESTAQUE" + subtítulo
- Link "VER TODOS >" alinhado à direita (text-verde-escuro)
- Carrossel de 4 PropertyCards (scroll horizontal mobile, 4 colunas desktop)
- Dots de navegação + setas prev/next
- Filtrar do Sanity: imovel.destaque == true && imovel.status == "ativo", limit 6
```

#### Footer

---

### 2. COMPRAR (app/comprar/page.tsx)

#### Hero Banner
```
- Altura: h-[50vh]
- Split: texto esquerda (verde-profundo) + imagem casa direita
- Folhagem decorativa esquerda
- H1: "Encontre o imóvel ideal para comprar"
  - "para comprar" em text-dourado
- Subtítulo descritivo
```

#### FilterPanel (2 linhas)
```
- Container: bg-white, rounded-xl, shadow-md, padding 24px
- Margem negativa para sobrepor o hero (-mt-12 z-10 relative mx-8)
- Linha 1 (4 selects): Tipo de Imóvel | Cidade | Bairro | Faixa de Valor
- Linha 2 (4 selects): Dormitórios | Banheiros | Vagas de Garagem | Área Mínima (m²)
- Botões: BUSCAR (verde-escuro) + LIMPAR FILTROS (outline verde-escuro)
```

#### Resultados
```
- Counter: "124 imóveis encontrados" (bold) + ordenação select (Mais recentes | Menor preço | Maior preço)
- Grid: 4 colunas desktop, 2 tablet, 1 mobile — PropertyCard
- Pagination: números 1–5 + setas prev/next, ativo: bg-verde-escuro text-white
```

#### CTA Banner
```
- "Não encontrou o imóvel ideal?" + "FALAR NO WHATSAPP"
- Padrão Yantra geométrico sutil no fundo
```

> Página ALUGAR: idêntica à Comprar, filtrando tipoNegocio == "locacao"

---

### 3. DETALHE DO IMÓVEL (app/imoveis/[slug]/page.tsx)

#### Breadcrumb
```
Home > Imóveis > [Título do Imóvel]
text-sm, text-muted, separador ">"
```

#### Layout Principal (grid 2 colunas — 60% / 40%)
```
Coluna Esquerda — PropertyGallery:
- Imagem principal: aspect-[4/3], rounded-lg, overflow-hidden
  - Badge VENDA/LOCAÇÃO top-left
  - Setas prev/next sobre a imagem
- Thumbnails: 5 miniaturas + "+12 fotos" com overlay escuro
- Click nas thumbs atualiza a principal
- Modal fullscreen para galeria completa (Escape para fechar)

Coluna Direita — Painel de Informações:
- Título: font-serif, text-2xl, text-verde-escuro
- Localização: ícone MapPin + "Cidade - SP | Bairro"
- Código: "Código: YAN-0458" text-sm text-muted
- Separador: linha dourada
- "Valor de venda" label uppercase small
- Preço: font-serif text-3xl text-verde-escuro font-semibold
- Condomínio / IPTU (se existirem): text-sm text-muted
- Botão FALAR NO WHATSAPP: w-full, bg-verde-escuro, rounded-md, py-3, ícone WhatsApp
  - Link: wa.me/55{numero}?text=Olá, tenho interesse no imóvel código {codigo}.
- Botão COMPARTILHAR: w-full, border, outline, ícone Share2
```

#### Dados do Imóvel
```
- Título: "DADOS DO IMÓVEL" uppercase tracking-wide
- Grid 6 colunas (3 mobile):
  - Dormitórios (Bed icon) — com suítes se houver
  - Banheiros (Bath icon)
  - Vagas de Garagem (Car icon)
  - Área Privativa (Maximize2 icon) — em m²
  - Andar (Building icon) — se apartamento
  - Ano de Construção (Calendar icon)
- Cada item: ícone + valor bold + label pequeno abaixo
```

#### Descrição + Localização (grid 2 colunas)
```
Esquerda — Descrição:
- Título: "DESCRIÇÃO DO IMÓVEL"
- Texto com collapse: mostrar 5 linhas + "VER MAIS/VER MENOS" toggle
- Lista de características com ✓ verde (CheckCircle icon)

Direita — Localização:
- Título: "LOCALIZAÇÃO"
- Iframe Google Maps com endereço do imóvel (ou lat/lng do Sanity)
- Endereço formatado embaixo
- Botão "VER NO MAPA" (abre Google Maps nova aba)
- Se endereço privado: exibir apenas bairro + "Para mais detalhes, entre em contato"

Abaixo — Características do Condomínio (se existirem):
- Grid de ícones: Portaria 24h, Salão de Festas, Elevador, Academia, Piscina, Playground...
```

#### CTA Banner Final
```
"Gostou deste imóvel? Fale agora com um especialista e agende uma visita."
+ botão FALAR NO WHATSAPP com código do imóvel na mensagem
```

---

### 4. SOBRE NÓS (app/sobre-nos/page.tsx)

#### Hero Split
```
- Esquerda: verde-profundo, folhagem decorativa
  - Label: "SOBRE NÓS" dourado uppercase
  - H1: "Mais do que imóveis, realizamos sonhos."
    - "realizamos sonhos." em dourado
  - 2 parágrafos sobre a empresa
- Direita: foto do escritório Yantra (imagem real ou placeholder premium)
```

#### Nossos Pilares
```
- Fundo: off-white
- SectionHeader: "NOSSOS PILARES"
- 3 cards horizontais:
  1. MISSÃO: ícone Target em círculo verde-escuro + texto
  2. VISÃO: ícone Eye em círculo verde-escuro + texto
  3. VALORES: ícone Diamond em círculo verde-escuro + lista (Transparência, Confiança, Excelência, Inovação, Compromisso)
- Cards: bg-white, border, rounded-lg, padding 24px, shadow-sm
```

#### Barra de Estatísticas
```
- Fundo: verde-profundo
- 4 colunas centralizadas:
  - +1.200 | Imóveis vendidos e locados
  - +850   | Clientes satisfeitos
  - +15    | Anos de experiência no mercado
  - 100%   | Comprometidos com você
- Números: font-serif text-4xl text-dourado
- Labels: text-white/80 text-sm DM Sans
- Ícones dourados acima de cada número
```

#### Nossa Equipe
```
- Fundo: off-white
- Layout: texto introdutório esquerda + grid 4 cards direita
- Texto: "NOSSA EQUIPE" label + parágrafo + botão "CONHEÇA NOSSA EQUIPE" (outline verde-escuro)
- TeamCard: foto circular (80px), nome em bold, cargo em dourado italic, ícone LinkedIn
- Dados: vindos de array estático (futuramente Sanity)
  - Lucas Almeida — Diretor Comercial
  - Juliana Martins — Consultora Imobiliária
  - Rafael Costa — Consultor Imobiliário
  - Camila Santos — Consultora Imobiliária
```

#### CTA Banner com Fundo de Imóvel
```
Fundo: imagem de imóvel de luxo com overlay verde-profundo/80
"Conte com a Yantra para encontrar o imóvel ideal para você."
+ botão FALAR NO WHATSAPP
```

---

### 5. CONTATO (app/contato/page.tsx)

#### Hero Split
```
- Esquerda: verde-profundo + folhagem
  - H1: "Fale com a Yantra e realize seu próximo grande negócio."
    - "próximo grande negócio." em dourado
  - Subtítulo
- Direita: foto escritório
```

#### Conteúdo Principal (grid 2 colunas)
```
Coluna Esquerda — Canais de Atendimento:
- "CANAIS DE ATENDIMENTO" label
- Lista com ícone + label + valor:
  - MessageCircle: WHATSAPP — "Fale agora com um especialista" + número clicável
  - Phone: TELEFONE — "Atendimento seg-sex 8h–18h" + número
  - Mail: E-MAIL — endereço clicável
  - MapPin: ENDEREÇO — endereço completo
- Separadores entre cada item

Coluna Direita — Formulário:
- "ENVIE SUA MENSAGEM" label
- Subtítulo
- Grid 2 colunas:
  - Nome completo* | E-mail*
  - Telefone/WhatsApp* | Assunto* (select)
- Mensagem* (textarea, 5 linhas)
- Checkbox: "Li e aceito a Política de Privacidade"
- Botão ENVIAR MENSAGEM: w-full, bg-verde-profundo, ícone Send
- Validação client-side com estados de erro inline
- Loading state no botão
- Toast de sucesso/erro após envio
```

#### Mapa + Sede (grid 2 colunas)
```
Esquerda: Google Maps iframe (endereço da empresa)
Direita:
- "VISITE NOSSA SEDE" + subtítulo + botão "COMO CHEGAR" (link Google Maps)
- 3 diferenciais com ícones:
  - Atendimento Personalizado
  - Segurança e Transparência
  - Imóveis Selecionados
```

---

## SANITY CMS

### Schema: imovel.ts

```typescript
export default {
  name: "imovel",
  title: "Imóvel",
  type: "document",
  fields: [
    { name: "codigo", title: "Código", type: "string", readOnly: true },
    { name: "titulo", title: "Título", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "titulo" } },
    { name: "tipoNegocio", title: "Tipo de Negócio", type: "string",
      options: { list: ["venda", "locacao"] } },
    { name: "tipoImovel", title: "Tipo de Imóvel", type: "string",
      options: { list: ["casa", "apartamento", "terreno", "comercial"] } },
    { name: "valor", title: "Valor (R$)", type: "number" },
    { name: "condominio", title: "Valor Condomínio", type: "number" },
    { name: "iptu", title: "Valor IPTU/mês", type: "number" },
    { name: "cidade", title: "Cidade", type: "string" },
    { name: "bairro", title: "Bairro", type: "string" },
    { name: "endereco", title: "Endereço (privado)", type: "string" },
    { name: "cep", title: "CEP", type: "string" },
    { name: "latitude", title: "Latitude", type: "number" },
    { name: "longitude", title: "Longitude", type: "number" },
    { name: "descricao", title: "Descrição", type: "text" },
    { name: "quartos", title: "Quartos", type: "number" },
    { name: "suites", title: "Suítes", type: "number" },
    { name: "banheiros", title: "Banheiros", type: "number" },
    { name: "vagas", title: "Vagas de Garagem", type: "number" },
    { name: "areaPrivativa", title: "Área Privativa (m²)", type: "number" },
    { name: "areaTotal", title: "Área Total (m²)", type: "number" },
    { name: "andar", title: "Andar", type: "number" },
    { name: "anoConstrucao", title: "Ano de Construção", type: "number" },
    { name: "caracteristicas", title: "Características", type: "array",
      of: [{ type: "string" }] },
    { name: "comodidades", title: "Comodidades do Condomínio", type: "array",
      of: [{ type: "string" }] },
    { name: "fotos", title: "Fotos", type: "array",
      of: [{ type: "image", options: { hotspot: true } }] },
    { name: "destaque", title: "Imóvel em Destaque?", type: "boolean" },
    { name: "status", title: "Status", type: "string",
      options: { list: ["ativo", "inativo"] }, initialValue: "ativo" },
  ],
};
```

### Queries GROQ principais

```groq
// Imóveis em destaque (Home)
*[_type == "imovel" && status == "ativo" && destaque == true] | order(_createdAt desc) [0...6]

// Listagem com filtros
*[_type == "imovel" && status == "ativo" && tipoNegocio == $tipo
  && ($cidade == "" || cidade == $cidade)
  && ($bairro == "" || bairro == $bairro)
  && valor >= $valorMin && valor <= $valorMax
] | order(destaque desc, _createdAt desc) [$offset...$offset+$limit]

// Detalhe por slug
*[_type == "imovel" && slug.current == $slug && status == "ativo"][0]
```

---

## INTEGRAÇÕES

### WhatsApp (lib/whatsapp.ts)

```typescript
const NUMERO_WHATSAPP = "5519999999999"; // Substituir pelo número real

export function gerarLinkWhatsApp(codigoImovel?: string): string {
  const mensagem = codigoImovel
    ? `Olá, tenho interesse no imóvel código ${codigoImovel} e gostaria de mais informações.`
    : `Olá! Gostaria de falar com um especialista da Yantra Negócios Imobiliários.`;
  
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
```

### Formatadores (lib/formatters.ts)

```typescript
export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(valor);
}

export function formatarArea(valor: number): string {
  return `${valor}m²`;
}

export function gerarCodigoImovel(): string {
  return `YAN-${Math.floor(Math.random() * 9000 + 1000)}`;
}
```

### Google Maps
```
Na página Contato e Detalhe do Imóvel:
- Usar iframe do Google Maps Embed API
- Ou integrar @react-google-maps/api para mapa interativo com pin customizado (símbolo Yantra dourado como marker)
- Variável de ambiente: NEXT_PUBLIC_GOOGLE_MAPS_KEY
```

---

## BOTÃO WHATSAPP FLUTUANTE

```
Componente: WhatsAppButton.tsx
- Posição: fixed bottom-6 right-6, z-50
- Aparência: círculo 56px, bg-[#25D366] (verde WhatsApp), sombra pronunciada
- Ícone: MessageCircle (Lucide) ou SVG oficial WhatsApp, branco
- Hover: scale-110, sombra maior
- Tooltip: "Falar com especialista" ao hover
- Aparece após 2s de scroll ou imediatamente
- NÃO mostrar na versão desktop quando o header CTA já está visível (opcional)
```

---

## DADOS MOCK (para desenvolvimento inicial)

```typescript
// Usar antes de conectar o Sanity
export const imoveisMock = [
  {
    _id: "1", codigo: "YAN-0458", slug: { current: "apartamento-jardim-america" },
    titulo: "Apartamento no Jardim América", tipoNegocio: "venda", tipoImovel: "apartamento",
    valor: 850000, cidade: "São Paulo", bairro: "Jardim América", quartos: 3, suites: 1,
    banheiros: 2, vagas: 2, areaPrivativa: 120, andar: 8, anoConstrucao: 2018,
    destaque: true, status: "ativo",
    descricao: "Apartamento moderno e sofisticado no coração do Jardim América...",
    caracteristicas: ["Sala para 2 ambientes com varanda", "Cozinha americana com armários planejados", "Área de serviço", "Ar-condicionado na sala e suíte", "Aquecimento a gás"],
    comodidades: ["Portaria 24h", "Salão de festas", "Elevador", "Academia", "Piscina", "Playground"],
    fotos: [{ asset: { url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800" }}],
  },
  // ... mais 7-8 imóveis mock para venda e locação
];
```

---

## ACESSIBILIDADE E SEO

```
- Metadata dinâmica por página (Next.js Metadata API)
- Alt text em todas as imagens (título do imóvel)
- Aria-labels nos botões de ação (WhatsApp, galeria)
- Semântica HTML5 (main, section, article, nav, footer)
- Cores com contraste mínimo 4.5:1 (branco sobre verde-profundo ✓)
- Focus rings visíveis (outline dourado)
- Imagens: loading="lazy" exceto hero (priority)
- next/image para otimização automática WebP
- Open Graph tags para compartilhamento social
```

---

## RESPONSIVIDADE

```
Breakpoints Tailwind:
- sm:  640px  — ajustes pequenos
- md:  768px  — tablet
- lg:  1024px — desktop
- xl:  1280px — desktop largo
- 2xl: 1536px — telas grandes (max-width container)

Regras gerais:
- Header mobile: hamburger + drawer/menu lateral
- Hero: texto ocupa largura total (sem split) no mobile
- Grid imóveis: 1 col mobile, 2 col tablet, 4 col desktop
- Filter panel: scroll horizontal no mobile
- Galeria detalhe: carrossel simples no mobile
- Footer: stack vertical no mobile
```

---

## ORDEM DE IMPLEMENTAÇÃO

### Fase 1 — Fundação (Sessão 1)
1. Setup Next.js + TypeScript + Tailwind com tokens de design
2. Instalar dependências: lucide-react, next-sanity, @sanity/image-url
3. Configurar tailwind.config.ts com cores e fontes Yantra
4. Implementar layout raiz: Header + Footer
5. Criar componentes UI base: SectionHeader, Badge, CTABanner, WhatsAppButton
6. Criar dados mock (imoveisMock)

### Fase 2 — Home (Sessão 2)
7. HeroSlider com 3 slides
8. SearchBar com 5 filtros
9. QuickCategories
10. FeaturedProperties com PropertyCard
11. Conectar dados mock na Home

### Fase 3 — Listagens (Sessão 3)
12. PropertyCard completo
13. FilterPanel (1 linha e 2 linhas)
14. Página Comprar com filtros funcionais (client-side nos mocks)
15. Página Alugar (reusar componentes)
16. Pagination

### Fase 4 — Detalhe do Imóvel (Sessão 4)
17. PropertyGallery (galeria com thumbnails + modal)
18. PropertySpecs
19. Seção Descrição com collapse
20. Integração Google Maps (iframe)
21. Página completa de detalhe

### Fase 5 — Institucional (Sessão 5)
22. Página Sobre Nós completa (pilares, stats, equipe, CTA)
23. Página Contato (canais, formulário com validação, mapa)

### Fase 6 — Sanity CMS (Sessão 6)
24. Setup Sanity v3 + schema imovel.ts
25. Configurar variáveis de ambiente (.env.local)
26. Substituir mocks por queries GROQ reais
27. Testar CRUD no Sanity Studio

### Fase 7 — Polimento e Deploy (Sessão 7)
28. Animações: stagger reveal no scroll (Intersection Observer)
29. SEO: metadata dinâmica por página
30. Testes de responsividade
31. Otimização de imagens (next/image em tudo)
32. Deploy Vercel + variáveis de ambiente
33. Sanity deploy (sanity deploy)

---

## OBSERVAÇÕES FINAIS

- **Número WhatsApp real**: substituir `5519999999999` pelo número definitivo da Yantra antes do deploy
- **Logos**: os arquivos `logo-light.jpeg` (fundo claro) e `logo-dark.jpeg` (fundo escuro) estão disponíveis — converter para PNG com fundo transparente se possível
- **Fotos de imóveis**: usar Unsplash (unsplash.com/s/photos/luxury-house) como placeholder até ter fotos reais
- **Google Maps API Key**: gerar em console.cloud.google.com e adicionar ao `.env.local`
- **Formulário de Contato**: enviar via Resend (API de email) ou EmailJS no frontend — implementar função serverless em `app/api/contato/route.ts`
- **Imóveis Comerciais**: criar página separada em `/imoveis-comerciais` usando o mesmo padrão de listagem com `tipoImovel == "comercial"`

---

*Prompt gerado com base no documento de requisitos Yantra v1.0, logos, paleta de cores e protótipos de todas as 5 páginas.*
*Desenvolvido por Rhom — Junho/2026*
