'use client'

export default function FluidBackground() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black">
      {/* Red glow 1 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-30 animate-pulse" />
      
      {/* Red glow 2 */}
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-700 rounded-full blur-3xl opacity-20 animate-bounce" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50" />
    </div>
  )
}
