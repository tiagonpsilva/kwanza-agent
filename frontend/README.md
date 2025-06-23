# Frontend - Kwanza Agent

Aplicação React.js com TypeScript seguindo estratégia frontend-first com design system inspirado na cultura africana.

## ✅ Configuração Completa

- ✅ **React.js 19+** com TypeScript
- ✅ **Vite** como bundler (moderno e rápido)
- ✅ **TailwindCSS v3** + plugins (@forms, @typography)
- ✅ **Shadcn/UI** configurado com componentes base
- ✅ **Design System** completo com identidade Kwanza Agent
- ✅ **Theme System** (Light/Dark/System) com Context API
- ✅ **ESLint + Prettier** configurados
- ✅ **Hot Reload** funcionando
- ✅ **Build de produção** testado e funcionando

## 🎨 Kwanza Agent Design System

### Inspiração Visual
- **🌅 Pôr do sol africano** - Cores quentes (laranja, dourado, terra)
- **🔥 Cultura Kwanza** - Vibrante e acolhedora
- **💻 Modernidade tecnológica** - Interface limpa e acessível

### Paleta de Cores
- **Primary**: Kwanza Flame Orange (#FF5722)
- **Accent**: African Gold (#E6B800)  
- **Secondary**: Warm Beige (#F5F2ED)
- **Success**: Natural Green (#228B22)
- **Warning**: Amber Alert (#FFB300)
- **Destructive**: Warm Red (#F44336)

### Features do Design System
- ✅ **CSS Variables** para theming dinâmico
- ✅ **Dark Mode** com transição suave
- ✅ **Acessibilidade** WCAG 2.1 AA compliant
- ✅ **Mobile First** responsive design
- ✅ **Typography** scale com fonte Inter
- ✅ **Semantic Colors** para feedback

## 🚀 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento (http://localhost:5173)
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Verificar código
npm run lint:fix     # Corrigir problemas automaticamente
npm run format       # Formatar código com Prettier
npm test             # Executar testes (placeholder)
```

## 🧪 Como Testar

### 1. Servidor de Desenvolvimento
```bash
npm run dev
# Acesse: http://localhost:5173
# Deve exibir: Design System Demo completo
```

### 2. Teste do Theme System
- **Toggle de tema** no header (ícone sol/lua)
- **3 opções**: Light, Dark, System
- **Persistência** em localStorage
- **Transição** suave entre temas

### 3. Build de Produção
```bash
npm run build
# Deve gerar pasta dist/ sem erros
# Assets: CSS (~26KB) + JS (~320KB) + HTML
```

### 4. Design System Funcionando
- **Paleta de cores** africana implementada
- **Components showcase** com todas as variações
- **Typography** hierarchy demonstrada
- **Alerts** semânticas (success, warning, error)
- **Responsive** layout em todos os breakpoints

## 🎯 Estrutura de Arquivos

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/                    # Componentes Shadcn/UI
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── alert.tsx
│   │   │   └── dropdown-menu.tsx
│   │   ├── ThemeToggle.tsx        # Toggle de tema
│   │   └── DesignSystemDemo.tsx   # Demo completa
│   ├── contexts/
│   │   └── ThemeContext.tsx       # Context para temas
│   ├── lib/
│   │   └── utils.ts               # Utilitários (cn function)
│   ├── App.tsx                    # Componente principal
│   ├── index.css                  # CSS Variables + Design System
│   └── main.tsx                   # Entry point + ThemeProvider
├── components.json                # Configuração Shadcn/UI
├── tailwind.config.js             # TailwindCSS + cores customizadas
├── tsconfig.json                  # TypeScript + path mapping
├── vite.config.ts                 # Vite + path aliases
├── DESIGN_SYSTEM.md               # Documentação completa do design
└── README.md                      # Este arquivo
```

## 💡 Tecnologias e Configurações

### Theme System
```tsx
// Context Provider
<ThemeProvider>
  <App />
</ThemeProvider>

// Hook de uso
const { theme, setTheme, actualTheme } = useTheme()

// Component toggle
<ThemeToggle />
```

### Design Tokens (CSS Variables)
```css
/* Light Theme */
--primary: 24 95% 53%;              /* Kwanza Orange */
--accent: 45 93% 47%;               /* African Gold */
--background: 39 100% 98%;          /* Warm Ivory */

/* Dark Theme */
--primary: 24 95% 58%;              /* Brighter Orange */
--background: 12 15% 8%;            /* Deep Charcoal */
```

### Components Usage
```tsx
// Buttons com novas cores
<Button>Primary Orange</Button>
<Button variant="secondary">Warm Beige</Button>

// Alerts semânticas
<Alert className="border-success bg-success/10">
  <AlertTitle className="text-success">Success!</AlertTitle>
</Alert>

// Theme toggle
<ThemeToggle />
```

### Dependencies
```json
{
  "dependencies": {
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-icons": "^1.3.2",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.518.0",
    "tailwind-merge": "^3.3.1"
  }
}
```

## 🎨 Design System Features

### Inspiração Cultural
- **Cores quentes** inspiradas no pôr do sol africano
- **Paleta vibrante** que remete à cultura Kwanza
- **Contraste adequado** mantendo acessibilidade
- **Identidade única** diferenciada de outros produtos

### Acessibilidade
- **WCAG 2.1 AA** compliance
- **Radix UI** primitives acessíveis
- **Keyboard navigation** completa
- **Screen reader** support
- **Focus management** otimizado

### Performance
- **CSS Variables** zero runtime overhead
- **Tree shaking** componentes não utilizados
- **Lazy loading** preparado
- **Bundle optimizado**: 26KB CSS + 320KB JS

## 🔄 Próximos Passos

Com o Design System completo, as próximas implementações serão:

1. **PRO-15**: Sistema de design components expandido (Atomic Design)
2. **PRO-16**: Protótipo navegável com design aplicado
3. **PRO-17**: Wireframes responsivos
4. **PRO-24**: Configuração Cypress E2E
5. **PRO-25**: Storybook para documentação de componentes

## 🚀 Frontend-First Strategy

Esta configuração implementa a estratégia frontend-first completa:
- ✅ **Design System** próprio com identidade cultural
- ✅ **Theme System** robusto (light/dark/system)
- ✅ **Componentes base** prontos para expansão
- ✅ **Acessibilidade** garantida desde o início
- ✅ **Performance** otimizada
- ✅ **Developer Experience** premium
- ✅ **Documentação** completa para escalonamento

## 📚 Documentação

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Documentação completa do design system
- **[Shadcn/UI Docs](https://ui.shadcn.com/)** - Documentação dos componentes base
- **[TailwindCSS Docs](https://tailwindcss.com/)** - Documentação do framework CSS

---

**🎨 Design System inspirado na cultura africana**  
**⚡ Sistema moderno e escalável** | **Status**: ✅ Pronto para implementação de features