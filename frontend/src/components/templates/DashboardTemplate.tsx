import { Header } from "@/components/organisms/Header"
import { NewsCard, NewsCardCompact } from "@/components/molecules/NewsCard"
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { H2, H3, P } from "@/components/atoms/Typography"
import { Separator } from "@/components/ui/separator"
import { 
  TrendingUp, 
  Clock, 
  Heart, 
  MessageCircle,
  Filter,
  Search,
  Plus,
  MoreHorizontal
} from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardTemplateProps {
  user: {
    name: string
    email: string
    avatar?: string
  }
  onNavigate?: (route: string) => void
  onLogout?: () => void
  className?: string
}

// Mock data para demonstração
const mockNews = [
  {
    id: 1,
    title: "Nova atualização do React 19 traz recursos revolucionários para desenvolvimento web",
    description: "A última versão do React promete melhorar significativamente a performance e experiência do desenvolvedor com novos hooks e otimizações.",
    category: "Frontend",
    timeAgo: "2h",
    source: "TechCrunch",
    imageUrl: "https://picsum.photos/400/200?random=1",
    readTime: "3 min",
    isFavorited: false
  },
  {
    id: 2,
    title: "IA generativa transforma desenvolvimento de software em startups africanas",
    description: "Empresas do continente africano estão adotando ferramentas de IA para acelerar o desenvolvimento e inovação tecnológica.",
    category: "IA",
    timeAgo: "4h",
    source: "Africa Tech",
    imageUrl: "https://picsum.photos/400/200?random=2", 
    readTime: "5 min",
    isFavorited: true
  },
  {
    id: 3,
    title: "Python 3.13 lançado com melhorias de performance e novos recursos",
    description: "A nova versão da linguagem Python traz otimizações significativas e novos recursos para desenvolvedores.",
    category: "Backend",
    timeAgo: "1d",
    source: "Python.org",
    readTime: "4 min",
    isFavorited: false
  }
]

const mockTrending = [
  {
    title: "OpenAI lança GPT-5 com capacidades multimodais avançadas",
    description: "Nova versão promete revolucionar a interação entre humanos e IA",
    category: "IA",
    timeAgo: "30min",
    source: "OpenAI Blog",
    isFavorited: false
  },
  {
    title: "Meta anuncia novo framework para realidade virtual",
    description: "Tecnologia promete democratizar desenvolvimento VR",
    category: "VR/AR", 
    timeAgo: "1h",
    source: "Meta",
    isFavorited: true
  },
  {
    title: "Microsoft Azure integra novas ferramentas de IA",
    description: "Plataforma cloud recebe atualizações focadas em inteligência artificial",
    category: "Cloud",
    timeAgo: "2h", 
    source: "Microsoft",
    isFavorited: false
  }
]

export function DashboardTemplate({
  user,
  onNavigate,
  onLogout,
  className
}: DashboardTemplateProps) {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Header 
        user={user}
        notificationCount={3}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs className="mb-6" />
        
        {/* Welcome Section */}
        <div className="mb-8">
          <H2 className="mb-2">
            Olá, {user.name.split(" ")[0]}! 👋
          </H2>
          <P className="text-muted-foreground">
            Aqui estão as principais notícias de tecnologia para você hoje
          </P>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Notícias hoje"
            value="24"
            change="+12%"
            icon={TrendingUp}
          />
          <StatsCard
            title="Lidas"
            value="8"
            change="+25%"
            icon={Clock}
          />
          <StatsCard
            title="Favoritadas"
            value="3"
            change="+50%"
            icon={Heart}
          />
          <StatsCard
            title="Comentários"
            value="12"
            change="+8%"
            icon={MessageCircle}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured News */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <H3>Destaques do dia</H3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filtrar
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Search className="h-4 w-4" />
                    Buscar
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                {mockNews.map((news, index) => (
                  <NewsCard
                    key={news.id}
                    title={news.title}
                    description={news.description}
                    category={news.category}
                    timeAgo={news.timeAgo}
                    source={news.source}
                    imageUrl={index === 0 ? news.imageUrl : undefined}
                    readTime={news.readTime}
                    isFavorited={news.isFavorited}
                    onFavorite={() => console.log("Favorite", news.id)}
                    onShare={() => console.log("Share", news.id)}
                    onReadMore={() => console.log("Read more", news.id)}
                  />
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="gap-2">
                  Carregar mais notícias
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Trending agora
                </CardTitle>
                <CardDescription>
                  As notícias mais populares nas últimas horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockTrending.map((news, index) => (
                  <div key={index}>
                    <NewsCardCompact
                      title={news.title}
                      description={news.description}
                      category={news.category}
                      timeAgo={news.timeAgo}
                      source={news.source}
                      isFavorited={news.isFavorited}
                      onFavorite={() => console.log("Favorite trending", index)}
                      onReadMore={() => console.log("Read trending", index)}
                    />
                    {index < mockTrending.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categorias populares</CardTitle>
                <CardDescription>
                  Suas categorias mais acessadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Frontend (12)</Badge>
                  <Badge variant="secondary">IA (8)</Badge>
                  <Badge variant="secondary">Backend (6)</Badge>
                  <Badge variant="secondary">Mobile (4)</Badge>
                  <Badge variant="secondary">Cloud (3)</Badge>
                  <Badge variant="outline">DevOps (2)</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                  onClick={() => onNavigate?.("/chat")}
                >
                  <MessageCircle className="h-4 w-4" />
                  Conversar com o agente
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                  onClick={() => onNavigate?.("/favorites")}
                >
                  <Heart className="h-4 w-4" />
                  Ver favoritos
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                  onClick={() => onNavigate?.("/settings")}
                >
                  <MoreHorizontal className="h-4 w-4" />
                  Configurações
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon 
}: { 
  title: string
  value: string
  change: string
  icon: React.ComponentType<{ className?: string }>
}) {
  const isPositive = change.startsWith("+")
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <P className="text-sm text-muted-foreground mb-1">{title}</P>
            <div className="text-2xl font-bold">{value}</div>
            <P className={cn(
              "text-xs",
              isPositive ? "text-success" : "text-destructive"
            )}>
              {change} vs ontem
            </P>
          </div>
          <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}