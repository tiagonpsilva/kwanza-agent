import { useState } from "react"
import { Header } from "@/components/organisms/Header"
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InputField, TextareaField } from "@/components/molecules/FormField"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { H2, P } from "@/components/atoms/Typography"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Key,
  Trash2,
  Save,
  Upload,
  Eye,
  EyeOff
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SettingsTemplateProps {
  user: {
    name: string
    email: string
    avatar?: string
  }
  onNavigate?: (route: string) => void
  onLogout?: () => void
  className?: string
}

interface UserSettings {
  profile: {
    name: string
    email: string
    bio: string
    avatar?: string
  }
  notifications: {
    email: boolean
    push: boolean
    digest: boolean
    mentions: boolean
  }
  preferences: {
    theme: 'light' | 'dark' | 'system'
    language: string
    timezone: string
    categories: string[]
  }
  privacy: {
    profilePublic: boolean
    showActivity: boolean
    allowMessages: boolean
  }
}

const defaultSettings: UserSettings = {
  profile: {
    name: "Tiago Pinto",
    email: "tiago@example.com",
    bio: "Desenvolvedor apaixonado por tecnologia e inovação africana."
  },
  notifications: {
    email: true,
    push: true,
    digest: false,
    mentions: true
  },
  preferences: {
    theme: 'system',
    language: 'pt-BR',
    timezone: 'America/Sao_Paulo',
    categories: ['IA', 'Frontend', 'Backend', 'Mobile']
  },
  privacy: {
    profilePublic: false,
    showActivity: true,
    allowMessages: true
  }
}

