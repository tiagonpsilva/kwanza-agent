# Kwanza Agent Design System

Design system inspirado pela riqueza cultural africana e modernidade tecnológica.

## 🎨 Filosofia Visual

### Inspiração
- **Pôr do sol africano** - Cores quentes que remetem à terra vermelha e luz dourada
- **Cultura Kwanza** - Celebração da herança africana com cores vibrantes
- **Modernidade tecnológica** - Interface limpa e acessível

### Personalidade da Marca
- **Calorosa** - Cores que transmitem acolhimento
- **Confiável** - Contraste adequado e acessibilidade
- **Inovadora** - Design moderno com toques culturais
- **Inclusiva** - Suporte a dark mode e acessibilidade

## 🌈 Paleta de Cores

### Brand Colors

#### Primary - Kwanza Flame Orange
```css
--primary: 24 95% 53%        /* #FF5722 */
--primary-foreground: 0 0% 100%   /* White text */
```
**Uso:** Botões principais, links, CTAs, elementos de destaque

#### Accent - African Gold
```css
--accent: 45 93% 47%         /* #E6B800 */
--accent-foreground: 12 15% 15%   /* Dark brown text */
```
**Uso:** Highlights, badges importantes, elementos secundários

#### Secondary - Warm Beige
```css
--secondary: 39 39% 92%      /* #F5F2ED */
--secondary-foreground: 12 15% 15%  /* Deep brown */
```
**Uso:** Botões secundários, backgrounds alternativos

### Semantic Colors

#### Success - Natural Green
```css
--success: 142 76% 36%       /* #228B22 */
--success-foreground: 0 0% 100%   /* White */
```

#### Warning - Amber Alert
```css
--warning: 43 96% 56%        /* #FFB300 */
--warning-foreground: 12 15% 15%  /* Dark brown */
```

#### Destructive - Warm Red
```css
--destructive: 0 84% 60%     /* #F44336 */
--destructive-foreground: 0 0% 100%  /* White */
```

### Surface Colors

#### Light Theme
```css
--background: 39 100% 98%    /* Warm ivory #FFFCF5 */
--foreground: 12 15% 15%     /* Deep brown #2D1B0F */
--card: 0 0% 100%           /* Pure white #FFFFFF */
--muted: 39 27% 94%         /* Light warm gray #F7F5F3 */
--border: 39 20% 85%        /* Warm light border #E8E0D6 */
```

#### Dark Theme
```css
--background: 12 15% 8%      /* Deep charcoal brown #1A1411 */
--foreground: 39 85% 92%     /* Warm light cream #FFF8E7 */
--card: 12 15% 10%          /* Slightly lighter charcoal #211C18 */
--muted: 12 15% 15%         /* Dark muted brown #2D2520 */
--border: 12 15% 22%        /* Dark border #3D342C */
```

## 📝 Typography

### Font Stack
```css
font-family: 'Inter', system-ui, sans-serif;
```

### Scale
- **Heading 1**: 2.25rem (36px) - font-bold
- **Heading 2**: 1.875rem (30px) - font-semibold  
- **Heading 3**: 1.5rem (24px) - font-medium
- **Heading 4**: 1.25rem (20px) - font-medium
- **Body**: 1rem (16px) - font-normal
- **Small**: 0.875rem (14px) - font-normal
- **Extra Small**: 0.75rem (12px) - font-normal

### Usage
```tsx
<h1 className="text-4xl font-bold text-foreground">Heading 1</h1>
<h2 className="text-3xl font-semibold text-foreground">Heading 2</h2>
<p className="text-base text-foreground">Body text</p>
<p className="text-sm text-muted-foreground">Secondary text</p>
```

## 🧩 Componentes

### Buttons

#### Variações
```tsx
<Button>Primary</Button>                    // Orange background
<Button variant="secondary">Secondary</Button>  // Beige background  
<Button variant="outline">Outline</Button>      // Transparent with border
<Button variant="ghost">Ghost</Button>          // Transparent
<Button variant="link">Link</Button>            // Text style
<Button variant="destructive">Destructive</Button> // Red background
```

#### Tamanhos
```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Alerts

#### Success
```tsx
<Alert className="border-success bg-success/10">
  <Check className="h-4 w-4 text-success" />
  <AlertTitle className="text-success">Success!</AlertTitle>
  <AlertDescription>Operação realizada com sucesso.</AlertDescription>
