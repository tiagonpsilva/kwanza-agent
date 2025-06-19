# AI - Kwanza Agent

Sistema de Inteligência Artificial usando LangChain para processamento de notícias e interface conversacional.

## Tecnologias

- **LangChain** framework principal de IA
- **OpenAI/Anthropic** APIs externas
- **Ollama** modelos locais
- **ChromaDB** vector database para RAG
- **Redis** short-term memory

## Estrutura de Diretórios

```
ai/
├── langchain/         # Configurações LangChain
├── prompts/          # Templates de prompts
├── embeddings/       # Configuração de embeddings
├── vector_stores/    # ChromaDB e vector stores
├── agents/           # Agentes especializados
└── tools/            # Ferramentas customizadas
```

## Componentes Principais

### RAG (Retrieval-Augmented Generation)
- **ChromaDB**: Armazenamento de embeddings de notícias
- **Embeddings**: Geração com Ollama ou APIs externas
- **Retrieval**: Busca semântica por similaridade

### Agentes
- **News Agent**: Especializado em notícias de tecnologia
- **Classification Agent**: Categorização de notícias
- **Conversation Agent**: Interface conversacional

### Memory
- **Short-term**: Redis para contexto da sessão
- **Long-term**: ChromaDB para conhecimento persistente

## Configuração

### Modelos Locais (Ollama)
```bash
ollama pull llama2
ollama pull mistral
ollama serve
```

### APIs Externas
```bash
export OPENAI_API_KEY="sk-..."
export ANTHROPIC_API_KEY="sk-ant-..."
```

## Padrões de Desenvolvimento

### Prompts
- **Template Engine**: LangChain prompt templates
- **Few-shot Learning**: Exemplos para melhor performance
- **Chain of Thought**: Raciocínio estruturado

### Performance
- **Caching**: Redis para respostas frequentes
- **Batch Processing**: Otimização de embeddings
- **Model Selection**: Escolha automática baseada na complexidade