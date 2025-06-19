# ADR-XXXX: [Título da Decisão]

## Status
📝 Rascunho | 🔄 Em Revisão | ✅ Aceita | ❌ Rejeitada | 🔄 Substituída por ADR-YYYY

## Contexto
Descreva o contexto que motivou esta decisão arquitetural, respondendo ao questionário do arquiteto:

### Contexto e Motivação
- **Qual problema estamos resolvendo?**
- **Por que agora? Qual é a urgência?**
- **Quais são as limitações atuais?**
- **Que métricas demonstram o problema?**

### Ambiente Atual
- Descrição do estado atual da arquitetura
- Limitações e restrições existentes
- Forças técnicas e de negócio em jogo

## Decisão
Descreva claramente a decisão que foi tomada. Seja específico sobre:
- O que será implementado?
- Como será implementado?
- Quais tecnologias/ferramentas serão utilizadas?
- Quais padrões serão seguidos?

## Consequências

### Positivas
- Liste os benefícios esperados desta decisão
- Impactos positivos na arquitetura
- Melhorias de performance, manutenibilidade, etc.

### Negativas
- Liste os trade-offs e limitações
- Possíveis problemas futuros
- Complexidades introduzidas

### Neutras
- Mudanças que são nem positivas nem negativas
- Aspectos que requerem monitoramento

## Análise de Alternativas

### Processo de Avaliação
Responder às perguntas do questionário arquitetural:

#### Análise de Soluções
- **Quais alternativas foram consideradas?**
- **Qual é o critério de decisão principal?**
- **Quais são os trade-offs de cada opção?**
- **Como isso afeta a performance?**
- **Qual é o impacto na manutenibilidade?**

#### Implementação e Riscos
- **Qual é o esforço de implementação?**
- **Quais são os riscos técnicos?**
- **Como reverter se der errado?**
- **Quais dependências são criadas?**
- **Como isso afeta outros sistemas?**

### Alternativas Avaliadas

### Alternativa 1: [Nome]
- **Descrição**: Breve descrição da alternativa
- **Prós**: Benefícios desta alternativa
- **Contras**: Limitações desta alternativa
- **Critérios de Avaliação**: Performance, Manutenibilidade, Segurança, Custo
- **Por que foi rejeitada**: Razão específica

### Alternativa 2: [Nome]
- **Descrição**: Breve descrição da alternativa
- **Prós**: Benefícios desta alternativa
- **Contras**: Limitações desta alternativa
- **Critérios de Avaliação**: Performance, Manutenibilidade, Segurança, Custo
- **Por que foi rejeitada**: Razão específica

## Critérios de Decisão

| Critério | Peso | Alt 1 | Alt 2 | Escolhida | Justificativa |
|----------|------|-------|-------|-----------|---------------|
| Performance | Alto | 7/10 | 8/10 | 9/10 | [Explicação] |
| Manutenibilidade | Alto | 6/10 | 9/10 | 8/10 | [Explicação] |
| Segurança | Alto | 8/10 | 7/10 | 9/10 | [Explicação] |
| Custo | Médio | 9/10 | 6/10 | 7/10 | [Explicação] |

## Detalhes de Implementação
Forneça detalhes específicos sobre como a decisão será implementada:
- Mudanças na arquitetura
- Novos componentes ou serviços
- Mudanças em componentes existentes
- Configurações necessárias

## Operação e Monitoramento

### Métricas de Sucesso
Responder às perguntas operacionais:

#### Monitoramento
- **Como monitorar o sucesso?**
- **Quais métricas de performance?**
- **Como debuggar problemas?**
- **Qual é o impacto operacional?**

#### Conhecimento da Equipe
- **A equipe tem conhecimento necessário?**
- **Qual é o impacto no onboarding?**
- **Documentação necessária?**
- **Treinamento requerido?**

### Critérios de Sucesso
- Métricas específicas a serem monitoradas
- KPIs de performance e qualidade
- Sinais de que a decisão pode precisar ser revisitada

### Plano de Monitoramento
| Métrica | Baseline | Target | Frequência | Responsável |
|---------|----------|--------|------------|-------------|
| [Nome da métrica] | [Valor atual] | [Valor esperado] | [Daily/Weekly] | [Pessoa/Team] |

## Riscos e Mitigações
| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| [Descrição do risco] | Alta/Média/Baixa | Alto/Médio/Baixo | [Como mitigar] |

## Cronograma
- **Data da Decisão**: YYYY-MM-DD
- **Data de Implementação Planejada**: YYYY-MM-DD
- **Data de Revisão**: YYYY-MM-DD (opcional)

## Links e Referências
- **Linear Task**: [Link para task do Linear]
- **Pull Requests**: [Links para PRs relacionados]
- **Documentação relacionada**: [Links para docs]
- **Referências externas**: [Articles, RFCs, etc.]
- **Diagramas**: [Links para diagramas relacionados]

## Participantes da Decisão
- **Autor**: [Nome do autor da ADR]
- **Reviewers**: [Lista de revisores]
- **Stakeholders**: [Pessoas impactadas pela decisão]
- **Data de Aprovação**: YYYY-MM-DD

---

*Esta ADR segue o template padrão do projeto Kwanza Agent. Para mais informações sobre ADRs, consulte [docs/architecture/decisions/README.md](../decisions/README.md).*