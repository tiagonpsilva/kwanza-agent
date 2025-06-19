import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface NavigationItemProps {
  icon?: LucideIcon
  children: ReactNode
  href?: string
  active?: boolean
  onClick?: () => void
  variant?: "default" | "ghost" | "outline"
  size?: "sm" | "default" | "lg"
  className?: string
}

export function NavigationItem({
  icon: Icon,
  children,
  href,
  active,
  onClick,
  variant = "ghost",
  size = "default",
  className
}: NavigationItemProps) {
  const Component = href ? "a" : "button"
  
  return (
    <Button
      asChild={!!href}
      variant={active ? "secondary" : variant}
      size={size}
      onClick={onClick}
      className={cn(
        "justify-start gap-2 font-normal",
        active && "bg-accent text-accent-foreground font-medium",
        className
      )}
    >
      <Component href={href}>
        {Icon && <Icon className="h-4 w-4" />}
        {children}
      </Component>
    </Button>
  )
}

// Variação para menu mobile
export function MobileNavigationItem({
  icon: Icon,
  children,
  href,
  active,
  onClick,
  className
}: NavigationItemProps) {
  return (
    <NavigationItem
      icon={Icon}
      href={href}
      active={active}
      onClick={onClick}
      variant="ghost"
      size="lg"
      className={cn("w-full justify-center flex-col h-16 gap-1", className)}
    >
      <div className="flex flex-col items-center gap-1">
        {Icon && <Icon className="h-5 w-5" />}
        <span className="text-xs">{children}</span>
      </div>
    </NavigationItem>
  )
}

// Navigation Badge para notificações
interface NavigationBadgeProps extends NavigationItemProps {
  badge?: number | string
  showBadge?: boolean
}

export function NavigationItemWithBadge({
  badge,
  showBadge = false,
  children,
  className,
  ...props
}: NavigationBadgeProps) {
  return (
    <div className="relative">
      <NavigationItem {...props} className={className}>
        {children}
      </NavigationItem>
      {showBadge && badge && (
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center font-medium">
          {typeof badge === "number" && badge > 99 ? "99+" : badge}
        </span>
      )}
    </div>
  )
}