import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, Search, Settings, Star } from "lucide-react"

export function ShadcnDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Shadcn/UI Demo</h1>
          <p className="text-xl text-muted-foreground">
            Componentes modernos e acessíveis configurados com sucesso
          </p>
          <div className="flex justify-center gap-2">
            <Badge variant="default">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">TailwindCSS</Badge>
            <Badge variant="destructive">Shadcn/UI</Badge>
          </div>
        </div>

        <Separator />

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Buttons Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Buttons
              </CardTitle>
              <CardDescription>
                Variações de botões com diferentes estilos e tamanhos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex gap-2">
                <Button disabled>Disabled</Button>
                <Button>
                  <Heart className="mr-2 h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Inputs Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Inputs
              </CardTitle>
              <CardDescription>
                Campos de entrada estilizados e acessíveis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Input padrão" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Password" type="password" />
              <Input placeholder="Disabled" disabled />
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-8" />
              </div>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Features
              </CardTitle>
              <CardDescription>
                Características do Shadcn/UI implementadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  ✅ Componentes baseados em Radix UI
                </li>
                <li className="flex items-center gap-2">
                  ✅ Totalmente customizáveis com CSS Variables
                </li>
                <li className="flex items-center gap-2">
                  ✅ Suporte a Dark Mode
                </li>
                <li className="flex items-center gap-2">
                  ✅ Acessibilidade (WAI-ARIA)
                </li>
                <li className="flex items-center gap-2">
                  ✅ TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  ✅ Tree-shaking ready
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>Componentes Instalados</CardTitle>
              <CardDescription>
                Componentes base prontos para uso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-muted-foreground">Componentes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">TypeScript</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">✨</div>
                  <div className="text-sm text-muted-foreground">Modern</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">🎨</div>
                  <div className="text-sm text-muted-foreground">Customizable</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Pronto para desenvolvimento!
              </Button>
            </CardFooter>
          </Card>

        </div>

        <Separator />

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>🚀 Shadcn/UI configurado com sucesso no Kwanza Agent</p>
          <p>Frontend-first strategy • React + TypeScript + TailwindCSS + Shadcn/UI</p>
        </div>

      </div>
    </div>
  )
}