# Infrastructure - Kwanza Agent

Configuração de infraestrutura para desenvolvimento e produção.

## Tecnologias

- **Docker** containerização
- **Docker Compose** orquestração local
- **Kubernetes** orquestração produção
- **Terraform** Infrastructure as Code
- **GitHub Actions** CI/CD

## Estrutura de Diretórios

```
infrastructure/
├── docker/           # Dockerfiles e compose
├── kubernetes/       # Manifests K8s
├── terraform/        # IaC para cloud
└── scripts/          # Scripts de automação
```

## Ambientes

### Desenvolvimento
- **Docker Compose**: Todos os serviços localmente
- **Hot Reload**: Frontend e backend
- **Volumes**: Persistência de dados local

### Staging
- **Kubernetes**: Ambiente similar à produção
- **CI/CD**: Deploy automatizado via GitHub Actions
- **Monitoring**: Observabilidade básica

### Produção
- **Cloud Provider**: AWS/GCP/Azure
- **Auto-scaling**: Baseado em métricas
- **Backup**: Estratégia automatizada
- **Security**: SSL, secrets management

## Services

### Core Services
- **Frontend**: React app (Nginx)
- **Backend**: FastAPI (Uvicorn)
- **PostgreSQL**: Dados relacionais
- **MongoDB**: Classificações
- **Redis**: Cache e sessões

### AI Services
- **ChromaDB**: Vector database
- **Ollama**: Modelos locais
- **Embeddings Service**: Geração de embeddings

### Monitoring
- **Prometheus**: Métricas
- **Grafana**: Dashboards
- **Jaeger**: Tracing distribuído