import { useState } from "react"
import { LoginForm } from "@/components/organisms/LoginForm"
import { useAppNavigation } from "@/hooks/useAppNavigation"

export function LoginPage() {
  const { goToDashboard } = useAppNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (credentials: { email: string; password: string }) => {
    setIsLoading(true)
    setError("")

    try {
      // Simular autenticação
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock: validar credenciais simples
      if (credentials.email === "admin@kwanza.com" && credentials.password === "123456") {
        // Sucesso: redirecionar para dashboard
        goToDashboard()
      } else {
        setError("Email ou senha incorretos. Tente: admin@kwanza.com / 123456")
      }
    } catch {
      setError("Erro ao fazer login. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    // Mock: simular login com Google
    setIsLoading(true)
    setTimeout(() => {
      goToDashboard()
    }, 1500)
  }

  const handlePhoneLogin = () => {
    // Mock: simular login com celular
    alert("Login com celular será implementado em breve!")
  }

  const handleForgotPassword = () => {
    alert("Recuperação de senha será implementada em breve!")
  }

  const handleRegister = () => {
    alert("Cadastro será implementado em breve!")
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <LoginForm
        onLogin={handleLogin}
        onGoogleLogin={handleGoogleLogin}
        onPhoneLogin={handlePhoneLogin}
        onForgotPassword={handleForgotPassword}
        onRegister={handleRegister}
        isLoading={isLoading}
        error={error}
      />
    </div>
  )
}