# Backend - Kwanza Agent

API REST desenvolvida com FastAPI seguindo padrões de arquitetura limpa.

## Tecnologias

- **Python 3.11+** 
- **FastAPI** framework web
- **Pydantic** para validação de dados
- **SQLAlchemy** ORM para PostgreSQL
- **Alembic** para migrações
- **Pytest** para testes
- **Poetry** para gerenciamento de dependências

## Estrutura de Diretórios

```
backend/
├── app/
│   ├── models/        # Modelos SQLAlchemy
│   ├── services/      # Lógica de negócio
│   ├── api/
│   │   ├── endpoints/ # Endpoints da API
│   │   └── middleware/# Middlewares
│   ├── core/          # Configurações e utilitários
│   └── schemas/       # Schemas Pydantic
├── tests/             # Testes organizados por tipo
└── alembic/           # Migrações do banco
```

## Scripts de Desenvolvimento

```bash
poetry install              # Instalar dependências
poetry run python -m fastapi dev  # Servidor de desenvolvimento
poetry run pytest          # Executar testes
poetry run alembic upgrade head   # Aplicar migrações
```

## Padrões de Desenvolvimento

### Arquitetura
- **Repository Pattern**: Separação de dados e lógica
- **Dependency Injection**: FastAPI dependency system
- **Richardson Maturity Model**: APIs REST completas

### Segurança
- **JWT Authentication**: Tokens para autenticação
- **CORS**: Configuração adequada para frontend
- **Rate Limiting**: Proteção contra abuso
- **Input Validation**: Pydantic schemas

### Banco de Dados
- **PostgreSQL**: Dados relacionais (usuários, sessões)
- **MongoDB**: Classificações de notícias
- **ChromaDB**: Embeddings para RAG
- **Redis**: Cache e sessões