import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

// Loading Components
import { LoadingSpinner, LoadingScreen, LoadingOverlay } from '../components/atoms/LoadingSpinner'
import { ButtonLoading } from '../components/ui/button-loading'
import { ErrorState, NetworkError, ServerError } from '../components/molecules/ErrorState'
import { 
  NewsCardSkeleton, 
  NewsListSkeleton, 
  StatsCardSkeleton,
  FormSkeleton,
  LoadingState,
  EmptyState 
} from '../components/molecules/LoadingStates'

const meta: Meta = {
  title: 'Loading & Error States',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive loading states and error handling components for the Kwanza Agent',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const LoadingSpinners: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="font-semibold">Spinner Sizes</h3>
        <LoadingSpinner size="sm" text="Small" />
        <LoadingSpinner size="md" text="Medium" />
        <LoadingSpinner size="lg" text="Large" />
        <LoadingSpinner size="xl" />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">With Text</h3>
        <LoadingSpinner size="md" text="Carregando dados..." />
        <LoadingSpinner size="lg" text="Processando..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading spinners in different sizes with optional text.',
      },
    },
  },
}

export const SkeletonLoaders: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h3 className="font-semibold mb-4">News Card Skeleton</h3>
        <NewsCardSkeleton />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Stats Cards</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCardSkeleton />
          <StatsCardSkeleton />
          <StatsCardSkeleton />
          <StatsCardSkeleton />
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Form Skeleton</h3>
        <FormSkeleton />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">News List</h3>
        <NewsListSkeleton count={2} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Skeleton loaders for different content types while data is loading.',
      },
    },
  },
}

export const ErrorStates: Story = {
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
      <div>
        <h3 className="font-semibold mb-4">Network Error</h3>
        <NetworkError 
          onRetry={() => console.log('Retry network')}
          onHome={() => console.log('Go home')}
        />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Server Error</h3>
        <ServerError 
          onRetry={() => console.log('Retry server')}
          onHome={() => console.log('Go home')}
        />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Custom Error</h3>
        <ErrorState 
          type="generic"
          title="Erro personalizado"
          description="Esta é uma mensagem de erro customizada."
          onRetry={() => console.log('Custom retry')}
          onHome={() => console.log('Go home')}
        />
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Empty State</h3>
        <EmptyState 
          title="Nenhuma notícia encontrada"
          description="Não há notícias disponíveis no momento."
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various error states and empty states for different scenarios.',
      },
    },
  },
}

export const InteractiveButton: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)
    
    const handleClick = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 2000))
      setLoading(false)
    }
    
    return (
      <div className="space-y-4">
        <h3 className="font-semibold">Button with Loading State</h3>
        <ButtonLoading
          loading={loading}
          loadingText="Processando..."
          onClick={handleClick}
        >
          Clique para testar
        </ButtonLoading>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <ButtonLoading loading={true} loadingText="Carregando...">
            Always Loading
          </ButtonLoading>
          <ButtonLoading loading={false}>
            Normal Button
          </ButtonLoading>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Button component with integrated loading state and spinner.',
      },
    },
  },
}

export const FullPageStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4">Loading Screen</h3>
        <div className="border rounded-lg p-4 bg-background">
          <LoadingScreen text="Carregando aplicação..." />
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Loading State</h3>
        <div className="border rounded-lg p-4 bg-background">
          <LoadingState text="Buscando dados..." />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full-page loading states for initial loading or major operations.',
      },
    },
  },
}