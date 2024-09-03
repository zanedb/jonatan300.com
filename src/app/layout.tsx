import type { Metadata } from 'next'
import { rebondGrotesque } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: '***REMOVED***’ web site',
  description: 'i’m an artist and student based in san francisco, ca.',
  openGraph: {
    images: '/og-image.png',
  },
  metadataBase: new URL('https://***REMOVED***300.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rebondGrotesque.className}>
        <div
          style={{
            backgroundSize: 'auto 100%',
            height: 24,
            width: '100%',
            position: 'fixed',
            backdropFilter: 'blur(8px)',
          }}
          className="body-border"
        ></div>
        <div
          style={{
            backgroundSize: 'auto 100%',
            height: 24,
            width: '100%',
            position: 'fixed',
            bottom: 0,
            backdropFilter: 'blur(8px)',
          }}
          className="body-border"
        ></div>
        {children}
      </body>
    </html>
  )
}
