# Kwanza Agent

Primeiro AI Agent para listar e gerenciar notícias de tecnologia, servindo como template para futuros projetos de agentes.

## 🎯 Visão Geral

O Kwanza Agent é um agente conversacional que permite aos usuários:
- Listar principais notícias de tecnologia (dia/semana/mês)
- Favoritar e classificar notícias
- Interface conversacional similar ao ChatGPT
- Experiência mobile-first com temas claro/escuro

## 🏗️ Arquitetura

### Frontend-First Strategy
```
📱 React + TypeScript + TailwindCSS
     ↓
🤖 Agent (FastAPI + LangChain)
     ↓
🗄️ Multi-Database (PostgreSQL + MongoDB + ChromaDB + Redis)
```

### Tecnologias Principais
- **Frontend**: React.js, TypeScript, TailwindCSS, Shadcn/UI
- **Backend**: Python, FastAPI, Pydantic
- **IA**: LangChain, Ollama, OpenAI/Anthropic APIs
- **Bancos**: PostgreSQL, MongoDB, ChromaDB, Redis

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- Python 3.11+
- Docker e Docker Compose
- Git

### Desenvolvimento Local

```bash
# 1. Clone o repositório
git clone https://github.com/tiagonpsilva/kwanza-agent.git
cd kwanza-agent

# 2. Frontend
cd frontend
npm install
npm run dev

# 3. Backend (terminal separado)
cd backend
poetry install
poetry run python -m fastapi dev

# 4. Bancos de dados (Docker)
docker-compose up -d
```

## 📁 Estrutura do Projeto

```
kwanza-agent/
├── 📱 frontend/           # React.js + TypeScript
├── 🐍 backend/            # FastAPI + Python
├── 🤖 ai/                 # LangChain + IA
├── 🏗️ infrastructure/     # Docker + K8s + Terraform
├── 📚 docs/               # Documentação técnica
└── 📊 management/         # Gestão e métricas
```

## 🛠️ Comandos Úteis

### Desenvolvimento
```bash
npm run dev              # Frontend dev server
python -m fastapi dev    # Backend dev server
docker-compose up -d     # Infraestrutura local
```

### Testes
```bash
npm run test            # Testes frontend
poetry run pytest      # Testes backend
npm run test:e2e        # Testes E2E
```

### Análises
```bash
./management/scripts/cost-tracker.sh summary    # Custos IA
python management/scripts/time-report.py        # Time tracking
```

## 📋 Roadmap

- [x] **Fase 1**: UX/UI Foundation (Templates, Design System)
- [ ] **Fase 2**: Landing Page & Interface Principal
- [ ] **Fase 3**: Interface Conversacional
- [ ] **Fase 4**: Validação UX & Testes
- [ ] **Fase 5**: Arquitetura Backend
- [ ] **Fase 6**: IA & Core Features
- [ ] **Fase 7**: Deploy & Monitoramento

Ver [roadmap detalhado](management/roadmap.md).

## 📖 Documentação

- [**CLAUDE.md**](CLAUDE.md) - Guia completo do projeto
- [**Frontend**](frontend/README.md) - React + TypeScript
- [**Backend**](backend/README.md) - FastAPI + Python
- [**IA**](ai/README.md) - LangChain + Agentes
- [**Infrastructure**](infrastructure/README.md) - Docker + K8s

## 🔧 Configuração

### Variáveis de Ambiente
```bash
# APIs de IA
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# Bancos de dados
DATABASE_URL=postgresql://...
MONGODB_URL=mongodb://...
REDIS_URL=redis://...
```

### Modelos Locais (Ollama)
```bash
ollama pull llama2
ollama pull mistral
ollama serve
```

## 🧪 Qualidade

### Métricas de Code Quality
- **Cobertura de Testes**: > 80%
- **TypeScript**: 100% tipado
- **ESLint/Prettier**: Padronização automática
- **Cypress**: Testes E2E automatizados

### FinOps & Performance
- **AI Cost Tracking**: Monitoramento de custos de tokens
- **Time Tracking**: Análise de produtividade
- **ROI Analysis**: Comparativo IA vs desenvolvimento tradicional

## 📄 Licença

Este projeto é um template de estudo para desenvolvimento de agentes IA.

## 👨‍💻 Desenvolvido por

**Tiago Pinto**  
🌐 [tiagopinto.io](https://tiagopinto.io)  
📧 [contato@tiagopinto.io](mailto:contato@tiagopinto.io)

---

**🤖 Desenvolvido com auxílio de IA usando Claude Code**