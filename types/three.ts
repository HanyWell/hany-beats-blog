// types/three.ts
import * as THREE from 'three'

// Základné typy pre Three.js komponenty (hybridný prístup)
export interface ThreeContext {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.Camera
  composer?: any // Postprocessing composer
  material?: THREE.Material | THREE.ShaderMaterial
  quad?: THREE.Mesh
  raf?: number
  resizeObserver?: ResizeObserver
  liquidEffect?: any
  touch?: any
  uniforms?: any // Shader uniforms
  clickIx?: number // Click index
  clock?: THREE.Clock
  timeOffset?: number // Time offset property
}

export interface PixelBlastProps {
  variant?: 'square' | 'triangle' | 'circle'
  pixelSize?: number
  color?: string
  className?: string
  style?: React.CSSProperties
  antialias?: boolean
  patternScale?: number
  patternDensity?: number
  liquid?: boolean
  liquidStrength?: number
  liquidRadius?: number
  pixelSizeJitter?: number
  enableRipples?: boolean
  rippleIntensityScale?: number
  rippleThickness?: number
  rippleSpeed?: number
  liquidWobbleSpeed?: number
  autoPauseOffscreen?: boolean
  speed?: number
  transparent?: boolean
  edgeFade?: number
  noiseAmount?: number
}

export interface FloatingLinesProps {
  className?: string
  style?: React.CSSProperties
  topLineCount?: number
  middleLineCount?: number
  bottomLineCount?: number
  topLineDistance?: number
  middleLineDistance?: number
  bottomLineDistance?: number
  topWavePosition?: THREE.Vector3
  middleWavePosition?: THREE.Vector3
  bottomWavePosition?: THREE.Vector3
  animationSpeed?: number
  interactive?: boolean
  parallax?: boolean
  parallaxStrength?: number
  mouseDamping?: number
  enableTop?: boolean
  enableMiddle?: boolean
  enableBottom?: boolean
  bendRadius?: number
  bendStrength?: number
}

// Helper funkcie typy
export type HexToVec3Function = (hex: string) => THREE.Vector3
