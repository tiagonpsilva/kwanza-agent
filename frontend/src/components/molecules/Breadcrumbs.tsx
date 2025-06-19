import { useLocation, Link } from "react-router-dom"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BreadcrumbItem {
  label: string
  path: string
  icon?: React.ComponentType<{ className?: string }>
}

interface BreadcrumbsProps {
  className?: string
  items?: BreadcrumbItem[]
}

// Default breadcrumb mapping based on pathname
const getDefaultBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const segments = pathname.split("/").filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Início", path: "/", icon: Home }
  ]

  let currentPath = ""
  
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    
    const breadcrumbMap: Record<string, string> = {
      "/login": "Login",
      "/dashboard": "Dashboard", 
      "/chat": "Chat",
      "/settings": "Configurações",
      "/profile": "Perfil",
      "/favorites": "Favoritos"
    }

    const label = breadcrumbMap[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1)
    
    breadcrumbs.push({
      label,
      path: currentPath
    })
  })

  return breadcrumbs
}

export function Breadcrumbs({ className, items }: BreadcrumbsProps) {
  const location = useLocation()
  const breadcrumbs = items || getDefaultBreadcrumbs(location.pathname)

  // Don't show breadcrumbs on home page or if only one item
  if (location.pathname === "/" || breadcrumbs.length <= 1) {
    return null
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1
          const Icon = item.icon

          return (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/50" />
              )}
              
              {isLast ? (
                <span className="font-medium text-foreground flex items-center gap-1">
                  {Icon && <Icon className="h-4 w-4" />}
                  {item.label}
                </span>
              ) : (
                <Button
                  variant="link"
                  size="sm"
                  className="p-0 h-auto text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <Link to={item.path} className="flex items-center gap-1">
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </Link>
                </Button>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

// Specific breadcrumb configurations for complex pages
export const BREADCRUMB_CONFIGS = {
  SETTINGS_PROFILE: [
    { label: "Início", path: "/", icon: Home },
    { label: "Configurações", path: "/settings" },
    { label: "Perfil", path: "/settings/profile" }
  ],
  SETTINGS_NOTIFICATIONS: [
    { label: "Início", path: "/", icon: Home },
    { label: "Configurações", path: "/settings" },
    { label: "Notificações", path: "/settings/notifications" }
  ]
} as const