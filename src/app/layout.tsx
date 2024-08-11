import type { Metadata } from 'next'
import { rebondGrotesque } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: '***REMOVED*** web site',
  description: 'i’m an artist and student based in san francisco, ca.',
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rebondGrotesque.className}>{children}</body>
    </html>
  )
}
