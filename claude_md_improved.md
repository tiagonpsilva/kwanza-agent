# Kwanza Agent

AI Agent que serve como template para outros projetos de agentes. O objetivo é listar as principais notícias públicas de tecnologia, permitindo que o usuário as favorite e/ou classifique.

## 🚨 REGRAS CRÍTICAS - WORKFLOW DE DESENVOLVIMENTO

### ❌ PROIBIÇÃO ABSOLUTA: MARCAR TASKS COMO "DONE" SEM APROVAÇÃO

**🛑 SOMENTE O PRODUCT OWNER (TIAGO) PODE APROVAR TASKS 🛑**

- ❌ **NUNCA marque como "Done" sem aprovação explícita**
- ✅ **Máximo permitido: "In Review"**
- ⚠️ **Violação = ERRO CRÍTICO**

### 🔄 Fluxo Obrigatório de Estados

1. **Backlog** → Planejada
2. **In Progress** → Em desenvolvimento
3. **In Review** → ⚠️ **PARADA OBRIGATÓRIA** - Aguardando aprovação
4. **Done** → ✅ Somente após aprovação explícita

### 📋 Critérios para "In Review"

**OBRIGATÓRIO: Comentário detalhado na task incluindo:**
- ✅ **O que foi implementado** (lista de arquivos/funcionalidades)
- 🧪 **Como validar/testar** (comandos, URLs, cenários)
- 📸 **Evidências** (screenshots, outputs, links)
- 🔍 **Pontos de atenção** (configurações, dependências)

## 🎯 Funcionalidades Core

- **Landing Page** + Login (Celular/Google)
- **Interface Conversacional** com sugestões de ações
- **Gestão de Notícias**: Listar, favoritar, classificar
- **UX Mobile-First** com themes light/dark
- **Menu CLI-style** para navegação

## 🏗️ Arquitetura

### Stack Tecnológico

**Frontend (Prioridade):**
- React.js + TypeScript + TailwindCSS + Shadcn/UI
- Storybook + React Testing Library + Cypress
- PWA (Progressive Web App)

**Backend:**
- Python + FastAPI + Pydantic + Pytest + Poetry

**IA & Dados:**
- **LangChain** (framework principal)
- **ChromaDB** (Vector Database - RAG)
- **Redis** (memória de curto prazo)
- **PostgreSQL** (dados relacionais)
- **MongoDB** (classificações de notícias)
- **Ollama** (modelos locais) + OpenAI/Anthropic APIs

### Estrutura do Projeto

```
kwanza-agent/
├── .claude/                    # Configurações Claude Code
├── docs/                       # Documentação técnica
│   ├── architecture/          # ADRs, C4 Model, especificações
│   └── templates/             # Templates de gestão
├── management/                 # Gestão de projeto
│   ├── roadmap.md
│   ├── time-tracking.md
│   ├── ai-cost-tracking.md
│   └── scripts/               # Scripts de análise
└── CLAUDE.md                  # Este arquivo
```

## 📋 Gestão de Projeto

### Sistema de Labels (Linear)

**Por Tipo:** `Feature` `Bug` `Improvement` `Docs` `Test` `Infra`
**Por Natureza:** `user-story` `enabler-story`
**Por Tecnologia:** `frontend` `backend` `ai` `database` `architecture`
**Por Fase:** `fase-1-foundation` `fase-2-landing` `fase-3-chat` etc.
**Por Prioridade:** `critical-path` `ux-validation` `design-system` `mobile-first`

### Templates Estruturados

- **User Stories**: `docs/templates/user-story-template.md`
- **Enabler Stories**: `docs/templates/enabler-story-template.md`
- **Definition of Done**: `docs/templates/definition-of-done.md`

## 🔗 Git + Linear Integration

### Mensagens de Commit (Obrigatório)

```
<type>(linear-id): <description>

- <detailed change 1>
- <detailed change 2>

Linear-Task: <LINEAR_ID>
Co-authored-by: Claude <noreply@anthropic.com>
```

### Branch Naming

**Formato:** `<type>/<linear-id>-<description>`
**Exemplo:** `feature/PRO-15-atomic-design-system`

### Workflow CRÍTICO (SEGUIR EXATAMENTE)

🚨 **NUNCA COMEÇAR CÓDIGO SEM ATUALIZAR LINEAR PRIMEIRO**

