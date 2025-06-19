import { SettingsTemplate } from "@/components/templates/SettingsTemplate"
import { useAppNavigation } from "@/hooks/useAppNavigation"

// Mock user data
const mockUser = {
  name: "Tiago Pinto",
  email: "tiago@kwanza.com",
  avatar: "/avatar-placeholder.jpg"
}

export function SettingsPage() {
  const { navigateTo, logout } = useAppNavigation()

  const handleNavigate = (route: string) => {
    navigateTo(route)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <SettingsTemplate
      user={mockUser}
      onNavigate={handleNavigate}
      onLogout={handleLogout}
    />
  )
}