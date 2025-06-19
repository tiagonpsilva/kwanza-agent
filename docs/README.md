# Documentação - Kwanza Agent

Esta é a documentação técnica completa do projeto Kwanza Agent.

## Estrutura da Documentação

### 📁 `architecture/`
Documentação de arquitetura e decisões técnicas.

#### 📁 `decisions/` (ADRs)
Architecture Decision Records - Documentação de todas as decisões arquiteturais.

- **Formato**: ADR-XXXX-título-da-decisão.md
- **Template**: Seguir template padrão ADR
- **Versionamento**: Todas as ADRs são versionadas no Git

#### 📁 `diagrams/`
Diagramas técnicos da solução.

- **C4 Model**: Diagramas de contexto, containers, componentes e código
- **UML**: Diagramas de sequência, classe, atividades
- **Formato**: PlantUML (.puml) + imagens exportadas (.png/.svg)

#### 📁 `specifications/`
Especificações técnicas detalhadas.

- **API Specifications**: OpenAPI/Swagger specs
- **Database Schema**: Modelos de dados
- **Integration Specs**: Especificações de integração
- **Security Specs**: Especificações de segurança

#### 📁 `patterns/`
Padrões de arquitetura e desenvolvimento.

- **Design Patterns**: Padrões de design utilizados
- **Architectural Patterns**: Padrões arquiteturais
- **Code Patterns**: Padrões de código e convenções
- **Best Practices**: Melhores práticas específicas do projeto

## Como Contribuir

### Para Decisões de Arquitetura (ADRs)
1. Criar novo ADR na pasta `architecture/decisions/`
2. Seguir numeração sequencial (ADR-0001, ADR-0002, etc.)
3. Usar template padrão
4. Vincular à task do Linear correspondente

### Para Diagramas
1. Criar arquivo PlantUML na pasta `architecture/diagrams/`
2. Exportar imagem correspondente
3. Documentar no README do diagrama
4. Manter sincronizado com implementação

### Para Especificações
1. Criar especificação na pasta apropriada
2. Manter atualizada com a implementação
3. Versionamento através do Git
4. Review obrigatório para mudanças

## Templates Disponíveis

- `templates/adr-template.md` - Template para ADRs
- `templates/api-spec-template.yaml` - Template para especificações de API
- `templates/diagram-readme-template.md` - Template para documentação de diagramas

## Ferramentas Recomendadas

- **PlantUML**: Para criação de diagramas
- **VSCode + PlantUML Extension**: Para edição
- **Swagger Editor**: Para especificações de API
- **Mermaid**: Alternativa para diagramas simples

## Convenções

### Nomenclatura de Arquivos
- **ADRs**: `ADR-XXXX-titulo-kebab-case.md`
- **Diagramas**: `c4-context.puml`, `sequence-login.puml`
- **Especificações**: `api-auth.yaml`, `database-schema.md`
- **Padrões**: `repository-pattern.md`, `saga-pattern.md`

### Versionamento
- Toda documentação é versionada no Git
- ADRs são imutáveis (criar nova ADR para mudanças)
- Diagramas devem ser atualizados junto com código
- Especificações seguem versionamento semântico quando aplicável

## Status dos Documentos

- 🟢 **Atualizado**: Documento sincronizado com implementação
- 🟡 **Em revisão**: Documento em processo de atualização
- 🔴 **Desatualizado**: Documento precisa ser atualizado
- 📝 **Rascunho**: Documento em elaboração

## Links Úteis

- [ADR Tools](https://github.com/npryce/adr-tools)
- [PlantUML Documentation](https://plantuml.com/)
- [C4 Model](https://c4model.com/)
- [OpenAPI Specification](https://swagger.io/specification/)