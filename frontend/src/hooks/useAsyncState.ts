import { useState, useCallback } from 'react'

interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

interface UseAsyncStateReturn<T> extends AsyncState<T> {
  execute: (asyncFunction: () => Promise<T>) => Promise<void>
  reset: () => void
  setData: (data: T) => void
  setError: (error: string) => void
}

export function useAsyncState<T = any>(
  initialData: T | null = null
): UseAsyncStateReturn<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: initialData,
    loading: false,
    error: null
  })

  const execute = useCallback(async (asyncFunction: () => Promise<T>) => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      const result = await asyncFunction()
      setState({ data: result, loading: false, error: null })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
      setState(prev => ({ ...prev, loading: false, error: errorMessage }))
    }
  }, [])

  const reset = useCallback(() => {
    setState({ data: initialData, loading: false, error: null })
  }, [initialData])

  const setData = useCallback((data: T) => {
    setState(prev => ({ ...prev, data, error: null }))
  }, [])

  const setError = useCallback((error: string) => {
    setState(prev => ({ ...prev, error, loading: false }))
  }, [])

  return {
    ...state,
    execute,
    reset,
    setData,
    setError
  }
}

// Hook especializado para operações com feedback via toast
export function useAsyncOperation() {
  const [loading, setLoading] = useState(false)

  const execute = useCallback(async <T>(
    operation: () => Promise<T>,
    options?: {
      loadingMessage?: string
      successMessage?: string
      errorMessage?: string
      onSuccess?: (data: T) => void
      onError?: (error: Error) => void
    }
  ): Promise<T | null> => {
    setLoading(true)

    try {
      const result = await operation()
      
      if (options?.successMessage) {
        // Toast de sucesso será adicionado quando integrarmos o toast provider
        console.log('Success:', options.successMessage)
      }
      
      options?.onSuccess?.(result)
      return result
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido'
      
      if (options?.errorMessage) {
        console.error('Error:', options.errorMessage)
      } else {
        console.error('Error:', errorMessage)
      }
      
      options?.onError?.(error as Error)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, execute }
}