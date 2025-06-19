import { Logo } from "@/components/atoms/Logo"
import { ThemeToggle } from "@/components/ThemeToggle"
import { NavigationItem, NavigationItemWithBadge } from "@/components/molecules/NavigationItem"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  Home, 
  MessageCircle, 
  Heart, 
  Settings, 
  User, 
  LogOut,
  Menu
} from "lucide-react"
import { cn } from "@/lib/utils"

interface HeaderProps {
  user?: {
    name: string
    email: string
    avatar?: string
  }
  notificationCount?: number
  onNavigate?: (route: string) => void
  onLogout?: () => void
  className?: string
}

export function Header({ 
  user, 
  notificationCount = 0, 
  onNavigate, 
  onLogout,
  className 
}: HeaderProps) {
  return (
    <header className={cn("border-b bg-card shadow-sm", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationItem
              icon={Home}
              active={true}
              onClick={() => onNavigate?.("/")}
            >
              Início
            </NavigationItem>
            <NavigationItemWithBadge
              icon={MessageCircle}
              badge={notificationCount}
              showBadge={notificationCount > 0}
              onClick={() => onNavigate?.("/chat")}
            >
              Chat
            </NavigationItemWithBadge>
            <NavigationItem
              icon={Heart}
              onClick={() => onNavigate?.("/favorites")}
            >
              Favoritos
            </NavigationItem>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {user ? (
              <UserMenu 
                user={user} 
                onNavigate={onNavigate}
                onLogout={onLogout}
              />
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  onClick={() => onNavigate?.("/login")}
                >
                  Entrar
                </Button>
                <Button onClick={() => onNavigate?.("/register")}>
                  Cadastrar
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

// User Menu Component
function UserMenu({ 
  user, 
  onNavigate, 
  onLogout 
}: Pick<HeaderProps, "user" | "onNavigate" | "onLogout">) {
  if (!user) return null

  const initials = user.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              {initials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="flex flex-col space-y-1 p-2">
          <p className="text-sm font-medium leading-none">{user.name}</p>
          <p className="text-xs leading-none text-muted-foreground">
            {user.email}
          </p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onNavigate?.("/profile")}>
          <User className="mr-2 h-4 w-4" />
          <span>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onNavigate?.("/settings")}>
          <Settings className="mr-2 h-4 w-4" />
          <span>Configurações</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}