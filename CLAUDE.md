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
- LLM
- MCP - Model Context Protocol
  - BD Relacional
- Fluxo RAG - Vector Database

## Tecnologia

### Front-end

- React.js
- Typescript
- TailwindCSS + Shadcn/UI

### Back-end

- Python / FastAPI / Pydantic

### IA

- LlamaIndex - framework de desenvolvimento
- ChromaDB - Vector Database
- Redis - Short-term memory

## Não-Funcionais

### Configurações

- Escolha de LLM a ser utilizada
- Apontamento de token de Acesso à LLM

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

## Boas Práticas de Gestão

- Roadmap View
- User Stories
- Enabler Stories

## Estrutura do Projeto

```text
kwanza-agent/
├── .claude/          # Configurações do Claude Code
└── CLAUDE.md         # Este arquivo
```

## Comandos de Desenvolvimento

- `python -m fastapi dev` - Iniciar desenvolvimento do backend
- `npm run dev` - Iniciar desenvolvimento do frontend  
- `npm run build` - Build de produção
- `npm run test` - Executar testes
- `npm run lint` - Verificar código

## Integração Linear

Este projeto está sincronizado com o Linear:

- **Linear API Key**: Configurada como variável de ambiente
- **Projeto Linear**: Kwanza Agent (84a69457-db97-4e17-80a7-6f8e5ccd24b9)
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