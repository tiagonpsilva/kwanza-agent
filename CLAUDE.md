# Kwanza Agent

Primeiro AI Agent que servirá como template para outros projetos de agentes. O objetivo do agente será listar as principais notícias públicas de tecnologia, permitindo que o usuário as favorite e/ou classifique.

## 🚨 REGRAS CRÍTICAS E INVIOLÁVEIS - LEIA PRIMEIRO 🚨

### ❌ PROIBIÇÃO ABSOLUTA: MARCAR TASKS COMO "DONE" SEM APROVAÇÃO ❌

**🛑 REGRA NÚMERO 1 (INVIOLÁVEL): SOMENTE O PRODUCT OWNER (TIAGO) PODE APROVAR TASKS 🛑**

- ❌ **NUNCA marque uma task como "Done" sem aprovação explícita**
- ✅ **Máximo permitido: "In Review" (aguardando aprovação)**  
- ⚠️ **Violação desta regra = ERRO CRÍTICO**
- 📋 **Sempre documente TUDO na task antes de mover para "In Review"**

**Esta regra está repetida detalhadamente na seção "Processo de Validação de Tasks" abaixo.**

## Funcionalidades

- Landing Page + Login com Celular e Google
- Interface Conversacional com Sugestões de Ações
  - Arte de apresentação
  - Listar 10 notícias do dia / semana / mês
  - Favoritar notícia
  - Gerenciar noticias favoritadas
  - Gerenciar classificações
- Experiencia de menu similar a uma aplicação CLI

## UX

- Interface Responsiva - Mobile First
- Light e Dark Theme
- Rodapé com "Desenvolvido por Tiago Pinto (<https://tiagopinto.io>)"
- Interface Conversacional (modelo ChatGPT)
- Base de Conhecimento (Fluxo RAG + MCP)

## Arquitetura Macro

- Front-end
- Agent (Back-end App)
- LLM (OpenAI/Anthropic APIs + Ollama local)
- MCP - Model Context Protocol
  - PostgreSQL (dados relacionais)
  - MongoDB (classificações de notícias)
- Fluxo RAG - ChromaDB (Vector Database)

## Tecnologia

### Front-end (Prioridade)

- React.js + TypeScript
- TailwindCSS + Shadcn/UI
- Storybook (documentação de componentes)
- React Testing Library + Cypress
- PWA (Progressive Web App)

### Back-end

- Python / FastAPI / Pydantic / Pytest / Poetry

### IA

- Langchain - framework de desenvolvimento
- ChromaDB - Vector Database (RAG)
- Redis - Short-term memory
- Ollama - Modelos locais
- OpenAI/Anthropic - APIs externas

### Bancos de Dados

- PostgreSQL - Dados relacionais (usuários, sessões, configurações)
- MongoDB - Classificações de notícias (favoritos, ratings, categorias)
- ChromaDB - Embeddings para RAG
- Redis - Cache e sessões

## Não-Funcionais

### Configurações

- Escolha de LLM (APIs externas ou Ollama local)
- Apontamento de tokens de acesso às APIs
- Configuração de modelos Ollama disponíveis
- Parâmetros de embedding para ChromaDB

### Painel de Operações

- FinOPS (Gestão de Tokens, Limites)
- Gestão de Performance

## Melhores Práticas Engenharia de Software

- Twelve-Factor App
- Git-flow
- Git Conventional Commits
- Linter
- OWASP
- Padrão de Logging RFC 3164 e RFC 5424 (Syslog)
- REST API seguindo o Richardson Maturity Model

## Boas Práticas de Desenvolvimento de Agentes

1. **Choose the Right Model** - Escolha o modelo de linguagem mais adequado para cada tarefa específica
2. **Make Models Interchangeable** - Permita que modelos sejam facilmente trocados para maior flexibilidade
3. **Curate Your Tools** - Selecione e gerencie cuidadosamente as ferramentas e recursos disponíveis
4. **Expose Actions as APIs** - Disponibilize as capacidades do agente como APIs para integração
5. **Orchestrate with Workflows** - Use fluxos de trabalho para coordenar modelos, ferramentas e dados
6. **Maintain Short-Term Memory** - Preserve o contexto da interação atual
7. **Extract Long-Term Memory** - Utilize mecanismos para armazenar e recuperar memórias de longo prazo
8. **Organize Knowledge at Scale** - Empregue grafos de conhecimento para escalar o contexto
9. **Authenticate and Authorize** - Implemente autenticação e autorização robustas
10. **Log Inference** - Registre logs detalhados das inferências para auditoria e análise
11. **Trace Execution** - Monitore e rastreie a execução para identificar gargalos
12. **Evaluate Continuously** - Avalie continuamente o comportamento do agente

