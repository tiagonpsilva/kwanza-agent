import { Skeleton } from "@/components/ui/skeleton"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { cn } from "@/lib/utils"

// Skeleton para NewsCard
export function NewsCardSkeleton() {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-start gap-4">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-20" /> {/* Category badge */}
          <Skeleton className="h-6 w-full" /> {/* Title line 1 */}
          <Skeleton className="h-6 w-3/4" /> {/* Title line 2 */}
          <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
          <Skeleton className="h-4 w-2/3" /> {/* Description line 2 */}
        </div>
        <Skeleton className="h-24 w-24 rounded-md" /> {/* Image */}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-16" /> {/* Source */}
          <Skeleton className="h-4 w-12" /> {/* Time */}
          <Skeleton className="h-4 w-16" /> {/* Read time */}
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded" /> {/* Favorite btn */}
          <Skeleton className="h-8 w-8 rounded" /> {/* Share btn */}
        </div>
      </div>
    </div>
  )
}

// Skeleton para lista de notícias
export function NewsListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <NewsCardSkeleton key={i} />
      ))}
    </div>
  )
}

// Skeleton para Header
export function HeaderSkeleton() {
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Skeleton className="h-8 w-32" /> {/* Logo */}
          
          <nav className="hidden md:flex items-center space-x-1">
            <Skeleton className="h-8 w-16" /> {/* Nav item */}
            <Skeleton className="h-8 w-16" /> {/* Nav item */}
            <Skeleton className="h-8 w-20" /> {/* Nav item */}
          </nav>

          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded" /> {/* Theme toggle */}
            <Skeleton className="h-8 w-8 rounded-full" /> {/* Avatar */}
          </div>
        </div>
      </div>
    </header>
  )
}

// Skeleton para Dashboard stats
export function StatsCardSkeleton() {
  return (
    <div className="border rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" /> {/* Title */}
          <Skeleton className="h-8 w-12" /> {/* Value */}
          <Skeleton className="h-3 w-16" /> {/* Change */}
        </div>
        <Skeleton className="h-8 w-8 rounded-lg" /> {/* Icon */}
      </div>
    </div>
  )
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" /> {/* Welcome title */}
        <Skeleton className="h-4 w-80" /> {/* Subtitle */}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <StatsCardSkeleton key={i} />
        ))}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <NewsListSkeleton />
        </div>
        <div className="space-y-6">
          {/* Trending section */}
          <div className="border rounded-lg p-4">
            <Skeleton className="h-6 w-32 mb-4" /> {/* Section title */}
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Skeleton para formulários
export function FormSkeleton() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" /> {/* Label */}
        <Skeleton className="h-10 w-full" /> {/* Input */}
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" /> {/* Label */}
        <Skeleton className="h-10 w-full" /> {/* Input */}
      </div>
      <Skeleton className="h-10 w-full" /> {/* Button */}
    </div>
  )
}

// Loading state genérico com spinner
export function LoadingState({ 
  text = "Carregando...", 
  className 
}: { 
  text?: string
  className?: string 
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-12 gap-4", className)}>
      <LoadingSpinner size="lg" />
      <p className="text-muted-foreground">{text}</p>
    </div>
  )
}

// Empty state
export function EmptyState({
  title = "Nenhum item encontrado",
  description = "Não há itens para exibir no momento.",
  className
}: {
  title?: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-12 text-center", className)}>
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
        <div className="w-8 h-8 bg-muted-foreground/20 rounded-full" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm">{description}</p>
    </div>
  )
}