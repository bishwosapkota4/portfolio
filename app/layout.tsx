import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import '../styles/globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Bishwo Sapkota - FullStack Engineer',
  description: 'Portfolio of Bishwo Sapkota, a FullStack Engineer specializing in Laravel, Next.js, and React.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-96x96.png',
        type: 'image/png',
        sizes: '96x96',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
