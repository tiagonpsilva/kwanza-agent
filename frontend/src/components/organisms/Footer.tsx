import { Logo } from "@/components/atoms/Logo"
import { P, Small } from "@/components/atoms/Typography"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={className}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Logo size="lg" className="mb-4" />
            <P className="text-muted-foreground mb-4 max-w-md">
              Primeiro AI Agent para listar e gerenciar notícias de tecnologia. 
              Inspirado pela cultura africana e focado em inovação tecnológica.
            </P>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                  Funcionalidades
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                  Preços
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                  API
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                  Documentação
                </Button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                  Sobre
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                  Blog
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                  Carreiras
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                  Contato
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Small>
            © {currentYear} Kwanza Agent. Todos os direitos reservados.
          </Small>
          
          <div className="flex items-center gap-6">
            <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </Button>
            <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground">
              Termos de Uso
            </Button>
            <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground hover:text-foreground">
              Cookies
            </Button>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <Small className="text-xs">
            🎨 Desenvolvido por{" "}
            <Button 
              variant="link" 
              className="p-0 h-auto text-xs text-primary hover:text-primary/80"
            >
              Tiago Pinto
            </Button>
            {" "}({" "}
            <Button 
              variant="link" 
              className="p-0 h-auto text-xs text-primary hover:text-primary/80"
            >
              tiagopinto.io
            </Button>
            ) • 🤖 Desenvolvido com auxílio de IA usando Claude Code
          </Small>
        </div>
      </div>
    </footer>
  )
}