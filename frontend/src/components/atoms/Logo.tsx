import { cn } from "@/lib/utils"
import { KwanzaIcon } from "./Icon"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

const sizeMap = {
  sm: {
    icon: "sm" as const,
    text: "text-lg",
    container: "gap-2"
  },
  md: {
    icon: "md" as const,
    text: "text-xl",
    container: "gap-2"
  },
  lg: {
    icon: "xl" as const,
    text: "text-2xl",
    container: "gap-3"
  }
}

export function Logo({ size = "md", showText = true, className }: LogoProps) {
  const config = sizeMap[size]
  
  return (
    <div className={cn("flex items-center", config.container, className)}>
      <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
        <KwanzaIcon size={config.icon} className="text-primary-foreground" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-bold text-foreground", config.text)}>
            Kwanza Agent
          </span>
          {size === "lg" && (
            <span className="text-xs text-muted-foreground -mt-1">
              AI News Assistant
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export function LogoIcon({ size = "md", className }: Pick<LogoProps, "size" | "className">) {
  return <Logo size={size} showText={false} className={className} />
}