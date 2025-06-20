import React, { createContext, useContext } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/hooks/use-toast'

interface ToastContextType {
  toast: ReturnType<typeof useToast>['toast']
  dismiss: ReturnType<typeof useToast>['dismiss']
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toast, dismiss } = useToast()

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  )
}

export function useAppToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useAppToast must be used within a ToastProvider')
  }
  return context
}

// Helper hooks para diferentes tipos de toast
export function useToastHelpers() {
  const { toast } = useAppToast()

  const success = (message: string) => {
    toast({
      title: "✅ Sucesso",
      description: message,
      variant: "default"
    })
  }

  const error = (message: string) => {
    toast({
      title: "❌ Erro",
      description: message,
      variant: "destructive"
    })
  }

  const warning = (message: string) => {
    toast({
      title: "⚠️ Atenção",
      description: message,
      variant: "default"
    })
  }

  const info = (message: string) => {
    toast({
      title: "ℹ️ Informação",
      description: message,
      variant: "default"
    })
  }

  const loading = (message: string = "Carregando...") => {
    return toast({
      title: "⏳ Carregando",
      description: message,
      duration: 0 // Não remove automaticamente
    })
  }

  return { success, error, warning, info, loading }
}