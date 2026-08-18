import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GEZINSLIM - Live smarter. Keep more.',
  description: 'Je digitale familie assistent',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
