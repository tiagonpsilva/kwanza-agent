import { Logo } from "@/components/atoms/Logo"
import { NotFoundError } from "@/components/molecules/ErrorState"
import { useAppNavigation } from "@/hooks/useAppNavigation"

export function NotFoundPage() {
  const { goHome } = useAppNavigation()

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Logo size="lg" />
      </div>

      {/* Error State */}
      <NotFoundError onHome={goHome} />
    </div>
  )
}