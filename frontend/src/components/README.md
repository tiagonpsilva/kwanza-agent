# Kwanza Agent - Atomic Design System

Este diretório contém o sistema de design baseado na metodologia **Atomic Design** para o projeto Kwanza Agent. O sistema é construído com **React + TypeScript**, **Tailwind CSS** e **Shadcn/UI**.

## 🏗️ Estrutura da Arquitetura

### Metodologia Atomic Design

O sistema segue a metodologia Atomic Design de Brad Frost, organizando componentes em 5 níveis hierárquicos:

```
Átomos → Moléculas → Organismos → Templates → Páginas
```

## 📁 Estrutura de Diretórios

```
src/components/
├── atoms/                  # Elementos básicos e indivisíveis
│   ├── Typography.tsx     # Componentes de texto (H1, H2, P, etc.)
│   ├── Icon.tsx          # Sistema de ícones Kwanza
│   └── Logo.tsx          # Logotipo da aplicação
├── molecules/             # Combinações simples de átomos
│   ├── FormField.tsx     # Campos de formulário com validação
│   ├── NavigationItem.tsx # Itens de navegação
│   └── NewsCard.tsx      # Cards de notícias
├── organisms/             # Componentes complexos
│   ├── Header.tsx        # Cabeçalho da aplicação
│   ├── Footer.tsx        # Rodapé da aplicação
│   └── LoginForm.tsx     # Formulário de login
├── templates/             # Layouts de página
│   ├── LandingPageTemplate.tsx  # Template da landing page
│   ├── DashboardTemplate.tsx    # Template do dashboard
│   ├── ChatTemplate.tsx        # Template do chat
│   └── SettingsTemplate.tsx    # Template de configurações
├── ui/                    # Componentes Shadcn/UI
└── index.ts              # Exportações centralizadas
```

## ⚛️ Átomos (Atoms)

### Typography (`atoms/Typography.tsx`)
Componentes básicos de texto com tipografia consistente:

```tsx
import { H1, H2, H3, H4, P, Small, Muted, Lead, Code } from "@/components/atoms/Typography"

// Uso
<H1>Título Principal</H1>
<P>Parágrafo de texto</P>
<Small>Texto pequeno</Small>
```

**Componentes disponíveis:**
- `H1`, `H2`, `H3`, `H4` - Títulos hierárquicos
- `P` - Parágrafo padrão
- `Small` - Texto pequeno (muted)
- `Muted` - Texto muito pequeno
- `Lead` - Texto de destaque
- `Code` - Texto em código

### Icon (`atoms/Icon.tsx`)
Sistema de ícones baseado em Lucide React com variações específicas do Kwanza:

```tsx
import { Icon, KwanzaIcon, FlameIcon, FavoriteIcon } from "@/components/atoms/Icon"

// Uso
<Icon icon={MessageCircle} size="md" />
<KwanzaIcon size="lg" />
<FlameIcon className="text-primary" />
```

**Tamanhos disponíveis:** `sm`, `md`, `lg`, `xl`

### Logo (`atoms/Logo.tsx`)
Componente do logotipo com variações de tamanho e texto:

```tsx
import { Logo } from "@/components/atoms/Logo"

// Uso
<Logo size="lg" showText={true} />
<Logo size="sm" showText={false} />
```

## 🧬 Moléculas (Molecules)

### FormField (`molecules/FormField.tsx`)
Campos de formulário com validação e estados de erro:

```tsx
import { InputField, TextareaField } from "@/components/molecules/FormField"

// Uso
<InputField
  label="Email"
  id="email"
  type="email"
  value={email}
  onChange={setEmail}
  error={emailError}
  required
/>
```

### NavigationItem (`molecules/NavigationItem.tsx`)
Itens de navegação com suporte a badges e estados ativos:

```tsx
import { NavigationItem, NavigationItemWithBadge } from "@/components/molecules/NavigationItem"

// Uso
<NavigationItem icon={Home} active={true}>Início</NavigationItem>
<NavigationItemWithBadge icon={MessageCircle} badge={3} showBadge>Chat</NavigationItemWithBadge>
```

### NewsCard (`molecules/NewsCard.tsx`)
Cards de notícias com variantes completa e compacta:

```tsx
import { NewsCard, NewsCardCompact } from "@/components/molecules/NewsCard"

// Uso
<NewsCard
  title="Título da notícia"
  description="Descrição"
  category="IA"
  timeAgo="2h"
  source="TechCrunch"
  imageUrl="/image.jpg"
  isFavorited={false}
  onFavorite={() => {}}
  onShare={() => {}}
/>
```

## 🦠 Organismos (Organisms)

