import { createBrowserRouter } from "react-router-dom"
import {
  LandingPage,
  LandingLoginPage,
  LoginPage,
  DashboardPage,
  ChatPage,
  SettingsPage,
  NotFoundPage,
  ErrorPage,
  LoadingStatesDemo
} from "@/pages"

// Route configuration with proper error handling
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/landing",
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
  // Demo page for loading states (development only)
  {
    path: "/demo/loading-states",
    element: <LoadingStatesDemo />,
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
  LANDING: "/landing",
  LOGIN: "/login", 
  DASHBOARD: "/dashboard",
  CHAT: "/chat",
  SETTINGS: "/settings",
  PROFILE: "/profile",
  FAVORITES: "/favorites"
} as const

export type RouteKey = keyof typeof ROUTES
export type RoutePath = typeof ROUTES[RouteKey]