# Roadmap - Kwanza Agent

## Visão Geral

Primeiro AI Agent para listar e gerenciar notícias de tecnologia, servindo como template para futuros projetos de agentes.

## Objetivo

Criar um agente conversacional que permita aos usuários listar, favoritar e classificar notícias de tecnologia através de uma interface intuitiva e responsiva.

---

## Fases do Projeto (Abordagem Frontend-First)

### 🎨 **Fase 1: UX/UI Foundation** (Semanas 1-3)

#### 1.1 Configuração Inicial
- [x] Repositório Git configurado
- [x] Integração Linear + GitHub
- [x] Documentação inicial (CLAUDE.md)
- [ ] Estrutura de diretórios do projeto
- [ ] **Configuração React.js + TailwindCSS**
- [ ] **Configuração Shadcn/UI**
- [ ] **Setup de temas (claro/escuro)**

#### 1.2 Design System & Prototipagem

- [ ] **Design System** completo (cores, tipografia, componentes)
- [ ] **Wireframes** de todas as telas principais
- [ ] **Protótipo navegável** (Figma/FigJam)
- [ ] **User Journey Mapping**

#### 1.3 Componentes Base

- [ ] Sistema de componentes reutilizáveis
- [ ] Layout responsivo (Mobile First)
- [ ] Navegação e roteamento
- [ ] Estados de loading e erro
- [ ] **Configuração Cypress** para testes E2E
- [ ] **Storybook** para documentação de componentes

### 🚀 **Fase 2: Landing Page & Interface Principal** (Semanas 4-5)

#### 2.1 Landing Page

- [ ] **User Story** com diagramas de sequência (`docs/architecture/views-diagrams/`)
- [ ] Design e implementação da landing page
- [ ] Animações e micro-interactions
- [ ] SEO e meta tags
- [ ] Rodapé com créditos
- [ ] **Testes Cypress** para fluxos principais

#### 2.2 Interface de Autenticação (Mock)

- [ ] Telas de login/registro (design)
- [ ] **Mock de autenticação** (local storage)
- [ ] Fluxo de onboarding
- [ ] Estados de validação de formulários
- [ ] Feedback visual de erro/sucesso

#### 2.3 Layout Principal da Aplicação

- [ ] Dashboard/Home layout
- [ ] Sidebar/Menu de navegação
- [ ] Header com perfil do usuário
- [ ] Área principal de conteúdo
- [ ] Footer responsivo

### 💬 **Fase 3: Interface Conversacional** (Semanas 6-7)

#### 3.1 Chat Interface (Frontend)

- [ ] **Design do chat** (modelo ChatGPT)
- [ ] Componente de mensagens
- [ ] Input de texto com formatação
- [ ] **Sistema de sugestões** de ações
- [ ] Histórico de conversas (mock)
- [ ] Indicadores de digitação/carregamento

#### 3.2 Sistema de Notícias (Frontend)

- [ ] **Lista de notícias** (componentes)
- [ ] **Cards de notícias** responsivos
- [ ] **Sistema de favoritos** (UI apenas)
- [ ] **Sistema de classificação** (stars/rating)
- [ ] Filtros e busca (interface)
- [ ] Paginação e scroll infinito

#### 3.3 Painéis e Configurações (Frontend)

- [ ] **Painel de configurações** (UI)
- [ ] **Painel de operações** (dashboard)
- [ ] **Seleção de modelo LLM** (interface)
- [ ] Preferências de notícias
- [ ] Gestão de perfil do usuário

### 🧪 **Fase 4: Validação UX & Testes Frontend** (Semana 8)

#### 4.1 Testes de Usabilidade

- [ ] **Testes com usuários** (5-7 pessoas)
- [ ] **Análise de UX** e pontos de melhoria
- [ ] **Otimização de fluxos** baseada em feedback
- [ ] **Documentação de insights** de UX

#### 4.2 Testes Automatizados Frontend

- [ ] **Testes Cypress E2E** completos
- [ ] **Testes de componentes** (React Testing Library)
- [ ] **Testes de acessibilidade** (a11y)
- [ ] **Testes de performance** frontend
- [ ] **Testes em diferentes dispositivos**

#### 4.3 Refinamento e Polimento

- [ ] **Otimização de performance** (bundle size, lazy loading)
- [ ] **Melhorias de acessibilidade**
- [ ] **Animações finais** e micro-interactions
- [ ] **Progressive Web App** (PWA) features

### ⚙️ **Fase 5: Arquitetura Backend** (Semanas 9-10)

#### 5.1 Infraestrutura Base

- [ ] **Architecture Haiku** da solução (`docs/architecture/`)
- [ ] **Diagrama C4 Model** (PlantUML) em `docs/architecture/views-diagrams/`
- [ ] **ADR** para decisões de arquitetura (`docs/architecture/decisions/`)
- [ ] Configuração do FastAPI (backend)
- [ ] Configuração do PostgreSQL (dados relacionais)
- [ ] Configuração do MongoDB (classificações de notícias)
- [ ] Configuração do Redis (cache/sessões)
- [ ] **Docker containers** para desenvolvimento

#### 5.2 APIs Base

- [ ] Sistema de autenticação (JWT)
- [ ] APIs de usuário e perfil
- [ ] Middleware de autenticação
- [ ] Gestão de sessões
- [ ] APIs de configuração

#### 5.3 Integração Frontend-Backend

- [ ] **Conectar autenticação** real
- [ ] **APIs de configurações** do usuário
- [ ] **Persistência** de preferências
- [ ] **Gestão de estado** (Redux/Zustand)

### 🤖 **Fase 6: IA & Core Features** (Semanas 11-12)

#### 6.1 Configuração LLM