export function SettingsTemplate({
  user,
  onNavigate,
  onLogout,
  className
}: SettingsTemplateProps) {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings)
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'preferences' | 'privacy' | 'security'>('profile')
  const [hasChanges, setHasChanges] = useState(false)

  const updateSettings = (section: keyof UserSettings, key: string, value: string | boolean | string[]) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }))
    setHasChanges(true)
  }

  const handleSave = () => {
    // Here you would save to backend
    console.log('Saving settings:', settings)
    setHasChanges(false)
  }

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'preferences', label: 'Preferências', icon: Settings },
    { id: 'privacy', label: 'Privacidade', icon: Shield },
    { id: 'security', label: 'Segurança', icon: Key }
  ] as const

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Header 
        user={user}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs className="mb-6" />
        
        <div className="mb-8">
          <H2 className="mb-2">Configurações</H2>
          <P className="text-muted-foreground">
            Gerencie suas preferências e configurações da conta
          </P>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-0">
                <nav className="space-y-1 p-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <Button
                        key={tab.id}
                        variant={activeTab === tab.id ? "secondary" : "ghost"}
                        className="w-full justify-start gap-2"
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <Icon className="h-4 w-4" />
                        {tab.label}
                      </Button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeTab === 'profile' && (
              <ProfileSettings 
                settings={settings.profile}
                onUpdate={(key, value) => updateSettings('profile', key, value)}
              />
            )}

            {activeTab === 'notifications' && (
              <NotificationSettings 
                settings={settings.notifications}
                onUpdate={(key, value) => updateSettings('notifications', key, value)}
              />
            )}

            {activeTab === 'preferences' && (
              <PreferenceSettings 
                settings={settings.preferences}
                onUpdate={(key, value) => updateSettings('preferences', key, value)}
              />
            )}

            {activeTab === 'privacy' && (
              <PrivacySettings 
                settings={settings.privacy}
                onUpdate={(key, value) => updateSettings('privacy', key, value)}
              />
            )}

            {activeTab === 'security' && (
              <SecuritySettings />
            )}

            {/* Save Button */}
            {hasChanges && (
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <P className="text-sm text-muted-foreground">
                      Você tem alterações não salvas
                    </P>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setHasChanges(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={handleSave} className="gap-2">
                        <Save className="h-4 w-4" />
                        Salvar alterações
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

// Profile Settings Component
function ProfileSettings({ 
  settings, 
  onUpdate 
}: { 
  settings: UserSettings['profile']
  onUpdate: (key: string, value: string) => void 
}) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações do perfil</CardTitle>
          <CardDescription>
            Atualize suas informações pessoais e avatar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={settings.avatar} />
              <AvatarFallback className="text-lg">
                {settings.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline" className="gap-2">
                <Upload className="h-4 w-4" />
                Alterar foto
              </Button>
              <P className="text-xs text-muted-foreground">
                JPG, PNG ou GIF. Máximo 2MB.
              </P>
            </div>
          </div>

          <Separator />

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Nome completo"
              id="name"
              value={settings.name}
              onChange={(value) => onUpdate('name', value)}
            />
            <InputField
              label="Email"
              id="email"
              type="email"
              value={settings.email}
              onChange={(value) => onUpdate('email', value)}
            />
          </div>

          <TextareaField
            label="Bio"
            id="bio"
            placeholder="Conte um pouco sobre você..."
            value={settings.bio}
            onChange={(value) => onUpdate('bio', value)}
            hint="Máximo 160 caracteres"
          />
        </CardContent>
      </Card>
    </div>
  )
}

// Notification Settings Component
function NotificationSettings({ 
  settings, 
  onUpdate 
}: { 
  settings: UserSettings['notifications']
  onUpdate: (key: string, value: boolean) => void 
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notificações</CardTitle>
        <CardDescription>
          Configure como você deseja ser notificado
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Notificações por email</Label>
              <P className="text-sm text-muted-foreground">
                Receba notícias e atualizações por email
              </P>
            </div>
            <Switch
              checked={settings.email}
              onCheckedChange={(checked: boolean) => onUpdate('email', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Notificações push</Label>
              <P className="text-sm text-muted-foreground">
                Receba notificações no navegador
              </P>
            </div>
            <Switch
              checked={settings.push}
              onCheckedChange={(checked: boolean) => onUpdate('push', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Resumo diário</Label>
              <P className="text-sm text-muted-foreground">
                Resumo das principais notícias do dia
              </P>
            </div>
            <Switch
              checked={settings.digest}
              onCheckedChange={(checked: boolean) => onUpdate('digest', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Menções e respostas</Label>
              <P className="text-sm text-muted-foreground">
                Quando alguém mencionar você ou responder
              </P>
            </div>
            <Switch
              checked={settings.mentions}
              onCheckedChange={(checked: boolean) => onUpdate('mentions', checked)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Preference Settings Component
function PreferenceSettings({ 
  settings, 
  onUpdate 
}: { 
  settings: UserSettings['preferences']
  onUpdate: (key: string, value: string | string[]) => void 
}) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Aparência</CardTitle>
          <CardDescription>
            Personalize a aparência da aplicação
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Tema</Label>
            <div className="flex gap-2">
              {['light', 'dark', 'system'].map((theme) => (
                <Button
                  key={theme}
                  variant={settings.theme === theme ? "default" : "outline"}
                  size="sm"
                  onClick={() => onUpdate('theme', theme)}
                  className="capitalize"
                >
                  {theme === 'light' ? 'Claro' : theme === 'dark' ? 'Escuro' : 'Sistema'}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categorias de interesse</CardTitle>
          <CardDescription>
            Selecione as categorias que mais te interessam
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['IA', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'Cloud', 'Data Science', 'Blockchain'].map((category) => (
              <Badge
                key={category}
                variant={settings.categories.includes(category) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => {
                  const newCategories = settings.categories.includes(category)
                    ? settings.categories.filter(c => c !== category)
                    : [...settings.categories, category]
                  onUpdate('categories', newCategories)
                }}
              >
                {category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Privacy Settings Component
function PrivacySettings({ 
  settings, 
  onUpdate 
}: { 
  settings: UserSettings['privacy']
  onUpdate: (key: string, value: boolean) => void 
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacidade</CardTitle>
        <CardDescription>
          Controle quem pode ver suas informações
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Perfil público</Label>
              <P className="text-sm text-muted-foreground">
                Permite que outros usuários vejam seu perfil
              </P>
            </div>
            <Switch
              checked={settings.profilePublic}
              onCheckedChange={(checked: boolean) => onUpdate('profilePublic', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Mostrar atividade</Label>
              <P className="text-sm text-muted-foreground">
                Exibir suas interações e favoritos
              </P>
            </div>
            <Switch
              checked={settings.showActivity}
              onCheckedChange={(checked: boolean) => onUpdate('showActivity', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Permitir mensagens</Label>
              <P className="text-sm text-muted-foreground">
                Outros usuários podem te enviar mensagens
              </P>
            </div>
            <Switch
              checked={settings.allowMessages}
              onCheckedChange={(checked: boolean) => onUpdate('allowMessages', checked)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Security Settings Component
function SecuritySettings() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Alterar senha</CardTitle>
          <CardDescription>
            Mantenha sua conta segura com uma senha forte
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <InputField
              label="Senha atual"
              id="current-password"
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Digite sua senha atual"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-3 top-8 h-7 w-7 p-0"
            >
              {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>

          <div className="relative">
            <InputField
              label="Nova senha"
              id="new-password"
              type={showNewPassword ? "text" : "password"}
              placeholder="Digite sua nova senha"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-8 h-7 w-7 p-0"
            >
              {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>

          <InputField
            label="Confirmar nova senha"
            id="confirm-password"
            type="password"
            placeholder="Confirme sua nova senha"
          />

          <Button className="gap-2">
            <Key className="h-4 w-4" />
            Alterar senha
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-destructive">Zona de perigo</CardTitle>
          <CardDescription>
            Ações irreversíveis para sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" className="gap-2">
            <Trash2 className="h-4 w-4" />
            Excluir conta
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}