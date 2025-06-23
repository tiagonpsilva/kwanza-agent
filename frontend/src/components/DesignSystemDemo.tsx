import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ThemeToggle } from "@/components/ThemeToggle"
import { 
  Palette, 
  Type, 
  Layout, 
  Zap, 
  Check, 
  AlertTriangle, 
  X,
  Sparkles,
  Globe,
  Users
} from "lucide-react"

export function DesignSystemDemo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Kwanza Agent</h1>
                <p className="text-xs text-muted-foreground">Design System Demo</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Kwanza Agent Design System
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Inspirado pela riqueza cultural africana e modernidade tecnológica. 
              Cores quentes que remetem ao pôr do sol africano e à luz dourada.
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="default" className="bg-primary">🔥 African Sunset</Badge>
              <Badge variant="secondary">🌅 Warm Palette</Badge>
              <Badge variant="outline">✨ Modern UI</Badge>
            </div>
          </div>

          <Separator />

          {/* Color Palette */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Paleta de Cores
              </CardTitle>
              <CardDescription>
                Sistema de cores inspirado na cultura africana e tecnologia moderna
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Primary Colors */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Brand Colors</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary border"></div>
                      <div>
                        <div className="text-sm font-medium">Primary</div>
                        <div className="text-xs text-muted-foreground">Kwanza Flame Orange</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-accent border"></div>
                      <div>
                        <div className="text-sm font-medium">Accent</div>
                        <div className="text-xs text-muted-foreground">African Gold</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary border"></div>
                      <div>
                        <div className="text-sm font-medium">Secondary</div>
                        <div className="text-xs text-muted-foreground">Warm Beige</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Semantic Colors */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Semantic Colors</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-success border"></div>
                      <div>
                        <div className="text-sm font-medium">Success</div>
                        <div className="text-xs text-muted-foreground">Natural Green</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-warning border"></div>
                      <div>
                        <div className="text-sm font-medium">Warning</div>
                        <div className="text-xs text-muted-foreground">Amber Alert</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-destructive border"></div>
                      <div>
                        <div className="text-sm font-medium">Destructive</div>
                        <div className="text-xs text-muted-foreground">Warm Red</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Surface Colors */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Surface Colors</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-background border"></div>
                      <div>
                        <div className="text-sm font-medium">Background</div>
                        <div className="text-xs text-muted-foreground">Warm Ivory</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-card border"></div>
                      <div>
                        <div className="text-sm font-medium">Card</div>
                        <div className="text-xs text-muted-foreground">Pure White</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-muted border"></div>
                      <div>
                        <div className="text-sm font-medium">Muted</div>
                        <div className="text-xs text-muted-foreground">Light Warm Gray</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Components Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Buttons & Actions
                </CardTitle>
                <CardDescription>
                  Botões com as novas cores do brand
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Button>Primary (Orange)</Button>
                    <Button variant="secondary">Secondary (Beige)</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="destructive">
                      <X className="mr-2 h-4 w-4" />
                      Destructive
                    </Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Alerts & Messages
                </CardTitle>
                <CardDescription>
                  Sistema de feedback com cores semânticas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-success bg-success/10">
                  <Check className="h-4 w-4 text-success" />
                  <AlertTitle className="text-success">Success!</AlertTitle>
                  <AlertDescription className="text-success-foreground">
                    Configuração realizada com sucesso.
                  </AlertDescription>
                </Alert>
                
                <Alert className="border-warning bg-warning/10">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <AlertTitle className="text-warning">Warning</AlertTitle>
                  <AlertDescription className="text-warning-foreground">
                    Atenção: Verificar configurações.
                  </AlertDescription>
                </Alert>
                
                <Alert variant="destructive">
                  <X className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Erro na conexão com o servidor.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Typography */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Typography
                </CardTitle>
                <CardDescription>
                  Hierarquia tipográfica com fonte Inter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold text-foreground">Heading 1</h1>
                  <h2 className="text-3xl font-semibold text-foreground">Heading 2</h2>
                  <h3 className="text-2xl font-medium text-foreground">Heading 3</h3>
                  <h4 className="text-xl font-medium text-foreground">Heading 4</h4>
                  <p className="text-base text-foreground">Body text regular</p>
                  <p className="text-sm text-muted-foreground">Small text muted</p>
                  <p className="text-xs text-muted-foreground">Extra small text</p>
                </div>
              </CardContent>
            </Card>

            {/* Forms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layout className="h-5 w-5" />
                  Form Elements
                </CardTitle>
                <CardDescription>
                  Campos de entrada com novo design
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Input placeholder="Input padrão" />
                  <Input placeholder="Email" type="email" />
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Nome" />
                    <Input placeholder="Sobrenome" />
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Buscar..." className="flex-1" />
                    <Button>
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Theme Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Features do Design System
              </CardTitle>
              <CardDescription>
                Características técnicas e visuais implementadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="h-2 w-full bg-primary rounded"></div>
                  <h4 className="font-medium">🎨 Inspiração Africana</h4>
                  <p className="text-sm text-muted-foreground">
                    Cores que remetem ao pôr do sol africano, terra vermelha e ouro
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-accent rounded"></div>
                  <h4 className="font-medium">🌙 Dark Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Transição suave entre temas claro e escuro com preferência do sistema
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-success rounded"></div>
                  <h4 className="font-medium">♿ Acessibilidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Contraste adequado (WCAG AA) e componentes Radix UI
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-secondary rounded"></div>
                  <h4 className="font-medium">🎯 CSS Variables</h4>
                  <p className="text-sm text-muted-foreground">
                    Sistema flexível com variáveis CSS para fácil customização
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-warning rounded"></div>
                  <h4 className="font-medium">📱 Responsive</h4>
                  <p className="text-sm text-muted-foreground">
                    Mobile-first design com breakpoints consistentes
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-destructive rounded"></div>
                  <h4 className="font-medium">⚡ Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Componentes otimizados com tree-shaking e lazy loading
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center space-y-2 py-8">
            <p className="text-sm text-muted-foreground">
              🚀 Kwanza Agent Design System configurado com sucesso
            </p>
            <p className="text-xs text-muted-foreground">
              Inspirado pela riqueza cultural africana • Design system moderno e acessível
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}