## Boas Práticas de Arquitetura

- **Architecture Haiku**: Mantido em `docs/architecture/README.md` - visão poética da solução
- **ADR (Architecture Decision Records)**: Processo estruturado de decisões arquiteturais
- **C4 Model**: Diagramas PlantUML em `docs/architecture/views-diagrams/`
- **Especificações Técnicas**: APIs, schemas em `docs/architecture/specifications/`
- **Padrões**: Documentar padrões em `docs/architecture/patterns/`

### Processo de ADR (Architecture Decision Records)

Para **toda decisão arquitetural ou tecnológica**, seguir o processo:

#### 1. **Questionário do Arquiteto** 🏗️
Antes de qualquer decisão, responder às **14 perguntas essenciais**:

**💰 Custo e Viabilidade:**
- Qual é o custo de implementação vs benefício?
- Há alternativas mais simples que resolvem 80% do problema?

**⚡ Performance e Escalabilidade:**
- Como isso afeta a latência e throughput?
- A solução escala com o crescimento esperado?

**🔧 Complexidade e Manutenibilidade:**
- Qual é a complexidade adicionada ao sistema?
- A equipe consegue manter essa solução?

**🏆 Qualidade e Confiabilidade:**
- Como garantir a qualidade da solução?
- Quais são os pontos de falha críticos?

**🔒 Segurança e Proteção:**
- Quais são os riscos de segurança introduzidos?
- Como proteger dados sensíveis e privacidade dos usuários?

**👤 Usabilidade e Experiência:**
- Como isso impacta a experiência do usuário?
- A solução é intuitiva e acessível?

**🚀 Implementação e Riscos:**
- Qual é o esforço real de implementação?
- Como reverter se não funcionar como esperado?

#### 2. **Análise Colaborativa**
- Discussão das respostas com stakeholders
- Avaliação de critérios: **Custo, Escalabilidade, Latência, Complexidade, Qualidade, Segurança, Usabilidade**
- Matriz de decisão simplificada (1-5 pontos por critério)

#### 3. **Documentação ADR**
- Usar template em `docs/templates/adr-template.md`
- Numeração sequencial (ADR-0001, ADR-0002...)
- Status: 📝 Rascunho → 🔄 Em Revisão → ✅ Aceita

#### 4. **Implementação e Monitoramento**
- Vincular à task do Linear
- Definir métricas de sucesso
- Acompanhar impactos pós-implementação

## Boas Práticas de Qualidade

- **Documentação de Testes**: Criar diretório específico para documentação dos casos de teste
- **Cypress**: Usar Cypress para execução dos casos de testes end-to-end
- **Cobertura de Testes**: Manter cobertura mínima de 80% para código crítico
- **Testes Automatizados**: Integrar testes no pipeline CI/CD

## Abordagem de Desenvolvimento

### Frontend-First Strategy

- **UX/UI Primeiro**: Validar experiência do usuário antes da implementação backend
- **Design System**: Criar sistema de componentes reutilizáveis desde o início
- **Prototipagem**: Desenvolver protótipos navegáveis para validação
- **Testes de Usabilidade**: Validar com usuários reais antes de prosseguir
- **Mock Backend**: Usar dados mock para desenvolvimento frontend independente

## Boas Práticas de Gestão

### Templates de Gestão

- **User Stories**: Template estruturado em `docs/templates/user-story-template.md`
  - Critérios de aceite em formato Gherkin (Given/When/Then)
  - Recursos visuais obrigatórios (mockups, wireframes, protótipos)
  - Definition of Ready (DoR) e Definition of Done (DoD)
  - Tasks técnicas detalhadas
  - Testes de usabilidade

