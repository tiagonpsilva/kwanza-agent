# Frontend - Kwanza Agent

Aplicação React.js com TypeScript seguindo estratégia frontend-first.

## Tecnologias

- **React.js 18+** com TypeScript
- **TailwindCSS** + Shadcn/UI para styling
- **Vite** como bundler
- **React Router** para roteamento
- **React Hook Form** para formulários
- **Cypress** para testes E2E
- **Storybook** para documentação de componentes

## Estrutura de Diretórios

```
frontend/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── hooks/         # Custom hooks
│   ├── utils/         # Funções utilitárias
│   ├── services/      # APIs e serviços externos
│   ├── contexts/      # Context providers
│   ├── assets/        # Recursos estáticos
│   └── styles/        # Estilos globais
├── public/            # Arquivos públicos
├── tests/             # Testes organizados por tipo
├── cypress/           # Testes E2E
└── storybook-static/  # Build do Storybook
```

## Scripts de Desenvolvimento

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run test         # Executar testes
npm run test:e2e     # Testes E2E com Cypress
npm run storybook    # Executar Storybook
npm run lint         # Verificar código
```

## Padrões de Desenvolvimento

### Componentes
- **Atomic Design**: Atoms → Molecules → Organisms → Templates → Pages
- **TypeScript**: Tipagem obrigatória para todas as props
- **Styled Components**: TailwindCSS + componentes Shadcn/UI

### Testes
- **Unit Tests**: React Testing Library
- **Integration Tests**: Componentes + hooks
- **E2E Tests**: Cypress para fluxos completos

### Performance
- **Code Splitting**: Lazy loading de páginas
- **Bundle Analysis**: Webpack Bundle Analyzer
- **PWA**: Progressive Web App features