### Header (`organisms/Header.tsx`)
Cabeçalho da aplicação com navegação, menu do usuário e tema:

```tsx
import { Header } from "@/components/organisms/Header"

// Uso
<Header 
  user={user}
  notificationCount={3}
  onNavigate={onNavigate}
  onLogout={onLogout}
/>
```

### Footer (`organisms/Footer.tsx`)
Rodapé com links, redes sociais e informações de crédito:

```tsx
import { Footer } from "@/components/organisms/Footer"

// Uso
<Footer />
```

### LoginForm (`organisms/LoginForm.tsx`)
Formulário completo de login com validação e autenticação social:

```tsx
import { LoginForm } from "@/components/organisms/LoginForm"

// Uso
<LoginForm
  onLogin={handleLogin}
  onGoogleLogin={handleGoogleLogin}
  onPhoneLogin={handlePhoneLogin}
  isLoading={isLoading}
  error={error}
/>
```

## 📄 Templates

### LandingPageTemplate (`templates/LandingPageTemplate.tsx`)
Template completo da página de landing com seções de hero, funcionalidades e CTA:

```tsx
import { LandingPageTemplate } from "@/components/templates/LandingPageTemplate"

// Uso
<LandingPageTemplate
  onGetStarted={handleGetStarted}
  onLogin={handleLogin}
  onLearnMore={handleLearnMore}
/>
```

### DashboardTemplate (`templates/DashboardTemplate.tsx`)
Template do dashboard principal com notícias, estatísticas e sidebar:

```tsx
import { DashboardTemplate } from "@/components/templates/DashboardTemplate"

// Uso
<DashboardTemplate
  user={user}
  onNavigate={onNavigate}
  onLogout={onLogout}
/>
```

### ChatTemplate (`templates/ChatTemplate.tsx`)
Template da interface de chat conversacional com mensagens e sugestões:

```tsx
import { ChatTemplate } from "@/components/templates/ChatTemplate"

// Uso
<ChatTemplate
  user={user}
  onNavigate={onNavigate}
  onLogout={onLogout}
/>
```

### SettingsTemplate (`templates/SettingsTemplate.tsx`)
Template de configurações com abas para perfil, notificações, preferências e segurança:

```tsx
import { SettingsTemplate } from "@/components/templates/SettingsTemplate"

// Uso
<SettingsTemplate
  user={user}
  onNavigate={onNavigate}
  onLogout={onLogout}
/>
```

## 🎨 Design System

### Cores e Tema
O sistema usa variáveis CSS do Tailwind com suporte a tema claro/escuro:

- **Primary**: Cor principal do Kwanza (laranja/terracota)
- **Secondary**: Cor secundária 
- **Accent**: Cor de destaque
- **Muted**: Texto secundário
- **Destructive**: Estados de erro
- **Success**: Estados de sucesso

### Tipografia
Hierarquia tipográfica consistente baseada em Tailwind:

- **H1**: `text-4xl font-bold tracking-tight`
- **H2**: `text-3xl font-semibold`
- **H3**: `text-2xl font-medium`
- **P**: `text-base leading-relaxed`

### Espaçamento
Sistema de espaçamento baseado em múltiplos de 4px:

- **Gap/Padding**: `2`, `4`, `6`, `8`, `12`, `16`, `20`, `24`
- **Margin**: `2`, `4`, `6`, `8`, `12`, `16`, `20`, `24`

## 🛠️ Desenvolvimento

### Adicionando Novos Componentes

1. **Átomos**: Elementos básicos reutilizáveis
2. **Moléculas**: Combinações simples de átomos
3. **Organismos**: Componentes complexos com lógica
4. **Templates**: Layouts de página específicos

### Convenções de Código

- **TypeScript obrigatório** com tipagem explícita
- **Props interfaces** bem definidas
- **Forwarded refs** quando necessário
- **Acessibilidade** (ARIA labels, keyboard navigation)
- **Responsividade** mobile-first

### Exemplo de Componente

```tsx
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface MyComponentProps {
  children: ReactNode
  variant?: "default" | "accent"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function MyComponent({
  children,
  variant = "default",
  size = "md",
  className
}: MyComponentProps) {
  return (
    <div className={cn(
      "base-classes",
      variant === "accent" && "accent-classes",
      size === "lg" && "large-classes",
      className
    )}>
      {children}
    </div>
  )
}
```

## 📚 Recursos Adicionais

- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [Shadcn/UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)

## 🚀 Deploy e Build

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Verificação de tipos
npm run lint

# Testes
npm run test
```

---

🎨 **Desenvolvido com ❤️ para o Kwanza Agent** - Sistema de design escalável e reutilizável seguindo as melhores práticas de desenvolvimento frontend.