- **Enabler Stories**: Template estruturado em `docs/templates/enabler-story-template.md`
  - Especificação técnica completa
  - Diagramas de sequência obrigatórios (PlantUML)
  - Arquitetura e design detalhados
  - Critérios de aceite técnicos
  - Riscos e mitigações
  - Métricas de sucesso

- **Definition of Done (DoD)**: Critérios obrigatórios em `docs/templates/definition-of-done.md`
  - DoD específico para User Stories
  - DoD específico para Enabler Stories
  - Critérios por contexto (Frontend, Backend, IA)
  - Processo de validação estruturado
  - Métricas de qualidade

### 🚨 PROCESSO DE VALIDAÇÃO DE TASKS - REGRAS OBRIGATÓRIAS

**🛑 REGRA CRÍTICA E INVIOLÁVEL: APROVAÇÃO OBRIGATÓRIA 🛑**

**❌ PROIBIDO ABSOLUTAMENTE: MARCAR QUALQUER TASK COMO "DONE" SEM APROVAÇÃO EXPLÍCITA ❌**

**✅ SOMENTE O PRODUCT OWNER (TIAGO) PODE APROVAR E MOVER TASKS PARA "DONE"**

**⚠️ ESTA É UMA REGRA INVIOLÁVEL - QUALQUER VIOLAÇÃO SERÁ CONSIDERADA ERRO CRÍTICO ⚠️**

#### Fluxo de Estados Obrigatório
1. **Backlog** → Planejada e priorizada
2. **In Progress** → Em desenvolvimento 
3. **In Review** → ⚠️ **PARADA OBRIGATÓRIA** - Aguardando aprovação
4. **Done** → ✅ Somente após aprovação explícita

#### Critérios para "In Review"
- **Definition of Done (DoD)** 100% atendida
- **Código implementado** e testado conforme especificação
- **Documentação atualizada** (se aplicável)
- **Commit realizado** com mensagem estruturada
- **Demo/evidência** preparada para apresentação
- **⚠️ CRÍTICO: Comentários detalhados** registrados na task do Linear incluindo:
  - ✅ **O que foi implementado** (lista detalhada de arquivos/funcionalidades)
  - 🧪 **Como validar/testar** (comandos específicos, passos de validação)
  - 📸 **Evidências** (screenshots, outputs de comandos, links)
  - 🔍 **Pontos de atenção** (configurações necessárias, dependências)

#### Critérios para "Done" (Somente após aprovação)

- **Aprovação explícita** do Product Owner
- **Validação funcional** confirmada
- **Qualidade aprovada** (code review, testes, documentação)
- **Integração validada** com outras partes do sistema

#### Responsabilidades

- **Claude/Desenvolvedor**:
  - Implementar até "In Review"
  - **Documentar TUDO nos comentários da task** (implementação + validação)
  - Aguardar aprovação
- **Product Owner (Tiago)**:
  - Revisar comentários detalhados da task
  - Executar validações propostas
  - **Solicitar mudanças** (se necessário) via comentários na task
  - Aprovar e mover para "Done"
- **Claude/Desenvolvedor** (durante review):
  - **Registrar TODAS as observações** do Product Owner como comentários na task
  - Implementar mudanças solicitadas
  - **Atualizar status da task** conforme feedback recebido
  - Aguardar nova aprovação após ajustes
- **Sugestões de próximas tasks**: Somente após aprovação de tasks em review

#### Processo de Feedback Durante Review

**Quando o Product Owner solicita mudanças:**

1. **📝 Registrar Observação**: Adicionar comentário na task com:
   ```
   ## 🔄 Feedback do Product Owner - [Data/Hora]
   
   ### 📋 Observações solicitadas:
   - [Observação 1 do PO]
   - [Observação 2 do PO]
   
   ### ✅ Ações implementadas:
   - [ ] [Ação corretiva 1]
   - [ ] [Ação corretiva 2]
   
   **Status:** 🔄 Implementando feedback
   ```

2. **🔧 Implementar Mudanças**: Aplicar correções solicitadas

3. **📸 Documentar Ajustes**: Atualizar comentário com evidências das correções

4. **🔄 Aguardar Nova Revisão**: Manter task em "In Review" até nova aprovação

**Objetivo:** Garantir rastreabilidade completa do processo de feedback e correções.

### Roadmap e Planejamento

