# Diagramas de Arquitetura

Este diretório contém todos os diagramas técnicos do projeto Kwanza Agent.

## Estrutura dos Diagramas

### C4 Model
Seguimos o modelo C4 para documentação arquitetural:

1. **Context** (`c4-context.puml`) - Visão geral do sistema
2. **Containers** (`c4-containers.puml`) - Aplicações e serviços
3. **Components** (`c4-components-*.puml`) - Componentes internos
4. **Code** (`c4-code-*.puml`) - Classes e interfaces (quando necessário)

### UML Diagrams
- **Sequence** (`sequence-*.puml`) - Fluxos de interação
- **Class** (`class-*.puml`) - Estruturas de dados
- **Activity** (`activity-*.puml`) - Fluxos de processo
- **State** (`state-*.puml`) - Máquinas de estado

## Lista de Diagramas

| Diagrama | Tipo | Status | Última Atualização |
|----------|------|--------|--------------------|
| C4 Context | C4 | 📝 Planejado | - |
| C4 Containers | C4 | 📝 Planejado | - |
| Sequence - Login | UML | 📝 Planejado | - |
| Sequence - Chat | UML | 📝 Planejado | - |

## Ferramentas

### PlantUML
- **Editor**: VSCode com extensão PlantUML
- **Preview**: Live preview durante edição
- **Export**: PNG/SVG para documentação

### Comandos Úteis

```bash
# Gerar todas as imagens
plantuml *.puml

# Gerar imagem específica
plantuml c4-context.puml

# Modo watch (regenera automaticamente)
plantuml -w *.puml
```

## Convenções

### Nomenclatura
- **C4**: `c4-[level]-[description].puml`
- **Sequence**: `sequence-[flow-name].puml`
- **Class**: `class-[domain].puml`
- **Activity**: `activity-[process].puml`

### Cores (C4 Model)
```plantuml
!define PERSON_COLOR #08427B
!define SYSTEM_COLOR #1168BD
!define CONTAINER_COLOR #4A90E2
!define COMPONENT_COLOR #85BBF0
```

### Estilo
- **Português**: Textos em português
- **Consistência**: Manter padrão visual
- **Simplicidade**: Focar na clareza
- **Atualização**: Manter sincronizado com código

## Templates

Cada tipo de diagrama possui um template base:

- `templates/c4-context-template.puml`
- `templates/sequence-template.puml`
- `templates/class-template.puml`

## Integração com Documentação

- Imagens são exportadas para `../../../assets/diagrams/`
- README de cada diagrama explica o contexto
- Links para ADRs relacionadas
- Versionamento via Git

## Status dos Diagramas

- 📝 **Planejado**: Diagrama identificado, não criado
- 🔄 **Em Desenvolvimento**: Sendo criado/atualizado
- ✅ **Atualizado**: Sincronizado com implementação
- ⚠️ **Desatualizado**: Precisa ser atualizado
- 🗃️ **Arquivado**: Não mais relevante

## Revisão e Aprovação

1. **Criação**: Desenvolver diagrama seguindo convenções
2. **Review**: Revisão técnica obrigatória
3. **Aprovação**: Aprovação do arquiteto/tech lead
4. **Publicação**: Merge e export das imagens
5. **Manutenção**: Atualização conforme evolução do código