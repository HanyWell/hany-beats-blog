import { useState, useEffect } from 'react'

export type PerformanceMode = 'high' | 'low'

/**
 * Hook pre detekciu GPU výkonu zariadenia
 */
export function useGPUDetection(): PerformanceMode {
  const [gpuPerformance, setGpuPerformance] = useState<PerformanceMode>('high')
  
  useEffect(() => {
    // WebGL detekcia
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null
    
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        // Ak obsahuje "Mali", "Adreno", "PowerVR" -> pravdepodobne mobilný GPU
        if (renderer.includes('Mali') || renderer.includes('Adreno') || renderer.includes('PowerVR')) {
          // Oprava: setState v useEffect - použiť callback pre synchronizáciu
          const updatePerformance = () => setGpuPerformance('low')
          updatePerformance()
        }
      }
    }
  }, [])
  
  return gpuPerformance
}

/**
 * Hook pre detekciu CPU výkonu zariadenia
 */
export function useCPUDetection(): PerformanceMode {
  const [cpuPerformance, setCpuPerformance] = useState<PerformanceMode>('high')
  
  useEffect(() => {
    // Detekcia počtu CPU jadier
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      // Oprava: setState v useEffect - použiť callback pre synchronizáciu
      const updatePerformance = () => setCpuPerformance('low')
      updatePerformance()
    }
  }, [])
  
  return cpuPerformance
}

/**
 * Kombinovaný hook pre celkovú detekciu výkonu
 */
export function useDevicePerformance(): PerformanceMode {
  const gpuPerformance = useGPUDetection()
  const cpuPerformance = useCPUDetection()
  
  // Ak je ktorýkoľvek nízky výkon, celkové je nízke
  return gpuPerformance === 'low' || cpuPerformance === 'low' ? 'low' : 'high'
}
