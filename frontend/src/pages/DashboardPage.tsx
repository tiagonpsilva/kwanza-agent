import { DashboardTemplate } from "@/components/templates/DashboardTemplate"
import { useAppNavigation } from "@/hooks/useAppNavigation"

// Mock user data
const mockUser = {
  name: "Tiago Pinto",
  email: "tiago@kwanza.com",
  avatar: "/avatar-placeholder.jpg"
}

export function DashboardPage() {
  const { navigateTo, logout } = useAppNavigation()

  const handleNavigate = (route: string) => {
    navigateTo(route)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <DashboardTemplate
      user={mockUser}
      onNavigate={handleNavigate}
      onLogout={handleLogout}
    />
  )
}