import { ChatTemplate } from "@/components/templates/ChatTemplate"
import { useAppNavigation } from "@/hooks/useAppNavigation"

// Mock user data
const mockUser = {
  name: "Tiago Pinto",
  email: "tiago@kwanza.com",
  avatar: "/avatar-placeholder.jpg"
}

export function ChatPage() {
  const { navigateTo, logout } = useAppNavigation()

  const handleNavigate = (route: string) => {
    navigateTo(route)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <ChatTemplate
      user={mockUser}
      onNavigate={handleNavigate}
      onLogout={handleLogout}
    />
  )
}