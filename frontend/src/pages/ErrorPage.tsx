import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { P } from "@/components/atoms/Typography"
import { Logo } from "@/components/atoms/Logo"
import { useRouteError } from "react-router-dom"
import { useAppNavigation } from "@/hooks/useAppNavigation"
import { Home, RefreshCw, AlertTriangle } from "lucide-react"

export function ErrorPage() {
  const { goHome } = useAppNavigation()
  const error = useRouteError() as Error

  const reload = () => {
    window.location.reload()
  }

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
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            <CardTitle>Ops! Algo deu errado</CardTitle>
            <CardDescription>
              Ocorreu um erro inesperado na aplicação.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Error Details */}
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-left">
                  <strong>Erro:</strong> {error.message || "Erro desconhecido"}
                </AlertDescription>
              </Alert>
            )}
            
            <P className="text-muted-foreground">
              Tente recarregar a página ou voltar para a página inicial.
            </P>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={reload} className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Recarregar
              </Button>
              <Button variant="outline" onClick={goHome} className="gap-2">
                <Home className="h-4 w-4" />
                Página inicial
              </Button>
            </div>

            {/* Support Info */}
            <div className="pt-4 border-t">
              <P className="text-xs text-muted-foreground">
                Se o problema persistir, entre em contato com o suporte técnico.
              </P>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}