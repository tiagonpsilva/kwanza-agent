import { useState } from "react"
import { Header } from "@/components/organisms/Header"
import { LoadingSpinner, LoadingScreen, LoadingOverlay } from "@/components/atoms/LoadingSpinner"
import { ErrorState, NetworkError, ServerError } from "@/components/molecules/ErrorState"
import { 
  NewsCardSkeleton, 
  NewsListSkeleton, 
  StatsCardSkeleton,
  FormSkeleton,
  LoadingState,
  EmptyState 
} from "@/components/molecules/LoadingStates"
import { ButtonLoading } from "@/components/ui/button-loading"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { H2, H3, P } from "@/components/atoms/Typography"
import { useToastHelpers } from "@/contexts/ToastContext"
import { useAsyncState, useAsyncOperation } from "@/hooks/useAsyncState"

export function LoadingStatesDemo() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  const { success, error, warning, info, loading } = useToastHelpers()
  
  // Demonstração do useAsyncState
  const { data, loading: asyncLoading, error: asyncError, execute, reset } = useAsyncState<string>()
  
  // Demonstração do useAsyncOperation
  const { loading: operationLoading, execute: executeOperation } = useAsyncOperation()

  const simulateAsyncOperation = async () => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Operação completada com sucesso!")
        } else {
          reject(new Error("Erro simulado na operação"))
        }
      }, 2000)
    })
  }

  const handleAsyncTest = () => {
    execute(simulateAsyncOperation)
  }

  const handleToastTest = async () => {
    loading("Processando...")
    
    await executeOperation(
      simulateAsyncOperation,
      {
        successMessage: "Operação realizada com sucesso!",
        errorMessage: "Falha na operação",
        onSuccess: (data) => success(data),
        onError: (err) => error(err.message)
      }
    )
  }

  const handleButtonTest = async () => {
    setButtonLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setButtonLoading(false)
    success("Botão processado!")
  }

  const mockUser = {
    name: "João Silva", 
    email: "joao@exemplo.com"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        user={mockUser}
        onNavigate={() => {}}
        onLogout={() => {}}
      />

      <main className="container mx-auto px-4 py-8 space-y-12">
        <div>
          <H2 className="mb-4">Estados de Loading e Erro - Demonstração</H2>
          <P className="text-muted-foreground mb-8">
            Demonstração de todos os componentes e estados visuais implementados.
          </P>
        </div>

        {/* Loading Spinners */}
        <section>
          <H3 className="mb-6">Loading Spinners</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Small</CardTitle>
              </CardHeader>
              <CardContent>
                <LoadingSpinner size="sm" text="Carregando..." />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Medium</CardTitle>
              </CardHeader>
              <CardContent>
                <LoadingSpinner size="md" text="Processando..." />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Large</CardTitle>
              </CardHeader>
              <CardContent>
                <LoadingSpinner size="lg" text="Aguarde..." />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Extra Large</CardTitle>
              </CardHeader>
              <CardContent>
                <LoadingSpinner size="xl" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skeleton Loaders */}
        <section>
          <H3 className="mb-6">Skeleton Loaders</H3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <H3 className="text-lg mb-4">News Card Skeleton</H3>
              <NewsCardSkeleton />
            </div>
            
            <div>
              <H3 className="text-lg mb-4">Stats Card Skeleton</H3>
              <div className="grid grid-cols-2 gap-4">
                <StatsCardSkeleton />
                <StatsCardSkeleton />
              </div>
            </div>
            
            <div>
              <H3 className="text-lg mb-4">Form Skeleton</H3>
              <FormSkeleton />
            </div>
            
            <div>
              <H3 className="text-lg mb-4">News List Skeleton</H3>
              <NewsListSkeleton count={2} />
            </div>
          </div>
        </section>

        {/* Error States */}
        <section>
          <H3 className="mb-6">Estados de Erro</H3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <H3 className="text-lg mb-4">Network Error</H3>
              <NetworkError 
                onRetry={() => success("Tentando reconectar...")}
                onHome={() => info("Navegando para home")}
              />
            </div>
            
            <div>
              <H3 className="text-lg mb-4">Server Error</H3>
              <ServerError 
                onRetry={() => warning("Tentando novamente...")}
                onHome={() => info("Voltando ao início")}
              />
            </div>
            
            <div>
              <H3 className="text-lg mb-4">Generic Error</H3>
              <ErrorState 
                type="generic"
                title="Erro personalizado"
                description="Esta é uma mensagem de erro customizada."
                onRetry={() => success("Operação realizada!")}
                onHome={() => info("Redirecionando...")}
              />
            </div>
            
            <div>
              <H3 className="text-lg mb-4">Empty State</H3>
              <EmptyState 
                title="Nenhuma notícia encontrada"
                description="Não há notícias disponíveis no momento. Tente novamente mais tarde."
              />
            </div>
          </div>
        </section>

        {/* Interactive Tests */}
        <section>
          <H3 className="mb-6">Testes Interativos</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Loading</CardTitle>
                <CardDescription>Teste de botão com loading</CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonLoading 
                  loading={buttonLoading}
                  loadingText="Processando..."
                  onClick={handleButtonTest}
                  className="w-full"
                >
                  Testar Botão
                </ButtonLoading>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Loading Overlay</CardTitle>
                <CardDescription>Overlay de loading global</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => {
                    setShowOverlay(true)
                    setTimeout(() => setShowOverlay(false), 3000)
                  }}
                  className="w-full"
                >
                  Mostrar Overlay
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Toast Notifications</CardTitle>
                <CardDescription>Teste de diferentes toasts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button onClick={() => success("Operação realizada!")} variant="outline" size="sm" className="w-full">
                  Success
                </Button>
                <Button onClick={() => error("Algo deu errado!")} variant="outline" size="sm" className="w-full">
                  Error
                </Button>
                <Button onClick={() => warning("Atenção necessária!")} variant="outline" size="sm" className="w-full">
                  Warning
                </Button>
                <Button onClick={() => info("Informação importante")} variant="outline" size="sm" className="w-full">
                  Info
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Async State Hook</CardTitle>
                <CardDescription>Teste do hook useAsyncState</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ButtonLoading 
                  loading={asyncLoading}
                  onClick={handleAsyncTest}
                  className="w-full"
                >
                  Executar Async
                </ButtonLoading>
                
                {asyncError && (
                  <div className="p-2 bg-destructive/10 border border-destructive/20 rounded text-sm text-destructive">
                    {asyncError}
                  </div>
                )}
                
                {data && (
                  <div className="p-2 bg-success/10 border border-success/20 rounded text-sm text-success">
                    {data}
                  </div>
                )}
                
                <Button variant="outline" size="sm" onClick={reset} className="w-full">
                  Reset
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Async Operation</CardTitle>
                <CardDescription>Teste com toast integrado</CardDescription>
              </CardHeader>
              <CardContent>
                <ButtonLoading 
                  loading={operationLoading}
                  onClick={handleToastTest}
                  className="w-full"
                >
                  Executar com Toast
                </ButtonLoading>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Full Page Examples */}
        <section>
          <H3 className="mb-6">Exemplos de Página Completa</H3>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Loading Screen</CardTitle>
                <CardDescription>Tela de loading para carregamento inicial</CardDescription>
              </CardHeader>
              <CardContent>
                <LoadingScreen text="Carregando aplicação..." />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Loading State</CardTitle>
                <CardDescription>Estado de loading genérico</CardDescription>
              </CardHeader>
              <CardContent>
                <LoadingState text="Buscando dados..." />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Overlay demonstration */}
      {showOverlay && <LoadingOverlay text="Processando operação..." />}
    </div>
  )
}