- Roadmap View
- User Stories
- Enabler Stories

### Time Tracking

- **Log de Tempo**: Registrar todas as atividades em `management/time-tracking.md`
- **Formato Padronizado**: `[YYYY-MM-DD HH:MM] - [HH:MM] - [TYPE] - [DESCRIPTION] - [LINEAR_ID] - [STATUS]`
- **Tipos de Atividade**: UX, DEV, DOCS, ARCH, TEST, MEET, PLAN, DEBUG
- **Análise Semanal**: Usar `management/scripts/weekly-analysis.sh` para relatórios
- **Relatórios Detalhados**: Usar `management/scripts/time-report.py` para análises avançadas
- **Metas de Distribuição Frontend-First**: 40-50% UX/DEV Frontend, 20-30% DEV Backend, 15-20% DOCS, 10-15% TEST

## 🔗 Integração Git + Linear - Versionamento e Rastreabilidade

### 📋 **Vinculação Tasks ↔ Código**

**OBRIGATÓRIO: Toda modificação de código deve estar vinculada a uma task do Linear**

#### **1. Mensagens de Commit**

**Formato padrão obrigatório:**
```
<type>(linear-id): <description>

- <detailed change 1>
- <detailed change 2>

Linear-Task: <LINEAR_ID>
Co-authored-by: Claude <noreply@anthropic.com>
```

**Exemplos:**
```bash
feat(PRO-15): implement atomic design system

- Add Typography atoms (H1-H4, P, Small, Lead, Code)
- Add Icon system with Kwanza variants
- Add Logo component with size variants
- Create FormField molecules with validation
- Implement NewsCard components (full and compact)

Linear-Task: PRO-15
Co-authored-by: Claude <noreply@anthropic.com>
```

```bash
fix(PRO-22): resolve TypeScript navigation errors

- Fix navigateTo hook typing to accept string | RoutePath
- Remove unused imports in error pages
- Update breadcrumbs integration in templates

Linear-Task: PRO-22
Co-authored-by: Claude <noreply@anthropic.com>
```

#### **2. Types de Commit (Conventional Commits)**

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação (sem mudança funcional)
- **refactor**: Refatoração de código
- **test**: Adição/modificação de testes
- **chore**: Tarefas de manutenção
- **perf**: Melhorias de performance
- **ci**: Mudanças no CI/CD
- **build**: Mudanças no sistema de build

#### **3. Branch Naming Convention**

**Formato:** `<type>/<linear-id>-<description>`

**Exemplos:**
```bash
feature/PRO-15-atomic-design-system
feature/PRO-22-navigation-routing
fix/PRO-22-typescript-errors
docs/PRO-15-component-documentation
```

### 🚀 **Push Automático Após Aprovação**

**REGRA OBRIGATÓRIA: Toda task aprovada deve ser enviada para o repositório remoto**

#### **Processo de Push Pós-Aprovação:**

1. **Task aprovada pelo PO** → Movida para "Done"
2. **Commit final** com mensagem padronizada
3. **Push imediato** para branch remota
4. **Comentário na task** com link do commit

**Comandos automáticos após aprovação:**
```bash
# 1. Commit final (se houver mudanças pendentes)
git add .
git commit -m "feat(PRO-XX): finalize implementation

- Final adjustments and documentation
- Ready for integration

Linear-Task: PRO-XX
Co-authored-by: Claude <noreply@anthropic.com>"

# 2. Push para remote
git push origin feature/PRO-XX-description

# 3. Atualizar comentário na task com link do commit
```

#### **Comentário Automático na Task:**
```markdown
## ✅ TASK FINALIZADA E ENVIADA PARA REPOSITÓRIO

### 🔗 **Links de Rastreabilidade:**
- **Branch**: `feature/PRO-XX-description`
- **Commits**: [Ver histórico no GitHub](link-para-commits)
- **Últimas mudanças**: [Commit específico](link-commit)

### 📊 **Resumo Técnico:**
- **Arquivos modificados**: X arquivos
- **Linhas adicionadas**: +XXX
- **Linhas removidas**: -XX
- **Componentes criados**: X

**🔄 STATUS**: Código sincronizado com repositório remoto, pronto para integração
```

### 🏷️ **Semantic Versioning e Tags**

