import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface IconProps {
  icon: LucideIcon
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-5 w-5", 
  lg: "h-6 w-6",
  xl: "h-8 w-8"
}

export function Icon({ icon: IconComponent, size = "md", className }: IconProps) {
  return (
    <IconComponent className={cn(sizeMap[size], className)} />
  )
}

// Ícones específicos do Kwanza Agent
import { 
  Sparkles, 
  MessageCircle, 
  Heart, 
  Flame,
  Sun,
  Trophy,
  Target,
  Zap
} from "lucide-react"

export function KwanzaIcon({ size = "md", className }: Omit<IconProps, "icon">) {
  return <Icon icon={Sparkles} size={size} className={cn("text-primary", className)} />
}

export function ChatIcon({ size = "md", className }: Omit<IconProps, "icon">) {
  return <Icon icon={MessageCircle} size={size} className={className} />
}

export function FavoriteIcon({ size = "md", className }: Omit<IconProps, "icon">) {
  return <Icon icon={Heart} size={size} className={cn("text-destructive", className)} />
}

export function FlameIcon({ size = "md", className }: Omit<IconProps, "icon">) {
  return <Icon icon={Flame} size={size} className={cn("text-primary", className)} />
}

export function SunIcon({ size = "md", className }: Omit<IconProps, "icon">) {
  return <Icon icon={Sun} size={size} className={cn("text-accent", className)} />
}

export function AchievementIcon({ size = "md", className }: Omit<IconProps, "icon">) {
  return <Icon icon={Trophy} size={size} className={cn("text-accent", className)} />
}

export function TargetIcon({ size = "md", className }: Omit<IconProps, "icon">) {
  return <Icon icon={Target} size={size} className={className} />
}

export function EnergyIcon({ size = "md", className }: Omit<IconProps, "icon">) {
  return <Icon icon={Zap} size={size} className={cn("text-primary", className)} />
}