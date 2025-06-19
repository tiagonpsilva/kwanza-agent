import { LandingPageTemplate } from "@/components/templates/LandingPageTemplate"
import { useAppNavigation } from "@/hooks/useAppNavigation"

export function LandingPage() {
  const { goToLogin } = useAppNavigation()

  const handleGetStarted = () => {
    // Redirecionar para login ou dashboard se já logado
    goToLogin()
  }

  const handleLogin = () => {
    goToLogin()
  }

  const handleLearnMore = () => {
    // Scroll para seção de features ou página sobre
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <LandingPageTemplate
      onGetStarted={handleGetStarted}
      onLogin={handleLogin}
      onLearnMore={handleLearnMore}
    />
  )
}