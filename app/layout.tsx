import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Shiva Kumar',
  description: 'Portfolio of Shiva Kumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
