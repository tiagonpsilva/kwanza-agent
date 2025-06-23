import { useState } from "react"
import { Header } from "@/components/organisms/Header"
import { Footer } from "@/components/organisms/Footer"
import { LoginForm } from "@/components/organisms/LoginForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { H1, H2, H3, P, Lead } from "@/components/atoms/Typography"
import { FlameIcon, SunIcon, TargetIcon, EnergyIcon } from "@/components/atoms/Icon"
import { useAppNavigation } from "@/hooks/useAppNavigation"
import { 
  ArrowRight, 
  Smartphone, 
  Users,
  TrendingUp,
  MessageCircle,
  Heart,
  Star,
  ChevronDown,
  LogIn
} from "lucide-react"

export function LandingLoginPage() {
  const { goToDashboard } = useAppNavigation()
  const [showLogin, setShowLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleGetStarted = () => {
    setShowLogin(true)
    // Smooth scroll to login section
    setTimeout(() => {
      const loginSection = document.getElementById("login")
      if (loginSection) {
        loginSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleLearnMore = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLogin = async (credentials: { email: string; password: string }) => {
    setIsLoading(true)
    setError("")

    try {
      // Simular autenticação
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock: validar credenciais simples
      if (credentials.email === "admin@kwanza.com" && credentials.password === "123456") {
        // Sucesso: redirecionar para dashboard
        goToDashboard()
      } else {
        setError("Email ou senha incorretos. Tente: admin@kwanza.com / 123456")
      }
    } catch {
      setError("Erro ao fazer login. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // Mock: simular login com Google
    setIsLoading(true)
    setTimeout(() => {
      goToDashboard()
    }, 1500)
  }

  const handlePhoneLogin = () => {
    // Mock: simular login com celular
    alert("Login com celular será implementado em breve!")
  }

  const handleForgotPassword = () => {
    alert("Recuperação de senha será implementada em breve!")
  }

  const handleRegister = () => {
    alert("Cadastro será implementado em breve!")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-6 gap-2">
              <FlameIcon size="sm" />
              AI Agent para notícias de tecnologia
            </Badge>
            
            <H1 className="mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gerencie suas notícias de tecnologia com inteligência artificial
            </H1>
            
            <Lead className="mb-8 max-w-2xl mx-auto">
              Descubra, favorite e classifique as principais notícias de tecnologia 
              através de uma interface conversacional moderna e intuitiva.
            </Lead>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleGetStarted} className="gap-2">
                <LogIn className="h-5 w-5" />
                Começar agora
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleLearnMore}>
                Saiba mais
                <ChevronDown className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Login Section - Centered */}
        {showLogin && (
          <section id="login" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-md mx-auto">
                <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <LogIn className="h-8 w-8 text-white" />
                    </div>
                    <H2 className="mb-2">Acesse sua conta</H2>
                    <P className="text-muted-foreground">
                      Digite suas credenciais para continuar
                    </P>
                  </CardHeader>
                  
                  <CardContent className="px-6 pb-6">
                    <LoginForm
                      onLogin={handleLogin}
                      onGoogleLogin={handleGoogleLogin}
                      onPhoneLogin={handlePhoneLogin}
                      onForgotPassword={handleForgotPassword}
                      onRegister={handleRegister}
                      isLoading={isLoading}
                      error={error}
                    />
                    
                    <div className="text-center mt-6 pt-4 border-t">
                      <Button 
                        variant="ghost" 
                        onClick={() => setShowLogin(false)}
                        className="text-muted-foreground hover:text-foreground text-sm"
                      >
                        ← Voltar para início
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <H2 className="mb-4">Funcionalidades principais</H2>
              <P className="text-muted-foreground max-w-2xl mx-auto">
                Uma experiência completa para descobrir e gerenciar notícias de tecnologia
              </P>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={MessageCircle}
                title="Interface Conversacional"
                description="Chat intuitivo similar ao ChatGPT para interagir com suas notícias de forma natural"
              />
              <FeatureCard
                icon={TrendingUp}
                title="Notícias Personalizadas"
                description="Receba as 10 principais notícias do dia, semana ou mês baseadas em suas preferências"
              />
              <FeatureCard
                icon={Heart}
                title="Sistema de Favoritos"
                description="Favorite e organize suas notícias mais importantes para acessar rapidamente"
              />
              <FeatureCard
                icon={Star}
                title="Classificação Inteligente"
                description="Classifique notícias por categorias e receba recomendações personalizadas"
              />
              <FeatureCard
                icon={Smartphone}
                title="Mobile First"
                description="Interface otimizada para celular com temas claro e escuro disponíveis"
              />
              <FeatureCard
                icon={SunIcon}
                title="Design Moderno"
                description="Visual contemporâneo com cores quentes e interface acolhedora"
              />
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <H2 className="mb-4">Como funciona</H2>
              <P className="text-muted-foreground max-w-2xl mx-auto">
                Três passos simples para começar a usar o Kwanza Agent
              </P>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard
                step={1}
                title="Cadastre-se"
                description="Crie sua conta usando email, Google ou número de celular"
                icon={Users}
              />
              <StepCard
                step={2}
                title="Configure"
                description="Defina suas preferências de notícias e categorias de interesse"
                icon={TargetIcon}
              />
              <StepCard
                step={3}
                title="Descubra"
                description="Converse com o agente e descubra notícias personalizadas para você"
                icon={EnergyIcon}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <H2 className="mb-4 text-primary-foreground">
              Pronto para revolucionar como você consome notícias?
            </H2>
            <P className="mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Junte-se a milhares de usuários que já descobrem tecnologia com o Kwanza Agent
            </P>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleGetStarted}
              className="gap-2"
            >
              <LogIn className="h-5 w-5" />
              Começar gratuitamente
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Helper Components
function FeatureCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string 
}) {
  return (
    <Card className="text-center border-none shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function StepCard({ 
  step, 
  title, 
  description, 
  icon: Icon 
}: { 
  step: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="text-center">
      <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="h-8 w-8 text-primary-foreground" />
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
          {step}
        </div>
      </div>
      <H3 className="mb-3">{title}</H3>
      <P className="text-muted-foreground">{description}</P>
    </div>
  )
}