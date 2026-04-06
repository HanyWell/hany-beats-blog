import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mixy | Hany Beats',
  description: 'Počúvaj moje DJ mixy - drum and bass, liquid, deep a neuro. Originálne sety a tracklists.',
  openGraph: {
    title: 'Mixy | Hany Beats',
    description: 'Počúvaj moje DJ mixy - drum and bass, liquid, deep a neuro.',
  },
}

export default function MixyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
