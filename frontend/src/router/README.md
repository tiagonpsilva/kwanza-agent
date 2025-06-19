# Sistema de Roteamento - Kwanza Agent

Sistema de navegação e roteamento implementado com **React Router v6** e TypeScript, incluindo breadcrumbs, páginas de erro e hook customizado para navegação tipada.

## 🗺️ **Estrutura de Rotas**

### **Rotas Principais**

```typescript
ROUTES = {
  HOME: "/",           // Landing page
  LOGIN: "/login",     // Página de login
  DASHBOARD: "/dashboard", // Dashboard principal
  CHAT: "/chat",       // Interface de chat
  SETTINGS: "/settings", // Configurações
  PROFILE: "/profile",   // Perfil do usuário
  FAVORITES: "/favorites" // Notícias favoritas
}
```

### **Rotas de Erro**

- **404 (Not Found)**: `*` - Captura todas as rotas não definidas
- **Error Boundary**: Captura erros de runtime em qualquer rota

## 📁 **Estrutura de Arquivos**

```
src/router/
├── routes.tsx      # Configuração das rotas
├── index.ts        # Exportações centralizadas
└── README.md       # Esta documentação

src/pages/
├── LandingPage.tsx    # Página inicial
├── LoginPage.tsx      # Login e autenticação
├── DashboardPage.tsx  # Dashboard principal
├── ChatPage.tsx       # Interface de chat
├── SettingsPage.tsx   # Configurações
├── NotFoundPage.tsx   # Página 404
├── ErrorPage.tsx      # Página de erro genérica
└── index.ts           # Exportações de páginas
```

## 🎣 **Hook Personalizado**

### **useAppNavigation**

Hook customizado que fornece navegação tipada e métodos auxiliares:

```typescript
import { useAppNavigation } from "@/hooks/useAppNavigation"

function MyComponent() {
  const { 
    navigateTo,      // Navegação genérica
    goHome,          // Ir para home
    goToLogin,       // Ir para login
    goToDashboard,   // Ir para dashboard
    goToChat,        // Ir para chat
    goToSettings,    // Ir para configurações
    goBack,          // Voltar
    logout,          // Fazer logout
    ROUTES           // Constantes de rotas
  } = useAppNavigation()

  return (
    <div>
      <button onClick={goHome}>Home</button>
      <button onClick={() => navigateTo("/custom-route")}>Custom</button>
      <button onClick={logout}>Sair</button>
    </div>
  )
}
```

## 🍞 **Breadcrumbs**

### **Configuração Automática**

Os breadcrumbs são gerados automaticamente baseados na URL atual:

```typescript
// URL: /dashboard
// Breadcrumbs: Início > Dashboard

// URL: /settings
// Breadcrumbs: Início > Configurações
```

### **Uso nos Templates**

```typescript
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs"

function MyTemplate() {
  return (
    <main>
      <Breadcrumbs className="mb-6" />
      {/* Resto do conteúdo */}
    </main>
  )
}
```

### **Configuração Personalizada**

Para páginas complexas, use configurações específicas:

```typescript
import { Breadcrumbs, BREADCRUMB_CONFIGS } from "@/components/molecules/Breadcrumbs"

<Breadcrumbs items={BREADCRUMB_CONFIGS.SETTINGS_PROFILE} />
```

## 🎯 **Páginas Implementadas**

### **LandingPage** (`/`)
- Usa `LandingPageTemplate`
- Ponto de entrada da aplicação
- Botões para login e cadastro

### **LoginPage** (`/login`)
- Usa `LoginForm` organism
- Autenticação mock implementada
- Credenciais de teste: `admin@kwanza.com` / `123456`
- Redirecionamento para dashboard após login

### **DashboardPage** (`/dashboard`)
- Usa `DashboardTemplate`
- Página principal da aplicação
- Requer autenticação (futuro)

### **ChatPage** (`/chat`)
- Usa `ChatTemplate`
- Interface conversacional
- Mensagens mock implementadas

### **SettingsPage** (`/settings`)
- Usa `SettingsTemplate`
- Configurações multi-abas
- Perfil, notificações, preferências

### **NotFoundPage** (404)
- Página personalizada para rotas não encontradas
- Links para páginas principais
- Botão de voltar

### **ErrorPage** (Error Boundary)
- Captura erros de runtime
- Exibe detalhes do erro
- Botões de recuperação

## 🔐 **Autenticação (Mock)**

### **Estado Atual**
- Autenticação simulada com credenciais fixas
- Sem persistência de sessão
- Redirecionamento baseado em estado mock

### **Implementação Futura**
- Context API para estado global de auth
- JWT tokens e refresh tokens
- Proteção de rotas com HOC ou guards
- Persistência no localStorage/sessionStorage

```typescript
// Futuro: Proteção de rotas
function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  return children
}
```

## 📱 **Responsividade**

- Todas as páginas são **mobile-first**
- Breadcrumbs adaptáveis em telas pequenas
- Navegação otimizada para touch devices

## 🎨 **Integração com Design System**

- Todas as páginas usam os **templates criados no PRO-15**
- Consistência visual através dos componentes Atomic Design
- Tema claro/escuro em todas as rotas

## 🔄 **Transições e UX**

### **Implementadas**
- Navegação suave entre páginas
- Estados de loading durante autenticação
- Feedback visual em ações

### **Futuras Melhorias**
- Transições animadas entre rotas
- Lazy loading de páginas
- Prefetch de rotas críticas
- Breadcrumb animations

## 🛠️ **Configuração e Setup**

### **Dependências**
```json
{
  "react-router-dom": "^6.x",
  "@types/react-router-dom": "^6.x"
}
```

### **Configuração no App.tsx**
```typescript
import { RouterProvider } from "react-router-dom"
import { router } from "@/router/routes"

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
```

## 🧪 **Testes (Futuro)**

### **Sugestões de Testes**
- Navegação entre rotas
- Renderização correta das páginas
- Breadcrumbs dinâmicos
- Tratamento de erros 404
- Hook useAppNavigation

### **Ferramentas Recomendadas**
- React Testing Library
- Cypress (E2E)
- Jest (Unit tests)

## 📊 **Métricas e Analytics (Futuro)**

- Tracking de navegação entre páginas
- Tempo de permanência por rota
- Bounce rate da landing page
- Conversão login → dashboard

---

**✅ Status**: Implementação completa e funcional
**🔄 Próximos passos**: Autenticação real, lazy loading, testes