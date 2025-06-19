# Kwanza Agent

Primeiro AI Agent que servirá como template para outros projetos de agentes. O objetivo do agente será listar as principais notícias públicas de tecnologia, permitindo que o usuário as favorite e/ou classifique.

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

- Python / FastAPI / Pydantic

### IA

- LlamaIndex - framework de desenvolvimento
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
│       └── adr-template.md    # Template para ADRs
├── management/                 # Documentação de gestão
│   ├── roadmap.md             # Roadmap do projeto
│   ├── time-tracking.md       # Log de tempo de desenvolvimento
│   └── scripts/               # Scripts de análise
│       ├── weekly-analysis.sh # Análise semanal de tempo
│       └── time-report.py     # Relatórios detalhados
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
- Tasks devem seguir o padrão: [TIPO] Descrição clara da atividade
- Usar labels apropriadas: `frontend`, `backend`, `ai`, `infra`, `docs`

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
