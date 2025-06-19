import { useNavigate } from "react-router-dom"
import { ROUTES, type RoutePath } from "@/router/routes"

/**
 * Custom hook for type-safe navigation
 * Provides helper methods for common navigation patterns
 */
export function useAppNavigation() {
  const navigate = useNavigate()

  const navigateTo = (path: RoutePath | string) => {
    navigate(path)
  }

  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  const goHome = () => {
    navigate(ROUTES.HOME)
  }

  const goToLogin = () => {
    navigate(ROUTES.LOGIN)
  }

  const goToDashboard = () => {
    navigate(ROUTES.DASHBOARD)
  }

  const goToChat = () => {
    navigate(ROUTES.CHAT)
  }

  const goToSettings = () => {
    navigate(ROUTES.SETTINGS)
  }

  const goToProfile = () => {
    navigate(ROUTES.PROFILE)
  }

  const goToFavorites = () => {
    navigate(ROUTES.FAVORITES)
  }

  const logout = () => {
    // Clear any auth state/localStorage here
    // localStorage.removeItem('auth-token')
    navigate(ROUTES.HOME)
  }

  return {
    // Generic navigation
    navigateTo,
    goBack,
    goForward,
    
    // Specific routes
    goHome,
    goToLogin,
    goToDashboard,
    goToChat,
    goToSettings,
    goToProfile,
    goToFavorites,
    
    // Auth actions
    logout,
    
    // Route constants for external use
    ROUTES
  }
}