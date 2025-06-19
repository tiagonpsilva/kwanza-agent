import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto">
        <div className="card text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Kwanza Agent
          </h1>
          <p className="text-gray-600 mb-6">
            React.js + TypeScript + TailwindCSS configurado com sucesso!
          </p>
          
          <div className="space-y-4">
            <div className="card bg-blue-50 border-blue-200">
              <p className="text-sm text-blue-800 font-medium">
                Contador de teste: {count}
              </p>
              <button 
                onClick={() => setCount((count) => count + 1)}
                className="btn-primary mt-2"
              >
                Incrementar
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="btn-primary">
                Primary
              </button>
              <button className="btn-secondary">
                Secondary
              </button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              🚀 Frontend-first strategy • React + Vite + TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App