import { RouterProvider } from "react-router-dom"
import { router } from "@/router/routes"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { ToastProvider } from "@/contexts/ToastContext"
import { ErrorBoundary } from "@/components/atoms/ErrorBoundary"
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App