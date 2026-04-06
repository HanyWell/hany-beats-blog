import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playlisty | Hany Beats',
  description: 'Moje YouTube a Spotify playlisty - DnB, Hip-Hop, House, Chill a viac. Hudba, ktorú žijem a budujem.',
  openGraph: {
    title: 'Playlisty | Hany Beats',
    description: 'Moje YouTube a Spotify playlisty - DnB, Hip-Hop, House, Chill a viac.',
  },
}

export default function PlaylistyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
