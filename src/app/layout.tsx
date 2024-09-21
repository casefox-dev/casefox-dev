import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CaseFox - Your AI-Powered Legal Ally',
  description: 'Navigate Indian Law with confidence and precision using our intelligent legal research platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}