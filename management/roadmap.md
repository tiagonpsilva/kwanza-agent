# Roadmap - Kwanza Agent

## Visão Geral

Primeiro AI Agent para listar e gerenciar notícias de tecnologia, servindo como template para futuros projetos de agentes.

## Objetivo

Criar um agente conversacional que permita aos usuários listar, favoritar e classificar notícias de tecnologia através de uma interface intuitiva e responsiva.

---

## Fases do Projeto

### 🏗️ **Fase 1: Estrutura e Fundação** (Semanas 1-2)

#### 1.1 Configuração Inicial
- [x] Repositório Git configurado
- [x] Integração Linear + GitHub
- [x] Documentação inicial (CLAUDE.md)
- [ ] Estrutura de diretórios do projeto
- [ ] Configuração de ambientes (dev/prod)

#### 1.2 Arquitetura Base

- [ ] Definição da arquitetura detalhada
- [ ] **Architecture Haiku** da solução
- [ ] **Diagrama C4 Model** (PlantUML) - Visão macro
- [ ] **ADR inicial** - Decisões de arquitetura fundamentais
- [ ] Configuração do FastAPI (backend)
- [ ] Configuração do React.js (frontend)
- [ ] Configuração do banco de dados (PostgreSQL)
- [ ] Configuração do Redis (cache/sessões)

#### 1.3 Infraestrutura

- [ ] Docker containers para desenvolvimento
- [ ] Docker Compose para orquestração
- [ ] Configuração de variáveis de ambiente
- [ ] Scripts de inicialização do projeto
- [ ] **Diretório de documentação de testes**
- [ ] **Configuração Cypress** para testes E2E

### 🔐 **Fase 2: Autenticação e Base** (Semanas 3-4)

#### 2.1 Landing Page

- [ ] **User Story** com diagramas de sequência
- [ ] Design e layout responsivo
- [ ] Implementação com React + TailwindCSS
- [ ] Integração Shadcn/UI
- [ ] Tema claro/escuro
- [ ] Rodapé com créditos
- [ ] **Testes Cypress** para fluxos principais

#### 2.2 Sistema de Autenticação
- [ ] Login com número de celular
- [ ] Login com Google OAuth
- [ ] Middleware de autenticação
- [ ] Gestão de sessões com Redis
- [ ] Proteção de rotas

#### 2.3 Interface Base
- [ ] Layout principal da aplicação
- [ ] Navegação responsiva
- [ ] Componentes base reutilizáveis
- [ ] Sistema de temas

### 🤖 **Fase 3: Core do Agente** (Semanas 5-7)

#### 3.1 Configuração LLM
- [ ] Integração com LlamaIndex
- [ ] Configuração de modelos intercambiáveis
- [ ] Sistema de tokens e limites
- [ ] Fallback entre modelos

#### 3.2 Interface Conversacional
- [ ] Chat interface (modelo ChatGPT)
- [ ] Sistema de sugestões de ações
- [ ] Histórico de conversas
- [ ] Indicadores de carregamento

#### 3.3 Sistema de Memória
- [ ] Short-term memory com Redis
- [ ] Long-term memory com ChromaDB
- [ ] Contexto de conversação
- [ ] Persistência de preferências

### 📰 **Fase 4: Funcionalidades Notícias** (Semanas 8-10)

#### 4.1 Coleta de Notícias
- [ ] Integração com APIs de notícias
- [ ] Web scraping de fontes confiáveis
- [ ] Sistema de categorização automática
- [ ] Filtros por período (dia/semana/mês)

#### 4.2 Gerenciamento de Notícias
- [ ] Listar 10 notícias principais
- [ ] Sistema de favoritos
- [ ] Sistema de classificação/rating
- [ ] Filtros e busca avançada

#### 4.3 Base de Conhecimento (RAG)
- [ ] Vetorização de notícias
- [ ] Busca semântica
- [ ] Contextualização de respostas
- [ ] Atualização contínua da base

### 🔧 **Fase 5: Funcionalidades Avançadas** (Semanas 11-12)

#### 5.1 Painel de Configurações
- [ ] Seleção de modelo LLM
- [ ] Configuração de tokens API
- [ ] Preferências de notícias
- [ ] Configurações de privacidade

#### 5.2 Painel de Operações
- [ ] FinOPS - Gestão de custos
- [ ] Monitoramento de performance
- [ ] Logs de auditoria
- [ ] Métricas de uso

#### 5.3 CLI-like Experience
- [ ] Comandos via chat
- [ ] Autocomplete de comandos
- [ ] Ajuda contextual
- [ ] Shortcuts de teclado

### 📊 **Fase 6: Qualidade e Deploy** (Semanas 13-14)

#### 6.1 Testes e Qualidade

- [ ] **Documentação completa** dos casos de teste
- [ ] Testes unitários (backend) - Cobertura 80%+
- [ ] Testes de componentes (frontend) - Cobertura 80%+
- [ ] Testes de integração
- [ ] **Testes Cypress E2E** - Fluxos críticos
- [ ] Testes de performance
- [ ] Linting e formatação
- [ ] **Relatórios de cobertura** automatizados

#### 6.2 Segurança
- [ ] Implementação OWASP
- [ ] Sanitização de inputs
- [ ] Rate limiting
- [ ] Auditoria de segurança

#### 6.3 Deploy e Monitoramento
- [ ] Configuração de produção
- [ ] CI/CD pipeline
- [ ] Monitoramento de logs
- [ ] Alertas e notificações
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
- **Redis** para cache e sessões
- **Alembic** para migrações

### IA/ML
- **LlamaIndex** como framework principal
- **ChromaDB** para vetorização
- **OpenAI/Anthropic** APIs
- **Hugging Face** para modelos locais

### DevOps

- **Docker** + **Docker Compose**
- **GitHub Actions** para CI/CD
- **Nginx** como reverse proxy
- **Prometheus** + **Grafana** para monitoramento

### Documentação

- **PlantUML** para diagramas C4 Model
- **ADR** para decisões de arquitetura
- **Architecture Haiku** para visão poética da solução
- **Markdown** para documentação técnica

---

## Marcos Principais

| Marco | Descrição | Prazo |
|-------|-----------|-------|
| 🏗️ **M1** | Estrutura base funcional | Semana 2 |
| 🔐 **M2** | Autenticação e UI base | Semana 4 |
| 🤖 **M3** | Agente conversacional básico | Semana 7 |
| 📰 **M4** | Funcionalidades de notícias | Semana 10 |
| 🔧 **M5** | Painéis de configuração | Semana 12 |
| 🚀 **M6** | Deploy em produção | Semana 14 |

---

## Riscos e Mitigações

### Riscos Técnicos
- **Complexidade de integração LLM**: Usar LlamaIndex para abstração
- **Performance com grandes volumes**: Implementar cache e paginação
- **Custos de API**: Implementar monitoramento e limites

### Riscos de Produto
- **UX complexa**: Priorizar simplicidade e testes com usuários
- **Qualidade das notícias**: Curar fontes confiáveis e validação

### Riscos de Cronograma
- **Underestimation**: Buffer de 20% em cada fase
- **Dependências externas**: Ter alternativas para APIs críticas

---

## Próximos Passos Imediatos

1. **Criar tasks no Linear** para Fase 1.1
2. **Gerar Architecture Haiku** da solução
3. **Criar primeiro ADR** sobre escolhas tecnológicas
4. **Definir estrutura de diretórios** do projeto
5. **Configurar ambiente de desenvolvimento**
6. **Implementar arquitetura base**

---

## Histórico de Versões

**Roadmap v1.1** - Última atualização: 2025-06-19
