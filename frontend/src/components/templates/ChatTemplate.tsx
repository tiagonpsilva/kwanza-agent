import { useState } from "react"
import { Header } from "@/components/organisms/Header"
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InputField } from "@/components/molecules/FormField"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { H2, P, Small } from "@/components/atoms/Typography"
import { 
  Send, 
  Paperclip, 
  Mic, 
  Bot,
  User,
  Heart,
  Share,
  MoreVertical,
  Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatTemplateProps {
  user: {
    name: string
    email: string
    avatar?: string
  }
  onNavigate?: (route: string) => void
  onLogout?: () => void
  className?: string
}

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
  suggestions?: string[]
}

// Mock conversation data
const mockMessages: Message[] = [
  {
    id: "1",
    content: "Olá! Sou o Kwanza Agent 🤖. Como posso ajudá-lo com notícias de tecnologia hoje?",
    isUser: false,
    timestamp: new Date(Date.now() - 10 * 60 * 1000), // 10 min ago
    suggestions: [
      "Listar notícias do dia",
      "Ver notícias sobre IA",
      "Mostrar meus favoritos",
      "Categorias populares"
    ]
  },
  {
    id: "2", 
    content: "Oi! Quero ver as principais notícias de IA de hoje.",
    isUser: true,
    timestamp: new Date(Date.now() - 9 * 60 * 1000)
  },
  {
    id: "3",
    content: "Ótima escolha! Aqui estão as 5 principais notícias sobre IA de hoje:\n\n🚀 **OpenAI lança GPT-5 com capacidades multimodais avançadas**\n- Fonte: OpenAI Blog\n- Categoria: IA\n- Tempo de leitura: 4 min\n\n🧠 **Meta anuncia novo modelo de IA para realidade virtual**\n- Fonte: Meta\n- Categoria: VR/AR\n- Tempo de leitura: 3 min\n\n⚡ **Google integra IA generativa no Android 15**\n- Fonte: Android Central\n- Categoria: Mobile\n- Tempo de leitura: 5 min\n\nGostaria de favoritar alguma dessas notícias ou ler mais sobre algum tópico específico?",
    isUser: false,
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    suggestions: [
      "Favoritar primeira notícia",
      "Ler mais sobre GPT-5", 
      "Ver notícias sobre Google",
      "Buscar outras categorias"
    ]
  }
]

export function ChatTemplate({
  user,
  onNavigate,
  onLogout,
  className
}: ChatTemplateProps) {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, newMessage])
    setInputValue("")
    setIsTyping(true)
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Entendi! Deixe-me buscar essas informações para você...",
        isUser: false,
        timestamp: new Date(),
        suggestions: [
          "Ver mais detalhes",
          "Favoritar resultado",
          "Buscar tópico relacionado"
        ]
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 2000)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
  }

  return (
    <div className={cn("min-h-screen bg-background flex flex-col", className)}>
      <Header 
        user={user}
        notificationCount={0}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-4xl">
        {/* Breadcrumbs */}
        <Breadcrumbs className="mb-4" />
        
        {/* Chat Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <div>
            <H2 className="text-xl">Kwanza Agent</H2>
            <Small className="text-muted-foreground">
              Seu assistente inteligente para notícias de tecnologia
            </Small>
          </div>
          <Button variant="ghost" size="sm" className="ml-auto">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto space-y-6 pb-4">
            {messages.map((message) => (
              <MessageBubble 
                key={message.id} 
                message={message}
                onSuggestionClick={handleSuggestionClick}
              />
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <Card className="max-w-xs">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="mt-6 space-y-4">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <InputField
                label="Mensagem"
                id="message"
                type="text"
                placeholder="Digite sua mensagem..."
                value={inputValue}
                onChange={setInputValue}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Mic className="h-4 w-4" />
              </Button>
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="gap-2"
              >
                <Send className="h-4 w-4" />
                Enviar
              </Button>
            </div>
          </div>

          {/* Suggested Actions */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              📰 Notícias do dia
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              🤖 Sobre IA
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              ❤️ Meus favoritos
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              🏷️ Categorias
            </Badge>
          </div>
        </div>
      </main>
    </div>
  )
}

// Message Bubble Component
function MessageBubble({ 
  message, 
  onSuggestionClick 
}: { 
  message: Message
  onSuggestionClick: (suggestion: string) => void
}) {
  const isUser = message.isUser
  
  return (
    <div className={cn(
      "flex items-start gap-3",
      isUser && "flex-row-reverse"
    )}>
      <Avatar className="h-8 w-8">
        {isUser ? (
          <AvatarFallback className="bg-accent text-accent-foreground">
            <User className="h-4 w-4" />
          </AvatarFallback>
        ) : (
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        )}
      </Avatar>
      
      <div className={cn(
        "flex flex-col gap-2 max-w-2xl",
        isUser && "items-end"
      )}>
        <Card className={cn(
          isUser ? "bg-primary text-primary-foreground" : "bg-card"
        )}>
          <CardContent className="p-3">
            <P className={cn(
              "text-sm whitespace-pre-line",
              isUser && "text-primary-foreground"
            )}>
              {message.content}
            </P>
          </CardContent>
        </Card>
        
        <div className={cn(
          "flex items-center gap-2 text-xs text-muted-foreground",
          isUser && "flex-row-reverse"
        )}>
          <Small>
            {message.timestamp.toLocaleTimeString('pt-BR', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </Small>
          
          {!isUser && (
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Heart className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Share className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>

        {/* Suggestions */}
        {message.suggestions && !isUser && (
          <div className="flex flex-wrap gap-2 mt-2">
            {message.suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => onSuggestionClick(suggestion)}
                className="text-xs h-7 gap-1"
              >
                <Sparkles className="h-3 w-3" />
                {suggestion}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}