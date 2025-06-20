import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

// Atoms
import { H1, H2, H3, P, Lead, Small, Code } from '../components/atoms/Typography'
import { Logo } from '../components/atoms/Logo' 
import { FlameIcon, SunIcon, TargetIcon, EnergyIcon } from '../components/atoms/Icon'

// Molecules
import { InputField } from '../components/molecules/FormField'
import { NewsCard } from '../components/molecules/NewsCard'
import { NavigationItem } from '../components/molecules/NavigationItem'

// Organisms
import { Header } from '../components/organisms/Header'
import { LoginForm } from '../components/organisms/LoginForm'

import { Home, MessageCircle, Heart } from 'lucide-react'

const meta: Meta = {
  title: 'Kwanza Components',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Kwanza Agent Design System components showcase',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <H1>Main Page Title</H1>
      <H2>Section Title</H2>
      <H3>Subsection Title</H3>
      <Lead>This is lead text that introduces important content.</Lead>
      <P>This is regular paragraph text for body content.</P>
      <Small>Small text for captions and secondary information.</Small>
      <Code>const example = "code snippet"</Code>
    </div>
  ),
}

export const LogoShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Logo size="sm" />
        <p className="text-sm text-muted-foreground mt-2">Small</p>
      </div>
      <div className="text-center">
        <Logo size="md" />
        <p className="text-sm text-muted-foreground mt-2">Medium</p>
      </div>
      <div className="text-center">
        <Logo size="lg" />
        <p className="text-sm text-muted-foreground mt-2">Large</p>
      </div>
    </div>
  ),
}

export const Icons: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div className="text-center">
        <FlameIcon size="lg" />
        <p className="text-sm text-muted-foreground mt-2">Flame</p>
      </div>
      <div className="text-center">
        <SunIcon size="lg" />
        <p className="text-sm text-muted-foreground mt-2">Sun</p>
      </div>
      <div className="text-center">
        <TargetIcon size="lg" />
        <p className="text-sm text-muted-foreground mt-2">Target</p>
      </div>
      <div className="text-center">
        <EnergyIcon size="lg" />
        <p className="text-sm text-muted-foreground mt-2">Energy</p>
      </div>
    </div>
  ),
}

export const FormFields: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField
        label="Email"
        placeholder="your@email.com"
        type="email"
        id="email-demo"
        required
      />
      <InputField
        label="Password"
        placeholder="Enter password"
        type="password" 
        id="password-demo"
        required
      />
      <InputField
        label="Name with Error"
        placeholder="Enter name"
        type="text"
        id="name-error"
        error="This field is required"
        required
      />
    </div>
  ),
}

export const NewsCardDemo: Story = {
  render: () => (
    <div className="max-w-2xl">
      <NewsCard
        title="React 19 traz recursos revolucionários para desenvolvimento web"
        description="A última versão do React promete melhorar significativamente a performance e experiência do desenvolvedor."
        category="Frontend"
        timeAgo="2h"
        source="TechCrunch"
        readTime="3 min"
        imageUrl="https://picsum.photos/400/200?random=1"
        isFavorited={false}
        onFavorite={() => console.log('Favorited')}
        onShare={() => console.log('Shared')}
        onReadMore={() => console.log('Read more')}
      />
    </div>
  ),
}

export const Navigation: Story = {
  render: () => (
    <nav className="flex items-center space-x-1 p-4 bg-card rounded-lg border">
      <NavigationItem
        icon={Home}
        active={true}
        onClick={() => console.log('Home')}
      >
        Home
      </NavigationItem>
      <NavigationItem
        icon={MessageCircle}
        onClick={() => console.log('Chat')}
      >
        Chat
      </NavigationItem>
      <NavigationItem
        icon={Heart}
        onClick={() => console.log('Favorites')}
      >
        Favorites
      </NavigationItem>
    </nav>
  ),
}

export const HeaderDemo: Story = {
  render: () => (
    <div className="w-full">
      <Header 
        user={{
          name: 'João Silva',
          email: 'joao@exemplo.com'
        }}
        notificationCount={3}
        onNavigate={(route) => console.log('Navigate to:', route)}
        onLogout={() => console.log('Logout')}
      />
    </div>
  ),
}

export const LoginFormDemo: Story = {
  render: () => (
    <LoginForm
      onLogin={(credentials) => console.log('Login:', credentials)}
      onGoogleLogin={() => console.log('Google login')}
      onPhoneLogin={() => console.log('Phone login')}
      onForgotPassword={() => console.log('Forgot password')}
      onRegister={() => console.log('Register')}
    />
  ),
}