1. **📋 Task identificada** → Status "Backlog"
2. **🔛 ANTES DO CÓDIGO:**
   - Mover para "In Progress" no Linear
   - Criar branch `feature/PRO-XX-description`
   - Só depois iniciar desenvolvimento
3. **⚙️ Durante desenvolvimento:** Commits frequentes
4. **🔄 Finalizar:** Mover para "In Review" + comentário completo
5. **⏳ Aguardar aprovação:** NUNCA "Done" sem aprovação
6. **✅ Pós-aprovação:** Push automático + atualizar task

### Semantic Versioning

- **v0.x.x**: Development/Beta
- **v1.0.0**: First production
- **Releases baseados em milestones** do Linear

## 🏛️ Padrões de Arquitetura

### ADR (Architecture Decision Records)

**Para TODA decisão arquitetural:**

1. **Questionário do Arquiteto** (14 perguntas essenciais)
2. **Análise colaborativa** com stakeholders
3. **Documentação ADR** (template em `docs/templates/`)
4. **Implementação + monitoramento**

### Melhores Práticas

- **Twelve-Factor App**
- **Git Conventional Commits**
- **OWASP Security**
- **Richardson Maturity Model** (REST APIs)
- **RFC 3164/5424** (Logging)

### Desenvolvimento de Agentes (12 Princípios)

1. Choose the Right Model
2. Make Models Interchangeable
3. Curate Your Tools
4. Expose Actions as APIs
5. Orchestrate with Workflows
6. Maintain Short-Term Memory
7. Extract Long-Term Memory
8. Organize Knowledge at Scale
9. Authenticate and Authorize
10. Log Inference
11. Trace Execution
12. Evaluate Continuously

## 🎨 Frontend-First Strategy

### Prioridades

- **UX/UI Primeiro**: Validar experiência antes do backend
- **Design System**: Componentes reutilizáveis desde o início
- **Prototipagem**: Protótipos navegáveis para validação
- **Mock Backend**: Desenvolvimento frontend independente

### Metas de Distribuição

- **40-50%** UX/DEV Frontend
- **20-30%** DEV Backend
- **15-20%** DOCS
- **10-15%** TEST

## 💰 AI Cost Management

### Tracking de Custos

**Arquivos:**
- `management/ai-cost-tracking.md` - Log estruturado
- `management/cost-metrics.md` - Métricas e ROI
- `management/scripts/cost-tracker.sh` - Interface interativa
- `management/scripts/cost-analysis.py` - Análise detalhada

### Benchmarks de Eficiência

- **Custo por Task**: < $0.05 USD
- **Taxa de Sucesso**: > 95%
- **ROI Mínimo**: > 500% vs desenvolvimento tradicional

### Limites de Orçamento

- **Por Fase**: < $15.00 USD
- **Projeto Completo**: < $100.00 USD

## 🚀 Comandos de Desenvolvimento

```bash
# Backend
python -m fastapi dev

# Frontend
npm run dev          # Desenvolvimento
npm run build        # Build produção
npm run test         # Testes
npm run lint         # Verificar código

# Time Tracking
./management/scripts/weekly-analysis.sh
python management/scripts/time-report.py --daily

# Cost Tracking
./management/scripts/cost-tracker.sh add
./management/scripts/cost-tracker.sh summary
python management/scripts/cost-analysis.py --json
```

## 🔌 Integrações

### GitHub
- **Repo**: https://github.com/tiagonpsilva/kwanza-agent
- **MCP GitHub**: Configurado localmente
- **Branch Principal**: `main`

### Linear
- **Projeto**: Kwanza Agent (84a69457-db97-4e17-80a7-6f8e5ccd24b9)
- **MCP Linear**: Integração para gestão de tasks

## 📊 Status Atual

**CLAUDE.md v1.3** - 2025-06-20

### ✅ Implementado
- Templates de gestão estruturados
- Sistema de labels no Linear (16 tasks Fase 1)
- AI Cost Management System
- Framework LangChain definido
- Integração GitHub/Linear via MCP

### 🎯 Próximas Fases
1. **Fase 1**: Foundation Frontend (10 User + 6 Enabler Stories)
2. **Fase 2**: Landing Page + Auth
3. **Fase 3**: Interface Conversacional
4. **Fase 4**: Validação UX
5. **Fase 5**: Backend Architecture
6. **Fase 6**: IA e Features Core
7. **Fase 7**: Deploy e Monitoramento

---

**Desenvolvido por [Tiago Pinto](https://tiagopinto.io)**