- [ ] Integração com LangChain
- [ ] Configuração de APIs externas (OpenAI/Anthropic)
- [ ] **Configuração Ollama** para modelos locais
- [ ] Sistema de tokens e limites
- [ ] Fallback entre modelos (API → Ollama)

#### 6.2 Sistema de Notícias

- [ ] Integração com APIs de notícias
- [ ] Web scraping de fontes confiáveis
- [ ] **Sistema de favoritos** (MongoDB)
- [ ] **Sistema de classificação/rating** (MongoDB)
- [ ] Filtros por período (dia/semana/mês)

#### 6.3 Base de Conhecimento (RAG)

- [ ] Configuração do ChromaDB (vector database para RAG)
- [ ] **Vetorização de notícias com ChromaDB**
- [ ] **Embeddings usando LangChain + Ollama** (local) ou APIs
- [ ] Busca semântica por similaridade
- [ ] Contextualização de respostas com LangChain

### 🚀 **Fase 7: Deploy & Monitoramento** (Semanas 13-14)

#### 7.1 Testes Finais

- [ ] **Testes de integração** completos
- [ ] **Testes de performance** (backend)
- [ ] **Testes de carga**
- [ ] **Documentação completa** dos casos de teste

#### 7.2 Segurança & Deploy

- [ ] Implementação OWASP
- [ ] Sanitização de inputs
- [ ] Rate limiting
- [ ] Configuração de produção
- [ ] CI/CD pipeline

#### 7.3 Monitoramento

- [ ] Monitoramento de logs
- [ ] Alertas e notificações
- [ ] FinOPS - Gestão de custos
- [ ] Métricas de uso
- [ ] Backup e recuperação

---

## Tecnologias por Fase

### Frontend

- **React.js** + **TypeScript**
- **TailwindCSS** + **Shadcn/UI**
- **Axios** para requisições
- **React Router** para navegação
- **React Hook Form** para formulários
- **Cypress** para testes E2E

### Backend

- **Python** + **FastAPI** + **Pydantic**
- **PostgreSQL** para dados relacionais
- **MongoDB** para classificações de notícias
- **Redis** para cache e sessões
- **Alembic** para migrações PostgreSQL

### IA/ML

- **LangChain** como framework principal
- **ChromaDB** para RAG e embeddings
- **OpenAI/Anthropic** APIs externas
- **Ollama** para modelos locais (llama2, mistral, etc.)

### DevOps

- **Docker** + **Docker Compose**
- **GitHub Actions** para CI/CD
- **Nginx** como reverse proxy
- **Prometheus** + **Grafana** para monitoramento

### Documentação

- **PlantUML** para diagramas C4 Model (`docs/architecture/views-diagrams/`)
- **ADR** para decisões de arquitetura (`docs/architecture/decisions/`)
- **Architecture Haiku** para visão poética da solução (`docs/architecture/`)
- **OpenAPI/Swagger** para especificações de API (`docs/architecture/specifications/`)
- **Padrões** de desenvolvimento (`docs/architecture/patterns/`)
- **Markdown** para documentação técnica

---

## Marcos Principais (Frontend-First)

| Marco | Descrição | Prazo |
|-------|-----------|-------|
| 🎨 **M1** | Design System e Componentes Base | Semana 3 |
| 🚀 **M2** | Landing Page e Interface Principal | Semana 5 |
| 💬 **M3** | Interface Conversacional Completa | Semana 7 |
| 🧪 **M4** | UX Validada e Frontend Testado | Semana 8 |
| ⚙️ **M5** | Backend Integrado | Semana 10 |
| 🤖 **M6** | IA e Funcionalidades Core | Semana 12 |
| 🚀 **M7** | Deploy em Produção | Semana 14 |

---

## Riscos e Mitigações

### Riscos Técnicos
- **Complexidade de integração LLM**: Usar LangChain para abstração
- **Performance com grandes volumes**: Implementar cache e paginação
- **Custos de API**: Implementar monitoramento e limites

### Riscos de Produto
- **UX complexa**: Priorizar simplicidade e testes com usuários
- **Qualidade das notícias**: Curar fontes confiáveis e validação

### Riscos de Cronograma
- **Underestimation**: Buffer de 20% em cada fase
- **Dependências externas**: Ter alternativas para APIs críticas

---

## Próximos Passos Imediatos (Frontend-First)

1. **Criar tasks no Linear** para Fase 1 (UX/UI Foundation)
2. **Configurar React.js + TailwindCSS + Shadcn/UI**
3. **Criar Design System** e wireframes
4. **Desenvolver protótipo navegável**
5. **Implementar componentes base**
6. **Configurar Storybook** para documentação
7. **Setup Cypress** para testes E2E

---

## Histórico de Versões

**Roadmap v2.1** - Última atualização: 2025-06-19

### Mudanças v2.1 (Framework IA)
- **LlamaIndex → LangChain**: Mudança do framework principal de IA
- **Integração LangChain + Ollama**: Para embeddings e modelos locais
- **Contextualização com LangChain**: Para respostas mais robustas
- **Mitigação de riscos**: Atualizada para LangChain

### Mudanças v2.0 (Frontend-First Approach)
- **Reestruturação completa**: Priorização UX/Frontend antes Backend
- **7 fases** com abordagem frontend-first
- **Fase 4 dedicada**: Validação UX e testes de usabilidade
- **Storybook**: Adicionado para documentação de componentes
- **PWA features**: Progressive Web App na fase de polimento
- **7 marcos principais**: Marcos atualizados para nova abordagem

### Mudanças v1.2 (Tecnologias)
- Substituição Hugging Face → Ollama para modelos locais
- Definição ChromaDB exclusivamente para RAG
- Adição MongoDB para classificações de notícias
- Especificação clara de responsabilidades dos bancos
