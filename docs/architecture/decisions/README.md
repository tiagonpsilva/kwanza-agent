# Architecture Decision Records (ADRs)

Este diretório contém todas as Architecture Decision Records do projeto Kwanza Agent.

## O que são ADRs?

ADRs (Architecture Decision Records) são documentos que capturam decisões arquiteturais importantes, incluindo o contexto, as opções consideradas e as consequências da decisão tomada.

## Estrutura de um ADR

Cada ADR segue o seguinte formato:

```
# ADR-XXXX: Título da Decisão

## Status
[Proposta | Aceita | Rejeitada | Substituída por ADR-YYYY]

## Contexto
Descrição do contexto que motivou a decisão.

## Decisão
A decisão que foi tomada.

## Consequências
Consequências positivas e negativas da decisão.

## Alternativas Consideradas
Outras opções que foram avaliadas.

## Links
- Linear Task: [ID da task]
- Documentação relacionada
- PRs relacionados
```

## Lista de ADRs

| ADR | Título | Status | Data |
|-----|--------|--------|------|
| ADR-0001 | Template para futuras ADRs | 📝 Rascunho | 2025-06-19 |

## Convenções

- **Numeração**: Sequencial, começando por ADR-0001
- **Título**: Claro e conciso, em português
- **Arquivo**: `ADR-XXXX-titulo-kebab-case.md`
- **Status**: Usar emojis para facilitar visualização
- **Imutabilidade**: ADRs aceitas não devem ser editadas

## Status Possíveis

- 📝 **Rascunho**: Em elaboração
- 🔄 **Em Revisão**: Aguardando aprovação
- ✅ **Aceita**: Decisão aprovada e implementada
- ❌ **Rejeitada**: Decisão rejeitada
- 🔄 **Substituída**: Substituída por ADR mais recente

## Como Criar uma Nova ADR

1. Determine o próximo número sequencial
2. Copie o template de `../templates/adr-template.md`
3. Renomeie para `ADR-XXXX-titulo-da-decisao.md`
4. Preencha todas as seções
5. Adicione à tabela acima
6. Crie PR para revisão
7. Vincule à task correspondente no Linear

## Referências

- [ADR GitHub Template](https://github.com/joelparkerhenderson/architecture-decision-record)
- [Thoughtworks ADR](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)