import type { Metadata } from 'next'
import { rebondGrotesque } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: '***REMOVED*** web site',
  description: "i'm an artist and student based in san francisco, ca.",
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
