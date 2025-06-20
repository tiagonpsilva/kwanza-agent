import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonLoading } from "@/components/ui/button-loading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InputField } from "@/components/molecules/FormField"
import { Logo } from "@/components/atoms/Logo"
import { P } from "@/components/atoms/Typography"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Smartphone, Mail, Eye, EyeOff, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoginFormProps {
  onLogin?: (credentials: { email: string; password: string }) => void
  onGoogleLogin?: () => void
  onPhoneLogin?: () => void
  onForgotPassword?: () => void
  onRegister?: () => void
  isLoading?: boolean
  error?: string
  className?: string
}

export function LoginForm({
  onLogin,
  onGoogleLogin,
  onPhoneLogin,
  onForgotPassword,
  onRegister,
  isLoading = false,
  error,
  className
}: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset errors
    setEmailError("")
    setPasswordError("")

    // Validation
    let hasErrors = false

    if (!email) {
      setEmailError("Email é obrigatório")
      hasErrors = true
    } else if (!validateEmail(email)) {
      setEmailError("Email inválido")
      hasErrors = true
    }

    if (!password) {
      setPasswordError("Senha é obrigatória")
      hasErrors = true
    } else if (password.length < 6) {
      setPasswordError("Senha deve ter pelo menos 6 caracteres")
      hasErrors = true
    }

    if (hasErrors) return

    onLogin?.({ email, password })
  }

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <Card>
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          <CardTitle className="text-2xl">Bem-vindo de volta</CardTitle>
          <CardDescription>
            Entre na sua conta para continuar gerenciando suas notícias
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={onGoogleLogin}
              disabled={isLoading}
              className="gap-2"
            >
              <Mail className="h-4 w-4" />
              Google
            </Button>
            <Button
              variant="outline"
              onClick={onPhoneLogin}
              disabled={isLoading}
              className="gap-2"
            >
              <Smartphone className="h-4 w-4" />
              Celular
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-card px-2 text-xs text-muted-foreground">
                ou continue com email
              </span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Email"
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={setEmail}
              error={emailError}
              required
            />

            <div className="space-y-2">
              <InputField
                label="Senha"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha"
                value={password}
                onChange={setPassword}
                error={passwordError}
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 h-7 w-7 p-0"
                style={{ position: "absolute", right: "12px", top: "32px" }}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="link"
                size="sm"
                onClick={onForgotPassword}
                className="p-0 h-auto text-sm"
              >
                Esqueceu a senha?
              </Button>
            </div>

            <ButtonLoading
              type="submit"
              className="w-full"
              loading={isLoading}
              loadingText="Entrando..."
            >
              Entrar
            </ButtonLoading>
          </form>

          <div className="text-center">
            <P className="text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <Button
                variant="link"
                onClick={onRegister}
                className="p-0 h-auto text-sm font-medium"
              >
                Cadastre-se
              </Button>
            </P>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}