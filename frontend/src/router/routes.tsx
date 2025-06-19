import { createBrowserRouter } from "react-router-dom"
import {
  LandingPage,
  LoginPage,
  DashboardPage,
  ChatPage,
  SettingsPage,
  NotFoundPage,
  ErrorPage
} from "@/pages"

// Route configuration with proper error handling
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dashboard", 
    element: <DashboardPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/chat",
    element: <ChatPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    errorElement: <ErrorPage />
  },
  // Additional routes that might be needed
  {
    path: "/profile",
    element: <SettingsPage />, // Reuse settings page for now
    errorElement: <ErrorPage />
  },
  {
    path: "/favorites",
    element: <DashboardPage />, // Reuse dashboard for now  
    errorElement: <ErrorPage />
  },
  // Catch-all route for 404
  {
    path: "*",
    element: <NotFoundPage />
  }
])

// Route constants for type safety
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login", 
  DASHBOARD: "/dashboard",
  CHAT: "/chat",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  FAVORITES: "/favorites"
} as const

export type RouteKey = keyof typeof ROUTES
export type RoutePath = typeof ROUTES[RouteKey]