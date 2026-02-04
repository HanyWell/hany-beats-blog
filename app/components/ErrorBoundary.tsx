'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} reset={() => this.setState({ hasError: false, error: undefined })} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, reset }: { error?: Error; reset: () => void }) {
  return (
    <div className="min-h-[200px] flex items-center justify-center bg-red-950/20 border border-red-500/30 rounded-lg p-6">
      <div className="text-center">
        <div className="text-4xl mb-4">⚠️</div>
        <h3 className="text-red-400 font-semibold mb-2">Nastala chyba</h3>
        <p className="text-gray-400 text-sm mb-4">
          {error?.message || 'Niečo sa pokazilo. Skúste to znova.'}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Skúsiť znova
        </button>
      </div>
    </div>
  )
}

export default ErrorBoundary
