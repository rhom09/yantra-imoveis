---
description: Salva o estado atual do projeto no PROGRESS.md antes de encerrar a sessão
---

Faça um checkpoint do estado atual do projeto Yantra para garantir continuidade na próxima sessão.

Execute as seguintes etapas:

## 1. Levante o que foi feito nesta sessão
Verifique os arquivos criados/modificados nesta sessão e liste tudo que foi concluído.

## 2. Atualize o PROGRESS.md

Abra o `PROGRESS.md` e faça as seguintes atualizações:

- **Status Atual:** atualize a fase em andamento e a data de hoje
- **Próxima ação:** escreva com precisão o que deve ser feito no início da próxima sessão (seja específico — ex: "Criar o componente PropertyGallery.tsx com thumbnails clicáveis")
- **Checklist:** marque com [x] todos os itens concluídos nesta sessão
- **Decisões Tomadas:** registre qualquer decisão arquitetural tomada hoje
- **Problemas Conhecidos:** registre qualquer bug ou pendência identificada
- **Notas da Sessão:** resumo livre do que foi feito

## 3. Verifique inconsistências
- Há algum arquivo criado que não segue o padrão do CLAUDE.md?
- Há alguma cor hex inline que deveria ser classe Tailwind?
- Há algum `<img>` que deveria ser `next/image`?

Se encontrar, liste para corrigir na próxima sessão (adicione em Problemas Conhecidos).

## 4. Confirme ao usuário

Ao final, mostre um resumo no formato:

```
✅ Checkpoint salvo

Concluído hoje:
- [lista do que foi feito]

Próxima sessão começa em:
- [próxima ação específica]

Problemas para resolver:
- [lista ou "nenhum"]
```
