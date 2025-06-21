# Cypress E2E Tests - Kwanza Agent

## 📋 Visão Geral

Esta pasta contém todos os testes end-to-end (E2E) da aplicação Kwanza Agent, configurados com Cypress para garantir a qualidade e funcionamento correto dos fluxos principais.

## 🏗️ Estrutura

```
cypress/
├── e2e/                    # Testes end-to-end
│   ├── 01-basic-navigation.cy.ts    # Navegação básica
│   ├── 02-authentication.cy.ts     # Autenticação e login
│   ├── 03-theme-toggle.cy.ts       # Alternância de tema
│   ├── 04-loading-states.cy.ts     # Estados de loading e erro
│   └── 05-full-user-journey.cy.ts  # Jornada completa do usuário
├── fixtures/               # Dados de teste
│   ├── users.json         # Usuários de teste
│   └── news.json          # Notícias de exemplo
├── support/                # Configurações e comandos
│   ├── commands.ts        # Comandos customizados
│   ├── e2e.ts            # Configuração E2E
│   └── component.ts      # Configuração componentes
└── README.md             # Esta documentação
```

## 🚀 Comandos Disponíveis

### Executar Testes

```bash
# Abrir interface do Cypress
npm run cypress:open
npm run e2e:open

# Executar testes em modo headless
npm run cypress:run
npm run e2e

# Instalar binários do Cypress
npm run cypress:install
```

### Scripts de Desenvolvimento

```bash
# Executar aplicação em modo dev (necessário para testes)
npm run dev

# Executar testes enquanto desenvolve
npm run cypress:open
```

## 🧪 Suítes de Teste

### 1. Navegação Básica (`01-basic-navigation.cy.ts`)
- ✅ Carregamento da página inicial
- ✅ Navegação entre páginas
- ✅ Página 404 personalizada
- ✅ Responsividade em diferentes dispositivos

### 2. Autenticação (`02-authentication.cy.ts`)
- ✅ Login com credenciais válidas
- ✅ Tratamento de erro com credenciais inválidas
- ✅ Validação de campos obrigatórios
- ✅ Mostrar/ocultar senha
- ✅ Logout completo
- ✅ Estados de loading durante autenticação

### 3. Alternância de Tema (`03-theme-toggle.cy.ts`)
- ✅ Toggle entre tema claro e escuro
- ✅ Persistência da preferência
- ✅ Aplicação em todas as páginas
- ✅ Transições suaves
- ✅ Responsividade do toggle

### 4. Estados de Loading e Erro (`04-loading-states.cy.ts`)
- ✅ Loading spinners em diferentes tamanhos
- ✅ Botões com estado de loading
- ✅ Skeleton loaders para conteúdo
- ✅ Estados de erro (rede, servidor, genérico)
- ✅ Toast notifications
- ✅ Hooks de async state
- ✅ Overlay de loading global

### 5. Jornada Completa (`05-full-user-journey.cy.ts`)
- ✅ Fluxo completo: landing → login → dashboard → settings
- ✅ Jornada de erro e recuperação
- ✅ Testes básicos de acessibilidade
- ✅ Verificação de performance
- ✅ Funcionamento offline básico

## 🛠️ Comandos Customizados

### Autenticação
```typescript
// Login com credenciais padrão
cy.login()

// Login com credenciais específicas
cy.login('user@test.com', 'password')

// Logout
cy.logout()
```

### Tema
```typescript
// Alternar tema
cy.toggleTheme()

// Verificar modo escuro
cy.checkDarkMode()

// Verificar modo claro
cy.checkLightMode()
```

### Loading States
```typescript
// Verificar estado de loading
cy.checkLoadingState('[data-cy="loading-spinner"]')
```

### Responsividade
```typescript
// Testar em diferentes viewports
cy.testResponsive('[data-cy="header"]')
```

## 📊 Data Attributes para Testes

Todos os elementos testáveis usam o padrão `data-cy`:

```html
<!-- Elementos de navegação -->
<div data-cy="landing-page">
<a data-cy="login-link">
<img data-cy="logo">

<!-- Formulários -->
<input data-cy="email-input">
<input data-cy="password-input">
<button data-cy="login-button">

<!-- Estados -->
<div data-cy="loading-spinner">
<div data-cy="error-message">
<div data-cy="success-toast">

<!-- Componentes -->
<div data-cy="theme-toggle">
<div data-cy="user-menu">
<div data-cy="dashboard">
```

## ⚙️ Configuração

### Base URL
- **Desenvolvimento**: `http://localhost:5173`
- **Produção**: Configurar no `cypress.config.ts`

### Variáveis de Ambiente
```typescript
// cypress.config.ts
env: {
  apiUrl: 'http://localhost:8000',
  testUser: 'admin@kwanza.com',
  testPassword: '123456',
}
```

### Timeouts
- **Comando padrão**: 10 segundos
- **Requisição**: 10 segundos
- **Resposta**: 10 segundos

## 🔧 Troubleshooting

### Problema: Testes falham por elemento não encontrado
**Solução**: Verificar se o `data-cy` está implementado no componente

### Problema: Timeout em comandos
**Solução**: Aumentar timeout específico ou verificar performance da aplicação

### Problema: Erro de autenticação
**Solução**: Verificar se o backend mock está funcionando corretamente

### Problema: Testes flaky (instáveis)
**Solução**: Adicionar `cy.wait()` ou usar `cy.intercept()` para controlar requisições

## 📝 Boas Práticas

### 1. Data Attributes
- Sempre usar `data-cy` para seletores de teste
- Não depender de classes CSS ou IDs que podem mudar

### 2. Comandos Customizados
- Criar comandos reutilizáveis para ações comuns
- Manter comandos simples e focados

### 3. Fixtures
- Usar dados de teste consistentes
- Manter fixtures organizadas por funcionalidade

### 4. Interceptação
- Mockar APIs para testes determinísticos
- Simular cenários de erro e sucesso

### 5. Aguardar Elementos
- Usar `cy.should()` em vez de `cy.wait()` fixo
- Aguardar elementos específicos, não tempos arbitrários

## 🚀 Próximos Passos

1. **Testes de Componente**: Implementar testes unitários de componentes
2. **Integração CI/CD**: Configurar execução automática no GitHub Actions
3. **Relatórios**: Gerar relatórios de cobertura e resultados
4. **Testes de Performance**: Implementar Lighthouse CI
5. **Testes Visuais**: Adicionar testes de regressão visual

## 📚 Recursos

- [Documentação Cypress](https://docs.cypress.io/)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands)
- [Intercept API](https://docs.cypress.io/api/commands/intercept)