</Alert>
```

#### Warning
```tsx
<Alert className="border-warning bg-warning/10">
  <AlertTriangle className="h-4 w-4 text-warning" />
  <AlertTitle className="text-warning">Atenção</AlertTitle>
  <AlertDescription>Verificar configurações.</AlertDescription>
</Alert>
```

#### Error
```tsx
<Alert variant="destructive">
  <X className="h-4 w-4" />
  <AlertTitle>Erro</AlertTitle>
  <AlertDescription>Falha na operação.</AlertDescription>
</Alert>
```

### Cards
```tsx
<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição opcional</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Conteúdo */}
  </CardContent>
  <CardFooter>
    {/* Ações */}
  </CardFooter>
</Card>
```

### Badges
```tsx
<Badge variant="default">Default</Badge>      // Primary color
<Badge variant="secondary">Secondary</Badge>  // Beige color
<Badge variant="outline">Outline</Badge>      // Transparent with border
<Badge variant="destructive">Error</Badge>    // Red color
```

## 🌙 Theme System

### Context Provider
```tsx
import { ThemeProvider } from '@/contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      {/* App content */}
    </ThemeProvider>
  )
}
```

### Theme Toggle Component
```tsx
import { ThemeToggle } from '@/components/ThemeToggle'

// Dropdown com opções: Light, Dark, System
<ThemeToggle />
```

### Using Theme Hook
```tsx
import { useTheme } from '@/contexts/ThemeContext'

function Component() {
  const { theme, setTheme, actualTheme } = useTheme()
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Actual theme: {actualTheme}</p>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
```

## 📐 Spacing & Layout

### Design Tokens
```css
--radius: 0.5rem;  /* 8px - Border radius padrão */
```

### Container
```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}
```

### Grid Breakpoints
- **sm**: 640px
- **md**: 768px  
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1400px

## ♿ Acessibilidade

### Contraste
- **AA Compliance**: Todas as combinações de cores atendem WCAG 2.1 AA
- **Texto pequeno**: Mínimo 4.5:1
- **Texto grande**: Mínimo 3:1

### Componentes
- **Radix UI**: Todos os componentes são baseados em primitives acessíveis
- **ARIA**: Suporte completo a screen readers
- **Keyboard Navigation**: Navegação por teclado em todos os componentes

### Focus Ring
```css
--ring: 24 95% 53%;  /* Orange focus ring matching primary */
```

## 🛠️ Implementação Técnica

### CSS Variables
O sistema usa CSS Variables (Custom Properties) para máxima flexibilidade:

```css
:root {
  --primary: 24 95% 53%;
  --primary-foreground: 0 0% 100%;
  /* ... */
}

.dark {
  --primary: 24 95% 58%;  /* Slightly brighter for dark theme */
  /* ... */
}
```

### TailwindCSS Integration
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        // ...
      }
    }
  }
}
```

### Theme Persistence
- **localStorage**: Preferência do usuário persistida
- **System Preference**: Detecção automática de dark/light mode
- **Media Query**: Resposta a mudanças no sistema

## 📱 Responsive Design

### Mobile First
- Design otimizado para mobile primeiro
- Progressive enhancement para desktop
- Touch-friendly targets (mínimo 44px)

### Breakpoint Strategy
```tsx
// Mobile first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

## 🚀 Performance

### Optimizations
- **Tree Shaking**: Apenas componentes usados são incluídos
- **CSS Variables**: Zero runtime overhead
- **Radix UI**: Componentes otimizados
- **Bundle Size**: ~25KB CSS + ~320KB JS (gzipped)

### Build Stats
```
CSS: 25.58KB (5.60KB gzipped)
JS:  320.49KB (100.51KB gzipped)
```

## 📚 Uso Recomendado

### Do's ✅
- Use cores semânticas para feedback (success, warning, destructive)
- Mantenha contraste adequado em customizações
- Teste em ambos os temas (light/dark)
- Use componentes Radix UI como base
- Siga a hierarquia tipográfica estabelecida

### Don'ts ❌
- Não crie cores customizadas sem considerar acessibilidade
- Não ignore o suporte a dark mode
- Não hardcode cores - use as CSS variables
- Não quebre a consistência visual
- Não ignore navegação por teclado

---

**🎨 Design System desenvolvido com inspiração na cultura africana**  
**🤖 Implementado com Claude Code**