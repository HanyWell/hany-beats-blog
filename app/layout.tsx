import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Hany Beats - DJ Blog',
  description: 'Drum & Bass DJ Blog - Mix recenzie, tipy a beaty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body className="bg-gray-900 text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