#### **Estratégia de Versionamento:**

**Formato:** `vMAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes (incompatibilidade com versão anterior)
- **MINOR**: Novas funcionalidades (compatível com versão anterior)  
- **PATCH**: Bug fixes (compatível com versão anterior)

#### **Processo de Tagging:**

**1. Preparação para Release:**
```bash
# Merge de feature branches para main
git checkout main
git merge feature/PRO-15-atomic-design-system
git merge feature/PRO-22-navigation-routing
```

**2. Criação de Tag:**
```bash
# Após merge de múltiplas features
git tag -a v0.1.0 -m "Release v0.1.0: Foundation Frontend Complete

Features implemented:
- PRO-15: Atomic Design System (components + templates)
- PRO-22: Navigation and Routing (React Router + breadcrumbs)

Breaking Changes: None
New Features: Complete frontend foundation
Bug Fixes: TypeScript errors, lint warnings

Linear-Tasks: PRO-15, PRO-22"

# Push da tag
git push origin v0.1.0
```

**3. Release Notes:**
```markdown
# Release v0.1.0 - Foundation Frontend Complete

## 🚀 New Features
- **PRO-15**: Complete Atomic Design System
  - 15+ reusable components (Atoms, Molecules, Organisms, Templates)
  - Functional wireframes for all main screens
- **PRO-22**: Navigation and Routing
  - React Router v6 with typed navigation
  - Dynamic breadcrumbs and error pages

## 🛠️ Technical Improvements
- TypeScript strict mode compliance
- Responsive design (mobile-first)
- Shadcn/UI integration
- Build optimization (458KB bundle)

## 📊 Metrics
- **Components**: 15+ created
- **Pages**: 7 functional pages
- **Bundle Size**: 458KB (142KB gzipped)
- **TypeScript**: 100% typed

