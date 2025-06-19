import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { P } from "@/components/atoms/Typography"
import { Logo } from "@/components/atoms/Logo"
import { useAppNavigation } from "@/hooks/useAppNavigation"
import { Home, ArrowLeft } from "lucide-react"

export function NotFoundPage() {
  const { goHome, goBack, goToLogin, goToDashboard, goToChat } = useAppNavigation()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>

        {/* Error Card */}
        <Card>
          <CardHeader>
            <div className="text-6xl font-bold text-primary mb-4">404</div>
            <CardTitle>Página não encontrada</CardTitle>
            <CardDescription>
              A página que você está procurando não existe ou foi removida.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <P className="text-muted-foreground">
              Verifique se o endereço está correto ou navegue para uma das páginas disponíveis.
            </P>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={goHome} className="gap-2">
                <Home className="h-4 w-4" />
                Página inicial
              </Button>
              <Button variant="outline" onClick={goBack} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-4 border-t">
              <P className="text-sm text-muted-foreground mb-3">Páginas disponíveis:</P>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button variant="link" size="sm" onClick={goHome}>
                  Home
                </Button>
                <Button variant="link" size="sm" onClick={goToLogin}>
                  Login
                </Button>
                <Button variant="link" size="sm" onClick={goToDashboard}>
                  Dashboard
                </Button>
                <Button variant="link" size="sm" onClick={goToChat}>
                  Chat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}