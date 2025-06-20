import { AlertTriangle, Wifi, Server, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { H3, P } from "@/components/atoms/Typography"
import { cn } from "@/lib/utils"

interface ErrorStateProps {
  type?: "network" | "server" | "notFound" | "generic"
  title?: string
  description?: string
  showRetry?: boolean
  showHome?: boolean
  onRetry?: () => void
  onHome?: () => void
  className?: string
}

const errorConfig = {
  network: {
    icon: Wifi,
    title: "Sem conexão com a internet",
    description: "Verifique sua conexão e tente novamente.",
    iconColor: "text-orange-500"
  },
  server: {
    icon: Server,
    title: "Erro no servidor",
    description: "Nossos servidores estão temporariamente indisponíveis.",
    iconColor: "text-red-500"
  },
  notFound: {
    icon: AlertTriangle,
    title: "Página não encontrada",
    description: "A página que você procura não existe ou foi movida.",
    iconColor: "text-yellow-500"
  },
  generic: {
    icon: AlertTriangle,
    title: "Algo deu errado",
    description: "Ocorreu um erro inesperado. Tente novamente.",
    iconColor: "text-red-500"
  }
}

export function ErrorState({
  type = "generic",
  title,
  description,
  showRetry = true,
  showHome = true,
  onRetry,
  onHome,
  className
}: ErrorStateProps) {
  const config = errorConfig[type]
  const Icon = config.icon

  return (
    <div className={cn("flex items-center justify-center p-4", className)}>
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Icon className={cn("h-8 w-8", config.iconColor)} />
          </div>
          <CardTitle>
            <H3>{title || config.title}</H3>
          </CardTitle>
          <CardDescription>
            <P className="text-muted-foreground">
              {description || config.description}
            </P>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            {showRetry && (
              <Button 
                onClick={onRetry} 
                variant="outline" 
                className="flex-1 gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Tentar novamente
              </Button>
            )}
            {showHome && (
              <Button 
                onClick={onHome} 
                className="flex-1 gap-2"
              >
                <Home className="h-4 w-4" />
                Página inicial
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Componentes específicos para diferentes tipos de erro
export function NetworkError({ onRetry, onHome }: Pick<ErrorStateProps, "onRetry" | "onHome">) {
  return <ErrorState type="network" onRetry={onRetry} onHome={onHome} />
}

export function ServerError({ onRetry, onHome }: Pick<ErrorStateProps, "onRetry" | "onHome">) {
  return <ErrorState type="server" onRetry={onRetry} onHome={onHome} />
}

export function NotFoundError({ onHome }: Pick<ErrorStateProps, "onHome">) {
  return (
    <ErrorState 
      type="notFound" 
      showRetry={false} 
      onHome={onHome}
    />
  )
}