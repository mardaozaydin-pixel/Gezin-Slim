import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GEZINSLIM - Live smarter. Keep more.',
  description: 'Family financial assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-white">{children}</body>
    </html>
  )
}
