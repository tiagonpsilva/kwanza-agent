# Definition of Done (DoD)

## Visão Geral

O Definition of Done (DoD) estabelece os critérios obrigatórios que devem ser atendidos para que uma tarefa seja considerada completamente finalizada. Estes critérios garantem qualidade, consistência e confiabilidade nas entregas.

## DoD por Tipo de Tarefa

### User Stories (US)

#### ✅ Desenvolvimento
- [ ] **Código implementado** conforme especificação da User Story
- [ ] **Code review** realizado e aprovado por pelo menos 1 desenvolvedor
- [ ] **Padrões de código** seguidos (linting, formatação, convenções)
- [ ] **Commits** seguem Conventional Commits
- [ ] **Branch** criada seguindo padrão `feature/linear-task-id-description`

#### ✅ Testes
- [ ] **Testes unitários** criados e passando (cobertura mínima 80%)
- [ ] **Testes de integração** criados e passando
- [ ] **Testes end-to-end** criados e passando (se aplicável)
- [ ] **Todos os testes** executados com sucesso no pipeline

#### ✅ Qualidade
- [ ] **Critérios de aceite** 100% validados
- [ ] **Funcionalidade testada** manualmente pelo desenvolvedor
- [ ] **Teste de usabilidade** realizado (se componente de UI)
- [ ] **Acessibilidade** validada (WCAG básico para componentes UI)

#### ✅ Documentação
- [ ] **Documentação técnica** atualizada (se necessário)
- [ ] **Storybook** atualizado (para componentes React)
- [ ] **README** atualizado (se mudanças de setup/uso)

#### ✅ Deploy e Validação
- [ ] **Deploy** realizado em ambiente de teste
- [ ] **Funcionalidade validada** em ambiente de teste
- [ ] **Product Owner** aprovou a implementação
- [ ] **Task no Linear** atualizada com status "Done"

#### ✅ Performance e Monitoramento
- [ ] **Performance** dentro dos padrões estabelecidos
- [ ] **Logs** implementados adequadamente
- [ ] **Métricas** de monitoramento implementadas (se aplicável)

---

### Enabler Stories (EN)

#### ✅ Implementação Técnica
- [ ] **Implementação completa** conforme especificação técnica
- [ ] **Arquitetura** implementada conforme diagramas
- [ ] **APIs/Endpoints** implementados e documentados
- [ ] **Schemas de dados** implementados e validados

#### ✅ Testes Técnicos
- [ ] **Testes unitários** para componentes técnicos
- [ ] **Testes de integração** entre sistemas
- [ ] **Testes de performance** executados e aprovados
- [ ] **Testes de segurança** executados (se aplicável)

#### ✅ Documentação Técnica
- [ ] **Documentação de arquitetura** atualizada
- [ ] **Documentação de APIs** atualizada
- [ ] **Diagramas** atualizados (C4, sequência, etc.)
- [ ] **ADR** criado (se decisão arquitetural)

#### ✅ Infraestrutura e Deploy
- [ ] **Deploy** realizado em ambiente de teste
- [ ] **Configurações** aplicadas corretamente
- [ ] **Monitoramento** implementado
- [ ] **Alertas** configurados (se aplicável)

#### ✅ Aprovação Técnica
- [ ] **Tech Lead** ou **Arquiteto** aprovou implementação
- [ ] **Code review** técnico realizado
- [ ] **Métricas de sucesso** validadas
- [ ] **Handover** para equipe de operações (se aplicável)

---

### Tasks Gerais

#### ✅ Documentação
- [ ] **Objetivo da task** foi atendido completamente
- [ ] **Documentação** criada/atualizada conforme necessário
- [ ] **Templates** seguidos (se aplicável)
- [ ] **Revisão** realizada por stakeholder relevante

#### ✅ Processo
- [ ] **Task no Linear** atualizada com progresso
- [ ] **Time tracking** registrado em `management/time-tracking.md`
- [ ] **Commits** realizados no Git
- [ ] **Pull Request** criado e aprovado (se código)

---

## Critérios Específicos por Contexto

### Frontend (React/TypeScript)
- [ ] **Componentes** seguem padrões do design system
- [ ] **TypeScript** sem erros ou warnings
- [ ] **Responsividade** testada (mobile-first)
- [ ] **Temas** (light/dark) funcionando corretamente
- [ ] **Storybook** stories criadas/atualizadas

### Backend (Python/FastAPI)
- [ ] **APIs** seguem Richardson Maturity Model
- [ ] **Pydantic** schemas validados
- [ ] **Pytest** testes criados e passando
- [ ] **Poetry** dependências atualizadas
- [ ] **Logging** implementado seguindo RFC 3164/5424

### Banco de Dados
- [ ] **Migrations** criadas e testadas
- [ ] **Schemas** documentados
- [ ] **Performance** de queries validada
- [ ] **Backup/Recovery** considerado (para mudanças críticas)

### AI/LLM
- [ ] **Prompts** testados e validados
- [ ] **Embeddings** funcionando corretamente
- [ ] **Performance** dentro dos limites estabelecidos
- [ ] **Custos** de tokens monitorados

## Processo de Validação

### Checklist de Validação
1. **Auto-validação** pelo desenvolvedor
2. **Code review** por par
3. **Testes automatizados** passando
4. **Deploy** em ambiente de teste
5. **Validação funcional** pelo stakeholder
6. **Aprovação final** do responsável

### Critérios de Bloqueio
❌ **Task NÃO pode ser considerada Done se:**
- Testes falhando
- Code review pendente
- Critérios de aceite não validados
- Deploy em teste falhando
- Documentação obrigatória ausente
- Aprovação do stakeholder pendente

### Responsabilidades
- **Desenvolvedor**: Auto-validação e checklist técnico
- **Code Reviewer**: Validação de qualidade de código
- **Product Owner**: Validação de critérios de aceite (US)
- **Tech Lead**: Validação técnica (EN)
- **QA**: Validação de testes (se aplicável)

---

## Métricas de Qualidade

### Metas do Projeto
- **Cobertura de Testes**: Mínimo 80% para código crítico
- **Code Review**: 100% do código revisado
- **Performance**: APIs < 200ms para operações críticas
- **Bugs em Produção**: < 2% das entregas
- **Time to Market**: Cycles < 2 semanas

### Monitoramento
- **Dashboard** de métricas de qualidade
- **Relatórios semanais** de DoD compliance
- **Retrospectivas** para melhoria contínua do DoD

---

**Criado em**: 2025-06-19  
**Última atualização**: 2025-06-19  
**Versão**: 1.0