## 🔗 Linear Tasks
- [PRO-15](link-linear): Sistema de design components
- [PRO-22](link-linear): Navegação e roteamento
```

#### **Estratégia de Releases:**

- **v0.x.x**: Development/Beta releases
- **v1.0.0**: First production release
- **v1.x.x**: Feature releases
- **v2.0.0**: Major architectural changes

#### **Critérios para Versões:**

**v0.1.0**: Foundation Frontend (PRO-10 → PRO-22)
**v0.2.0**: Core Features (Auth, API integration)
**v0.3.0**: Business Logic (News, Favorites, Classification)
**v1.0.0**: MVP Complete (All core features working)

### 🔄 **Workflow Completo Git + Linear**

#### **Fluxo por Task:**

1. **📋 Task criada no Linear** → Status "Backlog"
2. **🌿 Criar branch** → `feature/PRO-XX-description`
3. **⚙️ Desenvolver** → Commits com convenção padrão
4. **🔄 Task para "In Review"** → Documentar tudo na task
5. **✅ Aprovação do PO** → Task para "Done"
6. **🚀 Push automático** → Enviar para remote
7. **🔗 Atualizar task** → Link para commits no GitHub

#### **Fluxo de Release:**

1. **🎯 Milestone completado** (ex: Foundation Frontend)
2. **🔀 Merge branches** → Para main
3. **🏷️ Criar tag** → Semantic version
4. **📝 Release notes** → Documentar mudanças
5. **🚀 Deploy** → Ambiente de produção (futuro)

### 📊 **Rastreabilidade Completa**

**Cada linha de código deve ser rastreável até:**
- ✅ **Task do Linear** (WHY)
- ✅ **Commit específico** (WHAT)
- ✅ **Developer** (WHO)
- ✅ **Timestamp** (WHEN)
- ✅ **Pull Request** (HOW - futuro)

**Benefícios:**
- **Auditoria completa** de mudanças
- **Rollback preciso** se necessário
- **Documentação automática** via commits
- **Planejamento baseado** em dados históricos

## Estrutura do Projeto

```text
kwanza-agent/
├── .claude/                    # Configurações do Claude Code
├── docs/                       # Documentação técnica
│   ├── README.md              # Índice da documentação
│   ├── architecture/          # Documentação de arquitetura
│   │   ├── decisions/         # ADRs (Architecture Decision Records)
│   │   ├── views-diagrams/    # C4 Model, UML (PlantUML)
│   │   ├── specifications/    # APIs, schemas, integrações
│   │   └── patterns/          # Padrões de desenvolvimento
│   └── templates/             # Templates para documentação
│       ├── adr-template.md    # Template para ADRs
│       ├── user-story-template.md      # Template para User Stories
│       ├── enabler-story-template.md   # Template para Enabler Stories
│       └── definition-of-done.md       # Definition of Done
├── management/                 # Documentação de gestão
│   ├── roadmap.md             # Roadmap do projeto
│   ├── time-tracking.md       # Log de tempo de desenvolvimento
│   ├── ai-cost-tracking.md    # Log de custos de desenvolvimento com IA
│   ├── cost-metrics.md        # Métricas e análises de performance/ROI
│   └── scripts/               # Scripts de análise
│       ├── weekly-analysis.sh # Análise semanal de tempo
│       ├── time-report.py     # Relatórios detalhados de tempo
│       ├── cost-tracker.sh    # Interface interativa para tracking de custos
│       └── cost-analysis.py   # Análise detalhada de custos e ROI
└── CLAUDE.md                  # Este arquivo
```

## Comandos de Desenvolvimento

- `python -m fastapi dev` - Iniciar desenvolvimento do backend
- `npm run dev` - Iniciar desenvolvimento do frontend  
- `npm run build` - Build de produção
- `npm run test` - Executar testes
- `npm run lint` - Verificar código

## Comandos de Time Tracking

- `./management/scripts/weekly-analysis.sh` - Análise semanal de tempo
- `python management/scripts/time-report.py` - Relatório completo
- `python management/scripts/time-report.py --daily` - Relatório diário
- `python management/scripts/time-report.py --daily 2025-06-19` - Relatório de data específica

## Comandos de AI Cost Tracking

- `./management/scripts/cost-tracker.sh add` - Adicionar entrada de custo interativa
- `./management/scripts/cost-tracker.sh daily` - Relatório diário de custos
- `./management/scripts/cost-tracker.sh weekly` - Relatório semanal de custos
- `./management/scripts/cost-tracker.sh summary` - Relatório resumo completo
- `python management/scripts/cost-analysis.py --summary` - Análise detalhada de custos
- `python management/scripts/cost-analysis.py --json` - Exportar dados em JSON

## Integrações

### GitHub

Este projeto está integrado com GitHub via MCP:

- **Repositório**: <https://github.com/tiagonpsilva/kwanza-agent>
- **MCP GitHub**: Configurado localmente para automação
- **Branch Principal**: `main`
- **Proteção de Branch**: Pull Requests obrigatórios
- **CI/CD**: GitHub Actions (a ser configurado)

### Linear

Este projeto está sincronizado com o Linear:

- **Linear API Key**: Configurada como variável de ambiente
- **Projeto Linear**: Kwanza Agent (84a69457-db97-4e17-80a7-6f8e5ccd24b9)
- **MCP Linear**: Integração para gestão de tasks
- **Estado**: Backlog

## Fluxo de Desenvolvimento

### Gestão de Tarefas

- **TODAS** as atividades devem ser refletidas como tasks no Linear
- Cada funcionalidade deve ser quebrada em tasks específicas
- Tasks devem seguir templates de User Story ou Enabler Story
- **Labels obrigatórias** para organização e filtros:

#### Sistema de Labels no Linear

**Por Tipo de Task:**
- `Feature` - Novas funcionalidades
- `Bug` - Correções de problemas
- `Improvement` - Melhorias incrementais
- `Docs` - Documentação
- `Test` - Testes e qualidade
- `Infra` - Infraestrutura e DevOps

**Por Natureza da Story:**
- `user-story` - Funcionalidades voltadas ao usuário final
- `enabler-story` - Capacidades técnicas e arquiteturais

**Por Tecnologia/Área:**
- `frontend` - React, UI/UX, componentes
- `backend` - FastAPI, APIs, serviços
- `ai` - LangChain, LLM, embeddings
- `database` - PostgreSQL, MongoDB, ChromaDB
- `architecture` - Arquitetura, ADRs, C4 Model

**Por Fase do Projeto:**
- `fase-1-foundation` - Configuração inicial e UX
- `fase-2-landing` - Landing page e interface
- `fase-3-chat` - Interface conversacional
- `fase-4-validation` - Testes e validação UX
- `fase-5-backend` - Arquitetura backend
- `fase-6-ai` - IA e funcionalidades core
- `fase-7-deploy` - Deploy e monitoramento

**Por Prioridade de Frontend-First:**
- `critical-path` - Caminho crítico do projeto
- `ux-validation` - Requer validação com usuários
- `design-system` - Componentes do design system
- `mobile-first` - Otimização mobile prioritária

#### Implementação do Sistema de Labels

**Status:** ✅ **Implementado** (2025-06-19)

- **16 tasks da Fase 1** criadas no Linear com sistema completo de labels
- **Labels organizadas** em 5 categorias para máxima flexibilidade de filtros
- **Segregação User Stories vs Enabler Stories** para gestão direcionada

**Distribuição das Tasks da Fase 1:**
- **10 User Stories** (foco no usuário): UX/UI, componentes, navegação
- **6 Enabler Stories** (foco técnico): arquitetura, testes, documentação
- **100% frontend/UX**: Alinhado com estratégia frontend-first

**Templates Estruturados Criados:**
- `docs/templates/user-story-template.md` - User Stories com critérios de aceite
- `docs/templates/enabler-story-template.md` - Enabler Stories com diagramas técnicos
- `docs/templates/definition-of-done.md` - Critérios de validação por contexto

### Controle de Versão

- **TODO** código deve ser versionado no Git
- Seguir Git Conventional Commits:
  - `feat:` nova funcionalidade
  - `fix:` correção de bug
  - `docs:` documentação
  - `style:` formatação
  - `refactor:` refatoração
  - `test:` testes
  - `chore:` tarefas gerais
- Branches devem seguir o padrão: `feature/linear-task-id-description`
- Pull Requests obrigatórios para merge na main

### Sincronização Linear

- Tasks completadas no código devem ser marcadas como "Done" no Linear
- Comentários relevantes devem ser adicionados nas tasks do Linear
- Links para commits/PRs devem ser incluídos nas tasks quando aplicável

---

## Histórico de Atualizações do CLAUDE.md

**CLAUDE.md v1.2** - 2025-06-19

### ✅ Implementações Realizadas

**Templates de Gestão Estruturados:**
- `docs/templates/user-story-template.md` - User Stories com critérios de aceite Gherkin
- `docs/templates/enabler-story-template.md` - Enabler Stories com diagramas de sequência
- `docs/templates/definition-of-done.md` - Critérios de validação por contexto

**Sistema de Labels no Linear:**
- **5 categorias** de labels para organização completa
- **16 tasks da Fase 1** criadas e categorizadas
- **10 User Stories** (foco usuário) + **6 Enabler Stories** (foco técnico)
- **100% alinhamento** com estratégia frontend-first

**AI Cost Management System:**
- `management/ai-cost-tracking.md` - Log estruturado de custos de desenvolvimento
- `management/cost-metrics.md` - Métricas de performance e ROI
- `management/scripts/cost-tracker.sh` - Interface interativa para logging
- `management/scripts/cost-analysis.py` - Análise detalhada e relatórios

**Framework Tecnológico:**
- **LangChain** como framework principal de IA (substituindo LlamaIndex)
- **Roadmap v2.1** atualizado com nova tecnologia
- **Integração GitHub/Linear** via MCP funcionando

### 🎯 Próximos Passos

1. **Execução da Fase 1**: Implementar tasks criadas seguindo ordem de prioridade
2. **Cost Tracking**: Registrar custos de todas as sessões de desenvolvimento com IA
3. **Validação UX**: Aplicar templates em protótipos e testes de usabilidade  
4. **ROI Analysis**: Análise comparativa de eficiência IA vs desenvolvimento tradicional
5. **Expansion do Sistema**: Criar tasks das Fases 2-7 seguindo mesmo padrão

### 💰 Metas de Cost Management

**Benchmarks de Eficiência:**
- **Custo por Task**: < $0.05 USD
- **Taxa de Sucesso**: > 95%
- **ROI Mínimo**: > 500% (vs desenvolvimento tradicional)

**Limites de Orçamento:**
- **Por Fase**: < $15.00 USD
- **Projeto Completo**: < $100.00 USD
