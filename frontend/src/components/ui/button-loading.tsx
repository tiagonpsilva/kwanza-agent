import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { cn } from "@/lib/utils"

interface ButtonLoadingProps extends ButtonProps {
  loading?: boolean
  loadingText?: string
}

export function ButtonLoading({ 
  loading = false, 
  loadingText,
  children, 
  disabled,
  className,
  ...props 
}: ButtonLoadingProps) {
  return (
    <Button 
      disabled={loading || disabled} 
      className={cn("relative", className)}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner size="sm" className="mr-2" />
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </Button>
  )
}